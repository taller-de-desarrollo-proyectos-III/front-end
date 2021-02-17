type Env = "production" | "development" | "test";

export const BackendConfig = {
  production: {
    url: "https://nahual-datos-voluntaries.herokuapp.com"
  },
  development: {
    url: "http://localhost:5000"
  },
  test: {
    url: "http://localhost:5000"
  }
}[(process.env.REACT_APP_STAGE || process.env.NODE_ENV) as Env];
