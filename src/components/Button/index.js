import * as React from 'react';

export default function Button() {
  /**
   * Even though ButtonCalled is called here, it did not appear in the client application's built js
   * i.e. "use strict";t.a=function(){return r.createElement("div",{className:"red"},"Button Component Test")}
   */
  // ButtonCalled();

  /**
   * Even though ButtonCalled is assigned here, it did not appear in the client application's built js
   * i.e. "use strict";t.a=function(){return r.createElement("div",{className:"red"},"Button Component Test")}
   */
  // let res = ButtonCalled();

  /**
   * But when the result of ButtonCalled is used, it appears in the client application's built js.
   * Note that the result does not include the function ButtonCalled(), just the result.
   * i.e. {"use strict";t.a=function(){let e="this is never called";return console.log(e),r.createElement("div",{className:"red"},"Button Component Test")}
   */
  let res = ButtonCalled();
  console.log(res);

  return React.createElement("div", { className: "red" }, "Button Component Test");
}

export function ButtonCalled() {
  var a = 'this is never called';
  return a;
}
