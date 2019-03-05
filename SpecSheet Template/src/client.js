import { SPACE_ID, ACCESS_TOKEN } from "./keys";
const contentful = require("contentful");

const client = contentful.createClient({
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
});

export default client;
