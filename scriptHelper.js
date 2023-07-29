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

  if (
    validateInput(pilot) === "Empty" ||
    validateInput(pilot) === "Is a Number"
  ) {
    alert("Invalid input entered. Enter the pilot's name.");
    preventDefault();
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
  }

  if (
    validateInput(copilot) === "Empty" ||
    validateInput(copilot) === "Is a Number"
  ) {
    alert("Invalid input entered. Enter the copilot's name.");
    preventDefault();
  } else {
    copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;
  }

  if (
    validateInput(fuelLevel) === "Empty" ||
    validateInput(fuelLevel) === "Not a Number"
  ) {
    alert("Invalid input entered. Enter a number.");
    preventDefault();
  } else {
    fuelStatus.innerHTML = fuelLevel;
  }

  if (
    validateInput(cargoLevel) === "Empty" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Invalid input entered. Enter a number.");
    preventDefault();
  } else {
    cargoStatus.innerHTML = cargoLevel;
  }

  if (fuelLevel < 10000) {
    items.style.visibility = "visible";
    fuelStatus.innerHTML = "There is not enough fuel for this journey.";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.color = "#C7254E";
  }

  if (cargoLevel > 10000) {
    items.style.visibility = "visible";
    cargoStatus.innerHTML = "There is too much cargo for this journey.";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.innerHTML.color = "#C7254E";
  }

  if (
    fuelLevel >= 10000 &&
    cargoLevel <= 10000 &&
    typeof pilot == "string" &&
    typeof copilot == "string"
  ) {
    launchStatus.innerHTML.color = "#419F6A";
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
