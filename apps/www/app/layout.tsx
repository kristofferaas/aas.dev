import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppNav />
        <main>{children}</main>
      </body>
    </html>
  );
}

const AppNav: React.FC = () => {
  return (
    <nav className="sticky top-0 h-16 border-b bg-white/50 backdrop-blur flex justify-start items-center px-8 space-x-8">
      <a href="/" className="font-bold">
        aas.dev
      </a>
      <a href="/">Portfolio</a>
      <a href="/">About</a>
      <a href="/">Github</a>
      <span className="flex-grow" />
      <button className="rounded-md bg-blue-500 text-white px-4 py-2">
        Login
      </button>
    </nav>
  );
};
