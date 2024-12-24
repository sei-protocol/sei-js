import { PointerType } from "../../types/evm";

export function pointerTypeFromJSON(object: any): PointerType {
	switch (object) {
		case 0:
		case "ERC20":
			return PointerType.ERC20;
		case 1:
		case "ERC721":
			return PointerType.ERC721;
		case 2:
		case "NATIVE":
			return PointerType.NATIVE;
		case 3:
		case "CW20":
			return PointerType.CW20;
		case 4:
		case "CW721":
			return PointerType.CW721;
		case 5:
		case "ERC1155":
			return PointerType.ERC1155;
		case 6:
		case "CW1155":
			return PointerType.CW1155;
		case -1:
		case "UNRECOGNIZED":
		default:
			return PointerType.UNRECOGNIZED;
	}
}

export function pointerTypeToJSON(object: PointerType): string {
	switch (object) {
		case PointerType.ERC20:
			return "ERC20";
		case PointerType.ERC721:
			return "ERC721";
		case PointerType.NATIVE:
			return "NATIVE";
		case PointerType.CW20:
			return "CW20";
		case PointerType.CW721:
			return "CW721";
		case PointerType.ERC1155:
			return "ERC1155";
		case PointerType.CW1155:
			return "CW1155";
		case PointerType.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}
