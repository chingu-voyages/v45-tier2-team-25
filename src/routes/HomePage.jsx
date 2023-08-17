import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  const { strikesList } = useLoaderData();

  return (
    <div className="flex h-screen flex-col items-center justify-between text-center">
      <Navbar />

      <main>
        <h1>Content</h1>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
