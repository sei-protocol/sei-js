import type { TransactionRequest } from '@ethersproject/abstract-provider';

// Define the type for the actions.json file at the root of a domain
export interface SeiActionsJSON {
	rules: Array<{
		pathPattern: string;
		apiPath: string;
	}>;
}

// Type for the GET response for a given action
export interface GetSeiActionResponse {
	icon: string; // URL pointing to an image describing the action.
	label: string; // Text to be displayed on the button used to execute the action.
	title: string; // The title of the action.
	description: string; // A brief description of the action.
	disabled?: boolean; // Optional flag to disable all buttons associated with the action.
	transactionType: 'EVM' | 'COSMOS'; // The type of blockchain transaction to be executed.
	links: {
		actions: SeiActionConfig[]; // An array of SeiActionConfig objects defining the actions available.
	};
	error?: SeiActionError; // Error message intended to be displayed to the user.
}

export interface SeiActionConfig {
	label: string;
	href: string;
	parameters?: (SeiActionParameter | SeiActionParameterSelectable)[];
}

export type SeiActionParameterType = 'text' | 'address' | 'email' | 'url' | 'number' | 'date' | 'datetime-local' | 'checkbox' | 'radio' | 'textarea' | 'select';

export type SeiActionParameter = {
	name: string;
	type: SeiActionParameterType;
	label: string;
	required?: boolean;
	/** regular expression pattern to validate user input client side */
	pattern?: string;
	/** human-readable description of the `type` and/or `pattern`, represents a caption and error, if value doesn't match */
	patternDescription?: string;
	/** the minimum value allowed based on the `type` */
	min?: string | number;
	/** the maximum value allowed based on the `type` */
	max?: string | number;
};

// Used if parameter is type 'select', 'radio', or 'checkbox'
export interface SeiActionParameterSelectable extends SeiActionParameter {
	options: Array<{
		/** displayed UI label of this selectable option */
		label: string;
		/** value of this selectable option */
		value: string;
		/** whether or not this option should be selected by default */
		selected?: boolean;
	}>;
}

// Define the type for the POST requests to a given action
export interface PostSeiActionRequest {
	sender: string;
	[key: string]: unknown;
}

export interface SeiActionError {
	/** non-fatal error message to be displayed to the user */
	message: string;
}

export type SeiActionSuccessResponse = {
	transaction: TransactionRequest | any;
	message?: string;
};

// Define the type for the POST response for a given action
export type PostSeiActionResponse = SeiActionSuccessResponse | SeiActionError;
