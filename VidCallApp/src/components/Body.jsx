import './Body.css'


export default function Body() {
    return (
      <div className="container bg-orange min-h-screen flex flex-col items-center justify-center text-center">
        <div className="top text-4xl m-8">LIVE VIDEO IN PROGRESS</div>
  
        <div className="video-screens m-8 p-16 flex justify-center gap-20 flex-wrap border-2 border-white rounded-md">
          <div className="w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 h-64 bg-blanchedalmond flex items-center justify-center mb-8">Left</div>
          <div className="w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 h-64 bg-blanchedalmond flex items-center justify-center mb-8">Right</div>
        </div>
  
        <div className="channel-connect bg-blue-400 text-2xl w-80 h-32 flex items-center justify-center m-8">
          BOTTOM-CALL
        </div>
        <div className="channel-connect bg-blue-400 text-2xl w-80 h-32 flex items-center justify-center m-8">
          BOTTOM-CONNECT
        </div>
      </div>
    );
  }
  


// export default function Body (){

//     return(
//         <div className="container">
        
//             <div className="top">
//                 <h1>LIVE VIDEO IN PROGRESS</h1>
//             </div>
        
//             <div className="video-screens">
//                 <div>Left</div>
//                 <div>Right</div>
//                 </div>
        
//             <div className="channel-connect">
//                 BOTTOM-CALL
//             </div>
//             <div className="channel-connect">
//                 BOTTOM-CONNECT
//             </div>
        
        
//         </div>
//     )
// }