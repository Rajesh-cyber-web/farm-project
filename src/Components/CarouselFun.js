import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [
  {
    id: 1,
    altText: 'Organic & Natural Produce Delivery',
    caption: 'Fresh, fruits, veggies and more delivered to the Hyderabad',
    src:'https://images.alphacoders.com/768/thumb-1920-76811.jpg'
  },
  {
    id: 2,
    altText: 'Organic & Natural Produce Delivery',
    caption: 'Fresh, fruits, veggies and more delivered to the Hyderabad',
    src:'https://i.pinimg.com/originals/59/44/55/594455ac38f0a40230f18d0a126884dd.jpg'
  },
  {
    id: 3,
    altText: 'Organic & Natural Produce Delivery',
    caption: 'Fresh, fruits, veggies and more delivered to the Hyderabad',
    src:'https://images.unsplash.com/photo-1535227798054-e4373ef3795a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
  }
];
const CarouselFun = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
          <img src={item.src} alt={item.altText} caption={item.caption}/>
        <CarouselCaption className="text-white font-weight-bolder h1 shadow-lg p-3 mb-5 rounded" captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <div className="container">
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background:url('http://f.vividscreen.info/soft/8637ac7c4bd02189a883a3d64b8fa685/Organic-Fruit-Gift-Basket-1920x1200.jpg')
             }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  ); 
}
export default CarouselFun;
