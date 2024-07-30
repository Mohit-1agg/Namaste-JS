/***
 * HOISTING and CLOSURE
 */

function hoisting () {
  function x () {
    const a = 100;

    function y () {
      console.log(a);
    }
    y();
  }
  x();
}

const hoist_variable = 'demo';

const a = () => 'Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run';
