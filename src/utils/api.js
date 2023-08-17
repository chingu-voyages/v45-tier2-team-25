export async function fetchStrikes() {
  try {
    const response = await fetch(
      "https://data.nasa.gov/resource/gh4g-9sfh.json",
    );
    let data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching strikes: ", err);
  }
}

// RESPONSE FIELDS
//
// {
//   fall: "Fell",
//   geolocation: { latitude: "56.18333", longitude: "10.23333" },
//   id: "2",
//   mass: "720",
//   name: "Aarhus",
//   nametype: "Valid",
//   recclass: "H6",
//   reclat: "56.183330",
//   reclong: "10.233330",
//   year: "1951-01-01T00:00:00.000",
// }
