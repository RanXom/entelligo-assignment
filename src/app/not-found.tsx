import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="bg-card p-8 rounded-[2rem] shadow-xl border border-border max-w-md w-full text-center space-y-6 relative z-10">
        <div>
          <h1 className="text-8xl font-black text-foreground tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl font-bold text-foreground mt-4">
            bro is lost in the sauce 💀
          </h2>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
            literally whatever you were looking for does not exist. the route is
            completely cooked.
          </p>
        </div>

        <Link
          href="/"
          className={buttonVariants({
            className:
              "w-full rounded-[2rem] h-14 font-medium text-[15px] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]",
          })}
        >
          Take me back home fr
        </Link>
      </div>
    </div>
  );
}
