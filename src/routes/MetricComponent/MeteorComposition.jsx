import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { useRouteLoaderData } from "react-router-dom";


export const data = [
  [
    "Element",
    "Amount",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["L6", 69, "color: orange", null],
  ["H5", 77, "color: red", null],
  ["H6", 242, "color: yellow", null],
  ["L5", 48, "color: blue", null],
  ["H4", 18, "color: #e5e4e2", null],
  ["LL6",39, "coral", null],
  ["LL5",143, "green", null],
  ["L4", 18, "wheat", null],
  ["CM2",15, "gold", null],
  ["El6", 7, "lime", null],
];

export const options = {
  title: "Meteor compostions",
  width: 1500,
  height: 500,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
  hAxis:{
    title:'Amount'
    
  },
  vAxis:{
    title:'Composition'

  }
};

export default function MeteorComposition() {
	const [meteors, setMeteorData] = useState([])
	const strikesList = [useRouteLoaderData("root")];

let finalList = {}
useEffect(() => {




  const filteredData = strikesList[0].strikesList.filter(item => item.recclass === 'L6');

  setMeteorData(filteredData)


}, [])


  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
} 
