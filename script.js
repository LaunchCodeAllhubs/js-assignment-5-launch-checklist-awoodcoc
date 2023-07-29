// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      let chosenPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        this.document,
        chosenPlanet.name,
        chosenPlanet.diameter,
        chosenPlanet.star,
        chosenPlanet.distance,
        chosenPlanet.moons,
        chosenPlanet.image
      );
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let form = document.querySelector("form");
      form.addEventListener("submit", function (event) {
        let list = document.getElementById("faultyItems");
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector(
          "input[name=copilotName]"
        );
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        formSubmission(
          this.document,
          list,
          pilotNameInput,
          copilotNameInput,
          fuelLevelInput,
          cargoMassInput
        );
        event.preventDefault();
      });
    });
});
