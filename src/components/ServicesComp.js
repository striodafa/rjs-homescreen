import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesComp = () => {
  return (
    <div className='services min-vh-100 d-flex align-items-center' id='services'>
      <Container>
        <Row className='mb-5'>
            <Col>
            <h1 className='text-center fw-bold'>Services</h1>
            <p className='text-center'>Jangan salah sangka. Emas dan perak akan kalah nilainya dengan kesehatan.</p>
            </Col>
        </Row>
        <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center'>
            <Col className='text-center py-5 px-3'>
            <i className="fa-solid fa-suitcase-medical fs-2 mb-4"></i>
            <h5 className='fw-bold'>MEDKIT</h5>
            <p>Jauh lebih sulit untuk membuat orang sehat daripada membuat mereka sakit.</p>
            </Col>
            <Col className='text-center py-5 px-3'>
            <i className="fa-solid fa-notes-medical fs-2 mb-4"></i>
            <h5 className='fw-bold'>HEAL</h5>
            <p>Jauh lebih sulit untuk membuat orang sehat daripada membuat mereka sakit.</p>
            </Col>
            <Col className='text-center py-5 px-3'>
            <i className="fa-solid fa-hospital fs-2 mb-4"></i>
            <h5 className='fw-bold'>THE HOSPITAL FASILITY</h5>
            <p>Jauh lebih sulit untuk membuat orang sehat daripada membuat mereka sakit.</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServicesComp
