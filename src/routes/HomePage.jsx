import { useRouteLoaderData } from "react-router-dom";

function HomePage() {
  const strikesList = useRouteLoaderData("root");
  console.log("strikesList from Map View: ", strikesList);

  return (
    <main>
      <h1>HomePage</h1>
      <h3 className="mt-4 font-bold uppercase">Map View</h3>
    </main>
  );
}

export default HomePage;
