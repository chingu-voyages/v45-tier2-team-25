import react, { useEffect, useState } from 'react'

function ApiCall() {
const [ApiData,setApiData] = useState([])

useEffect(() => {
fetch(
    `https://data.nasa.gov/resource/gh4g-9sfh.json`)
    .then((response) => response.json())
    .then((json) => {
      setApiData(json);
    })  
    .catch((err) => {
      console.log(err);
    })

},[])



return (
  <div>
    <div className='Metrics-div'>

{ApiData.map((Meteor,index) => (
  <div key={index}>
<h2>{Meteor.name}</h2>
<h2>{Meteor.mass}</h2>

</div>
))}

</div>

</div>
)

}

export default ApiCall;
