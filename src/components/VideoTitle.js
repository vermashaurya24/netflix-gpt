import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] w-1/3 h-screen aspect-video px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-full'>{overview}</p>
        <div>
            <button className='bg-red-600 hover:bg-red-500 p-3 px-12 text-white text-lg rounded-lg mr-4 bg-opacity-90'>▶️ Play</button>
            <button className='bg-gray-400 hover:bg-gray-500 p-3 px-10 text-white text-lg rounded-lg bg-opacity-90'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;