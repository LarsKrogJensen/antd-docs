import axios from "axios"

export default function graphQuery(queryParams) {

  return axios.post(baseUrl() + "/graphql", queryParams)
    .then(response => response.data)
}

function baseUrl() {
  const win = window;

  if (process.env.NODE_ENV === `development`) {
    return "http://localhost:15133";
  }
  else {
    return win.location.origin;
  }
}