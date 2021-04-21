// 1a. Import the MCUShows.css file
import './MCUShows.css';
// 1b. Create a function component using an arrow function expression called MCUShows

const MCUShows = () => {
    // 1c. Inside the MCUShows function/component, use the RETURN keyword with parentheses to have the MCUShows function/component return the following elements inside of a single div: h1, h2, and 4 p (paragraph) elements. Put the following text in each element. (NOTE: Notice the colon and space after each show name)
    return (
            // h1: "Disney+"
            // h2: "MCU Show Release Dates"
            // p element 1: "WandaVision: "
            // p element 2: "The Falcon and the Winter Soldier: "
            // p element 3: "Loki: "
            // p element 4: "Hawkeye: "

            // 3a. Go back to the MCUShows.js file. Using inline styling in React, Set the font (A.K.A. font family) for the h1 to the "Georgia" font. Also, add an underline to the h1 (HINT: Use the Text Decoration property)

            // 4a. Add a class name of "MCUShows" to the the div in the MCUShows component
        <div className='MCUShows'>
            <h1 style={{fontFamily: 'Georgia', textDecoration: 'undeline'}}>Disney+</h1>;
            <h2>MCU Show Release Dates</h2>;
            <p>WandaVision: </p>
            <p>The Falcon and the Winter Soldier: </p>
            <p>Loki: </p>
            <p>Hawkeye: </p>
        </div>

    );
}
// 1d. Add the export line at the bottom of the file
export default MCUShows;
// 2a. Open the App.js file and add the necessary import line at the top of the file that allows the MCUShows component to be used in the App.js file

// 2b. Inside the div in the App component, create an h1 with the following text: "FINAL REACT EXERCISE"

// 2c. Below the h1 pass in a MCUShows component


// 4b. Open the MCUShows.css file and use the "MCUShows" class to set the following styles:
// A 10px solid border with the following hexadecimal color: #121f56
// Width of 500px
// Padding of 10px
// Top and bottom margin of 0 (Zero) and use "auto" for the left and right margin
// Set the background color to the following hexadecimal color: #1d3e8d
// Set the text color to the following RGBA color: (255, 255, 255, 0.9).

// 4c. Using the "MCUShows" class in a descendant selector, set the text align center style to the h1 in the MCUShows component.

// 5a. Below the MCUShows import in the App.js file, create the following variable:
// const releaseDates = {
//  wandaVision: 'Jan 2021',
//  falconWinter: 'Mar 2021',
//  loki: 'June 2021',
//  hawkeye: 'Fall of 2021'
// }

// 5b. Add a prop called "dates" to the MCUShows component that is being passed into the App.js component. Also, set the releaseDates variable as the value that is passed into the "dates" prop

// 5c. Go back to the MCUShows.js file. Plug the values from the dates property, which holds the value of the releaseDates object, in each p element after each appropriate show name. (HINT: The properties created for a component are stored in an object that can be accessed via a parameter in a function component)