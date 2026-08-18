export default function Home() {
  return (
    <div className="flex flex-col space-y-6 max-w-7xl max-auto pb-10">
      <Header />
      <UsersTable />
    </div>
  );
}
