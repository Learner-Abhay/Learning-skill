function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("data from server");
      } else {
        reject("error");
      }
    }, 3000);
  });
}
fetchData()
  .then((data) => console.log(data))
  .catch((data) => console.log(data));
