import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { UserTable } from "@/components/users/user-table";
import { getUsers } from "@/lib/api";

const HomePage = async () => {
  const { users } = await getUsers();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1200px] px-6 pt-20 pb-24">
        <div className="flex flex-col gap-6 mb-6">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            Trending Users
          </h1>
          <div className="flex items-center justify-between">
            <ToggleGroup
              type="single"
              defaultValue="1D"
              className="bg-muted p-1 rounded-xl border border-border justify-start"
            >
              <ToggleGroupItem
                value="1D"
                className="rounded-lg px-4 h-8 text-sm data-[state=on]:bg-background data-[state=on]:shadow-sm data-[state=on]:text-foreground text-muted-foreground font-medium"
              >
                1D
              </ToggleGroupItem>
              <ToggleGroupItem
                value="1W"
                className="rounded-lg px-4 h-8 text-sm data-[state=on]:bg-background data-[state=on]:shadow-sm data-[state=on]:text-foreground text-muted-foreground font-medium"
              >
                1W
              </ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup
              type="single"
              defaultValue="ETH"
              className="bg-muted p-1 rounded-xl border border-border"
            >
              <ToggleGroupItem
                value="ETH"
                className="rounded-lg px-4 h-8 text-sm data-[state=on]:bg-background data-[state=on]:shadow-sm data-[state=on]:text-foreground text-muted-foreground font-medium"
              >
                ETH
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <UserTable users={users} />
      </div>
    </main>
  );
};

export default HomePage;
