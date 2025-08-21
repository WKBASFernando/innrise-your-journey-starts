import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
