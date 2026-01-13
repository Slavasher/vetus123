import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Подборка для Кладоискателей — архивные места России",
  description: "Сервис подбора исторических мест по закрытым архивам. Пакеты мест, кабинет, PDF."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-950 text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
