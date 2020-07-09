import React, { useContext } from 'react';
import { MyContext } from '../contextData/MyContext'
import { Link } from 'react-router-dom'
import { Progress , Alert, Col,InputGroupAddon,InputGroupText,InputGroup,
     Button, Form, FormGroup, Label, Input,CustomInput ,Card,
     CardText, CardBody, CardLink, CardTitle} from 'reactstrap';
const ThirdPage = (props) => {
        const { state: { totalcost, cart } ,removeUpdate } = useContext(MyContext)
    return (
        <>  <div className="border container">
    <div className="container mt-4">
      <Progress multi className="">
        <Progress animated bar color="primary" value="33"><b>Step:1 SELECT YOUR BOX</b></Progress>
        <Progress animated bar color="success" value="33"><b>Step:2 ACCOUNT INFORMATION</b></Progress>
        <Progress animated bar color="danger" value="34"><b>Step:3 SCHEDULE & PAYMENT</b></Progress>
      </Progress>
    </div>
    <div className="container">
    <div className="row">
        <div className="col-8 mt-2">
      <Alert color="success">
        <h5 className="alert-heading font-weight-bold">Excellent Selection!</h5><hr />
        <p>
        Let's get the rest of your account set up.
        </p>
     </Alert>
     
<div className="container">
<div><h2 className="container"><i class='fas fa-user-alt'></i>Contact & Account Info</h2><hr /></div>
<div className="row">
<div className="row">
<div className="col-8">
<Form>

      <FormGroup row>
      
        <Label for="firstname" sm={4}>Email</Label>
        <Col sm={8}>
          <Input type="text" name="First Name" id="firstname" placeholder="First name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastname" sm={4}>Password</Label>
        <Col sm={8}>
          <Input type="text" name="Last Name" id="lastname" placeholder="Last name" />
        </Col>
      </FormGroup>
      <FormGroup row>
      <Label for="examplePh" sm={4}>Phone Number</Label>
        <Col sm={8}>
          <Input type="number" name="Phonenumber" id="examplePh" placeholder="Phone Number" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={4}>Email</Label>
        <Col sm={8}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={4}>Password</Label>
        <Col sm={8}>
          <Input type="password" name="password" id="examplePassword" placeholder="Create Password" />
        </Col>
      </FormGroup>
     
      <div>
          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Show Password" />
          </div>
      </Form>
</div>  
<div className="col-4">

    <div className="border ml-4">
                    <div className="row">
                        <div className="col-12">
                    <button  className="btn btn-link text-success btn-sm">
                        Description :
                    </button><br/>
                    <button  className="btn btn-link text-success btn-sm">
                        CGST (Rate) : 0.00
                    </button><br/>
                    <button  className="btn btn-link text-success btn-sm">
                        CGST (Amount) : 0.00
                    </button><br/>
                    <button  className="btn btn-link text-success btn-sm">
                        SGST (Amount) : 0.00
                    </button><br/>
                    <button  className="btn btn-link text-success btn-sm">
                        Delivery Charges : 0.00  
                    </button><hr/>
                    </div>
                    <button  className="btn btn-link text-success text-center font-weight-bold container btn-lg">
                        Total :₹{totalcost}
                    </button>
                    </div>
    </div> </div>
</div>
</div>
</div>
<div className="container">
<div><h2 className="container mt-3"><i class='fas fa fa-home'></i> Your Delivery Address</h2><hr /></div>
<div className="row">
   
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i class='fas fa-map-marker-alt'></i></InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Add Your Delivery Address" />
      </InputGroup>
      </div>
</div>
<div className="container">
<div className="row">
  
<Form>
 <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
       <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
</Form>
    </div>
</div>
</div>
<div className="col-4">
<div><h2 className="container">Summary</h2><hr /></div>
{cart.map(({ img,vegtype, Price,itemName },index) => (<>
<div>
      <Card>
        <img width="100%" height="100px" src={img} alt="Card image cap" />
        {/*  */}
        
        <CardBody>
        <div className="row">
        <div className="col-8">
        <CardTitle>{itemName}</CardTitle></div>
        <div className="col-4">
        <CardTitle>{vegtype}</CardTitle></div></div>
          <CardText>₹ .{Price} /kg</CardText>
        </CardBody> 
        <div className="row">
        <div className="col-6">
        <CardLink className="btn text-danger">SEE MENU</CardLink></div>
        <div className="col-6"> <CardLink className="btn text-danger">(Click to re-select)</CardLink></div>
         </div>
         <div className="col"><button onClick={() => removeUpdate(index)} className="btn btn-link text-danger btn-lg">x</button></div>
      </Card>
    </div>
    </>
))}
     </div>
</div>

     <Button className="bg-danger mt-4 mb-4 container font-weight-bold text-center text-white">NEXT STEP-SCHEDULE&PAYMENT INFO</Button>
    </div>
</div>
        </>
    )
}

export default ThirdPage
