/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/*
 * @Description: feature name
 * @Author: xujian
 * @Date: 2022-02-10 10:15:53
 */
im;
console.log('hello world');
const something = {
  props: 'value'
};
console.log("something.props ===>", something.props, "\n");
const others = {
  obj: {
    a: {
      b: {
        c: 'object'
      }
    }
  }
};
const key = 'obj';
console.log("others.obj.a.b.c ===>", others.obj.a.b.c, "\n");
console.log("others.key ===>", others[key], "\n", "others.obj.a ===>", others['obj']['a'], "\n", "others.obj.a.b ===>", others.obj.a.b, "\n", "others.obj.a.b.c ===>", others.obj.a.b.c, "\n");
/******/ })()
;