import React from 'react'
import BookShelf from '../Projects/BookShelf.jpg'
import VideoGame from '../Projects/VideoGame.jpg'
import Music from '../Projects/Music.jpg'

function Portfolio() {
  const projects = [
    {
        id : 1,
        src : BookShelf,
        name : "BooK Shelf"
    },
    {
        id : 2,
        src : VideoGame,
        name : "Video Games"
        
        
    },
    {
        id : 3,
        src : Music,
        name : "Music Player"
    },
  ]



  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="w-full max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-green-800">MY PORTFOLIO.</p>
                <p className="py-6">Check out some of my Projects here....!</p>
            </div>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

        {
            projects.map(({id, src,name}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                      <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                         <div className="flex items-center justify-center ">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-green-800">Code</button>
                            <p className="text-green-800 w-full justify-center">{name}</p>
                            <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-green-800">View Project</button>
                    </div>
                </div>
            ))
        }    
        </div>       
    </div>
  )
}

export default Portfolio