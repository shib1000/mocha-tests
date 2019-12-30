const utilfunctions = (function() {
  return {
    sum:(...args) => {
    var sum = 0;
      for (i = 0; i < args.length; i++) {
        sum += args[i];
      }
      return sum;
    },
    multiply:(...args) => {
    var multipleresult = 1;
      for (i = 0; i < args.length; i++) {
        multipleresult *= args[i];
      }
      return multipleresult;
    }
  };
})();

module.exports = utilfunctions;
