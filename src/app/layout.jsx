import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/LandingPageComponents/Navbar";
import Footer from "@/components/LandingPageComponents/Footer";
import SocialFooter from "@/components/LandingPageComponents/SocialFooter";
import NabbarButtons from "../components/LandingPageComponents/NabbarButtons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

  export const metadata = {
    title: "Laboratorio Clinico",
    description: "laboratorio clinico - pagina principal",
    keywords: "laboratorio clinico, examenes de laboratorio",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen items-center">
          <header className="w-full ">
            <Navbar />
          </header>
          <NabbarButtons></NabbarButtons>
          {children} {/* Contenido principal de la aplicación */}
          <footer className="w-full">
            <SocialFooter />
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
