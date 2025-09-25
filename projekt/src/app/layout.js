import { Geist  } from "next/font/google";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const ubuntu = Geist({
  weight:["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default: "SwapHub",
    template: "%s | SwapHup",
  },
  description: "exam"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
