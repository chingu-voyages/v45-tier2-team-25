import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { useRouteLoaderData } from "react-router-dom";

// let top1 = 0
// 	let top2 = 0
// 	let top3 = 0
// 	let top4 = 0
// 	let top5 = 0
// 	let top6 = 0
// 	let top7 = 0
// 	let top8 = 0
// 	let top9 = 0
// 	let top10 = 0
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
// put top 7 
export default function MeteorComposition() {
	const [meteors, setMeteorData] = useState([])
	const strikesList = [useRouteLoaderData("root")];

let finalList = {}
useEffect(() => {



  // Fetch data from NASA API
  const filteredData = strikesList[0].strikesList.filter(item => item.recclass === 'L6');

  setMeteorData(filteredData)


}, [])

// meteors.map((meteor) => {
// if(meteor.recclass == 'L5') {
// 	top1++
// }if(meteor.recclass == 'H6') {
// 	top2++
// }if(meteor.recclass == 'L6') {
// 	top3++
// }if(meteor.recclass == 'H4') {
// 	top4++
// }if(meteor.recclass == 'LL5') {
// 	top5++
// }if(meteor.recclass == 'LL6') {
// 	top6++
// }
// if(meteor.recclass == 'H5') {
// 	top7++
// }
// if(meteor.recclass == 'L4') {
// 	top8++
// }if(meteor.recclass == 'CM2') {
// 	top9++
// }
// if(meteor.recclass == 'EL6') {
// 	top10++
// }

// })
// console.log(top1,top2,top3,top4,top5,top6,top7,top8,top9,top10)
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