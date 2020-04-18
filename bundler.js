
const fs = require('fs');
const babelParser = require('@babel/parser');

function createAsset(filename) {

    const fileContent = fs.readFileSync(filename, 'utf-8') ;
    const ast = babelParser.parse(fileContent, {
        sourceType: "module"
    });
    console.log(ast);
    console.log(fileContent)
}

createAsset('./example/entry.js');