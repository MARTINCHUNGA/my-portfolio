import React from 'react'

function About() {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-green-800 pt-4">
                    ABOUT MARTIN FACT CHUNGA
                </p>
            </div>
            <p className="text-xl mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Id provident pariatur quisquam, molestiae voluptates blanditiis 
                eum porro repudiandae deleniti numquam praesentium officiis 
                cumque vero magnam, explicabo iste? Blanditiis libero fugiat doloremque,
                 in maxime dicta debitis omnis, doloribus quod atque voluptates 
                 quasi at magni esse. Vero illo tempora quae at eaque.
            </p>
            <br />
            <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo perspiciatis nulla impedit voluptatibus quia quo sit quidem vitae 
                dolore repudiandae animi voluptas quibusdam officia, praesentium fugit, magni rerum beatae. 
                Adipisci voluptas asperiores minima libero illum voluptatum
                 voluptatibus velit maxime iure aut eaque facere, porro perferendis quibusdam placeat sunt quae autem.
            </p>
        </div>
    </div>
  )
}

export default About