import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div className="space-y-2 text-sm text-slate-400">
          <p className="text-base font-semibold text-white">Подборка для Кладоискателей</p>
          <p>
            Архивные историко-краеведческие справки по выбранным районам России.
          </p>
          <p>Срок выдачи: 24–72 часа. Формат: кабинет + PDF.</p>
        </div>
        <div className="space-y-2 text-sm text-slate-400">
          <p className="text-base font-semibold text-white">Разделы</p>
          <ul className="space-y-1">
            <li>
              <Link href="/how-it-works" className="hover:text-white">
                Как это работает
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white">
                Тарифы и калькулятор
              </Link>
            </li>
            <li>
              <Link href="/map" className="hover:text-white">
                Карта и районы
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-sm text-slate-400">
          <p className="text-base font-semibold text-white">Поддержка</p>
          <p>support@klad.ru</p>
          <p>Телеграм: @klad_support</p>
          <div className="flex gap-4">
            <Link href="/docs/policy" className="hover:text-white">
              Политика
            </Link>
            <Link href="/docs/offer" className="hover:text-white">
              Оферта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
