// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {

    };
});


  // 

  //  {
  //   // don't need this addevent listener because i'll be calling it later in script.js
  //   let pilotNameInput = document.querySelector("input[name=pilotName]");
  //   let copilotNameInput = document.querySelector("input[name=copilotName]");
  //   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  //   let cargoMassInput = document.querySelector("input[name=cargoMass]");
  //   let list = document.getElementById("faultyItems");
  //   list.innerHTML = `
  //                   <ol>
  //                   <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
  //                   <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
  //                   <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
  //                   <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
  //               </ol>
  //   `;
  //   // list.innerHTML goes first / above
  //   if (
  //     pilotNameInput === "" ||
  //     copilotNameInput === "" ||
  //     fuelLevelInput === "" ||
  //     cargoMassInput === ""
  //   ) {
  //     alert("All fields are required!");
  //     event.preventDefault();
  //   }
  // });