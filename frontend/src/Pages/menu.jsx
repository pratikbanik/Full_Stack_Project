import { useNavigate } from "react-router-dom"

function Menu() {
  const navigate= useNavigate()
  return (
    <div className="pl-[280px] md-10">
       <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Hatchback"
                      src="https://imgd.aeplcdn.com/600x337/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80"
                      width={650}
                      height={590}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                    />
                  </div>
                  <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                    <a className="text-white" />
                    <a className="text-white" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">Maruti Suzuki Swift</h2>
                <p className="mt-4 font-semibold">Rs 2800</p>
              </div>
              <div className="mb-2 pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  available in:
                </h4>
                <ul className="flex flex-wrap space-x-2">
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Siliguri
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Kolkata
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Delhi
                  </li>
                </ul>
              </div>
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  onClick={() => navigate("/pay")}
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book Now 
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                     onClick={() => navigate("/")}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a size={16} className="mr-3" />
                    <span className="block">Wishlist</span>
                  </button>
                  <div className="relative">
                    <button
                       onClick={() => navigate("/")}
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <a  size={16} className="mr-3" />
                      <span className="block">Share</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">
                The Petrol engine is 1197 cc while the CNG engine is 1197 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Swift has a mileage of 22.38 kmpl to 30.9 km/kg . The Swift is a 5 seater 4 cylinder car and has length of 3845 mm, width of 1735 mm and a wheelbase of 2450.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Sedan"
                      src="https://imgd.aeplcdn.com/600x337/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80"
                      width={650}
                      height={590}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                    />
                  </div>
                  <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                    <a className="text-white" />
                    <a className="text-white" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">Hyundai Verna</h2>
                <p className="mt-4 font-semibold">Rs 3500</p>
              </div>
              <div className="mb-2 pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  available in:
                </h4>
                <ul className="flex flex-wrap space-x-2">
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Siliguri
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Kolkata
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Delhi
                  </li>
                </ul>
              </div>
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  onClick={() => navigate("/pay")}
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book Now 
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                     onClick={() => navigate("/")}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a size={16} className="mr-3" />
                    <span className="block">Wishlist</span>
                  </button>
                  <div className="relative">
                    <button
                       onClick={() => navigate("/")}
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <a  size={16} className="mr-3" />
                      <span className="block">Share</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">
                The all-new Hyundai VERNA has been designed to exude a premium and luxurious appeal. It offers superior legroom and knee room with a focus on enhanced space for 2nd row seat passengers, creating lounge like comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Suv"
                      src="https://imgd.aeplcdn.com/600x337/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80"
                      width={650}
                      height={590}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                    />
                  </div>
                  <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                    <a className="text-white" />
                    <a className="text-white" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">Mahindra Scorpio N</h2>
                <p className="mt-4 font-semibold">Rs 4000</p>
              </div>
              <div className="mb-2 pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  available in:
                </h4>
                <ul className="flex flex-wrap space-x-2">
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Siliguri
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Kolkata
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Delhi
                  </li>
                </ul>
              </div>
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  onClick={() => navigate("/pay")}
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book Now 
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                     onClick={() => navigate("/")}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a size={16} className="mr-3" />
                    <span className="block">Wishlist</span>
                  </button>
                  <div className="relative">
                    <button
                       onClick={() => navigate("/")}
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <a  size={16} className="mr-3" />
                      <span className="block">Share</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">
                Scorpio N has an NCAP rating of 5 stars and comes with 6 airbags. Mahindra Scorpio N has a ground clearance of 187 mm and is available in 7 colours. Users have reported a mileage of 14.67 to 15 kmpl for Scorpio N.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Pickup"
                      src="https://imgd.aeplcdn.com/600x337/n/cw/ec/109265/hilux-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"
                      width={650}
                      height={590}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                    />
                  </div>
                  <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                    <a className="text-white" />
                    <a className="text-white" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">Toyota Hilux</h2>
                <p className="mt-4 font-semibold">Rs 5000</p>
              </div>
              <div className="mb-2 pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  available in:
                </h4>
                <ul className="flex flex-wrap space-x-2">
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Siliguri
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Kolkata
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Delhi
                  </li>
                </ul>
              </div>
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                 onClick={() => navigate("/pay")}
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book Now 
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                     onClick={() => navigate("/")}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a size={16} className="mr-3" />
                    <span className="block">Wishlist</span>
                  </button>
                  <div className="relative">
                    <button
                       onClick={() => navigate("/")}
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <a  size={16} className="mr-3" />
                      <span className="block">Share</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">
                One of the most popular engine options for the Toyota Hilux is the 2.8-liter turbo diesel engine, which is capable of producing up to 204 horsepower and 369 pound-feet of torque. This engine delivers impressive fuel economy and is ideal for towing and hauling heavy loads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Menu;
