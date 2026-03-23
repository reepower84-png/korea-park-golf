import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Korea Park Golf | 파크골프 지도자 양성 전문",
  description:
    "파크골프 레슨 및 자격증 강사 양성 전문 - 검증된 커리큘럼으로 파크골프 지도자가 됩니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
