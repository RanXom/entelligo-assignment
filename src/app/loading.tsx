import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-300 px-4 sm:px-6 pt-10 sm:pt-20 pb-24">
        <div className="flex flex-col gap-6 mb-6">
          <Skeleton className="h-10 w-64 rounded-lg" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between w-full h-10">
            <div className="flex gap-2">
              <Skeleton className="h-10 w-24 rounded-xl" />
              <Skeleton className="h-10 w-24 rounded-xl hidden sm:block" />
            </div>
            <div className="flex justify-end flex-1 ml-4">
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card shadow-sm p-4">
            <div className="space-y-4">
              <div className="flex gap-4 border-b border-border pb-4">
                <Skeleton className="h-4 w-8 hidden sm:block" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-24 ml-auto" />
                <Skeleton className="h-4 w-24 hidden md:block" />
              </div>

              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 py-3">
                  <Skeleton className="h-4 w-8 hidden sm:block" />
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <Skeleton className="h-4 w-20 ml-auto" />
                  <Skeleton className="h-4 w-24 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
