import { useRouteLoaderData } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import WorldMap from "./WorldMap/WorldMap";
function HomePage() {
  const strikesList = useRouteLoaderData("root");
  console.log("strikesList from Map View: ", strikesList);

  return (
    <WorldMap/>
  );
}

export default HomePage;
