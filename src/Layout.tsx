import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

const Layout = () => {
  return (
    <>
     <div className="min-h-screen max-h-screen h-screen m-0 px-10 pb-12 pt-8  font-maven-pro">
      <div className="mt-0 pt-0 mb-0 w-full flex justify-end pe-5"><Nav /></div>
        <div className="h-full w-full">
          <div className="border-solid border border-slate-600 h-full p-3.5">
            <div className="w-100 grid md:grid-cols-2 xs:grid-cols-1 h-full">
                  <div className="flex justify-center items-center">
                    <Home />
                  </div>
                  <div className="overflow-hidden">
                    <Outlet />
                  </div>
                </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default Layout