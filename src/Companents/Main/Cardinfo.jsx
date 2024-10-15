import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Cardinfo() {
  const location = useLocation();
  const dataRecipe = location.state?.recipeData; 

  if (!dataRecipe) {
    return <div>Recept tapılmadı</div>;
  }

  return (
    <div className='flex-grow '>
        <div>
           <div className='relative '>
                <img className='w-[326px] h-[206px] mt-14 m-auto lg:w-[80%] lg:h-[50%] lg:object-cover lg:mt-20' src={dataRecipe.image} alt={dataRecipe.title} />
            </div>
            <div className='w-[70%] bg- mt-[-20%] mx-5 lg:absolute relative p-6 bg-[#f8f7f5] lg:w-[40%] lg:mt-[-60%] lg:h-[40%] lg:mx-[5%]'>
                <div className='flex gap-1 flex-wrap'>
                    <Link className='underline underline-offset-2 text-[#004e36] font-bold' to={"/"}>Home</Link>
                    <Link className='underline underline-offset-2 text-[#004e36] font-bold' to={"/Recipe"}>/ Recipes</Link>
                    <h2 className='font-medium '>/ {dataRecipe.title}</h2>
                </div>
                <div className='mt-3 '>
                    <h2 className='text-[1.8em] font-bold mt-5 lg:text-[1.5em]' id='corda'>{dataRecipe.title}</h2>
                    <p className='font-normal mt-10'>{dataRecipe.service}</p>
                </div>
            </div> 
        </div>
        <div className='lg:w-[50%] lg:mx-[7%]'>
            <p className='w-[90%] font-medium m-auto mt-7'>{dataRecipe.about}</p>
        </div> 
        <div className='lg:flex lg:mx-auto lg:w-[70%] lg:gap-20'>    
            <div className='bg-[#f8f7f5] w-[90%] m-auto mt-20 p-5'>
                <p className='text-[2.5em] font-bold' id='corda'>Ingredients</p>
                <ul className=''>
                    {dataRecipe.ingredient.map((item, index) => (
                    <li className='mt-5 font-medium' key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='w-[90%] m-auto mt-7 p-3 lg:my-20'>
                <p className='text-[2em] font-bold' id='corda'>Method</p>
                <ul className=''>
                    {dataRecipe.method.map((item, index) => (
                    <div key={index}>
                        <li className='mt-10 font-medium'>{item}</li>
                        {index !== dataRecipe.method.length - 1 && <hr className=' mt-10 bg-black w-[90%] h-[2px] '/>}
                    </div>
                    ))}
                </ul>
            </div>
        </div>        
    </div>
  );
}

export default Cardinfo;