import React from 'react'
import { Toast, ToastBody, ToastHeader, Spinner ,Row, Col, container} from 'reactstrap';
const Firstcomp1 = (props) => {
    return (
        <div class="container">
          <container>
             <h1 class="container text-center h font-weight-bold mt-4">Organic & Natural Produce Delivery</h1> <hr></hr>
            <style>{`.h {font-family: 'Times New Roman';}`}</style>   <br/><br/>
            <Row> <Col sm="4">
            <Toast className="pl-4 ml-2">
            <ToastHeader icon={<Spinner size="md"/> }> Farmbox Direct Organic</ToastHeader>
            <ToastBody>Farmbox Direct delivers the most delicious fruits and veggies to the entire Continential United States. Our mission is to bring you and your family healthy organic & natural produce, and to support our local farmers and community.</ToastBody>
            <ToastBody>Our menu changes weekly according to what's fresh, local, and in-season. With our service, you get more control of what goes in your box, and you can make up to 5 substitutions in every delivery!</ToastBody>
            <ToastBody>There's never a commitment, and you can customize your schedule months ahead of time. We pride ourselves on our quality and our customer service and will always go above and beyond to make your experience the best possible.</ToastBody>
      </Toast>
      </Col>
      <Col sm="8"><img class="img-responsive" src="http://assets.nydailynews.com/polopoly_fs/1.1954132.1411757957!/img/httpImage/image.jpg_gen/derivatives/article_750/farmboxweb26-2-web.jpg" height="470px" ></img></Col>
      </Row>
      </container>
        </div>
    )
}

export default Firstcomp1