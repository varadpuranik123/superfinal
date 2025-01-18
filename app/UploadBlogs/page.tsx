import React from 'react'
import Navbar2 from "../Components/Navbar2";


const page = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
        <Navbar2 />
        <div className="w-full h-full flex flex-col items-center px-5 py-10 gap-8">
            <h1 className="text-3xl font-semibold">Text Translation</h1>
            <div className="w-full max-w-3xl flex gap-4 h-24 items-center">
                <textarea 
                    className="w-full h-24 bg-[#212121] border border-[#333] rounded-lg p-4 text-white/80 focus:outline-none focus:border-white/40 resize-none"
                    placeholder="Enter your blog text here..."
                />
                <div className="flex flex-col gap-4">
                    <select className="w-40 h-10 bg-[#212121] border border-[#333] rounded-md text-white/80 px-2 focus:outline-none focus:border-white/40">
                        <option value="" disabled selected>Select Language</option>
                        <option value="hindi">Hindi</option>
                        <option value="marathi">Marathi</option>
                        <option value="gujarati">Gujarati</option>
                        <option value="tamil">Tamil</option>
                        <option value="kannada">Kannada</option>
                        <option value="telugu">Telugu</option>
                        <option value="bengali">Bengali</option>
                        <option value="malayalam">Malayalam</option>
                        <option value="punjabi">Punjabi</option>
                        <option value="odia">Odia</option>
                    </select>
                    <button className="w-full ai-button-gradient px-6 py-2 h-fit bg-[#212121] hover:bg-[#313131] border border-[#333] rounded-md text-white hover:opacity-80 transition duration-200">
                        Generate
                    </button>
                </div>
            </div>

            <div className="w-full max-w-3xl min-h-[200px] bg-[#212121] border border-[#333] rounded-lg p-6">
                <h2 className="text-xl text-white/80 mb-4">Generated Content</h2>
                <div className="text-white/60">
                    Your generated content will appear here...
                </div>
            </div>
        </div>
    </div>
  )
}

export default page