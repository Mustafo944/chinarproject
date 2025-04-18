import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/Components/AOSWrapper";

export const metadata = {
  title: "Chinar Bukhara — Ресторан восточной кухни",
  description: "Добро пожаловать в ресторан 'Чинар' в Бухаре! Вкус востока в каждом блюде. Уютная атмосфера, традиционная узбекская кухня и лучшее гостеприимство.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Добро пожаловать в ресторан 'Чинар' в Бухаре! Вкус востока в каждом блюде. Уютная атмосфера, традиционная узбекская кухня и лучшее гостеприимство." />
        <meta name="keywords" content="ресторан, Бухара, Чинар, восточная кухня, узбекская кухня, еда в Бухаре, Chinar Bukhara" />
        <meta name="author" content="Chinar Bukhara" />
        <meta property="og:title" content="Chinar Bukhara — Ресторан восточной кухни" />
        <meta property="og:description" content="Ресторан 'Чинар' в Бухаре. Восточные традиции, уют и вкуснейшие блюда узбекской кухни." />
        <meta property="og:image" content="/header/chinar2.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AOSWrapper />
        {children}
      </body>
    </html>
  );
}
