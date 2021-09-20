module.exports = {
  apps: [
    {
      name: "ChainStep-APP",
      script: "src/server.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
