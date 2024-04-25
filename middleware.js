import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  console.log(req.url);

  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/blogs", "/blogs/:path*"],
};
