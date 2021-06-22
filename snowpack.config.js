/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    { "match": "routes", "src": ".*", "dest": "/index.html" },
  ],
  // Doesn't work for some reason
  alias: {
    "@features": "./src/features",
    "@components": "./src/components",
    "@objects": "./src/objects",
    "@utils": "./src/utils",
  },
};
