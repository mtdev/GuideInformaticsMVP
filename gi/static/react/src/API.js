export const login = (delay = 1000) => {
  return new Promise(function(resolve) {
    setTimeout(
      () => ({
        username: "nerr22"
      }),
      delay
    );
  });
};

export const fetchDataset = id =>
  fetch(`https://jsonplaceholder.typicode.com/posts`).then(resp => resp.json());

export const createDataset = file =>
  fetch("http://www.example.net", {
    // Your POST endpoint
    method: "POST",
    headers: {
      // Content-Type may need to be completely **omitted**
      // or you may need something
      "Content-Type": "You will perhaps need to define a content-type here"
    },
    body: file // This is your file object
  }).then(
    response => response.json() // if the response is a JSON object
  );

export const fetchSingleDataset = () =>
  fetch(`https://jsonplaceholder.typicode.com/posts`).then(resp => resp.json());
