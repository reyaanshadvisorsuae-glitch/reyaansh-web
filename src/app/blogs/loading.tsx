export default function Loading() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <section className="bg-primary-container px-gutter pt-44 pb-28 text-center text-white md:pt-52">
        <div className="mx-auto max-w-container-max">
          <div className="mx-auto h-9 w-56 animate-pulse rounded-full bg-white/12" />
          <div className="mx-auto mt-7 h-14 max-w-3xl animate-pulse rounded-lg bg-white/14 md:h-16" />
          <div className="mx-auto mt-6 h-6 max-w-2xl animate-pulse rounded-full bg-white/10" />
        </div>
      </section>

      <section className="mx-auto -mt-14 max-w-container-max px-gutter pb-section-padding-desktop">
        <div className="h-[360px] animate-pulse rounded-xl bg-surface-container shadow-2xl" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-[4/3] animate-pulse rounded-lg bg-surface-container-high" />
              <div className="h-4 w-32 animate-pulse rounded-full bg-surface-container-high" />
              <div className="h-7 animate-pulse rounded bg-surface-container-high" />
              <div className="h-4 w-4/5 animate-pulse rounded-full bg-surface-container" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}