import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const NasaCard = () => {
  const [nasaInfo, setnasaInfo] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=gNW3vIQePD9BYex7Oi5tmG3GUC0Tp1UEMFcVeBc4`
      )
      .then(response => {
        console.log('NASA Image Of The Day', response.data);
        setnasaInfo(response.data);
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });
  }, []);

  return (
    <Container style={{ maxWidth: '800px' }}>
      {nasaInfo && (
        <div>
          <Card>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px'
              }}
            >
              <img width='50%' src={nasaInfo.url} alt='Nasa' />
            </div>
            <CardBody>
              <CardTitle>{nasaInfo.title}</CardTitle>
              <CardSubtitle>{nasaInfo.date}</CardSubtitle>
              <CardText>{nasaInfo.explanation}</CardText>
            </CardBody>
          </Card>
        </div>
      )}
    </Container>
  );
};

export default NasaCard;
