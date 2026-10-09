import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Digvijay Gupta — Portfolio",
  description:
    "Personal portfolio of Digvijay Gupta — projects, resume and contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
