import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="mb-10 flex-1">{children}</main>
      <Footer />
    </>
  );
}
