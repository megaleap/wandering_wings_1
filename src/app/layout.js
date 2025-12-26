import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  icons: {
    icon: '/Fevicon_icon_withoutbg.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
      >
        <Nav/>
        <CustomCursor/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
