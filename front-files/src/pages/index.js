import { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { FileTable } from '../components';
import RestClientObj from '../services/RestClient';

const Index = () => {
  
  return <>
            <Row>
                <Col xs={12}>
                    <h1 className='h1 bg-danger text-white text-start ps-2 pe-2'>React Test App</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="mt-2 px-5">
                    <FileTable />
                </Col>
            </Row>
        </>;
}

export default Index;