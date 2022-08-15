const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

async function httpGetAllUsers() {
  try {
    const response: Response = await fetch(usersUrl);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function httpGetAllPosts() {
  try {
    const response: Response = await fetch(postsUrl);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export { httpGetAllUsers, httpGetAllPosts };
