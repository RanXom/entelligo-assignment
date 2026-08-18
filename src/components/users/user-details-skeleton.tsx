import { Skeleton } from "../ui/skeleton";

export const UserDetailsSkeleton = () => {
  return (
    <div className="w-full max-w-[320px] bg-card rounded-[2rem] shadow-xl border border-border relative overflow-hidden">
      {/* the top banner placeholder */}
      <Skeleton className="h-32 w-full rounded-3xl" />

      {/* the overlapping avatar placeholder */}
      <div className="relative -mt-10 ml-4 mb-4">
        <Skeleton className="w-20 h-20 rounded-full border-4 border-background" />
      </div>

      {/* name and title placeholders */}
      <div className="px-4 mb-6 space-y-3">
        <Skeleton className="h-8 w-48 rounded-lg" />
        <Skeleton className="h-4 w-32 rounded-md" />
      </div>

      {/* the bottom 3-column stats row placeholder */}
      <div className="bg-muted/50 rounded-2xl p-4 mx-4 mb-4 flex items-center border border-border">
        <div className="flex-1 flex flex-col items-center space-y-2">
          <Skeleton className="h-5 w-8 rounded-md" />
          <Skeleton className="h-3 w-10 rounded-sm" />
        </div>

        <div className="w-px h-8 bg-border"></div>

        <div className="flex-1 flex flex-col items-center space-y-2">
          <Skeleton className="h-5 w-8 rounded-md" />
          <Skeleton className="h-3 w-10 rounded-sm" />
        </div>

        <div className="w-px h-8 bg-border"></div>

        <div className="flex-1 flex flex-col items-center space-y-2">
          <Skeleton className="h-5 w-8 rounded-md" />
          <Skeleton className="h-3 w-12 rounded-sm" />
        </div>
      </div>

      {/* the get in touch button placeholder */}
      <Skeleton className="w-full rounded-[2rem] h-14 font-medium text-[15px] shadow-md" />
    </div>
  );
};
