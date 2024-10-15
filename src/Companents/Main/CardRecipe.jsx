import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

function CardRecipe({ item }) {
    const dataRecipe = item;
    return (
        <div className='mt-10'>        
            <img className='w-[363px] h-[290px] object-cover m-auto' src={dataRecipe.image} alt={dataRecipe.title} />
            <div className='w-[80%] m-auto lg:mx-16'>
                <h4 className='text-[1.3em] mt-5 font-medium'>{dataRecipe.title}</h4>
                <p className='mt-5'>{dataRecipe.composition}</p>
                <div className='flex gap-2 mt-3 font-bold'>
                    <Link 
                        to="/Cardinfo"
                        state={{ recipeData: dataRecipe }}
                    >
                        Read more
                    </Link>   
                    <GoArrowRight className='my-2' /> 
                </div>  
            </div>        
        </div>
    )
}

export default CardRecipe