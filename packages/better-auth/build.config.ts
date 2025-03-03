import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	rollup: {
		emitCJS: true,
		esbuild: {
			treeShaking: true,
			tsconfigRaw: {
				compilerOptions: {
					experimentalDecorators: true,
				},
			},
		},
	},
	declaration: true,
	outDir: "dist",
	clean: false,
	failOnWarn: false,
	externals: [
		"prisma",
		"@prisma/client",
		"better-sqlite3",
		"react",
		"vue",
		"solid-js",
		"solid-js/store",
		"next/headers",
		"$app/environment",
		"vitest",
		"@vitest/runner",
		"@vitest/utils",
		"@vitest/expect",
		"@vitest/snapshot",
		"@vitest/spy",
		"chai",
		"mongodb",
		"drizzle-orm",
		"pathe",
		"std-env",
		"magic-string",
		"pretty-format",
		"p-limit",
		"tinyspy",
		"next/dist/compiled/@edge-runtime/cookies",
		"bson",
		"mongodb-connection-string-url",
		"@mongodb-js/saslprep",
		"kerberos",
		"@mongodb-js/zstd",
		"@aws-sdk/credential-providers",
		"mongodb-client-encryption",
		"@vue/runtime-dom",
		"@vue/runtime-core",
		"@vue/shared",
		"@vue/reactivity",
		"@vue/compiler-dom",
		"@vue/compiler-core",
		"@babel/types",
		"@babel/parser",
		"punycode",
		"csstype",
		"@nestjs/common",
		"@nestjs/core",
	],
	entries: [
		"./src/index.ts",
		"./src/social-providers/index.ts",
		"./src/client/index.ts",
		"./src/client/plugins/index.ts",
		"./src/types/index.ts",
		"./src/crypto/index.ts",
		"./src/cookies/index.ts",
		"./src/adapters/prisma-adapter/index.ts",
		"./src/adapters/drizzle-adapter/index.ts",
		"./src/adapters/mongodb-adapter/index.ts",
		"./src/adapters/kysely-adapter/index.ts",
		"./src/adapters/memory-adapter/index.ts",
		"./src/adapters/test.ts",
		"./src/db/index.ts",
		"./src/oauth2/index.ts",
		"./src/client/react/index.ts",
		"./src/client/vue/index.ts",
		"./src/client/svelte/index.ts",
		"./src/client/solid/index.ts",
		"./src/plugins/index.ts",
		"./src/plugins/access/index.ts",
		"./src/api/index.ts",
		"./src/integrations/svelte-kit.ts",
		"./src/integrations/solid-start.ts",
		"./src/integrations/next-js.ts",
		"./src/integrations/node.ts",
		"./src/integrations/nestjs/index.ts",
		"./src/plugins/admin/index.ts",
		"./src/plugins/admin/access/index.ts",
		"./src/plugins/anonymous/index.ts",
		"./src/plugins/bearer/index.ts",
		"./src/plugins/captcha/index.ts",
		"./src/plugins/custom-session/index.ts",
		"./src/plugins/email-otp/index.ts",
		"./src/plugins/generic-oauth/index.ts",
		"./src/plugins/jwt/index.ts",
		"./src/plugins/magic-link/index.ts",
		"./src/plugins/multi-session/index.ts",
		"./src/plugins/one-tap/index.ts",
		"./src/plugins/open-api/index.ts",
		"./src/plugins/oidc-provider/index.ts",
		"./src/plugins/oauth-proxy/index.ts",
		"./src/plugins/organization/index.ts",
		"./src/plugins/organization/access/index.ts",
		"./src/plugins/passkey/index.ts",
		"./src/plugins/phone-number/index.ts",
		"./src/plugins/sso/index.ts",
		"./src/plugins/two-factor/index.ts",
		"./src/plugins/username/index.ts",
	],
});
