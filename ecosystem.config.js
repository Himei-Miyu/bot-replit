module.exports = {
  apps: [{
    name: "bot",
    script: "./index.js",
    instances: 1,
    restart_delay: 3000,
    watch: false,
    env: {
      NODE_ENV: "dev",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
