import React, { useReducer } from 'react'
import { Card, Col, Container, FormControl, Row } from 'react-bootstrap'

import { dataReducer, initialData } from '../reducers/dataReducer'



function Home() {

    const [dataState, dispatch] = useReducer(dataReducer, initialData)

    return (
        <Container className='my-5'>
            <Row className='justify-content-center'>
                <Col md={5}>
                    <Card className='shadow'>
                        <Card.Body>
                            <FormControl placeholder='Name' className='my-2' value={dataState.name} onChange={(e) => dispatch({ payload: { ...dataState, name: e.target.value } })} />
                            <FormControl placeholder='age' className='my-2' value={dataState.age} onChange={(e) => dispatch({ payload: { ...dataState, age: e.target.value } })} />
                            <FormControl placeholder='addres' className='my-2' value={dataState.address} onChange={(e) => dispatch({ payload: { ...dataState, address: e.target.value } })} />
                            <hr />
                            <p>Name: {dataState.name}</p>

                            <p>age: {dataState.age}</p>

                            <p>address: {dataState.address}</p>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home