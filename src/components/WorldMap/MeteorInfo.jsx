import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import "./WorldMap.css";
import MeteorInfoMap from "./MeteorInfoMap";
function MeteorInfo(props) {
  const [MeteorInfo, setMeteorInfo] = useState([]);
  const [ModalHandler, setModalHandler] = useState(false);
  const strikesList = [useRouteLoaderData("root")];

  const meteor = props.meteor;
  useEffect(() => {
    const filteredData = strikesList[0].strikesList.filter(
      (item) => item.name === meteor,
    );

    setMeteorInfo(filteredData);
  }, [meteor]);
  useEffect(() => {
    setModalHandler(true);
  }, [MeteorInfo]);

  function closeModal() {
    setModalHandler(false);
  }
  return MeteorInfo.length > 0 && ModalHandler ? (
    <div>
      <dialog id="my_modal_4" className="modal" open={ModalHandler}>
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <MeteorInfoMap
            MeteorInfo={MeteorInfo[0].name ? MeteorInfo[0].name : ""}
          />
          <h3 className="Meteor_Info-Name">Name:</h3>
          <span className="Meteor_Info-Name-info">
            {MeteorInfo[0].name ? MeteorInfo[0].name : ""}
          </span>
          <h3 className="Meteor_Info-Composition">Composition:</h3>
          <span className="Meteor_Info-Composition-info">
            {MeteorInfo[0].recclass}
          </span>
          <h3 className="Meteor_Info-Mass">Mass:</h3>
          <span className="Meteor_Info-Mass-info">{MeteorInfo[0].mass}</span>
          <h3 className="Meteor_Info-Status">Status:</h3>
          <span className="Meteor_Info-Status-info">{MeteorInfo[0].fall}</span>
          <h3 className="Meteor_Info-Year">Year:</h3>
          <span className="Meteor_Info-Year-info">
            {MeteorInfo[0].year
              ? MeteorInfo[0].year.match(/^\d{4}/)[0]
              : "Unknown"}
          </span>
          <h3 className="Meteor_Info-Longitude">Longitude:</h3>
          <span className="Meteor_Info-Longitude-info">
            {MeteorInfo[0].geolocation.longitude}
          </span>

          <h3 className="Meteor_Info-Latitude">Latitude:</h3>
          <span className="Meteor_Info-Latitude-info">
            {MeteorInfo[0].geolocation.latitude}
          </span>

          <div className="modal-action"></div>
        </form>
        <button className="btn btn-square" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </dialog>
    </div>
  ) : (
    ""
  );
}

export default MeteorInfo;
