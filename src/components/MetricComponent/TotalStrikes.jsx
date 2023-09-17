import { useEffect, useState } from "react";
import classes from "../MetricComponent/TotalStrikes.module.css";
import { useRouteLoaderData } from "react-router-dom";
function TotalStrikes(props) {
  const [data, setData] = useState([]);
  const strikesList = [useRouteLoaderData("root")];
  useEffect(() => {
    const filteredData = strikesList[0].strikesList.filter(
      (item) => item.recclass === props.mass,
    );

    setData(filteredData);
  }, [props.mass]);
  let prev = 0;

  return (
    <div className={classes.overflow_x_auto}>
      <h2>All strikes with {props.mass} composition</h2>
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Mass</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Year</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Meteor, index) => (
            <tr key={index}>
              <th>{(prev += 1)}</th>
              <td>{Meteor.name ? Meteor.name : "unknown"}</td>
              <td>{Meteor.mass ? Meteor.mass : "unknown"}</td>
              <td>{Meteor.reclat ? Meteor.reclat : "unknown"}</td>
              <td>{Meteor.reclong ? Meteor.reclong : "unknown"}</td>
              <td>
                {Meteor.year ? Meteor.year.match(/^\d{4}/)[0] : "unknown"}
              </td>
              <td>{Meteor.fall ? Meteor.fall : "unknown"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TotalStrikes;
