import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import HeroSection from "@/components/Hero";
import SideTable from "@/components/Side-table";
import TopPicks from "@/components/Top-picks";
export default function Home() {
  return (
    
   <div>
    <Header/>
    <HeroSection/>
    <SideTable />
    <TopPicks/>
      <Footer/>
    
   </div>
  );
}
