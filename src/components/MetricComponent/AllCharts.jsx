import StrikesData from "./StrikesByYear";
import MeteorComposition from "./MeteorComposition";
import TotalStrikes from "./TotalStrikes";
import MassChart from "./MassChart";
import { useEffect, useState } from "react";

function AllCharts(props) {
  const [mass, setMass] = useState("");
  useEffect(() => {
    setMass(props.mass);
  }, [props.mass]);
  return (
    <div>
      <MassChart mass={mass} />
      <StrikesData mass={mass} />
      <MeteorComposition mass={mass} />
      <TotalStrikes mass={mass} />
    </div>
  );
}

export default AllCharts;
