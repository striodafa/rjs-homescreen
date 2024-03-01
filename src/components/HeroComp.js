import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className='hero min-vh-100 w-100'  id='home'>
      <Container>
        <Row>
            <Col className='text-center'>
             <h1>HEALTY FOR SAFETY</h1>
             <p className='text-opacity-75 m-100'>
                melayani dengan kualitas terbaik, dokter  & tenaga medis profesional serta fasilitas lengkap memastikan anda mendapatkan perawatan terbaik sesuai kebtuhan anda.
             </p>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
