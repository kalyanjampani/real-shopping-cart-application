import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Rating } from './Rating'
import { CartState } from '../context/Context'


function SingleProduct({prod}) {

    const {state:{cart},dispatch} = CartState()

  return (
    <div className='products'>
        <Card>
            <Card.Img variant="top" src={prod.image} alt={prod.name} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style = {{paddingBottom: 10}}>
                    <span>₹ {prod.price.split(".")[0]}</span>
                    {prod.fastDelivery?(<div>Fast Delivery</div>):(<div>4 Days Delivery</div>)}
                    <Rating rating = {prod.ratings} />
                </Card.Subtitle>
                {cart.some(b=>b.id === prod.id)?
                (<Button variant="danger" onClick={()=>{
                    dispatch({
                        type:"REMOVE-FROM-CART",
                        payload: prod
                    })
                }}>Remove From Cart</Button>):
                (<Button disabled = {prod.inStock===0?true:false} onClick={()=>{
                    dispatch({
                        type:"ADD-TO-CART",
                        payload: prod
                    })
                }}>Add To Cart</Button>)}         
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct