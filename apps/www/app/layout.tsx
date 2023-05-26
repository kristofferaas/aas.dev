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
        <div className="h-16" />
        {children}
      </body>
    </html>
  );
}
