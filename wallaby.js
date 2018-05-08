module.exports = function (wallaby) {

	return {
		files: [
			'app/**/*.ts',
			'app/**/*.tsx',
			{pattern: 'app/**/*/spec.tsx', ignore: true},
			{pattern: 'app/**/*/spec.ts', ignore: true}
		],
		tests: [
			'app/**/*/spec.ts',
			'app/**/*/spec.tsx'
		],
		compilers: {
			'app/**/*.tsx?': wallaby.compilers.typeScript({
				module: 'commonjs',
				jsx: 'react'
			})
		},
		testFramework: 'mocha',
		env: {
			type: 'node'
		},
		// This has to be copied from jsdom setup...
		setup: function (wallaby) {
			const cleanup = require('jsdom-global')();
		}
	}
};
