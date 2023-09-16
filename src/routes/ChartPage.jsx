import { useEffect, useState } from "react";
import AllCharts from "../components/MetricComponent/AllCharts";
function ChartPage(props) {
  const [mass, setMass] = useState("");
  useEffect(() => {
    setMass(props.mass);
  },[props.mass]);
  return (
    <div>
      <AllCharts mass={mass} />
    </div>
  );
}

export default ChartPage;
