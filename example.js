console.log('hello world');

const something = { props: 'value' }
console.log(something.props)


const others = { obj: { a: { b: { c: 'object' } } } }
const key = 'obj'

console.log(others.obj.a.b.c)

console.log(others[key], others['obj']['a'], others.obj.a.b, others.obj.a.b.c)

