import AppNav from "./app-nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppNav />
        <main>
          <div className="h-16" />
          {children}
        </main>
      </body>
    </html>
  );
}
