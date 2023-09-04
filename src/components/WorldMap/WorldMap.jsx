import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { useState, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import MeteorInfo from "./MeteorInfo";

const countries = {};
function WorldMap() {
  const [data, setData] = useState([]);
  const [showMarkers, setShowMarkers] = useState(false);
  const [name, setName] = useState("Aachan");
  const colorScale = ["#E2AEFF", "#5E32CA"];
  const strikesList = [useRouteLoaderData("root")];

  useEffect(() => {
    const filteredData = strikesList[0].strikesList.filter(
      (item) => item.recclass === "L5",
    );

    setData(filteredData);
    setShowMarkers(true);
  }, [name]);

  const missingCountries = [
    data.map((Meteor, index) => ({
      name: Meteor.name,
      latLng: Meteor.reclat
        ? [Meteor.geolocation.latitude, Meteor.geolocation.longitude]
        : ["-33.16667", "-64.95"],
      year: Meteor.year ? Meteor.year : "",
      name: Meteor.name ? Meteor.name : "",
      mass: Meteor.mass ? Meteor.mass : "",
      composition: Meteor.recclass ? Meteor.recclass : "",
      status: Meteor.fall ? Meteor.fall : "",
    })),
  ];

  return (
    <div style={{ margin: "auto", width: "1895px", height: "900px" }}>
      <MeteorInfo meteor={name} />

      {showMarkers && (
        <VectorMap
          map={worldMill}
          containerStyle={{
            width: "700px",
            height: "600px",
          }}
          backgroundColor="#2E5A88"
          markers={missingCountries[0]}
          markerStyle={{
            initial: {
              fill: "red",
            },
          }}
          series={{
            regions: [
              {
                scale: colorScale,
                values: countries,
                min: 0,
                max: 100,
              },
            ],
          }}
          onRegionTipShow={function reginalTip(event, label, code) {
            return label.html(`
                  <div class="country-label">
                    <p>
                    <b>
                    <h2>${label.html()}</h2>
                   
                    </b>
                    </p>
                    <p>
                   
                    </p>
                    </div>`);
          }}
          onMarkerClick={function (event, code) {
            setName(missingCountries[0][code].name);
          }}
          onMarkerTipShow={function markerTip(event, label, code) {
            return label.html(`
            <div class="label">
              <p>
              <b>
              <h2 class="label-name">${label.html()}, ${
                missingCountries[0][code].year
                  ? missingCountries[0][code].year.match(/^\d{4}/)[0]
                  : "unknown"
              }</h2>
              <p class="label-composition">Composition:</p> <h4 class="composition-value">${
                missingCountries[0][code].composition
                  ? missingCountries[0][code].composition
                  : "unknown"
              }</h4> 
              <p class="label-mass">Mass: </p><h4 class="mass-value">${
                missingCountries[0][code].mass
                  ? missingCountries[0][code].mass
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : "unknown"
              }</h4>
              <p class="label-status">Status:</p><h4 class="status-value"> ${
                missingCountries[0][code].status
                  ? missingCountries[0][code].status
                  : "unknown"
              } </h4>
              </b>
              </p>
              </div>`);
          }}
        />
      )}
    </div>
  );
}

export default WorldMap;
