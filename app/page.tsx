import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPost from "./components/FeaturedPost";
import PostGrid from "./components/PostGrid";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="grain bg-paper min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedPost />
      <PostGrid />
      <Aside />
      <Footer />
    </main>
  );
}
