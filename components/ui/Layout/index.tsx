"use client";

import Sidebar from "@/components/ui/Sidebar";
import MobileNav from "@/components/ui/MobileNav";
import Footer from "@/components/ui/Footer";
import { useScrollSpy } from "@/hooks/UseScrollSpy";

const SECTIONS = ["about", "experience", "projects", "certificate", "contact"];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const active = useScrollSpy(SECTIONS);

  return (
    <div className="flex min-h-screen max-w-screen overflow-x-hidden bg-white">
      <Sidebar active={active} />
      <MobileNav active={active} />

      <div>
        <main className="flex-1 lg:ml-[27%] pb-20 lg:pb-0">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
