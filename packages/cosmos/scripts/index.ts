import { promises as fs } from "node:fs";
import path from "node:path";
import { createIndexesForDirectory } from "./common/create-indexes";
import { getAllTsFiles } from "./common/utils";
import { generateEncoderIndexFile } from "./encoding/create-encoder";
import { extractEncoding } from "./encoding/extract-encoding";
import { buildCombinedProtoRegistryAndAminoConverters } from "./encoding/stargate";
import { generateQueryIndexFile } from "./rest/create-querier";
import { extractRESTClient } from "./rest/extract-rest";
import { extractTypes } from "./types/extract-types";

// Define paths as constants for reuse and easy updates
const GRPC_TS_DIR = "./protoc/grpc-gateway";
const TS_PROTO_DIR = "./protoc/ts-proto";
const TYPES_OUTPUT_DIR = "./library/types";
const REST_OUTPUT_DIR = "./library/rest";
const ENCODING_OUTPUT_DIR = "./library/encoding";
const COMMON_FETCH_FILE = "./public/rest/fetch.ts";
const ENCODING_FILES = ["./public/encoding/common.ts"];

// Extracts only types from the proto generated TypeScript files in the input directory
async function processGrpcGatewayFiles(): Promise<void> {
	try {
		const grpcTsFiles = await getAllTsFiles(GRPC_TS_DIR);

		for (const tsFile of grpcTsFiles) {
			const relativePath = path.relative(GRPC_TS_DIR, tsFile).replace(".pb.ts", ".ts");

			const restDestination = path.join(REST_OUTPUT_DIR, relativePath);
			await extractRESTClient(tsFile, restDestination, relativePath);
		}
		await fs.mkdir(REST_OUTPUT_DIR, { recursive: true });
		await fs.copyFile(COMMON_FETCH_FILE, `${REST_OUTPUT_DIR}/fetch.ts`);
		await generateQueryIndexFile(REST_OUTPUT_DIR);
	} catch (error) {
		console.error("Error processing gRPC gateway files:", error);
	}
}

// Process proto encoding files and generate the necessary outputs
async function processEncodingFiles(): Promise<void> {
	try {
		const tsFiles = await getAllTsFiles(TS_PROTO_DIR);

		for (const tsFile of tsFiles) {
			const relativePath = path.relative(TS_PROTO_DIR, tsFile).replace(".pb.ts", ".ts");
			const encodingDestination = path.join(ENCODING_OUTPUT_DIR, relativePath);
			await extractEncoding(tsFile, encodingDestination, relativePath.replace(".ts", ""));

			const typesDestination = path.join(TYPES_OUTPUT_DIR, relativePath);
			await extractTypes(tsFile, typesDestination);
		}

		await createIndexesForDirectory(TYPES_OUTPUT_DIR);

		// Copy static encoding files (common.ts)
		await Promise.all(ENCODING_FILES.map((file) => fs.copyFile(file, path.join(ENCODING_OUTPUT_DIR, path.basename(file)))));

		await buildCombinedProtoRegistryAndAminoConverters();
		await createIndexesForDirectory(ENCODING_OUTPUT_DIR);
		await generateEncoderIndexFile(ENCODING_OUTPUT_DIR);
	} catch (error) {
		console.error("Error processing encoding files:", error);
	}
}

// Main function orchestrating the extraction process
async function extractLibrariesFromProto(): Promise<void> {
	try {
		// Run the GRPC Gateway and Encoding processes in parallel (since they're independent)
		await Promise.all([processGrpcGatewayFiles(), processEncodingFiles()]);

		console.log("Generated library successfully.");
	} catch (error) {
		console.error("Error generating library:", error);
	}
}

extractLibrariesFromProto();
