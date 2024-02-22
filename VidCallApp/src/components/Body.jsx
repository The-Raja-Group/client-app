import Peer from "peerjs";
import React, { useEffect, useRef, useState } from "react";

export default function Body() {
    const [peerId, setPeerId] = useState("");
    const [isCall, setIsCall] = useState(false);
    const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);

    useEffect(() => {
      const peer = new Peer()

      //Event to get peer id when program starts
      peer.on("open", (id) => {
        setPeerId(id);
        console.log("My peer ID is: " + id);
      });

      //Event when a call request is happen
      peer.on("call", (call) => {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        // currentUserVideoRef.current.srcObject = mediaStream;
        // currentUserVideoRef.current.play();

        getUserMedia({ video: true, audio: true }, (mediaStream) => {
          call.answer(mediaStream);
          call.on("stream", function (remoteStream) {
            remoteVideoRef.current.srcObject = remoteStream;
            remoteVideoRef.current.play();
          });
        });
      });

      //To Start Camera when rendered for the first time
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
      });

      peerInstance.current = peer;

    }, [])

    //Handle Call
    const call = (remotePeerId) => {
      console.log(remotePeerId);

      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  
      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        const call = peerInstance.current.call(remotePeerId, mediaStream);

        call.on("stream", (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      });
    };

    return (
      <>
        <div className="p-8 bg-slate-500 text-base-100 min-h-screen">
          <div className="text-4xl text-center font-bold text-base-100">LIVE VIDEO IN PROGRESS</div>
          <div className="video-screens m-8 p-8 flex justify-center flex-wrap gap-2 md:gap-10 lg:gap-20 ">
            <div className="rounded-lg w-full sm:w-auto md:w-1/2 lg:w-1/3 h-80 bg-gray-300 flex items-center justify-center">
              <video className="rounded-lg h-80" ref={currentUserVideoRef}/>
            </div>

            <div className="rounded-lg w-full sm:w-auto md:w-1/2 lg:w-1/3 h-80 bg-gray-300 flex items-center justify-center">
              <video className="rounded-lg h-80" ref={remoteVideoRef}/>
            </div>
          </div>

          <div className="flex justify-center">
            <div className=" bg-white text-xl p-6 w-1/3 rounded-md">
                <p className="text-centerfont-bold mb-2">Make a Call</p>

                <div className="grid grid-cols-2 items-center justify-self-center gap-x-6">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-base-100">What is your name?</span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-ghost border border-base-100 w-full max-w-xs focus:bg-transparent focus:border-black focus:text-black"/>
                    </label>

                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-base-100">Your Call-ID</span>
                      </div>
                      <input readOnly value={peerId} type="text" placeholder="Type here" className="input input-ghost border border-base-100 w-full max-w-xs focus:bg-transparent focus:border-black focus:text-black"/>
                    </label>

                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-base-100">ID To Call</span>
                      </div>
                      <input value={remotePeerIdValue} onChange={(e) => setRemotePeerIdValue(e.target.value)} type="text" placeholder="Type here" className="input input-ghost border border-base-100 w-full max-w-xs focus:bg-transparent focus:border-black focus:text-black"/>
                    </label>
                    
                    <button onClick={() => call(remotePeerIdValue)} className="btn bg-blue-500 text-white border-none max-w-xs self-end hover:bg-blue-700">Call</button>
                </div>
              </div>
          </div>
        </div>
      </>
    );
}