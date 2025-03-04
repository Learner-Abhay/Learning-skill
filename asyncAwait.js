function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "John", Url: "chai.com" });
    }, 3000);
  });
}
async function getUserdata() {
  try {
    console.log("fetching user data");
    const userData = await fetchData();
    console.log("Userdata", userData);
  } catch (error) {
    console.log("Error fetching user data", error);
  }
}
getUserdata();
