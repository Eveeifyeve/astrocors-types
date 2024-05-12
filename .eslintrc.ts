import * as path from "node:path";

export default {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: path.resolve(__filename),
		project: ["./tsconfig.json"],
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier",
		"plugin:@definitelytyped/all",
	],
	rules: {
		"no-var": "off", // global variables
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-misused-new": "off",
		"@typescript-eslint/triple-slash-reference": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@definitelytyped/no-single-declare-module": "off",
		"@definitelytyped/no-self-import": "off",
		"@definitelytyped/no-unnecessary-generics": "off",
		"@typescript-eslint/no-duplicate-enum-values": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-invalid-void-type": "off",
		"@definitelytyped/no-single-element-tuple-type": "off",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "off",
		"@typescript-eslint/unbound-method": "off",
	},
};
