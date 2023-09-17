import { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { useRouteLoaderData } from "react-router-dom";

let totalMass = 0;
export default function MassChart(props) {
  const [dataPoints, setDataPoints] = useState([]);
  const [showData, setShowData] = useState(false);
  const strikesList = [useRouteLoaderData("root")];

  useEffect(() => {
    totalMass = 0;
    const filteredData = [
      strikesList[0].strikesList.filter((item) => item.recclass === props.mass),
    ];

    const transformedData = filteredData[0].map((item, index) => {
      {
        item.mass ? (totalMass += +item.mass) : "";
      }

      return {
        x: +item.mass,
        y: item.year ? +item.year.match(/^\d{4}/)[0] : "",
        z: 200,
        index: index,
      };
    });

    setDataPoints(transformedData);
    {
      dataPoints && setShowData(true);
    }
  }, [props.mass]);
  const data = dataPoints;
  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <ScatterChart
          margin={{
            top: 0,
            right: 20,
            bottom: 0,
            left: 20,
          }}
        >
          <CartesianGrid />

          <XAxis type="number" dataKey="x" name="mass">
            <Label
              value="Mass"
              offset={-40}
              position="insideBottom"
              fontSize={30}
            />
          </XAxis>

          <YAxis type="number" dataKey="y" name="year">
            <Label
              value="Year"
              angle={-90}
              position="insideLeft"
              offset={-14}
              fontSize={30}
            />
          </YAxis>
          <Tooltip />
          <Scatter name="Meteor" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      {showData && (
        <h2>
          Average Mass:{" "}
          {Math.ceil(totalMass / dataPoints.length)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h2>
      )}
      {showData && <h2>Amount of meteors: {dataPoints.length}</h2>}
    </div>
  );
}
