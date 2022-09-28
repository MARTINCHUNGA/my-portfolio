import React from 'react'

function About() {
  return (
    <div name='about' className="w-full h-screen pt-3 bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-green-800 pt-4">
                    ABOUT MARTIN FACT CHUNGA
                </p>
            </div>
            <p className="text-xl mt-20">
                Martin is a fresh graduate from the University of Malawi (formely called Chancellor college). I obtained My 
                Bachelor of Science degree majoring Computer Science in 2021. During my $ years of learning i have been equipped with
                vast amount  of skills like Computer Programming, Computer Networking, Project Management and Database Systems Management.
            </p>
            <br />
            <p className="text-xl">
                My passion for Information Technology started way back when i was in secondary education. I strongly 
                believe that IT has a huge impact on our lives. I see IT being linked to our every aspect of life in near future.. so yeah i want 
                to be part of technological world guys....
            </p>
        </div>
    </div>
  )
}

export default About