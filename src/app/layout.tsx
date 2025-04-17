import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Ghibli Dev",
  description: "Portofolio bertema Ghibli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="bg-ghibliCream ">{children}</main>
      </body>
    </html>
  );
}
