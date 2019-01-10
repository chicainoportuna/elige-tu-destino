import React, { Component } from 'react';


const destinationListener = event => {
    const chosenDestination = event.target.value;
    alert('Tu destino es ' + chosenDestination);
}
class Destiny extends Component {
  render() {
    return (
      <div className="Destiny">
        <label for="city">Choose destination</label>
        <select id="city" onChange = {destinationListener}>
            <option>Buenos Aires</option>
            <option>Sydney</option>
            <option>Praga</option>
            <option>Boston</option>
            <option>Tokio</option>
        </select>
      </div>
    );
  }
}

export default Destiny;