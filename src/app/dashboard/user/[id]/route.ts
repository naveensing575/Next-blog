import { Users } from "../data/page";

export async function GET(_req: Request, { params}: { params: { id: string } }) {
  const user = Users.find((user) => user.id === parseInt(params.id));
  return Response.json(user);
}


export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const updatedUser = await req.json();

  const userIndex = Users.findIndex((user) => user.id === parseInt(params.id));

  if (userIndex === -1) {
    return new Response('User not found', { status: 404 });
  }

  Users[userIndex].name = updatedUser.name;

  return new Response(JSON.stringify(Users[userIndex]), { status: 200 });
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const userIndex = Users.findIndex((user) => user.id === parseInt(params.id));
  if (userIndex === -1) {
    return new Response('User not found', { status: 404 });
  }
  Users.splice(userIndex, 1);
  return new Response('User deleted', { status: 200 });
}