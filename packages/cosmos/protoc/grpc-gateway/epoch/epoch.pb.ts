/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */

import * as GoogleProtobufDuration from "../google/protobuf/duration.pb";
import * as GoogleProtobufTimestamp from "../google/protobuf/timestamp.pb";
export type Epoch = {
	genesis_time?: GoogleProtobufTimestamp.Timestamp;
	epoch_duration?: GoogleProtobufDuration.Duration;
	current_epoch?: string;
	current_epoch_start_time?: GoogleProtobufTimestamp.Timestamp;
	current_epoch_height?: string;
};
