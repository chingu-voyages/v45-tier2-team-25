import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { useRouteLoaderData } from "react-router-dom";

export default function StrikesData(props) {
  const [meteorData, setMeteorData] = useState([]);

  const strikesList = [useRouteLoaderData("root")];
  let YearOne = 0;
  let YearTwo = 0;
  let YearThree = 0;
  let YearFour = 0;
  let YearFive = 0;
  useEffect(() => {
    const filteredData = strikesList[0].strikesList.filter(
      (item) => item.recclass === props.mass,
    );

    setMeteorData(filteredData);
  }, [props.mass]);

  if (meteorData.length > 0) {
    meteorData.map((Meteor, index) => (
      <div key={index}>
        {Meteor.year && Meteor.year.split("-")[0] > 1800 && Meteor.year.split("-")[0] < 1850
          ? YearOne++
          : ""}
        {Meteor.year && Meteor.year.split("-")[0] > 1850 && Meteor.year.split("-")[0] < 1900
          ? YearTwo++
          : ""}
        {Meteor.year && Meteor.year.split("-")[0] > 1900 && Meteor.year.split("-")[0] < 1950
          ? YearThree++
          : ""}
        {Meteor.year && Meteor.year.split("-")[0] > 1950 && Meteor.year.split("-")[0] < 2000
          ? YearFour++
          : ""}
        {Meteor.year && Meteor.year.split("-")[0] > 2000 && Meteor.year.split("-")[0] < 2025
          ? YearFive++
          : ""}
      </div>
    ));
  }

  {
    meteorData.map((Meteor, index) => (
      <div key={index}>
        {Meteor.year.split("-")[0] > 1800 && Meteor.year.split("-")[0] < 1850
          ? YearOne++
          : ""}
        {Meteor.year.split("-")[0] > 1850 && Meteor.year.split("-")[0] < 1900
          ? YearTwo++
          : ""}
        {Meteor.year.split("-")[0] > 1900 && Meteor.year.split("-")[0] < 1950
          ? YearThree++
          : ""}
        {Meteor.year.split("-")[0] > 1950 && Meteor.year.split("-")[0] < 2000
          ? YearFour++
          : ""}
        {Meteor.year.split("-")[0] > 2000 && Meteor.year.split("-")[0] < 2025
          ? YearFive++
          : ""}
      </div>
    ));
  }

  var options = {
    legend: "none",
    hAxis: {
      title: "Years",
    },
    vAxis: {
      title: "Amount",
    },
  };

  const data = [
    ["", "", { role: "green" }],
    ["1800-1850", YearOne, "blue"],
    ["1850-1900", YearTwo, "green"],
    ["1900-1950", YearThree, "yellow"],
    ["1950-2000", YearFour, "pink"],
    ["2000-2025", YearFive, "orange"],
  ];

  return (
    <div style={{ marginTop: "200px" }}>
      <h2 style={{ color: "black" }}>Strikes By Years</h2>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
