import { DummyUser } from "@/types/user";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const UserTable = ({ users }: { users: DummyUser[] }) => {
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b-gray-100">
            <TableHead className="w-12 text-center text-xs font-medium text-gray-400">
              #
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-400">
              User
            </TableHead>
            <TableHead className="text-right text-xs font-medium text-gray-400">
              Crypto Coin
            </TableHead>
            <TableHead className="text-right text-xs font-medium text-gray-400">
              Role
            </TableHead>
            <TableHead className="text-right text-xs font-medium text-gray-400">
              Blood
            </TableHead>
            <TableHead className="text-right text-xs font-medium text-gray-400 pr-6">
              Company
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={user.id}
              onClick={() => router.push(`/user/${user.id}`)}
              className="hover:bg-gray-50/50 border-g-gray-50 cursor-pointer transition-colors"
            >
              <TableCell className="text-center text-sm text-gray-500 font-medium py-4">
                {user.id}
              </TableCell>
              <TableCell className="py-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.image} alt={user.firstName} />
                    <AvatarFallback className="bg-gray-100 text-xs">
                      NPC
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-gray-900 flex items-center gap-1">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium text-gray-900">
                {user.crypto.coin}
              </TableCell>
              <TableCell className="text-right text-sm font-medium text-gray-500 capitalize">
                {user.role}
              </TableCell>
              <TableCell className="text-right text-sm font-medium text-red-500">
                {user.bloodGroup}
              </TableCell>
              <TableCell
                className="text-right text-sm font-medium text-gray-700 pr-6 truncate max-w-[150px]"
                title={user.company.name}
              >
                {user.company.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
