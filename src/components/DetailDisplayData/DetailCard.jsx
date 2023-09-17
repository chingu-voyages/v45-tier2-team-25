import { useEffect } from "react";
import { useState } from "react";
import Modal from "./Modal";
import Search from "./Search";
import "./DetailDisplay.css";
import { useRouteLoaderData } from "react-router-dom";
const DetailCard = () => {
  const strikesList = [useRouteLoaderData("root")];
  const [selectedItem, setSelectedItem] = useState();
  const [filteredStrikes, setFilteredStrikes] = useState([]);
  const [selectedMeteor, setSelectedMeteor] = useState([]);
  const [showSearch, setShowSearch] = useState(true);

  const openModal = (currStrike) => {
    setSelectedItem(currStrike);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  // const closeModal = () => {
  //   setShowModal(false);
  // }
  // const openModal = () => {
  //   setShowModal(true);
  // }
  // function ShowSearchHandler() {
  //   setShowSearch(true);
  // }

  const filterData = (searchTerm) => {
    // Filter data based on search term
    const filtered = strikesList[0].strikesList.filter(
      (currStrike) =>
        currStrike.name.toLowerCase() === searchTerm.toLowerCase(),
    );
    setFilteredStrikes(filtered);
    setSelectedMeteor(filtered);
  };

  return (
    <>
      {selectedItem && (
        <Modal
          closeModal={closeModal}
          strikes={selectedMeteor}
          selectedItem={selectedItem}
        />
      )}
      <Search filterData={filterData} />
      {/* {!showSearch && (
        <button class="btn btn-primary btn-outline" onClick={ShowSearchHandler}>
          Search
        </button>
      )} */}
      <div className="my-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {showSearch &&
            filteredStrikes.map((currStrike) => {
              const {
                name,
                nametype,
                recclass,
                mass,
                fall,
                year,
                reclat,
                reclong,
                geolocation,
                id,
              } = currStrike;
              const currYear = currStrike.year;
              const getCurrYear = new Date(currYear);
              const getYear = getCurrYear.getFullYear();
              return (
                <div className="" key={id}>
                  <div
                    className="image-container"
                    onClick={() => {
                      openModal(currStrike);
                    }}
                  >
                    <img src="../rock.jpg" alt="Image" />
                    <div className="overlay">
                      <p>
                        {name}, {getYear}
                      </p>
                      <h3>
                        Mass: {mass}, Composition: {recclass}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DetailCard;
