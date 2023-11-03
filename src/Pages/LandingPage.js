import React from 'react';
import GridExample from '../Components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Slide from '../Components/Carousel';
import MyForm from '../Components/ContactForm';
import { Link } from 'react-router-dom';
function LandingPage() {
    const Welcome = () =>{
        alert('Working!!')
    }
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={6}>
            <h1>Welcome to Karakoram Dev</h1>
            <p>Karakorum Dev is a web development agency that creates custom, visually appealing web applications to meet the unique needs and goals of businesses. Our experienced team delivers tailored solutions that exceed expectations. Contact us to learn more.</p>
            <Link to="services">
            <button className="btn btn-secondary" >Learn More</button>
            </Link>
            <button className="btn btn-secondary" onClick={Welcome} >Learn More</button>
          </Col>
          <Col className='' sm={6} >
            <img src="https://picsum.photos/600/400" alt="placeholder" />
          </Col>
        </Row>
        <Row>
            <Col sm={6}>
            <h2>Services We Offer</h2>
            </Col>
            
        </Row>
       
    
        <Row>
            <Col sm={12}> 
                <GridExample/>
            </Col>
        </Row>

        <Row>
            <Col>
                <Slide/>
            </Col>
        </Row>

        
        <Row>
            <Col><h2>For more details fill out the following Form</h2></Col>
        </Row>

        <Row>
            <Col><MyForm/></Col>
        </Row>
      </Container>

      
    </div>
  );
}

export default LandingPage;
