import Home from "./components/Home/Home"

const App = () => {
  return (
    <>
      
      <div className="min-h-screen h-screen m-0 p-10 font-maven-pro">
      <div className="mt-0 pt-0 mb-0 w-full">try</div>
        <div className="h-full">
          <div className="border-solid border border-slate-600 h-full p-3.5">
            <div className="w-100 grid grid-cols-2 h-full">
                  <div className="flex justify-center items-center">
                    <Home />
                  </div>
                  <div>
                    <Home />
                  </div>
                </div>
          </div>
          </div>
      </div>
     
    </>
  )
}

export default App