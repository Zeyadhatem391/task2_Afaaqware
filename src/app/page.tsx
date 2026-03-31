import MainSection from "@/components/organisms/MainSection";
import NavbarSection from "@/components/organisms/NavbarSection";

export default function Home() {
  return (
    <>
     <div className="h-screen">
      <NavbarSection />
      <MainSection />
     </div>
    </>
  );
}
