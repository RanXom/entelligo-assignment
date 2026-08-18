import { UserTable } from "@/components/users/user-table";
import { getUsers } from "@/lib/api";

const HomePage = async () => {
  const { users } = await getUsers();

  return <UserTable users={users} />;
};

export default HomePage;
