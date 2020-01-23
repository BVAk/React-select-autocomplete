import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select';

import Selector from './Selector';
import countries from './countries';
const options = [
    {label: "Austria", value: "AT"}, 
    {label: "Azerbaijan", value: "AZ"}, 
    {label: "Bahamas", value: "BS"}, 
    {label: "Bahrain", value: "BH"}, 
    {label: "Israel", value: "IL"}, 
    {label: "Italy", value: "IT"}, 
    {label: "Jamaica", value: "JM"}, 
    {label: "Japan", value: "JP"}, 
    {label: "Jersey", value: "JE"}, 
    {label: "Jordan", value: "JO"}, 
    {label: "Kazakhstan", value: "KZ"}, 
    {label: "Kenya", value: "KE"}, 
    {label: "Kiribati", value: "KI"}, 
    {label: "Korea, Democratic PeopleS Republic of", value: "KP"}, 
    {label: "Korea, Republic of", value: "KR"}, 
    {label: "Kuwait", value: "KW"}, 
    {label: "Kyrgyzstan", value: "KG"}, 
    {label: "Lao PeopleS Democratic Republic", value: "LA"}, 
    {label: "Latvia", value: "LV"}, 
    {label: "Macao", value: "MO"}, 
    {label: "Macedonia, The Former Yugoslav Republic of", value: "MK"}, 
    {label: "Madagascar", value: "MG"}, 
    {label: "Malawi", value: "MW"}, 
    {label: "Malaysia", value: "MY"}, 
    {label: "Maldives", value: "MV"}, 
    {label: "Mali", value: "ML"},
    {label: "Mozambique", value: "MZ"}, 
    {label: "Saint Pierre and Miquelon", value: "PM"}, 
    {label: "Saint Vincent and the Grenadines", value: "VC"}, 
    {label: "Samoa", value: "WS"}, 
    {label: "Singapore", value: "SG"}, 
    {label: "Slovakia", value: "SK"}, 
    {label: "Slovenia", value: "SI"}, 
    {label: "Solomon Islands", value: "SB"}, 
    {label: "Somalia", value: "SO"}, 
    {label: "South Africa", value: "ZA"}, 
    {label: "South Georgia and the South Sandwich Islands", value: "GS"}, 
    {label: "Spain", value: "ES"}, 
    {label: "Sri Lanka", value: "LK"}, 
    {label: "Sudan", value: "SD"}, 
    {label: "Trinidad and Tobago", value: "TT"}, 
    {label: "Tunisia", value: "TN"}, 
    {label: "Turkey", value: "TR"}, 
    {label: "Turkmenistan", value: "TM"}, 
    {label: "Turks and Caicos Islands", value: "TC"}, 
    {label: "Tuvalu", value: "TV"}, 
    {label: "Uganda", value: "UG"}, 
    {label: "Ukraine", value: "UA"}, 
    {label: "United Arab Emirates", value: "AE"}, 
    {label: "United Kingdom", value: "GB"}, 
    {label: "United States", value: "US"}, 
    {label: "United States Minor Outlying Islands", value: "UM"}, 
    {label: "Uruguay", value: "UY"}, 
    {label: "Uzbekistan", value: "UZ"}, 
    {label: "Vanuatu", value: "VU"}, 
    {label: "Venezuela", value: "VE"}, 
    {label: "Viet Nam", value: "VN"}, 
    {label: "Zimbabwe", value: "ZW"}
];


class App extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App">
      <div className="App-Component">
      <div className="App-Component">
        <h1> Done with packages</h1>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      <br></br>
      <h1> Done without packages</h1>
      <Selector items={countries} />
      </div>
     </div>
    </div>
  );
     
    
  }
}

export default App;
