async function fetchBlog(slug) {
  try {
    if (!process.env.NEXT_PUBLIC_API_DOMAIN) {
      return null;
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/blogs/${slug}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    return null;
  }
}

export { fetchBlog };
