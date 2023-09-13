import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from './Modal'; 
// import Navbar from '../Navbar';
import Search from './Search';
import "./DetailDisplay.css";

const DetailCard = () => {

  const API = "https://data.nasa.gov/resource/gh4g-9sfh.json";
  
  const [strikes, setStrikes] = useState([]);
  const [selectedItem, setSelectedItem] = useState()
  const [filteredStrikes, setFilteredStrikes] = useState(strikes);

  const fetchStrikes = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setStrikes(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    fetchStrikes(API);
  }, [])

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


  const filterData = (searchTerm) => {
    if (!searchTerm) {
      // If search term is empty, reset to original data
      setFilteredStrikes(strikes);
    } else {
      // Filter data based on search term
      const filtered = strikes.filter((currStrike) =>
      currStrike.name.charAt(0).toLowerCase() === searchTerm.charAt(0).toLowerCase() &&
      currStrike.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
      setFilteredStrikes(filtered);
    }
  };
  

  return (
    <>
      {selectedItem && <Modal closeModal={closeModal} strikes={strikes} selectedItem={selectedItem} />}
      <Search filterData={filterData} />
      <div className='my-3'>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {filteredStrikes.map((currStrike) => {
            const { name, nametype, recclass, mass, fall, year, reclat, reclong, geolocation, id } = currStrike;
            const currYear = currStrike.year;
            const getCurrYear = new Date(currYear);
            const getYear = getCurrYear.getFullYear();
            return (
              <div className="" key={id}>
                <div className="image-container" onClick={() => { openModal(currStrike) }}>
                  <img src="../rock.jpg" alt="Image" />
                  <div className="overlay">
                    <p>{name}, {getYear}</p>
                    <h3>Mass: {mass}, Composition: {recclass}</h3>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>

  )
}

export default DetailCard
