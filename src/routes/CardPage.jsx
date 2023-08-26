import { useRouteLoaderData } from "react-router-dom";
import AllCharts from "./MetricComponent/AllCharts";
function CardPage() {
  const strikesList = useRouteLoaderData("root");

  console.log("strikesList from Card View: ", strikesList);

  return (
    <div>
 
<AllCharts/>
    </div>
  );
}

export default CardPage;
