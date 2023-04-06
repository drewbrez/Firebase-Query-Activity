// Drew Brezenski and Al Rajesh Firestore Query Activity

// Task 1: Creating/Storing Data

let RealMadrid = {
  name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  scorers: ["Ronaldo", "Benzema", "Hazard"],
  fans: 798,
};

let Barcelona = {
  name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  scorers: ["Messi", "Suarez", "Puyol"],
  fans: 738,
};

let Manchester = {
  name: "Manchester United",
  city: "Manchester",
  country: "England",
  scorers: ["Cantona", "Rooney", "Ranaldo"],
  fans: 755,
};

let ManCity = {
  name: "Manchester City",
  city: "Manchester",
  country: "England",
  scorers: ["Sterling", "Aguero", "Haaland"],
  fans: 537,
};

let Brazil = {
  name: "Brazil National Team",
  city: "NA",
  country: "Brazil",
  scorers: ["Ronaldinho", "Cafu", "Bebeto"],
  fans: 950,
};

let Argentina = {
  name: "Argentina National Team",
  city: "NA",
  country: "Argentina",
  scorers: ["Messi", "Batistuta", "Maradona"],
  fans: 888,
};

let Atletico = {
  name: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  scorers: ["Aragones", "Griezmann", "Torez"],
  fans: 400,
};

db.collection("teams").doc("RealMadrid").set(RealMadrid);
db.collection("teams").doc("Barcelona").set(Barcelona);
db.collection("teams").doc("Manchester").set(Manchester);
db.collection("teams").doc("ManCity").set(ManCity);
db.collection("teams").doc("Brazil").set(Brazil);
db.collection("teams").doc("Argentina").set(Argentina);
db.collection("teams").doc("Atletico").set(Atletico);
