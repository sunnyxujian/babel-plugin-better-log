// 用来生成或者判断节点的AST语法树的节点
const types = require('@babel/types');

// 递归解析表达式成字符串
function getCallString(obj, name = []) {
  if (obj.object) {
    name = getCallString(obj.object, name)
  }
  let realName = ''
  if (obj.type === 'ThisExpression') {
    realName = 'this'
  }
  if (obj.type === 'Identifier') {
    realName = obj.name
  }
  if (obj.type === 'MemberExpression') {
    realName = obj.property.name || obj.property.value
  }
  if (realName.indexOf('this') > -1) {
    realName = 'this'
  }
  name = name.concat(realName)
  return name
}

// 将字符串插入到表达式前面
function disposeArguments(args = []) {
  const newArgs = [] ;
  for (let i = 0; i < args.length; i++) {
    const item = args[i];
    if (item.type === 'StringLiteral') {
      newArgs.push(item)
    } else {
      const callString = getCallString(item, []).join('.')
      const notExit = newArgs.some(item => item.type === 'StringLiteral' && item.value.indexOf(callString) > -1)
      if (callString && !notExit) {
        const stringLiteral = types.stringLiteral(callString + ' ===>')
        newArgs.push(stringLiteral)
      }
      newArgs.push(item)
      if (callString && !notExit) {
        newArgs.push(types.stringLiteral('\n'))
      }
    }
  }
  return newArgs
}

const visitor = {
  CallExpression(nodePath, state) {
    const { node } = nodePath;
    if (types.isMemberExpression(node.callee)) {
      if (node.callee.object.name === 'console') {
        if (['log', 'info', 'warn', 'error', 'debug'].includes(node.callee.property.name)) {
          node.arguments = disposeArguments(node.arguments);
        }
      }
    }
  }
}

module.exports = function () {
  return {
    visitor
  }
}
