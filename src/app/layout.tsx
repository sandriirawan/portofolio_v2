import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sandri Irawan",
  description: "Portofolio sandri irawan",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
