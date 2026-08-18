
import { UserTable } from "@/components/users/user-table";
import { getUsers } from "@/lib/api";

const HomePage = async () => {
  const { users, total } = await getUsers(0, 10);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-300 px-6 pt-20 pb-24">
        <div className="flex flex-col gap-6 mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Trending Users
          </h1>
        </div>

        <UserTable initialUsers={users} total={total} />
      </div>
    </main>
  );
};

export default HomePage;
