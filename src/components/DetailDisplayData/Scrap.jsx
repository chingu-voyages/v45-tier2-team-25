import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from './Modal'; 
// import Navbar from '../Navbar';
import Search from './Search';
import "./DetailDisplay.css";
import { useRouteLoaderData } from "react-router-dom";
const DetailCard = () => {


  const strikesList = [useRouteLoaderData("root")];
  const [strikes, setStrikes] = useState([]);
  const [selectedItem, setSelectedItem] = useState()
  const [filteredStrikes, setFilteredStrikes] = useState(strikes);
  const [test,setTest] = useState(false)
useEffect(() => {
  setStrikes(strikesList[0].strikesList)
},[])

  const openModal = (currStrike) => {
    setSelectedItem(currStrike);
console.log(currStrike)
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
  function SubmitData() {
    setTest(true)
    const filtered = strikesList[0].strikesList.filter((currStrike) =>
    currStrike.name.charAt(0).toLowerCase() === 'Aachen'.charAt(0).toLowerCase() &&
    currStrike.name.toLowerCase().includes('Aachen'.toLowerCase())


  );
    setFilteredStrikes(filtered);
    setStrikes(filtered)

  }
console.log(strikesList)

  const filterData = (searchTerm) => {
 
  };
  

  return (
    <>
      {selectedItem && <Modal closeModal={closeModal} strikes={strikes} selectedItem={selectedItem} />}
      {test && <Search filterData={filterData} />}
      <div className='my-3'>
        <button onClick={SubmitData}>Submit</button>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {test && filteredStrikes.map((currStrike) => {
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









// import React, { useEffect } from "react";
// import { useState } from "react";
// import Modal from "./Modal";
// // import Navbar from '../Navbar';
// import Search from "./Search";
// import "./DetailDisplay.css";
// import { useRouteLoaderData } from "react-router-dom";
// const DetailCard = () => {
//   const strikesList = [useRouteLoaderData("root")];
//   const [strikes, setStrikes] = useState([]);
//   const [selectedItem, setSelectedItem] = useState();
//   const [filteredStrikes, setFilteredStrikes] = useState(strikesList[0].strikesList);
//   const [selectedMeteor, setSelectedMeteor] = useState([]);
//   const [showSpinner, setShowSpinner] = useState(false);


//   const openModal = (currStrike) => {
//     setSelectedItem(currStrike);
//   };

//   const closeModal = () => {
//     setSelectedItem(null);
//   };
//   // const closeModal = () => {
//   //   setShowModal(false);
//   // }
//   // const openModal = () => {
//   //   setShowModal(true);
//   // }

//   const filterData = (searchTerm) => {
//     if (!searchTerm) {
//       // If search term is empty, reset to original data
//       setFilteredStrikes(strikesList[0].strikesList);
//     } else {
//       // Filter data based on search term
//       const filtered = strikesList[0].strikesList.filter(
//         (currStrike) =>
//           currStrike.name.charAt(0).toLowerCase() ===
//             searchTerm.charAt(0).toLowerCase() &&
//           currStrike.name.toLowerCase().includes(searchTerm.toLowerCase()),
//       );
//       setFilteredStrikes(filtered);
//       setSelectedMeteor(filtered);
//     }
//   };

//   return (
//     <>
//       {selectedItem && (
//         <Modal
//           closeModal={closeModal}
//           strikes={selectedMeteor}
//           selectedItem={selectedItem}
//         />
//       )}
//       <Search filterData={filterData} />
//       <div className="my-3">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
//           {showSpinner && (
//             <span className="loading loading-spinner loading-lg"></span>
//           )}
//           {filteredStrikes.map((currStrike) => {
//             const {
//               name,
//               nametype,
//               recclass,
//               mass,
//               fall,
//               year,
//               reclat,
//               reclong,
//               geolocation,
//               id,
//             } = currStrike;
//             const currYear = currStrike.year;
//             const getCurrYear = new Date(currYear);
//             const getYear = getCurrYear.getFullYear();
//             return (
//               <div className="" key={id}>
//                 <div
//                   className="image-container"
//                   onClick={() => {
//                     openModal(currStrike);
//                   }}
//                 >
//                   <img src="../rock.jpg" alt="Image" />
//                   <div className="overlay">
//                     <p>
//                       {name}, {getYear}
//                     </p>
//                     <h3>
//                       Mass: {mass}, Composition: {recclass}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DetailCard;





// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import Modal from './Modal'; 
// // import Navbar from '../Navbar';
// import Search from './Search';
// import "./DetailDisplay.css";
// import { useRouteLoaderData } from "react-router-dom";
// const DetailCard = () => {

//   const strikesList = [useRouteLoaderData("root")];
//   const [strikes, setStrikes] = useState([]);
//   const [selectedItem, setSelectedItem] = useState()
//   const [filteredStrikes, setFilteredStrikes] = useState(strikes);
//   const [selectedMeteor,setSelectedMeteor] = useState([])


//   useEffect(() => {
//     setStrikes(strikesList[0].strikesList)
//   },[])

//   const openModal = (currStrike) => {
//     setSelectedItem(currStrike);
//     setShowSpinner(true)

//   };

//   const closeModal = () => {
//     setSelectedItem(null);
//   };
//   // const closeModal = () => {
//   //   setShowModal(false);
//   // }
//   // const openModal = () => {
//   //   setShowModal(true);
//   // }


//   const filterData = (searchTerm) => {
//     if (!searchTerm) {
//       // If search term is empty, reset to original data
//       setFilteredStrikes(strikes);
//     } else {
//       // Filter data based on search term
//       const filtered = strikes.filter((currStrike) =>
//       currStrike.name.charAt(0).toLowerCase() === searchTerm.charAt(0).toLowerCase() &&
//       currStrike.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//       setFilteredStrikes(filtered);
//       setSelectedMeteor(filtered)
//     }
//   };
  

//   return (
//     <>
//       {selectedItem && <Modal closeModal={closeModal} strikes={selectedMeteor} selectedItem={selectedItem} />}
//       <Search filterData={filterData} />
//       <div className='my-3'>
//         <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
//           {filteredStrikes.map((currStrike) => {
//             const { name, nametype, recclass, mass, fall, year, reclat, reclong, geolocation, id } = currStrike;
//             const currYear = currStrike.year;
//             const getCurrYear = new Date(currYear);
//             const getYear = getCurrYear.getFullYear();
//             return (
//               <div className="" key={id}>
//                 <div className="image-container" onClick={() => { openModal(currStrike) }}>
//                   <img src="../rock.jpg" alt="Image" />
//                   <div className="overlay">
//                     <p>{name}, {getYear}</p>
//                     <h3>Mass: {mass}, Composition: {recclass}</h3>

//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//     </>

//   )
// }

// export default DetailCard






// Scrap #3

// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import Modal from './Modal'; 
// // import Navbar from '../Navbar';
// import Search from './Search';
// import "./DetailDisplay.css";
// import { useRouteLoaderData } from "react-router-dom";
// const DetailCard = () => {

//   const strikesList = [useRouteLoaderData("root")];
//   const [strikes, setStrikes] = useState([]);
//   const [selectedItem, setSelectedItem] = useState()
//   const [filteredStrikes, setFilteredStrikes] = useState([]);
//   const [selectedMeteor,setSelectedMeteor] = useState([])
//   const [showSearch,setShowSearch] = useState(false)

 
//   const openModal = (currStrike) => {
//     setSelectedItem(currStrike);
//     setShowSpinner(true)

//   };
// useEffect(() => {
// setShowSearch(false)
// },[])
//   const closeModal = () => {
//     setSelectedItem(null);
//   };
//   // const closeModal = () => {
//   //   setShowModal(false);
//   // }
//   // const openModal = () => {
//   //   setShowModal(true);
//   // }
// function ShowSearchHandler() {
//   setShowSearch(true)
  
// }

//   const filterData = (searchTerm) => {
//     console.log(true)
  
  
//       // Filter data based on search term
//       const filtered = strikesList[0].strikesList.filter((currStrike) =>

//       currStrike.name.toLowerCase() === searchTerm.toLowerCase()
//     );
//       setFilteredStrikes(filtered);
//       setSelectedMeteor(filtered)
 
    
//   };
  
// console.log(filteredStrikes)
//   return (
//     <>
//       {selectedItem && <Modal closeModal={closeModal} strikes={selectedMeteor} selectedItem={selectedItem} />}
//       <Search filterData={filterData} />
//       <button onClick={ShowSearchHandler}>Search</button>
//       <div className='my-3'>
//         <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
//           {showSearch && filteredStrikes.map((currStrike) => {
//             const { name, nametype, recclass, mass, fall, year, reclat, reclong, geolocation, id } = currStrike;
//             const currYear = currStrike.year;
//             const getCurrYear = new Date(currYear);
//             const getYear = getCurrYear.getFullYear();
//             return (
//               <div className="" key={id}>
//                 <div className="image-container" onClick={() => { openModal(currStrike) }}>
//                   <img src="../rock.jpg" alt="Image" />
//                   <div className="overlay">
//                     <p>{name}, {getYear}</p>
//                     <h3>Mass: {mass}, Composition: {recclass}</h3>

//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//     </>

//   )
// }

// export default DetailCard