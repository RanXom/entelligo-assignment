"use client";

import { DummyUser } from "@/types/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { UserDetails } from "./user-details";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const filteredUsers = users.filter((u) => {
    const search = searchTerm.toLowerCase();
    return (
      u.firstName.toLowerCase().includes(search) ||
      u.lastName.toLowerCase().includes(search) ||
      u.crypto.coin.toLowerCase().includes(search) ||
      u.bloodGroup.toLowerCase().includes(search) ||
      u.company.name.toLowerCase().includes(search) ||
      u.role.toLowerCase().includes(search)
    );
  });

  return (
    <div className="flex flex-col gap-6">
      {/* CONTROLS ROW */}
      <div className="flex items-center justify-between w-full h-10">
        {/* Sort & Filter Placeholders */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="rounded-xl h-10 px-4 text-muted-foreground border-border bg-muted/50 hover:bg-muted"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M3 6h18" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>
            Filter
          </Button>
          <Button
            variant="outline"
            className="rounded-xl h-10 px-4 text-muted-foreground border-border bg-muted/50 hover:bg-muted hidden sm:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m3 16 4 4 4-4" />
              <path d="M7 20V4" />
              <path d="m21 8-4-4-4 4" />
              <path d="M17 4v16" />
            </svg>
            Sort
          </Button>
        </div>

        <div className="flex justify-end flex-1 ml-4">
          <motion.div
            animate={{
              width: isSearchOpen ? "100%" : "40px",
              maxWidth: isSearchOpen ? "300px" : "40px",
            }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            className={`flex items-center border border-border rounded-full h-10 overflow-hidden ${
              isSearchOpen
                ? "bg-background"
                : "bg-muted/50 hover:bg-muted cursor-pointer"
            }`}
            onClick={() => {
              if (!isSearchOpen) setIsSearchOpen(true);
            }}
          >
            <div className="w-10 h-10 flex shrink-0 items-center justify-center text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>

            {isSearchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="search name, coin, blood..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={() => {
                  if (searchTerm === "") setIsSearchOpen(false);
                }}
                className="w-full bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground pr-4 h-full"
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* TABLE COMPONENT */}
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
                {/* MAP OVER filteredUsers NOW INSTEAD OF users */}
                {filteredUsers.length === 0 ? (
                  <motion.tr
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <TableCell
                      colSpan={6}
                      className="text-center py-10 text-muted-foreground"
                    >
                      no npcs found bro 💀
                    </TableCell>
                  </motion.tr>
                ) : (
                  filteredUsers.map((user) => (
                    <motion.tr
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
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
                            <AvatarImage
                              src={user.image}
                              alt={user.firstName}
                            />
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
                  ))
                )}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      </motion.div>

      {users.length < total && searchTerm === "" && (
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
