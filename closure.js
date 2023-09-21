function z () {
  function x () {
    const a = 100;
    function y () {
      console.log(a);
    }
    y();
  }
  x();
}

z();
