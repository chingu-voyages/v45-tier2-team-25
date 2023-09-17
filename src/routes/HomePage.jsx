import { useEffect, useState } from "react";
import WorldMap from "../components/WorldMap/WorldMap";

function HomePage(props) {
  const [mass, setMass] = useState("");
  useEffect(() => {
    setMass(props.mass);
  }, [props.mass]);
  return (
    <main>
      <WorldMap mass={mass} />
    </main>
  );
}

export default HomePage;
