import api from "./apiPunk";

export function getBeers() {
  return new Promise((resolve, reject) => {
    api.get("beers").then((response) => {
      resolve(response.data);
    });
  });
}
