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

// Task 2: Querying Data

// Q1 - Show all teams in Spain

db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((query) => {
    query.forEach((doc) => {
      document.querySelector("#Q1").innerHTML += `<p>${doc.data().name}</p>`;
    });
  });

// Q2 - Show all teams in Madrid, Spain

db.collection("teams")
  .where("city", "==", "Madrid")
  .where("country", "==", "Spain")
  .get()
  .then((query) => {
    query.forEach((doc) => {
      document.querySelector("#Q2").innerHTML += `<p>${doc.data().name}</p>`;
    });
  });

// Q3 - Show all national teams

db.collection("teams")
  .where("city", "==", "NA")
  .get()
  .then((query) => {
    query.forEach((doc) => {
      document.querySelector("#Q3").innerHTML += `<p>${doc.data().name}</p>`;
    });
  });

// Q4 - Show all teams that are not in Spain

db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((query) => {
    query.forEach((doc) => {
      document.querySelector("#Q4").innerHTML += `<p>${doc.data().name}</p>`;
    });
  });

// Q5 - Show all teams that are not in Spain or England

db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((query) => {
    query.forEach((doc) => {
      document.querySelector("#Q5").innerHTML += `<p>${doc.data().name}</p>`;
    });
  });

// Q6 - Show all teams in Spain with more than 700M fans

db.collection("teams")
  .where("country", "==", "Spain")
  .where("fans", ">", 700)
  .get()
  .then((query) => {
    query.forEach((doc) => {
      document.querySelector("#Q6").innerHTML += `<p>${doc.data().name}</p>`;
    });
  });

// Q7 - Show all teams with a number of fans in the range of 500M and 600M

db.collection("teams")
  .where("fans", ">=", 500)
  .where("fans", "<=", 600)
  .get()
  .then((query) => {
    query.forEach((doc) => {
      document.querySelector("#Q7").innerHTML += `<p>${doc.data().name}</p>`;
    });
  });

// Q8 - Show all teams where Ronaldo is a top scorer

db.collection("teams")
  .where("scorers", "array-contains", "Ronaldo")
  .get()
  .then((query) => {
    query.forEach((doc) => {
      document.querySelector("#Q8").innerHTML += `<p>${doc.data().name}</p>`;
    });
  });

// Q9 - Show all teams where Ronaldo, Maradona, or Messi is a top scorer

db.collection("teams")
  .where("scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((query) => {
    query.forEach((doc) => {
      document.querySelector("#Q9").innerHTML += `<p>${doc.data().name}</p>`;
    });
  });
