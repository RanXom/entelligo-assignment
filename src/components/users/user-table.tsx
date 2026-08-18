"use client";

import { useState } from "react";
import { DummyUser } from "@/types/user";
import { UserDetails } from "./user-details";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const UserTable = ({
  initialUsers,
  total,
}: {
  initialUsers: DummyUser[];
  total: number;
}) => {
  const [users, setUsers] = useState<DummyUser[]>(initialUsers || []);
  const [selectedUser, setSelectedUser] = useState<DummyUser | null>(null);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (loading || users.length >= total) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/users?limit=10&skip=${users.length}`,
      );
      const data = await res.json();

      setUsers((prev) => [...prev, ...data.users]);
    } catch (error) {
      console.error("api completely cooked during load more", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        layout
        className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <Table className="min-w-150 sm:min-w-full">
            <TableHeader>
              <motion.tr
                layout
                className="hover:bg-transparent border-b-border"
              >
                <TableHead className="w-12 text-center text-xs font-medium text-muted-foreground hidden sm:table-cell">
                  #
                </TableHead>

                <TableHead className="text-xs font-medium text-muted-foreground pl-4 sm:pl-0">
                  User
                </TableHead>

                <TableHead className="text-right text-xs font-medium text-muted-foreground">
                  Crypto Coin
                </TableHead>

                <TableHead className="text-right text-xs font-medium text-muted-foreground hidden md:table-cell">
                  Role
                </TableHead>

                <TableHead className="text-right text-xs font-medium text-muted-foreground hidden sm:table-cell">
                  Blood
                </TableHead>

                <TableHead className="text-right text-xs font-medium text-muted-foreground pr-4 sm:pr-6">
                  Company
                </TableHead>
              </motion.tr>
            </TableHeader>

            <TableBody>
              <AnimatePresence>
                {users.map((user) => (
                  <motion.tr
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className="border-b border-border transition-colors hover:bg-muted/50 cursor-pointer"
                  >
                    <TableCell className="text-center text-sm text-muted-foreground font-medium py-4 hidden sm:table-cell">
                      {user.id}
                    </TableCell>

                    <TableCell className="py-4 pl-4 sm:pl-0">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 shrink-0">
                          <AvatarImage src={user.image} alt={user.firstName} />
                          <AvatarFallback className="bg-secondary text-xs">
                            NPC
                          </AvatarFallback>
                        </Avatar>

                        <span className="font-semibold text-foreground flex items-center gap-1 whitespace-nowrap">
                          {user.firstName} {user.lastName}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="text-right font-medium text-foreground whitespace-nowrap">
                      {user.crypto.coin}
                    </TableCell>

                    <TableCell className="text-right text-sm font-medium text-muted-foreground capitalize hidden md:table-cell">
                      {user.role}
                    </TableCell>

                    <TableCell className="text-right text-sm font-medium text-destructive hidden sm:table-cell">
                      {user.bloodGroup}
                    </TableCell>

                    <TableCell
                      className="text-right text-sm font-medium text-foreground pr-4 sm:pr-6 truncate max-w-37.5"
                      title={user.company.name}
                    >
                      {user.company.name}
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      </motion.div>

      {users.length < total && (
        <motion.div layout className="flex justify-center">
          <Button
            onClick={loadMore}
            disabled={loading}
            variant="outline"
            className="rounded-3xl px-8 h-12 shadow-sm"
          >
            {loading ? "Loading more NPCs..." : "Show More"}
          </Button>
        </motion.div>
      )}

      <AnimatePresence>
        {selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-background/60 cursor-pointer"
              onClick={() => setSelectedUser(null)}
              title="Click to close"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
              className="relative z-10 w-full max-w-[320px]"
            >
              <UserDetails user={selectedUser} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
