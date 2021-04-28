const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
// const path = require('path')

const ast = parser.parse(`
    function test() {}
`, {
    // sourceType: "module"
})

console.log(ast)

let visitor = {
    FunctionDeclaration: function (path) {
        path.node.id.name = "testFunc"
    }
}

traverse(ast, visitor)

console.log(ast)

// const output = generate(ast, {})

// console.log(output.code)