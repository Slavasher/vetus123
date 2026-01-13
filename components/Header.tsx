import Link from "next/link";

const navItems = [
  { href: "/how-it-works", label: "Как это работает" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/map", label: "Карта" },
  { href: "/order", label: "Заказать" },
  { href: "/dashboard", label: "Кабинет" }
];

export function Header() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Подборка для Кладоискателей
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/order"
          className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:opacity-90"
        >
          Рассчитать заказ
        </Link>
      </div>
    </header>
  );
}
