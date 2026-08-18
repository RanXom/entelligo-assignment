"use client";

import { DummyUser } from "@/types/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { UserDetails } from "./user-details";
import { AnimatePresence, motion } from "framer-motion";

export const UserTable = ({ users }: { users: DummyUser[] }) => {
  const [selectedUser, setSelectedUser] = useState<DummyUser | null>(null);

  return (
    <>
      <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b-border">
              <TableHead className="w-12 text-center text-xs font-medium text-muted-foreground">
                #
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                User
              </TableHead>
              <TableHead className="text-right text-xs font-medium text-muted-foreground">
                Crypto Coin
              </TableHead>
              <TableHead className="text-right text-xs font-medium text-muted-foreground">
                Role
              </TableHead>
              <TableHead className="text-right text-xs font-medium text-muted-foreground">
                Blood
              </TableHead>
              <TableHead className="text-right text-xs font-medium text-muted-foreground pr-6">
                Company
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="hover:bg-muted/50 border-b-border cursor-pointer transition-colors"
              >
                <TableCell className="text-center text-sm text-muted-foreground font-medium py-4">
                  {user.id}
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.image} alt={user.firstName} />
                      <AvatarFallback className="bg-secondary text-xs">
                        NPC
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-foreground flex items-center gap-1">
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium text-muted-foreground">
                  {user.crypto.coin}
                </TableCell>
                <TableCell className="text-right text-sm font-medium text-muted-foreground capitalize">
                  {user.role}
                </TableCell>
                <TableCell className="text-right text-sm font-medium text-destructive">
                  {user.bloodGroup}
                </TableCell>
                <TableCell
                  className="text-right text-sm font-medium text-foreground pr-6 truncate max-w-37.5"
                  title={user.company.name}
                >
                  {user.company.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

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
    </>
  );
};
