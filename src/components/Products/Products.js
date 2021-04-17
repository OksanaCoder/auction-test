import React from 'react'
import CarItem from '../CarItem/CarItem'
import { Container } from 'react-bootstrap'

const Products = ({ data = [] }) => {
    return (
        <>
            <h2>Products</h2>
            {
                data.length > 0 ? (
                    <Container>
                        {
                            data.map(item => {
                                return (
                                    <CarItem filteredData={[item]} />
                                )
                            })
                        }
                    </Container>

                ) : (<h2>No cars available !</h2>)
            }
        </>
    )
}

export default Products