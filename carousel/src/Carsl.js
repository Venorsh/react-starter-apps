import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

 

let styles = {
    margin: 'auto',
    width: '500px'
  };

  /*   

  Use the react-responsive-carousel package to create the Carousel: 
  https://www.npmjs.com/package/react-responsive-carousel


  */

const Carsl = ({locations}) => {
	return (
		<div style={styles}>
			 Welcome to the Carousel..
       <Carousel>
         {locations.map((location, index) => <div key={index}><img src={location.url} alt={location.name}/><p className="legend">{location.name}</p></div>)}
       </Carousel>
		</div>
	  )
}
export default Carsl;