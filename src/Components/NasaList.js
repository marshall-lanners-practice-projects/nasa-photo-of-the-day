import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "../Components/NasaCard";
import { Container, Row} from 'reactstrap';



export default function NasaList() {
 
    const [nasaImages, setNasaImages] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=gNW3vIQePD9BYex7Oi5tmG3GUC0Tp1UEMFcVeBc4`)
      .then(response => {
        console.log("NASA Image Of The Day", response.data);
        setNasaImages(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
   <Container>
     
        
            {nasas && <NasaCard
          image={nasas.url}
          title={nasas.title}
          date={nasas.date}
          copyright={nasas.copyright}
          explanation={nasas.explanation}
          />}
          
  </Container>
  );
}
