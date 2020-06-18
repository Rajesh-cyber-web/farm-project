import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../contextData/MyContext'
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
      <Button className="btn btn-link bg-white font-weight-bold text-danger" onClick={toggle}>{buttonLabel}Recipes</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>About Us</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
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
        <h3>Dear Farm Boxers,
</h3>
I wanted to take a moment to thank all of our incredible, loyal members. I started Farmbox Direct 6 years ago, and have always had the same goal of working to eradicate the food desert problem America faces. As you may know, Farmbox Direct was the nation’s 1st company to adopt the “Food as Medicine” mindset, and by partnering with a health plan, we have successfully created FarmboxRX. This program delivers produce boxes to those who are suffering from chronic and diet-related illnesses. 
<br/>
Farmbox Direct has always positioned itself as a grocery experience specializing in quality, farm-fresh produce. We will always believe that food is essential to life, and produce is essential to health. During times uncertain as such, Farmbox Direct holds our same core values even closer to heart, and we will continue to work to bring our members colorful foods that support a healthy lifestyle. You can count on us to keep delivering tasty, fresh produce to your families’ homes during these times. 
<br/>
As a world, we have faced much worse, and together, we will get through these times too. 
<br/>
Stay healthy everyone,
<br/>
Ashley Tyrner - Founder- CEO Farmbox Direct FarmboxRx
<br/>
If you are interested in what we have implemented as a company to further protect our customers during COVID-19 please review the following:
Liberty Fruit in Kansas CIty has handled Farmbox Direct's packing for 3 years now, and we pass along a letter from their CEO as to their safety measures.
As the COVID-19 outbreak continues to unfold, Liberty Fruit Company remains committed to providing safe, healthy food for our thousands of partner customers throughout the Midwest as well as a safe work environment for our 250+ employees. As an SQF-audited processing and distribution facility, our standards for food safety and security are the highest in the industry. However, we wanted to let you know about additional actions we are taking relative to COVID-19 and this developing situation.
In addition to updating our pandemic response plan and existing documented procedures, Liberty Fruit has assembled a multidisciplinary team of senior managers to spearhead preparations relative to COVID- 19 and implementation of additional safety measures.
 We have created and distributed (internally) new GMP instructional signage and other communications relative to prevention practices.
Our maintenance team has installed sixteen (16) additional hand sanitizing stations throughout our facility, focusing specifically on common areas and entrances to offices, equipment storage stations and restrooms.
We have hired additional janitorial staff and implemented enhanced SOPs for the cleaning of break area surfaces, restrooms, door handles, jack handles, desktops, etc.
rivers have been given alcohol-based disinfectant wipes for use while making deliveries and for sanitizing truck cabs. They will also be using vinyl gloves while handling product and disposing of them after each delivery.
We have procured several laptop computers and other necessary equipment in the event specific mission-critical functions (e.g. routing, order dispatching) need to be conducted remotely.
We are encouraging any employee who may be feeling ill or believes they may have come into contact with an infected individual to follow CDC guidelines for self-quarantine and to consult with their medical provider.
Until further notice, no outside visitors will be permitted in the warehouse or on loading docks (with the exception of registered contractors/service providers). Any customers or vendor partners will be restricted to front-office areas and the contained check-in/will-call window. All tours, trainings and other activities requiring facility access have been postponed or cancelled.
At this time, we have not been made aware of any supply shortages stemming from the COVID-19 outbreak. Liberty Fruit Company will continue to monitor this and all relevant situations closely and take additional measures as necessary.
On behalf of the team at Liberty Fruit, thank you for your continued partnership. <br/>Sincerely,<br/>
John McClelland<br/>
Chief Executive Officer Liberty Fruit Co., Inc.<br/>
        </ModalBody>
        <ModalFooter>
        <Link to="/">  <Button color="primary" onClick={toggle}>Home Page</Button></Link>
        </ModalFooter>
      </Modal>
    </div>
        </li> 
        <li class="nav-item col-1.5 mr-2"> <Link to="/cart"><Button className="btn btn-link bg-white font-weight-bold text-danger" >({cart.length})<i class='fas fa-shopping-cart'></i></Button></Link></li>
      </ul>
    </div> 
    </div> 
  </nav>
 
  
   </>)
}
export default Header
