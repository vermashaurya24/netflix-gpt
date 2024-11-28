import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-28 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-red-500 p-3 px-12 text-white text-lg rounded-lg mr-4 bg-opacity-90'>▶️ Play</button>
            <button className='bg-gray-400 p-3 px-10 text-white text-lg rounded-lg bg-opacity-90'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle