// 2a. Open the App.js file and add the necessary import line at the top of the file that allows the MCUShows component to be used in the App.js file
import MCUShows from './mcu-shows/MCUShows';
// 6a. In the App.js file, import the useState function at the top of the file
import {useState, useEffect } from 'react';
// 5a. Below the MCUShows import in the App.js file, create the following variable:
// const releaseDates = {
//  wandaVision: 'Jan 2021',
//  falconWinter: 'Mar 2021',
//  loki: 'June 2021',
//  hawkeye: 'Fall of 2021'
// }
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  hawkeye: 'Fall of 2021'
}

// 6b. Create the following array variable below the releaseDates variable:
const avengers = [
 'Scarlet Witch',
 'Vision',
 'Falcon',
 'Winter Soldier',
 'Hawkeye'
];


function App() {
  // 6c. Above the return line in the App function component, use the useState function to set the starting state value to 0 (Zero). Also, use destructuring to set the values in the array that is returned from the useState function to the following variable names…
const [index, setIndex]=useState(0);
// 7a. In the App function component, use another useState function below the first one and set the starting state value to 0 (Zero) on this one as well. Also, use destructuring to set the values in the array that is returned from the useState function to the following variable names…
// const [num, setNum]
const [num, setNum] = useState(0);

  // 8a
  // The function passed into the useEffect function/hook will run everytime the state value that is passed into the array (2nd argument) is updated. (NOTE: If nothing is passed in for a second argument, then the function will run whenever any state values are updated.)
  useEffect(() => {
    alert('The Next Avenger has been displayed');
  }, [num]);

const randomAvenger = () => {setIndex(Math.floor(Math.random() * avengers.length));}

// 7d. Have an Avenger name display in the new h1 element after "Next Avenger: " whenever the NEXT AVENGER button is clicked. Have this set up so that it will start with "Scarlet Witch" when the page loads and every time the NEXT AVENGER button is clicked have it display whichever Avenger name comes next in the "avegners" array. Also, whenever it gets to "Hawkeye", who is the last name in the array, have it start back at "Scarlet Witch" when the button is pressed again.
const nextAvenger = () => {
  num === (avengers.length - 1) ? setNum(0) : setNum(num + 1);
}

  return (
    // 2b. Inside the div in the App component, create an h1 with the following text: "FINAL REACT EXERCISE"
    <div>
      <h1>FINAL REACT EXERCISE</h1>
      {/* // 2c. Below the h1 pass in a MCUShows component */}

      {/* // 5b. Add a prop called "dates" to the MCUShows component that is being passed into the App.js component. Also, set the releaseDates variable as the value that is passed into the "dates" prop */}

      <MCUShows 
        dates={releaseDates}
        randomAvenger={randomAvenger}
        nextAvenger={nextAvenger}
        />
        {/* // 6d. Below the MCUShows component in the App.js file create an h1 element with the following content inside: "Random Avenger:" */}
      {/* // 6f. Have a random Avenger name display in the new h1 element after "Random Avenger: " whenever the RANDOM AVENGER button is clicked. */}
      <h1>Random Avenger: {avengers[index]}</h1>
      {/* // 7b. Below the Random Avenger h1 in the App.js file create another h1 element with the following content inside: "Next Avenger:" */}
      <h1>Next Avenger: {avengers[num]}</h1>
    </div>
  );
}

export default App;

// BONUS

// 6a. In the App.js file, import the useState function at the top of the file

// 6b. Create the following array variable below the releaseDates variable:
// const avengers = [
//  'Scarlet Witch',
//  'Vision',
//  'Falcon',
//  'Winter Soldier',
//  'Hawkeye'
// ];

// 6c. Above the return line in the App function component, use the useState function to set the starting state value to 0 (Zero). Also, use destructuring to set the values in the array that is returned from the useState function to the following variable names…
// const [index, setIndex]

// 6d. Below the MCUShows component in the App.js file create an h1 element with the following content inside: "Random Avenger:"

// 6e. In the MCUShows component create a button below the final p (paragraph) element. Set the content/text for the button to the following text: "RANDOM AVENGER".

// 6f. Have a random Avenger name display in the new h1 element after "Random Avenger: " whenever the RANDOM AVENGER button is clicked.

// 7a. In the App function component, use another useState function below the first one and set the starting state value to 0 (Zero) on this one as well. Also, use destructuring to set the values in the array that is returned from the useState function to the following variable names…
// const [num, setNum]

// 7b. Below the Random Avenger h1 in the App.js file create another h1 element with the following content inside: "Next Avenger:"

// 7c. In the MCUShows component create another button below the "RANDOM AVENGER" button. Set the content/text for the button to the following text: "NEXT AVENGER".

// 7d. Have an Avenger name display in the new h1 element after "Next Avenger: " whenever the NEXT AVENGER button is clicked. Have this set up so that it will start with "Scarlet Witch" when the page loads and every time the NEXT AVENGER button is clicked have it display whichever Avenger name comes next in the "avegners" array. Also, whenever it gets to "Hawkeye", who is the last name in the array, have it start back at "Scarlet Witch" when the button is pressed again.

// 8a. Use the useEffect Hook/Function so that the message "The Next Avenger has been displayed" displays in an alert when the page loads and also when the "NEXT AVENGER" button is pressed, but NOT when the "RANDOM AVENGER" button is pressed. (NOTE: We have not covered this so you will need to look up how the useEffect Hook/Function works.) (HINT: You need to import the useEffect function/hook like you do for useState.)
