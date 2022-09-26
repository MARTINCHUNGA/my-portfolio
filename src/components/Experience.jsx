import React from 'react'
import css3 from '../Icons/css3.png'
import html from '../Icons/html-5.png'
import java from '../Icons/java.png'
import javascript from '../Icons/javascript.png'
import node from '../Icons/nodejs.png'
import python from '../Icons/python.png'
import reactImage from '../Icons/react.png'
import spring from '../Icons/spring-boot.png'
import tailwind from '../Icons/tailwind.png'

function Experience() {

  const stack = [
             {
                 id : 1,
                 title : "HTML",
                 src : html,
                 style : "shadow-orange-500"
             },
             {
                 id : 2,
                 title : "CSS",
                 src : css3,
                 style : "shadow-blue-500"
              },
              {
                 id : 3,
                 title : "JAVA",
                 src : java,
                 style : "shadow-violet-500"
              },
              {
                id : 4,
                title : "JavaScript",
                src : javascript,
                style : "shadow-yellow-500"
             },
             {
                 id : 5,
                 title : "Node js",
                 src : node,
                 style : "shadow-green-500"
              },
              {
                 id : 6,
                 title : "Python",
                 src : python,
                 style : "shadow-violet-500"
              },
               {
                 id : 7,
                 title : "REACT",
                 src : reactImage,
                 style : "shadow-blue-600"
              },
               {
                 id : 8,
                 title : "Spring Boot",
                 src : spring,
                 style : "shadow-green-500"
              },
               {
                 id : 9,
                 title : "TailWind",
                 src : tailwind,
                 style : "shadow-blue-500"
              },
  ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-green-800 p-2 inline">My Experience</p>
          <p className="py-6">Familiar with the following technologies...!!</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {stack.map(({id,title,src,style}) => (
               <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                   <img src={src} alt="" className="w-20 mx-auto"/>
                   <p className="mt-4"> {title} </p>
             </div>

          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Experience