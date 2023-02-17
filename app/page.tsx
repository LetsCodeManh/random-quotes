import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
