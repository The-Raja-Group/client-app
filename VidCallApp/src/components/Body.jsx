
export default function Body() {
    return (
      <>
        <div className="p-8 bg-slate-500 text-base-100 min-h-screen">
          <div className="text-4xl text-center font-bold text-base-100">LIVE VIDEO IN PROGRESS</div>
          <div className="video-screens m-8 p-8 flex justify-center flex-wrap gap-2 md:gap-10 lg:gap-20 ">
            <div className="rounded-lg w-full sm:w-auto md:w-1/2 lg:w-1/3 h-80 bg-gray-300 flex items-center justify-center">
              Left
            </div>

            <div className="rounded-lg w-full sm:w-auto md:w-1/2 lg:w-1/3 h-80 bg-gray-300 flex items-center justify-center">
              Right
            </div>
          </div>

          <div className="flex justify-center">
            <div className=" bg-white text-xl p-6 w-1/3 rounded-md">
                <p className="text-centerfont-bold mb-2">Make a Call</p>

                <form className="grid grid-cols-2 items-center justify-self-center gap-x-6">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-base-100">What is your name?</span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-ghost border border-base-100 w-full max-w-xs focus:bg-transparent focus:border-black"/>
                    </label>

                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-base-100">Your Call-ID</span>
                      </div>
                      <input readOnly value={"12345"} type="text" placeholder="Type here" className="input input-ghost border border-base-100 w-full max-w-xs focus:bg-transparent focus:border-black"/>
                    </label>

                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-base-100">ID To Call</span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-ghost border border-base-100 w-full max-w-xs focus:bg-transparent focus:border-black"/>
                    </label>
                    
                    <button className="btn bg-blue-500 text-white border-none max-w-xs self-end hover:bg-blue-700">Call</button>
                </form>
              </div>
          </div>
        </div>
      </>
    );
}