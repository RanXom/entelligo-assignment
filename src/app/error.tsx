"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const ErrorState = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="bg-card p-8 rounded-[2rem] shadow-xl border border-destructive/20 max-w-md w-full text-center space-y-4">
        <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto text-3xl mb-2">
          💀
        </div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight">
          api is completely cooked
        </h2>
        <p className="text-muted-foreground text-sm">
          {error.message ||
            "something went horribly wrong while fetching the users fr."}
        </p>
        <Button
          onClick={() => reset()}
          className="w-full mt-4 rounded-2xl h-14 font-medium text-[15px] shadow-md"
        >
          try again bro
        </Button>
      </div>
    </div>
  );
};

export default ErrorState;
