// FETCH SINGLE BLOG
const apiDomain = "http://localhost:3000/api/" || null;

async function fetchBlog(slug) {
  try {
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/blogs/${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    return null;
  }
}

export { fetchBlog };
