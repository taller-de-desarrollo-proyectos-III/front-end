export const BackendConfig = {
  production: {
    url: "http://localhost:5000"
  },
  development: {
    url: "http://localhost:5000"
  },
  test: {
    url: "http://localhost:5000"
  }
}[process.env.NODE_ENV];
