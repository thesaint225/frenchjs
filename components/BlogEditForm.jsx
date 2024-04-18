"use client";
const BlogEditForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Blog Post</h2>
      <form>
        {/* Owner Name */}
        <div className="mb-4">
          <label
            htmlFor="owner"
            className="block text-gray-700 font-semibold mb-2"
          >
            Owner Name
          </label>
          <input
            onChange={({ target }) => setOwner(target?.value)}
            placeholder="Enter your name"
            value=""
            type="text"
            id="owner"
            name="owner"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Title
          </label>
          <input
            onChange={({ target }) => setTitle(target?.value)}
            type="text"
            value=""
            placeholder="Enter your title"
            id="title"
            name="title"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            onChange={({ target }) => setDescription(target?.value)}
            id="description"
            name="description"
            value=""
            rows="4"
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        {/* Content */}
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-700 font-semibold mb-2"
          >
            Content
          </label>
          <textarea
            onChange={({ target }) => setContent(target?.value)}
            id="content"
            name="content"
            value=""
            rows="6"
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          // onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default BlogEditForm;
