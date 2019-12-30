const utilfunctions = (function() {
  return {
    length:(arg) => {
      return arg.length;
    },
    reverse:(arg) => {
      return arg.split("").reverse().join("");
    }
  };
})();

module.exports = utilfunctions;
