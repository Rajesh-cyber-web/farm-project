import React from 'react'
import { Container, Row, Col,Card, CardImg, CardText, CardDeck, CardBody} from 'reactstrap';
const Firstcomp = (props) => {
    return (
    <div className=" bg-img">
    <div className="container">
        <container>
            <h1 class="container text-center h font-weight-bold">How It Works</h1> <hr></hr>
            <style>{`.h{font-family:'Times New Roman'}`}</style>
        
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://cw01kivalogic.imgix.net/images/themes/farmboxdirect/events-template.jpg?auto=compress&h=278&fit=fill&bg=FFFFFF"  alt="Card image cap" /><hr/>
        <CardBody>
          <CardText><span className="text-danger">Create your account here</span> choose your box size and schedule. We offer 3 different size boxes. You can get a mixed produce box, all fruit, or all veggies. We allow you to customize your schedule and there are absolutely NO commitments!</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://cw01kivalogic.imgix.net/images/themes/farmboxdirect/signup2.jpg?auto=compress&h=278&fit=fill&bg=FFFFFF" alt="Card image cap" /><hr/>
        <CardBody>
          <CardText>Each week before your delivery you will receive an email letting you know your customized menu has been created. You then are able to log in and make changes to your customized farmbox with 5 substitutions if you do not like something in that weeks farmbox.
</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://cw01kivalogic.imgix.net/images/product_picts/1463612134-farm-box-direct-free-shipping.jpg?auto=compress&h=278&fit=fill&bg=FFFFFF" height="52%" alt="Card image cap" /><hr/>
        <CardBody>
          <CardText>Sit back and relax.We offer free shipping to over 24,000 zip codes and a small shipping fee to all other areas.</CardText>
        </CardBody>
      </Card>
    </CardDeck>
        <br/><br/>
         {/* <Row>
        <Col xs="6" sm="4">
          <div class="row container">
<img class="img-responsive" src="https://cw01kivalogic.imgix.net/images/themes/farmboxdirect/events-template.jpg?auto=compress&h=278&fit=fill&bg=FFFFFF" class="ml-4" height="350px" width="450px" ></img>
</div>
<div class="h5 row container pl-4 ml-2"><span className="text-danger">Create your account here</span> choose your box size and schedule. We offer 3 different size boxes. You can get a mixed produce box, all fruit, or all veggies. We allow you to customize your schedule and there are absolutely NO commitments!</div>
        </Col>
        <Col xs="6" sm="4"><div class="row container">
<img class="img-responsive" src="https://cw01kivalogic.imgix.net/images/themes/farmboxdirect/signup2.jpg?auto=compress&h=278&fit=fill&bg=FFFFFF" class="ml-4" height="350px" width="450px" ></img>
</div>
<div class="h5 row container pl-4 ml-2">Each week before your delivery you will receive an email letting you know your customized menu has been created. You then are able to log in and make changes to your customized farmbox with 5 substitutions if you do not like something in that weeks farmbox.
</div>
        </Col>
        <Col sm="4"><div class="row container">
<img class="img-responsive" src="https://cw01kivalogic.imgix.net/images/product_picts/1463612134-farm-box-direct-free-shipping.jpg?auto=compress&h=278&fit=fill&bg=FFFFFF" class="ml-4" height="350px" width="450px" ></img>
</div>
<div class="h5 row container pl-4 ml-2">Sit back and relax.We offer free shipping to over 24,000 zip codes and a small shipping fee to all other areas.</div>
        </Col>
      </Row><br></br>  */}
        </container></div></div>
)
}

export default Firstcomp
