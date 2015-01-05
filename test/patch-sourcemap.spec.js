require('chai').should();
var fs = require('fs');

describe('patch-sourcemap', function() {
	it('should add the source to the sourcemap', function() {
		var source = fs.readFileSync('test/fixtures/main.ts').toString(),
			sourcemap = fs.readFileSync('test/expected/main.js.map'),
			sourcemapJson = JSON.parse(sourcemap);

		source.should.be.equal(sourcemapJson.sourcesContent[0]);
	});

	it('should leave other properties untouched', function() {
		var sourcemap = fs.readFileSync('test/expected/main.js.map'),
			sourcemapJson = JSON.parse(sourcemap),
			sourcemapCopy = fs.readFileSync('test/expected/main.js.map.copy'),
			sourcemapCopyJson = JSON.parse(sourcemap);

		['version', 'sources', 'names', 'mappings', 'file', 'sourceRoot'].forEach(function(p) {
			sourcemapCopyJson[p].should.deep.equal(sourcemapJson[p]);
		})
	});
});