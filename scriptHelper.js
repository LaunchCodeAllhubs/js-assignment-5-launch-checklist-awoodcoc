// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
              <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}"> 
  
  `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else if (typeof testInput == "number") {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let items = document.getElementById("faultyItems");
  let launchStatus = document.getElementById("launchStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  // REQUIRE ALL FIELDS VALIDATION
  if (
    validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoLevel.value) === "Empty"
  ) {
    alert("All fields are required!");
    return;
  }

  // PILOT VALIDATION
  if (validateInput(Number(pilot.value)) === "Is a Number") {
    alert("Invalid input entered. Enter the pilot's name.");
    pilotStatus.innerHTML = "Pilot Not Ready";
  } else {
    items.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot.value} Ready`;
  }

  // COPILOT VALIDATION
  if (validateInput(Number(copilot.value)) === "Is a Number") {
    alert("Invalid input entered. Enter the copilot's name.");
    copilotStatus.innerHTML = "Co-pilot Not Ready";
  } else {
    items.style.visibility = "visible";
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} Ready`;
  }

  // FUEL LEVEL VALIDATION
  if (
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Not a Number"
  ) {
    alert("Invalid input entered. Enter a number.");
  } else {
    items.style.visibility = "visible";
  }

  // CARGO LEVEL VALIDATION
  if (
    validateInput(cargoLevel.value) === "Empty" ||
    validateInput(cargoLevel.value) === "Not a Number"
  ) {
    alert("Invalid input entered. Enter a number.");
  } else {
    items.style.visibility = "visible";
    // cargoStatus.innerHTML = cargoLevel.value;
  }

  // FUEL LEVEL NUMBER VALIDATION
  if (fuelLevel.value < 10000) {
    items.style.visibility = "visible";
    fuelStatus.innerHTML = "There is not enough fuel for this journey";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";
  } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
  }

  // CARGO LEVEL NUMBER VALIDATION
  if (cargoLevel.value > 10000) {
    items.style.visibility = "visible";
    cargoStatus.innerHTML = "There is too much cargo for this journey";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";
  } else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  }

  // FINAL VALIDATION
  if (
    fuelLevel.value >= 10000 &&
    cargoLevel.value <= 10000 &&
    typeof pilot.value == "string" &&
    typeof copilot.value == "string"
  ) {
    launchStatus.style.color = "#419F6A";
    launchStatus.innerHTML = "Shuttle is ready for launch";
  }
}

async function myFetch() {
  let planetsReturned;
  let planetsData;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  );
  planetsData = await planetsReturned.json();

  return planetsData;
}

function pickPlanet(planets) {
  let randomNumber = Math.round(Math.random() * planets.length);
  return planets[randomNumber];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
