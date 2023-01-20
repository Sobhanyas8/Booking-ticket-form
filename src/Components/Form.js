import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesData: {
        Iran: ["Tehran", "Mashhad", "Shiraz", "Esfahan", "Ahvaz", "Rasht"],
        US: [
          "Los Angeles",
          "Chicago",
          "Houston",
          "San Diego",
          "Dallas",
          "San Jose",
        ],
        Germany: [
          "Berlin",
          "Hamburg",
          "Munich",
          "Cologne",
          "Frankfurt",
          "Stuttgart",
        ],
        Russia: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk", "Samara", "Nizhny Novgorod"],
      },
      selectedCountryCities: [],
    };
    this.selectHandler = this.selectHandler.bind(this);
  }
  selectHandler(event) {
    let selectedCountry = event.target.value;
    if (selectedCountry === '-1') {
      this.setState({
        selectedCountryCities: []
      });
    } else {
      let selectedCountryCities = this.state.countriesData[selectedCountry];
      this.setState({
        selectedCountryCities: selectedCountryCities
      });
    }
    
  }

  render() {
    return (
      <div className="bg-blue-100/60  w-3/5 h-3/5 rounded">
        <form action="/">
          <div className="flex justify-center mt-16 gap-12">
            <input
              type="text"
              placeholder="First Name"
              className="h-10 w-2/4 rounded-md pl-2 ml-8 focus:outline-orange-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="h-10 w-2/4 rounded-md pl-2 mr-8 focus:outline-orange-400"
            />
          </div>
          <div className="flex justify-center mt-8 gap-12">
            <input
              type="text"
              placeholder="Phone Number"
              className="h-10 w-2/4 rounded-md pl-2 ml-8 focus:outline-orange-400"
            />
            <input
              type="Email"
              placeholder="Email"
              className="h-10 w-2/4 rounded-md pl-2 mr-8 focus:outline-orange-400"
            />
          </div>
          <div className="flex justify-center mt-8 gap-12">
            <select
              id="country"
              className="h-10 w-2/4 rounded-md pl-2 ml-8 focus:outline-orange-400"
              onChange={this.selectHandler}
            >
              <option value="-1">Please Choose a Country ... </option>
              <option value="Iran"> Iran </option>
              <option value="US"> US </option>
              <option value="Germany"> Germany </option>
              <option value="Russia"> Russia </option>
            </select>
            <select
              id="iran"
              className="h-10 w-2/4 rounded-md pl-2 mr-8 focus:outline-orange-400"
            >
              {this.state.selectedCountryCities.length ? this.state.selectedCountryCities.map( city => (
                        <option value={city}> {city} </option>
              )) : <option value="-1">Please Choose a City... </option>}
            </select>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-yellow-400 p-2 rounded w-36 text-blue-800 font-medium hover:bg-yellow-300 cursor-pointer ease-in duration-150">
              Book a ticket
            </button>
          </div>
        </form>
      </div>
    );
  }
}
