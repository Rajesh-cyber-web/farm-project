import React, { useContext } from 'react';
import { MyContext } from '../contextData/MyContext'
import { Link } from 'react-router-dom';
import { Badge} from 'reactstrap';
const SecondPage = () => {
    const { state: { cards,filtercards, price },handleByType,handleAddToCart } = useContext(MyContext)
 return (
        <>
            <div className="bg-img">
                {window.scrollTo(0, 0)}
               <div className="container">
                <div className="row" >
                  
                    <div className="col-8 ml-4">
                        <div className="row">
                            {!cards.length ? (<div>
                                <h2>Products not available..!</h2>
                            </div>) : (
                                    cards.map((card, i) => {
                                        return (
                                            
                                            <div class="cardclass card mt-3 mx-2 my-2 p-3 boder-dark" style={{ width: '20rem' }}>
                                                <div class="ribbon">
                                                    <span class="text-white container font-weight-bold bg-success">{card.vegtype}</span></div>
                                                    <img class="card-img-top h1" height="150px" src={card.img} alt="Card image cap"></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{card.itemName}</h5>
                                                    <hr />
                                                    <div>Ratings : 
                                                    <Badge color="success">{card.rating}</Badge></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-6">
                                                        <h5>Price</h5>
                                                        <p>{card.Price}</p>

                                                    </div>
                                                    <div class="col-xl-6">
                                                <button class="btn btn-danger" onClick={() => handleAddToCart(i,card)}>Add to Cart</button>
                                                {console.log('hi')}
                                                      {/* onClick={() => handleThirdPage(i)} */}
                                                    </div>
                                                </div>
                                                <div class="row"> 



                     
<button type="button" class="btn btn-link text-success font-weight-bold col-6" data-toggle="modal" data-target="#exampleModalCenter">{card.modelone}

</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{card.title}
</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
<div class="col-3"><img src={card.photo1}/><p>4 Apples, Organic (each)</p></div>
<div class="col-3"><img src={card.photo2}/><p>2 Avocado, Organic (each)</p></div>
<div class="col-3"><img src={card.photo3}/><p>2 Navel Orange, Organic (each)</p></div>
<div class="col-3"><img src={card.photo4}/><p>2 Pear, Organic (each)</p></div>
        </div>
        <div class="row">
<div class="col-3"><img src={card.photo5}/><p>3 Nectarine, Organic (each)</p></div>
<div class="col-3"><img src={card.photo6}/><p>3 Green Grapes, Organic (bunch)</p></div>
<div class="col-3"><img src={card.photo7}/><p>3 Plum, Organic (each)</p></div>
<div class="col-3"><img src={card.photo8}/><p>2 Carrots- Rainbow, Organic (bunch)</p></div>
        </div>
      </div>
      <div class="modal-footer">
          <div class="col-8">Menu changes each week and contents may vary
from what is currently displayed for the following week</div>
        <button type="button" class="btn btn-secondary col-2" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>





<button type="button" class="btn btn-link text-success font-weight-bold col-6" data-toggle="modal" data-target="#exampleModalCenter">{card.modeltwo}

</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{card.title}
</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
      <div class="col-8">Menu changes each week and contents may vary
from what is currently displayed for the following week</div>
        <button type="button" class="btn btn-secondary col-2" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>






                                               
                                               
                                                </div>
                                                    
                                        
                                        
                                        
                                        
                                        </div>
                                        )
                                    }))
                            }

                        </div>
                    </div>

                    <div className="col-3 mt-4 mr-2">
                        <div class="border fff">

                    <div className="dropdown">
                                {console.log("comp", price)}
                                <a className="dropdown-item text-center text-white font-weight-bolder bg-danger " data-toggle="collapse" aria-expanded="false" href="#d-down2">Filter by Product Type</a>
                                <ul className="collapse list-unstyled" id="d-down2" >
                                    {filtercards.map((a, i) => {
                                        return (
                                            <li className="list list-item mx-5 my-1 px-2">
                                                <input type="radio" value={a.type} checked={a.check ? "checked" : ""} onChange={(e) => {
                                                    handleByType(e, i)

                                                }}></input><span className="text-danger bg-white h5 font-weight-bold">{a.type}_Item</span>
                                            </li>
                                        )
                                    })}

                                </ul>

</div></div>
                            </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default SecondPage;