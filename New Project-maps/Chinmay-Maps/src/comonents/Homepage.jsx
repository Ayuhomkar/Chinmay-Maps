import React from 'react'

function Homepage() {
  return (
    <div className='relative w-full h-fit'>

      {/* title */}
      <div className='relative w-[100%] h-fit items-center bg-blue-900'>
        <h1 className='relative w-[100%] h-fit font-medium bg-slate-600 text-center  text-6xl text-red-400'> Title </h1>
      </div>

      {/* front div */}
      < div className='relative flex-wrap w-[100%] h-[80vh] bg-yellow-100  flex flex-row items-center  '>

        {/* Left text div */}

        <div className='relative w-[50%] h-full  flex flex-col items-start justify-center bg-red-300  '>

        {/* sign up button */ }
        <div className='relative flex flex-row h-full justify-end items-start '>
          <div
            className="max-w-29 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
          >
            <button class="px-5 py-2 w-full"><a class="" href="">Sign Up/ Login</a></button>
          </div>
        </div>


        </div>

        {/* Right map div */}

        <div className='relative w-[50%] h-full  flex flex-col items-start justify-center '>

        </div>



      </div>
    </div>
  )
}

export default Homepage