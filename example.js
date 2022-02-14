
// 单个字符串打印
console.log('hello world');

// 变量打印
const something = { props: 'value' }
console.log(something.props)

const others = { obj: { a: { b: { c: 'object' } } } }
const key = 'obj'

// 深层变量打印
console.log(others.obj.a.b.c)

// 连续多个变量打印，并且key是动态的
console.log(others[key], others['obj']['a'], others.obj.a.b, others.obj.a.b.c)