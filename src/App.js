import React from "react";

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
//we can put components like below instead of above code.
import {Cards,Chart,CountryPicker,Footer} from './components';
import styles from './App.module.css';
import { fetchData } from "./api";

import coronaImage from './images/image.png';

class App extends React.Component{

  state = {
    data: {},
    country: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
    // console.log(data);
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country: country});
    // console.log(fetchedData);
  }
  render(){
    const {data, country} = this.state;
    return(
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="COVID-19" />
        <h3 className={styles.title}>TRACKER</h3>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <Footer/>
      </div>
    )
  }
}

export default App;