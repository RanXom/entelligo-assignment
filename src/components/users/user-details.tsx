import { DummyUser } from "@/types/user";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";

const GRADIENTS = [
  "from-amber-200 via-orange-400 to-blue-500",
  "from-fuchsia-300 via-purple-500 to-indigo-600",
  "from-emerald-300 via-teal-400 to-cyan-500",
  "from-rose-300 via-pink-500 to-red-500",
  "from-blue-300 via-indigo-500 to-violet-600",
  "from-yellow-200 via-amber-400 to-orange-500",
  "from-cyan-300 via-blue-500 to-purple-600",
  "from-lime-300 via-green-400 to-emerald-600",
];

const FUNNY_MESSAGES = [
  "bro they are literally an NPC, they can't read your emails 💀",
  "message sent straight to the void. hope they answer",
  "user left you on read instantly. completely cooked.",
  "bold of you to assume this button actually does something",
  "connection failed: user is currently taking a power nap.",
  "they saw your message and chose violence. blocked.",
  "error 404: personality not found for this NPC.",
  "carrier pigeon dispatched. expect a reply in 3-5 business years.",
  "bro is busy touching grass, try again later.",
  "your message was marked as spam by the matrix.",
  "they are typing... and typing... and typing forever...",
  "status: ghosted successfully",
  "congratulations! you have successfully annoyed a digital stranger.",
  "telepathic link failed. please try shouting at your screen instead.",
  "user is currently ignoring all inbound transmissions.",
  "signal lost in the sauce. try again never.",
  "email received! ...just kidding, it got deleted instantly.",
  "bro really thought they were gonna text back 😭",
  "contacting the dummyjson servers... they said absolutely not.",
  "maximum cringe level reached. closing connection.",
];

export const UserDetails = ({ user }: { user: DummyUser }) => {
  const gradientClass = GRADIENTS[user.id % GRADIENTS.length];

  const handleGetInTouch = () => {
    const randomMsg =
      FUNNY_MESSAGES[Math.floor(Math.random() * FUNNY_MESSAGES.length)];

    toast(randomMsg, {
      style: {
        background: "var(--card)",
        color: "var(--foreground)",
        border: "1px solid var(--border)",
        borderRadius: "1rem",
      },
    });
  };

  return (
    <div className="w-full max-w-80 bg-card rounded-[2rem] shadow-xl border border-border relative overflow-hidden">
      <div
        className={`h-32 rounded-3xl bg-linear-to-br ${gradientClass} relative`}
      >
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

      <div className="bg-muted/50 rounded-2xl p-4 mx-4 mb-4 flex items-center border border-border">
        <div className="flex-1 flex flex-col items-center">
          <span className="font-bold text-foreground text-sm">5.0</span>
          <span className="text-[10px] text-muted-foreground font-medium">
            Rating
          </span>
        </div>

        <div className="w-px h-8 bg-border"></div>

        <div className="flex-1 flex flex-col items-center">
          <span className="font-bold text-foreground text-sm">{user.age}</span>
          <span className="text-[10px] text-muted-foreground font-medium">
            Years
          </span>
        </div>

        <div className="w-px h-8 bg-border"></div>

        <div className="flex-1 flex flex-col items-center">
          <span className="font-bold text-foreground text-sm">
            {Math.round(user.height)}
          </span>
          <span className="text-[10px] text-muted-foreground font-medium">
            cm tall
          </span>
        </div>
      </div>

      <Button
        onClick={handleGetInTouch}
        className="w-full rounded-[2rem] h-14 font-medium text-[15px] shadow-md"
      >
        Get In Touch
      </Button>
    </div>
  );
};
