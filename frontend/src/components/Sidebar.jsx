import { useNavigate } from "react-router-dom"

function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="fixed z-10">
         <aside className="flex  w-[250px] h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
      <a href="#">
        {/* logo */}
      </a>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">analytics</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              onClick={() => navigate("/dashbord")}
            >
            <button><a className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span></button> 
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => navigate("/sales")}
            >
            <button><a className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Sales</span></button>
            </a>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">content</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => navigate("/blog")}
            >
            <button> <a className="h-5 w-5" aria-hidden="true" />
              <span  className="mx-2 text-sm font-medium">Blogs</span></button>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => navigate("/note")}
            >
             <button> <a className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Notifications</span></button>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => navigate("/check")}
            >
            <button>  <a className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Checklists</span></button>
            </a>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => navigate("/setting")}
            >
             <button> <a className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Setting</span></button>
            </a>
          </div>
        </nav>
      </div>
    </aside>

    </div>
  )
}

export default Sidebar;
