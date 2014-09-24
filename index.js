module.exports = function(str) {
  return str.replace(/./g, function(c) {
    return "\\u" + ('000' + c.charCodeAt(0).toString(16)).substr(-4);
  });
};
