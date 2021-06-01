import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.broadwaypizza.com/images/banners/DoorDash-Banner-2020.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://static.wixstatic.com/media/83b956_bf6d21cc5f724e34976c2ecb57ee11a4~mv2_d_3396_1234_s_2.jpg/v1/fill/w_1899,h_579,al_c,q_85,usm_0.66_1.00_0.01/83b956_bf6d21cc5f724e34976c2ecb57ee11a4~mv2_d_3396_1234_s_2.webp',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://static.wixstatic.com/media/83b956_2b6cb98a1cd84da09d28cc6032ad3d72~mv2.jpg/v1/fill/w_1899,h_503,al_c,q_85,usm_0.66_1.00_0.01/83b956_2b6cb98a1cd84da09d28cc6032ad3d72~mv2.webp',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://static.wixstatic.com/media/83b956_c46edf99aa484e409881180f904bfbaf~mv2.jpg/v1/fill/w_1889,h_500,al_c,q_85/83b956_c46edf99aa484e409881180f904bfbaf~mv2.webp',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://static.wixstatic.com/media/83b956_92346988037e42f49910fc9c1f12c910~mv2.jpg/v1/fill/w_1899,h_503,al_c,q_85,usm_0.66_1.00_0.01/83b956_92346988037e42f49910fc9c1f12c910~mv2.webp',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://cdn-images-fishry.azureedge.net/themes/995x356-c2c3ad1-kfc.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://cdn-images-fishry.azureedge.net/themes/995x356-3ee2bca-kfc.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },

];

const Slider = (props) => {
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
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} className="img-fluid" alt={item.altText} width="100%"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
     
    );
  });

  return (
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;
