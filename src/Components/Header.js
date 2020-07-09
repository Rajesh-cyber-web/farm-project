import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../contextData/MyContext'
import Chart from "react-google-charts";
import Signin from './Signin'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Header = (props) => {
 
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [details,setDetails] = useState(null)
  const getUserGeolocationDetails = () => {
fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
.then(response => response.json())
.then(data =>setDetails(data));
  }
  const toggle = () => setModal(!modal);
  const { state: { totalcost, cart ,itemName}} = useContext(MyContext)
    return (<>
 <nav class="navbar fluid-container scrolling-navbar navbar-expand-lg bg-white navbar-dark">
    <a href="#"><img class="navbar-brand" style={{ height: '75px'},{ width: '150px' }} 
    src="http://1.bp.blogspot.com/-ujq8gYoZICY/VbEyddN4qhI/AAAAAAAAPbM/NEuNDA9WAM8/s1600/22.png"></img></a>
    <button class="navbar-toggler bg-danger" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
    </button>

     <div>
<div><Button className="btn btn-link bg-white font-weight-bold text-danger" onClick={getUserGeolocationDetails}>My Location</Button></div>
      <div>{details && <div className="list-group-item">
           Your Current Location : {`${details.city}, ${details.state}, ${details.country_name}(${details.country_code}),Pincode:${details.postal}`}
         </div> }</div></div>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <div class="ml-auto">
    <ul class="navbar-nav">
     <li class="nav-item col-2.5 mr-2" >
  <div>
  <Link to="/about"> <Button className="btn btn-link bg-white font-weight-bold text-danger" > About Us</Button></Link> 
    </div>
        </li>

        <li class="nav-item col-2 mr-2">
          <div>
          <Link to="/Signin"> <Button className="btn btn-link bg-white font-weight-bold text-danger" >{buttonLabel}Signin</Button></Link>
      
    </div>
        </li>
        <li class="nav-item col-2 mr-2">
          <div>
          <Link to="/blog"><Button className="btn btn-link bg-white font-weight-bold text-danger">Blog</Button></Link> 
    </div>
        </li> 
        <li class="nav-item col-3.5 mr-2">
          <div>
      <Button className="btn btn-link bg-white font-weight-bold text-danger" onClick={toggle}>{buttonLabel}Covid-19</Button>
      
      
      
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>About Us</ModalHeader>
        <ModalBody>
  <div class="container" style={{ display: 'flex' }}>
  <Chart
    width={400}
    height={'300px'}
    chartType="BubbleChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['ID', 'ACTIVE CASES', 'TOTAL RECOVERY', 'DEATHS', 'POPULATION'],
      ['CAN', 66, 74, 5676, 3739900],
      ['DEU',644,72, 32452, 8192307],
      ['DNK', 96, 43, 444, 552305],
      ['EGY', 723, 21,4355, 76203],
      ['GBR', 905,89, 677, 6801570],
      ['IRN', 43, 47,3322, 7337148],
      ['IRQ', 643, 83, 12345, 3090763],
      ['ISR', 893, 43, 865, 785600],
      ['USA', 289,87	, 131462, 1028744],
      ['RUS', 336, 77, 25467, 307007000],
      ['IND', 560,90, 2374,1380159707],
    ]}
    options={{
      title:
        'Current Covid-19 Situation in whole World ' +
        'and most effecting Countries list',
      hAxis: { title: 'Deaths' },
      vAxis: { title: 'Daily New Cases' },
      bubble: { textStyle: { fontSize: 13 } },
    }}
  />
        </div>

        </ModalBody>
        <ModalFooter>
        <Link to="/">  <Button color="primary" onClick={toggle}>Home Page</Button></Link>
        </ModalFooter>
      </Modal>
    </div>
        </li> 
        <li class="nav-item col-1.5 mr-2"> <Link to="/viewmore/cart"><Button className="btn btn-link bg-white font-weight-bold text-danger" >({cart.length})<i class='fas fa-shopping-cart'></i></Button></Link></li>
      </ul>
    </div> 
    </div> 
  </nav>
 
  
   </>)
}
export default Header

