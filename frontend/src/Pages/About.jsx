import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "../images/images";


function About() {
  const setting ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll:1
  };
  return (
    <div className="pl-[280px] mb-10 ">
    <div className="my-4">
      <h1 className="text-3xl font-bold">Our Team</h1>
      <p className="mt-2 text-gray-500">
        
      </p>
    </div>
    <div className="w-3/4 m-auto  ">
    <Slider {...setting}>
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src={Images.Bishal}
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Bishal Das</h1>
            <h6 className="text-base text-white">Frontend Developer</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src={Images.Pratik}
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Pratik Banik</h1>
            <h6 className="text-base text-white">Backend Developer</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src={Images.Animesh}
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Animesh Das</h1>
            <h6 className="text-base text-white">Project Analyst</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src={Images.Subhamay}
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Subhamay</h1>
            <h6 className="text-base text-white">Backend Developer</h6>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  </div>
  )
}
export default About;