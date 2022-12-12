import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t
            from-gray-100 to-transparent bottom-0 z-20" />
        <Carousel 
            autoPlay 
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            interval={5000}
            showThumbs={false}>

            <div>
                <img src="/images/slider/slider-1.jpg" alt="" loading="lazy" />
            </div>      
            <div>
                <img src="/images/slider/slider-2.jpg" alt="" loading="lazy" />
            </div>     
            <div>
                <img src="/images/slider/slider-3.jpg" alt="" loading="lazy" />
            </div>      
        </ Carousel>
    </div>
  )
}

export default Banner