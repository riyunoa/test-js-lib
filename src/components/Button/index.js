import * as React from 'react';

export default function Button() {
  return React.createElement("div", { className: "red" }, "Button Component Test");
}

export function ButtonCalled() {
  var a = 'this is never called';
  return a;
}
