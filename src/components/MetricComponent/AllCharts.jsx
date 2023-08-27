import StrikesData from "./StrikesByYear";
import MeteorComposition from "./MeteorComposition";
import TotalStrikes from "./TotalStrikes";
import MassChart from "./MassChart";

function AllCharts() {
  return (
    <div>
      <MassChart />
      <MeteorComposition />
      <StrikesData />
      <TotalStrikes />
    </div>
  );
}

export default AllCharts;
