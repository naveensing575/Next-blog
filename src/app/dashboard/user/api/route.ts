import { type NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  const headersList = headers();

  cookies().set("results", "20");
  const theme = req.cookies.get("theme");

  console.log(requestHeaders.get('Authorization'));
  console.log(headersList.get('Authorization'));

  console.log('theme: ', theme);
  console.log(cookies().get('results'));
  return new Response('<h1>Hello, Next.js!</h1>',{
    headers: {
      "Set-Cookie": "theme=light",
      "Content-Type": "text/html",
    },
    status: 200,
  });
}