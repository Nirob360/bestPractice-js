const myModule = (function () {
  let current = null;
  function init() {
    console.log(`init`);
  }
  function change() {
    //do somthing
  }
  function verify() {
    //do somthing
  }
  return {
    init,
    change,
    live: current,
  };
})();

myModule.init();
