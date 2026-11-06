import type { Metadata } from "next";
import "./globals.css";
import MaintenancePage from "@/components/pages/Home/Section/MaintenancePage";

export const metadata: Metadata = {
  title: "Dava Elyanta | Hyuma Dev",
  description: "website porotfolio fresh graduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {/*  <MaintenancePage /> */}
        {children}
      </body>
    </html>
  );
}
