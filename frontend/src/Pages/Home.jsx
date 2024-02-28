import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomePage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    usernam: "",
    email: "",
    password: "",
  });
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="pl-[280px] mb-10">
      <section>
        <div className="px-2 lg:flex lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="my-10 lg:my-0 lg:px-10">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Welcome to Car4u
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                Choose from our diverse selection of vechiles and embark on you
                adventure today!
              </p>

              <form action="#" method="POST" className="mt-8 max-w-xl">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex w-full max-w-sm items-center space-x-2"></div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_13/2798361/190325-rental-cars-cs-229p.jpg"
              alt="parking vechiles"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full text-center md:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Rent Your Car Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-700">
              Choose from a wide range of vehicles and start your journey with
              us!
            </p>
          </div>
          <form action="#" method="POST" className="mx-auto mt-12 max-w-xl">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter your location"
                />
                <button
                  onClick={() => navigate("/menu")}
                  type="button"
                  className="rounded-md bg-blue-700 text-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
            <a className="h-4 w-4 text-gray-600" />
            <span className="ml-2 text-sm text-gray-600">
              Your data is completely secured with us. We don&apos;t share it
              with anyone.
            </span>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto inline-flex rounded-full bg-gray-200 px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-black">
              Explore Our Fleet
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Choose from a Wide Range of Cars
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Find the perfect car for your journey. We offer a diverse selection
            of vehicles to suit every need and budget.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
          <button onClick={() => navigate("/menu")}>
            <img
              src="https://imgd.aeplcdn.com/600x337/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80"
              alt="Hatchback"
              className="mx-auto w-32 h-32"
            />
            <h3 className="mt-8 text-lg font-semibold">Hatchback</h3>
            <p className="mt-4 text-sm text-gray-700">
              Economical and versatile. Great for city driving.
            </p>
            </button>
          </div>
          <div>
          <button onClick={() => navigate("/menu")}>
            <img
              src="https://imgd.aeplcdn.com/600x337/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80"
              alt="Sedan"
              className="mx-auto w-32 h-32"
            />
            <h3 className="mt-8 text-lg font-semibold">Sedan</h3>
            <p className="mt-4 text-sm text-gray-700">
              Classic and comfortable. Ideal for longer trips.
            </p>
            </button>
          </div>
          <div>
          <button onClick={() => navigate("/menu")}>
            <img
              src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Alcazar-130720212215.jpg"
              alt="SUV"
              className="mx-auto w-32 h-32"
            />
            <h3 className="mt-8 text-lg font-semibold">SUV</h3>
            <p className="mt-4 text-sm text-gray-700">
              Spacious and rugged. Perfect for outdoor adventures.
            </p>
            </button>
          </div>
          <div>
            <button onClick={() => navigate("/menu")}>
            <img
              src="https://imgd.aeplcdn.com/600x337/n/cw/ec/109265/hilux-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"
              alt="Pickup"
              className="mx-auto w-32 h-32"
            />
            <h3 className="mt-8 text-lg font-semibold">Pickup</h3>
            <p className="mt-4 text-sm text-gray-700">
              Versatile and practical. Ideal for hauling cargo.
            </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
