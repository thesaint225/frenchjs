20/05/24

<h1>useParams()</h1>

useParams was introduced in Next.js 13 and is used in conjunction with the new App Router (which uses the app directory) to access dynamic route parameters in Client Components.

Here's a recap of how you can use useParams in a Next.js 13 application with the App Router:

Step-by-Step Guide
Project Structure:
Ensure your project is using the new App Router by placing your files in the app directory. Here's a basic structure:

```javascript
app/
  └── blogs/
      └── [id]/
          └── page.js
components/
  └── SinglePost.js
utility/

  └── request.js
```

2.Dynamic Route File:
In the app/blogs/[id]/page.js file, you can use useParams to access the dynamic id parameter.

```javascript
"use client"; // Indicates that this is a Client Component

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchBlog } from "@/utility/request";
import ArticleList from "@/components/SinglePost";

const Blogpage = () => {
  const { id } = useParams(); // Retrieve the dynamic id
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id) return;
      try {
        const blog = await fetchBlog(id);
        setBlog(blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (!blog && !loading) {
    return <h1 className="text-center text-2xl font-bold">Blog Not found</h1>;
  }

  return <>{!loading && blog && <ArticleList blog={blog} />}</>;
};

export default Blogpage;
```

3. fetchBlog Utility Function:
   Ensure your fetchBlog function correctly fetches the blog data.

```
// utility/request.js
export const fetchBlog = async (id) => {
  const response = await fetch(`/api/blogs/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

```

4.ArticleList Component:
Create a component to display the blog details.

```
// components/SinglePost.js
const ArticleList = ({ blog }) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default ArticleList;

```

nsure Your API Route:
Ensure that your API route is set up to handle requests for individual blog posts

```
// pages/api/blogs/[id].js
export default async (req, res) => {
  const { id } = req.query;
  const blog = await getBlogById(id); // Replace with your data fetching logic
  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }
  res.status(200).json(blog);
};

```

<h3>Summary</h3>

- useParams: Used in the app directory to access dynamic route parameters in Next.js 13.
- Client Component: Indicate that your component is a Client Component with "use client" at the top.

- Data Fetching: Use the useEffect hook to fetch data based on the dynamic id.
- Utility Functions and Components: Organize your code into utility functions and reusable components for clean and maintainable code.

<h1> Cloudinary</h1>

The Node.js SDK (Software Development Kit) for Cloudinary is a powerful library that allows developers to easily interact with Cloudinary's APIs from a Node.js environment. This SDK simplifies the process of uploading, managing, transforming, and delivering media files (images, videos, etc.) in your Node.js applications.

In Next.js, environment variables prefixed with NEXT*PUBLIC* are exposed to the browser. This means that these variables can be accessed both on the server and client sides. Here’s a detailed explanation of why and how NEXT*PUBLIC is used:
Why Use NEXT_PUBLIC
Client-Side Access: By default, environment variables in a Next.js application are only available on the server side. If you need to access these variables in your client-side code (e.g., React components or client-side JavaScript), you must prefix them with NEXT_PUBLIC*.

Security and Best Practices: It’s important to only expose environment variables that are safe to be public. Using the NEXT*PUBLIC* prefix is a clear indicator that these variables are intended for use in the browser and should not contain sensitive information like API secrets or database credentials.

Consistency: Using NEXT*PUBLIC* helps maintain a clear and consistent configuration strategy, ensuring that only intended variables are exposed to the client.

How to Use NEXT*PUBLIC Variables
Define Environment Variables: In your .env file, prefix the variables you want to expose with NEXT_PUBLIC*.

<h3> MediaGallery component</h3 >The is a React component that displays a collection of media items (e.g., images, videos) fetched from Cloudinary. This component receives the media resources as props and renders them in a structured format, such as a grid or a list.

when working with image we should always think about optimization

Responsive Images
Responsive images are critical for page performance and they're made easy with the CldImage component.

The CldImage component takes advantage of responsive images generated using the Next Image component which allows you to simply specify the sizes you want and the component handles the rest.

example of code

```
  import { CldImage } from 'next-cloudinary';

  <CldImage
    width="960"
    height="600"
    src="<Your Public ID>"
    sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
    alt="Description"
  />

```

<h3>HOW TO TO USE CLOUDINARY</h3>

1.alow the user to upload the pictures to cloudinary throught the cldButton provided by cloudinary which include the CldUploadWidget [click to for the documenation](https://next.cloudinary.dev/clduploadbutton/basic-usage)

2.cldImage
the public id is given to you when you uploadyour image to cloudinary. also when clicking on the image the publicid is displayed.
when have to listen to the upload to complete before getting the id

```const handleUpload = (result: any) => {
    console.log(result);
  };
```

The result parameter in the handleUpload function represents the response data returned by Cloudinary after a file has been successfully uploaded. This data typically includes various details about the uploaded file, such as its URL, public ID, dimensions, format, and other metadata.
