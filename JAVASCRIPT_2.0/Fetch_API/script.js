let url = "https://api.data.gov.sg/v1/environment/air-temperature";

let condition = document.querySelector(".condition");
let station1 = document.querySelector(".station1");
let station2 = document.querySelector(".station2");

// let getdata = async () => {
//   console.log("featching data ...........");
//   let responce = await fetch(url);
//   console.log(responce); // responce is in JSON formate
//   let data = await responce.json();
//   console.log(data);

//   console.log("all the data fetch from api is given bellow");

//   condition.innerText = `condition:- ${data.api_info.status} `;
//   station1.innerText = `${data.items[0].readings[0].station_id} - ${data.items[0].readings[0].value}`;
//   station2.innerText = `${data.items[0].readings[1].station_id} - ${data.items[0].readings[1].value}`;

//   console.log(data.api_info.status);
//   console.log(data.items[0].readings);
//   data.items[0].readings.forEach((item) => {
//     console.log("Station:", item.station_id, "Temperature:", item.value);
//   });
// };

// addEventListener("click", getdata);

let gettemp = ()=>{
    fetch("https://api.data.gov.sg/v1/environment/air-temperature")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    condition.innerText = `condition:- ${data.api_info.status} `;
    station1.innerText = `${data.items[0].readings[0].station_id} - ${data.items[0].readings[0].value}`;
    station2.innerText = `${data.items[0].readings[1].station_id} - ${data.items[0].readings[1].value}`;
  });

};

addEventListener("click" , gettemp);