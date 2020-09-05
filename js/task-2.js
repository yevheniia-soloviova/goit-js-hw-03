const countProps = function (obj) {
  "use strict";
  // Write code under this line
  const props = Object.keys(obj);
  console.log(props.length);
  return props.length;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
