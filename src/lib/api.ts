import { DummyUser, UsersResponse } from "@/types/user";

export async function getUsers(skip = 0, limit = 10): Promise<UsersResponse> {
  const res = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!res.ok) throw new Error("network is cooked bro");

  return res.json();
}

export async function getUser(id: string): Promise<DummyUser> {
  const res = await fetch(`http://dummyjson.com/users/${id}`);

  if (!res.ok) throw new Error("couldn't find this npc");

  return res.json();
}
