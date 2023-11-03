import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

function Card() {
  return (
    <Row>
        <Col sm={3}>
    <div className="card">
      <img src="https://picsum.photos/400/250" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Web development</h5>
        <p className="card-text">We offer a range of web development services, including custom website design and development, and e-commerce solutions. Our team of experts uses cutting-edge technologies to deliver high-quality digital products that meet our clients' needs.</p>
        <Button className="btn btn-secondary">Learn More</Button>
      </div>
    </div>
    </Col>

    <Col sm={3}>
    <div className="card">
      <img src="https://picsum.photos/400/250" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Mobile App development</h5>
        <p className="card-text">Additionally, we offer comprehensive mobile app development services that cater to client's unique business needs. Our experts use the latest technologies to design, develop, and deploy high-quality mobile applications that provide seamless user.</p>
        <Button className="btn btn-secondary">Learn More</Button>
      </div>
    </div>
    </Col>

    <Col sm={3}>
    <div className="card">
      <img src="https://picsum.photos/400/250" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Search Engine Optimization</h5>
        <p className="card-text">Karakorum Dev offers a range of SEO services to help businesses improve their online visibility and drive organic traffic to their website. Our experts use proven strategies to enhance your website's ranking and increase your online presence.</p>
        <Button className="btn btn-secondary">Learn More</Button>
      </div>
    </div>
    </Col>
    <Col sm={3}>
    <div className="card">
      <img src="https://picsum.photos/400/250" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Blockchain Development</h5>
        <p className="card-text">Our experts provide comprehensive blockchain development services businesses looking to adopt blockchain technology. Our team of experts uses modern tools and technologies to design, develop, and deploy blockchain-based solutions.</p>
        <Button className="btn btn-secondary">Learn More</Button>
      </div>
    </div>
    </Col>
    </Row>
  );
}

export default Card;
