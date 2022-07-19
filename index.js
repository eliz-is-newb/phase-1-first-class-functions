
// plain function---------------------------
function receivesAFunction(callback){
    callback();
}

// named function---------------------------
function returnsANamedFunction() {
    return function nomNom() {
      console.log("this is a named function");
    };
  }
  
  // anonymous function-----------------------
  function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
  }