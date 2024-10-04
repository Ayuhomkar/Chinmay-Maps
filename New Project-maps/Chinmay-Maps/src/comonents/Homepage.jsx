import React from 'react'

function Homepage() {
  return (
    <div className='relative w-full h-fit'>

        {/* title */}
        <div className='relative w-[100%] h-fit items-center bg-blue-900'>
        <h1 className='relative w-[100%] h-fit font-medium bg-slate-600 text-center text-[rgb(30,27,75)] text-6xl'> Title </h1>
        </div>

        {/* front div */}
        < div className='relative flex-wrap w-[100%] h-[80vh] bg-yellow-100  flex flex-row items-center  '>

            {/* Left text div */}

            <div className='relative w-[50%] h-full  flex flex-col items-start justify-center pl-36   '>
            
            </div>

            {/* Right map div */}

            <div className='relative w-[50%] h-full  flex flex-col items-start justify-center '>
                       
                    </div>
         
         
         
         </div>
    </div>
  )
}

export default Homepage