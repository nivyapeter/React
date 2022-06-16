import React from 'react'

function Home() {
  return (
    <div className="text-center m-auto grid place-items-center mt-44 text-4xl font-bold ">
        <div className="flex flex-row items-center justify-between gap-5">
       <h1>Hello Friend!</h1>
       <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="60px" />
       </div>
        <p>Welcome</p>
        {/* <h3>
“Make it work, make it right, make it fast.” – Kent Beck</h3> */}
    </div>
  )
}

export default Home