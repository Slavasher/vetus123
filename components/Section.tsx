import { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, subtitle, children, className }: SectionProps) {
  return (
    <section className={clsx("mx-auto max-w-6xl px-6 py-12", className)}>
      <div className="mb-8 space-y-2">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        {subtitle ? <p className="text-base text-slate-300 md:text-lg">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
