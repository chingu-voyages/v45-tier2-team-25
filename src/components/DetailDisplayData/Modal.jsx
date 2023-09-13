import React, { useEffect, useState } from 'react'

const Modal = ({ strikes, closeModal, selectedItem }) => {

  const lat = selectedItem.geolocation.latitude;
  const long = selectedItem.geolocation.longitude;

  const API = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&type=country&apiKey=c29c7e83a1014be4b1b3721451368218`;

  const [locationData, setLocationData] = useState(null);

  const fetchLocationName = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLocationData(data);
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    fetchLocationName(API);
  }, [])
  // console.log(locationData.features[0].properties.country);
  return (
    <>
      <div>
        {strikes.map((strikes) => {
          const { name, nametype, recclass, mass, fall, year, reclat, reclong, geolocation, id } = strikes;

          const currYear = selectedItem.year;
          const getCurrYear = new Date(currYear);
          const getYear = getCurrYear.getFullYear();
          return (
            <div className="modal-wrapper" key={id} onClick={() => { closeModal(); }}>
              <div className="modal-container">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4">
                  <div className="strike-detail">
                    <table className='table-auto'>
                      <tr>
                        <td>Name: </td>
                        <span className="value"><td>{selectedItem.name}</td></span>
                      </tr>
                      <tr>
                        <td>Name Type: </td>
                        <span className="value"><td>{selectedItem.nametype}</td></span>
                      </tr>
                      <tr>
                        <td>Rec Class: </td>
                        <span className="value"><td>{selectedItem.recclass}</td></span>
                      </tr>
                      <tr>
                        <td>Mass: </td>
                        <span className="value"><td>{selectedItem.mass}</td></span>
                      </tr>
                      <tr>
                        <td>Fall: </td>
                        <span className="value"><td>{selectedItem.fall}</td></span>
                      </tr>
                      <tr>
                        <td>Year Of Discovery: </td>
                        <span className="value"><td>{getYear}</td></span>
                      </tr>
                      <tr>
                        <td>Reclat: </td>
                        <span className="value"><td>{selectedItem.reclat}</td></span>
                      </tr>
                      <tr>
                        <td>Reclong: </td>
                        <span className="value"><td>{selectedItem.reclong}</td></span>
                      </tr>
                      <tr>
                        <td>GeoLocation: </td>
                        <span className="value"><td>{selectedItem.geolocation && (
                          <div>
                            Latitude: {selectedItem.geolocation.latitude}, Longitude: {selectedItem.geolocation.longitude}
                            </div>
                        )}</td></span>
                      </tr>
                      <tr>
                        <td>Location Name: </td>
                        <span className="value"><td>{locationData && (
                          <div>
                             {locationData.features[0].properties.country}
                          </div>
                        )}</td></span>
                      </tr>
                    </table>
                  </div>
                  <div className="strike-img">

                    <img src="../rock.jpg" alt="" />
                    {/* <button className='modal-btn' onClick={() => { closeModal(); }}>Cloese</button> */}
                  </div>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>

      
    </>
  )
}

export default Modal


