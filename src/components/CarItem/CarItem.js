import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Route } from 'react-router-dom'

const CarItem = ({ filteredData = [] }) => {
    return (
        <>
            { filteredData.map(item => {
                return (
                    <Card>
                        <Card.Img top width="10%" src={item.img} alt="Card image cap" />
                        <Card.Body>
                            <Card.Title><h1>{item.name}</h1></Card.Title>
                            <Card.Subtitle>Card subtitle</Card.Subtitle>
                            <Card.Text>{item.description}</Card.Text>
                            {/* <Route render={({ history }) => (
                                <Button className="btn btn-info" onClick={() => { history.push(channelName) }}>
                                    Join the event
                                </Button>
                            )} /> */}
                        </Card.Body>
                    </Card>
                )
            })}

        </>
    )
}

export default CarItem