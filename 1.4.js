const target = {};
const handler = {
  get: function () {
    return "404";
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.anyProperty);
