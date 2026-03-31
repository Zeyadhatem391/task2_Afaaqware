import MainSecion from "@/components/organisms/MainSection";
import NavbarSecion from "@/components/organisms/NavbarSecion";

export default function Home() {
  return (
    <>
     <div className="h-screen">
      <NavbarSecion />
      <MainSecion />
     </div>
    </>
  );
}
