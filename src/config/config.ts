import prodConfig from "./prod.config";

let config = {
  url: 'mongodb://localhost:27017/super-market',
  port: 3000
}

switch (process.env.NODE_ENV) {
  case 'production':
    config = Object.assign(config, prodConfig)
    break
}

export default config
