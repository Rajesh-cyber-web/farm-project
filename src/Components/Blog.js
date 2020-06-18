import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom'

import { Card, CardImg, CardText, CardDeck, CardBody} from 'reactstrap';
const Blog = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('https://jsonblob.com/api/8b7e8042-b6c4-11ea-9b69-cdb37131b9ee').
            then(response => response.json()).
            then(json => {
                setDishes([...json])
            })
    }, []);
    return (
        <>
      <div className="Blog container bg-img2">
            <div className="h8 container" >
                <div className="heading text-center" id="head"><i>Healthy Lunch</i></div><hr/><br />
                <div className="row">
                    {dishes.map(({  dish, img, city, state, description }) => (
                     
                       <CardDeck className="col-sm-4 mt-4">
                       <Card className="">
                         <CardImg top width="100%" src={img} height="250px" className="card-img-top img-responsive"  alt="Card image cap" /><hr/>
                         <CardBody>
                         <CardText> 
                         <h5 id="city" style={{ color: 'green' }}><b>{dish}</b></h5>
                         <p id="city" style={{ color: 'green' }}><b>{city}</b></p>
                        
                           <p id="description">{description}</p></CardText>
                         </CardBody>
                       </Card>
                       </CardDeck>
                    ))}
                </div></div>
         </div>
 
        
     </>
    )
}
export default Blog