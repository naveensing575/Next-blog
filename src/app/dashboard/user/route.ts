import { Comments, Users } from "./data/page";

export async function GET() {
  return new Response(JSON.stringify({ users: Users, comments: Comments }));
};

export async function  POST(req: Request) {
  const user = await req.json();
  const newUser = {
    id: Users.length + 1,
    ...user
  }
  Users.push(newUser);
  return new Response(JSON.stringify({ users: Users, comments: Comments }));
}