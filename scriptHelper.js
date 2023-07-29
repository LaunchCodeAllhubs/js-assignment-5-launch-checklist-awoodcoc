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
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
  let goodToGo = true;

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

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
