// FETCH SINGLE PROPERTY
const apiDomain = "http://localhost:3000/api/" || null;

async function fetchBlog(_id) {
  try {
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/blogs/${_id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    return null;
  }
}

export { fetchBlog };
