import React, { useContext } from 'react';
import Header from './Header';
 import CarouselFun from './CarouselFun';
import { MyContext } from '../contextData/MyContext';
import { Link } from 'react-router-dom';

const MainPage = () => {

    const { state: { organicCombo, organicVeg }, handleByVegtype } = useContext(MyContext)
    return (
        <>
         <div class="bg-img"><br/>
            {window.scrollTo(0, 0)}  
<CarouselFun></CarouselFun>
            <br/>
            <div class="container" >
            <div class="">
            <h2>Organic Combo</h2></div><hr/>
              
                <div class="row">

                    {organicCombo.map(card => {
                        return (
                            <div class="cardclass card  mx-2 my-2 col-md-3 pt-3" style={{ width: '20rem' }}>
                                <div class="ribbon">
                                    <span class="text-white container font-weight-bold bg-success">Organic</span></div>
                                <img class="card-img-top h1" height="150px" src={card.img} alt="Card image cap"></img>
                                <div class="card-body">
                                    <h5 class="card-title">{card.itemName}</h5>
                                    <hr/>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6">
                                        <h5>Cost</h5>
                                        <p>{card.Price}</p>
                                    </div>
                                    <div class="col-xl-6">
                                        <h5>RATING</h5>
4.0<span class="fa fa-star checked"></span>
                                        <span class={`fa fa-star checked`} ></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>

                            </div>
                        )
                    })}


                    <div class=" mx-auto d-flex  align-items-center  ">

                        <Link to="/one"><button class="btn btn-danger" >view More</button></Link>
                        {/* onClick={(e) => handleByVegtype () } */}
                    </div>


                </div>

            </div>

            <br></br>
            <div class=" container"  >
             
                <div class="">
            <h2>Organic Fruit and Vegetables</h2><hr/>
  </div>

                <div class="row">

                    {organicVeg.map(card => {
                        return (
                            <div class="cardclass card mt-3 mx-2 my-2 col-md-3 pt-3" style={{ width: '20rem' }}>
                                <div class="ribbon">
                                    <span class="text-white container font-weight-bold bg-success">Natural</span></div>
                                <img class="card-img-top h1" height="150px" src={card.img} alt="Card image cap"></img>
                                <div class="card-body">
                                    <h5 class="card-title">{card.itemName}</h5>
                                    <hr />
                                </div>
                                <div class="row">
                                    <div class="col-xl-6">
                                        <h5>Cost</h5>
                                        <p>{card.Price}</p>
                                    </div>
                                    <div class="col-xl-6">
                                        <h5>RATING</h5>4.0

                                    </div>
                                </div>

                            </div>
                        )
                    })}


                    <div class=" mx-auto d-flex  align-items-center  ">
                         <Link to="/one"><button class="btn btn-danger">view More</button></Link>
                         {/* onClick={(e) => handleByVegtype () } */}
                    </div>


                </div>

           

            </div>
            <br>
            </br>
            <br></br></div>
        </>
    )
}

export default MainPage
