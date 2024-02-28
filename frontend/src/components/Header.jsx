import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  return (
    <div className="pl-[270px] py-5">
        <nav className="mx-auto flex max-w-7*1 item-center justify-between px-4 py-2 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <button>
          <a type="button"
            onClick={() => navigate("/home")} 
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
          >
          <a className="mr-4 h-4 w-4" />
            Home
          </a></button>
        </li>
        <li>
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800 ">/</span>
            <button><a type="button" onClick={() => navigate("/")} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              Wishlist
            </a></button>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800 ">/</span>
            <button><a type="button" onClick={() => navigate("/about")} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              About
            </a></button>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800 ">/</span>
            <button><a type="button" onClick={() => navigate("/contact")} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              FeedBack
            </a></button>
          </div>
        </li>
      </ol>
      <div className="inline-flex items-center space-x-4">
                  <button
                    onClick={() => navigate("/signup")}
                    type="button"
                    className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    SignUp
                  </button>
                  <button
                    onClick={() => navigate("/Login")}
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    LogIn
                  </button>
                </div>
    </nav>
    </div>
  )
}

export default Header;
