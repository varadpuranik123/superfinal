"use client";
import React from 'react'
import Navbar2 from "../Components/Navbar2";


const page = () => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [transcription, setTranscription] = React.useState('');

  return (
    <div>
        <Navbar2 />
        <div className="w-full h-full flex flex-col items-center px-5 py-10 gap-8">
            <h1 className="text-3xl font-semibold text-white/80">Video Transcription</h1>
            
            <div className="w-full max-w-3xl flex flex-col gap-6">
                <div className="w-full flex flex-col gap-4">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#333] rounded-lg cursor-pointer bg-[#212121] hover:bg-[#313131] transition-colors duration-200">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <p className="mb-2 text-sm text-white/80">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-white/60">MP4, WebM, or OGG (MAX. 800MB)</p>
                        </div>
                        <input type="file" className="hidden" accept="video/*" />
                    </label>

                    <button className="w-full ai-button-gradient px-6 py-3 bg-[#212121] hover:bg-[#313131] border border-[#333] rounded-md text-white hover:opacity-80 transition duration-200">
                        Generate Transcription
                    </button>
                </div>

                <div className="w-full min-h-[300px] bg-[#212121] border border-[#333] rounded-lg p-6">
                    <h2 className="text-xl text-white/80 mb-4">Transcribed Content</h2>
                    <div className="text-white/60">
                        {isEditMode ? (
                            <textarea
                                className="w-full h-[200px] bg-transparent border-none text-white/60 focus:outline-none resize-none"
                                placeholder="Your video transcription will appear here..."
                                value={transcription}
                                onChange={(e) => setTranscription(e.target.value)}
                            />
                        ) : (
                            <div className="w-full h-[200px] overflow-auto text-white/60">
                                {transcription || "Your video transcription will appear here..."}
                            </div>
                        )}
                    </div>
                    <button className="w-full ai-button-gradient font-semibold px-6 py-3 bg-[#212121] hover:bg-[#313131] border border-[#333] rounded-md text-white hover:opacity-80 transition duration-200">
                        Process for Translation
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page