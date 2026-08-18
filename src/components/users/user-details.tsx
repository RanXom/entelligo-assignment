import { DummyUser } from "@/types/user";
import { Button } from "../ui/button";
import Image from "next/image";

export const UserDetails = ({ user }: { user: DummyUser }) => {
  return (
    <div className="w-80 bg-card rounded-[2rem] shadow-xl border border-border relative overflow-hidden">
      <div className="h-32 rounded-3xl bg-linear-to-br from-amber-200 via-orange-400 to-blue-500 relative">
        <div className="absolute -bottom-4 right-4 bg-background px-4 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-border">
          <div className="w-4 h-4 bg-destructive rounded-sm flex items-center justify-center">
            <span className="text-[10px] text-destructive-foreground font-bold">
              {user.company.name.charAt(0)}
            </span>
          </div>
          <span className="text-xs font-bold text-foreground truncate max-w-25">
            {user.company.name.split(" ")[0]} Co.
          </span>
        </div>
      </div>

      <div className="relative -mt-10 ml-4 mb-4">
        <Image
          src={user.image}
          alt={user.firstName}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full border-4 border-background object-cover bg-muted"
        />
      </div>

      <div className="px-4 mb-6">
        <h2 className="text-2xl font-bold text-foreground tracking-tight">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-muted-foreground font-medium mt-1">
          {user.company.title}
        </p>
      </div>

      <div className="bg-muted/50 rounded-2xl p-4 mx-4 mb-4 flex justify-between items-center border border-border">
        <div className="flex flex-col items-center">
          <span className="font-bold text-foreground text-sm">5.0</span>
          <span className="text-[10px] text-muted-foreground font-medium">
            Rating
          </span>
        </div>

        <div className="w-px h-8 bg-border"></div>

        <div className="flex flex-col items-center">
          <span className="font-bold text-foreground text-sm">{user.age}</span>
          <span className="text-[10px] text-muted-foreground font-medium">
            Years
          </span>
        </div>

        <div className="w-px h-8 bg-border"></div>

        <div className="flex flex-col items-center">
          <span className="font-bold text-foreground text-sm">
            {Math.round(user.height)}
          </span>
          <span className="text-[10px] text-muted-foreground font-medium">
            cm tall
          </span>
        </div>
      </div>

      <Button className="w-full rounded-[2rem] h-14 font-medium text-[15px] shadow-md">
        Get In Touch
      </Button>
    </div>
  );
};
