import connecteDb from "@/config/db";
// import Blog from "@/models/posts";
import CallToActionWithIllustration from "@/components/Hero";
import SmallWithSocial from "@/components/footer";
import { signIn } from "@/auth";
import BlogCard from "@/components/BlogCard";

export default async function Home() {
  return (
    <>
      <CallToActionWithIllustration />

      <SmallWithSocial />
      {/* <BlogCard /> */}
    </>
  );
}
