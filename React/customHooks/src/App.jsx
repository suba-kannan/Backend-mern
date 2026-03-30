import React from 'react'
import useFetchapi from './hooks/useFetchapi';

const App = () => {

  const { datasave } = useFetchapi("https://dummyjson.com/users?limit=4");
  console.log("product", datasave);


  return (
    <>
      <div className='bg-green-500 gap-5 h-100 p-10 flex justify-center items-center'>
        {datasave.users?.map((item,index)=>(
        <div key={index} className='bg-black text-white flex flex-col gap-5 p-3 rounded h-50 w-50'>
           <h1>{item.firstName}</h1>
           <p>{item.age}</p>
           <button className='bg-white p-1 w-30  rounded text-black'>Buy Now</button>
       </div>

       ))}
    </div>
    </>
  )
}

export default App

//see another example(Custom hooks in form handling) in class git