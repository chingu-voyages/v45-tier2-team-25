import React, { useEffect, useState } from "react"
import './DataDisplay.css'
import { useRouteLoaderData } from "react-router-dom";
import { Chart } from "react-google-charts";

function DataDisplay() {
    const [SelectedMeteor,setSelectedMeteor] = useState([])

    const strikesList = useRouteLoaderData("root");
    useEffect(() => {
        setSelectedMeteor(strikesList)
    },[strikesList])
console.log(SelectedMeteor)
const data = [
        ["Country", "mass",'year'],
        ["munich", 700,300],
        ["United States", 300,1900],
        ["Brazil", 400,200],
        ["Canada", 500 ,200],
        ["china", 600,200],
        ["RU", 700,200],
      ];
     
      var options = {
        'width':2000,
                     'height':1000,
                     displayMode: 'markers',     
                    
      }
    return (
<div style={{marginLeft:'-1140px',marginTop:'-200px',position:'absolute'}}>
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              },
            },
          ]}
          chartType="GeoChart"
          width="300px"
          height="100px"
          data={data}
          options={options}
        />
     </div>
      );
}

export default DataDisplay