import { ButtonLink } from "@/components/ui";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 pb-24 pt-nav text-center sm:px-6">
        <span className="text-7xl font-extrabold tracking-tight text-accent">
          404
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          The link may be broken or the page may have moved. Let&rsquo;s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back home
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary" size="lg">
            See our work
            <Icon name="arrowRight" size={16} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
