import React, { useState } from 'react'
import Rgif from '../../assets/Rgif.gif'
import { Link } from 'react-router-dom'
import Break from '../../assets/break.jpg'
import Lunch from '../../assets/lunch.jpg'
import Dinner from '../../assets/dinner.jpg'
import Seasonal from '../../assets/seasonal.jpg'
import CardRecipe from './CardRecipe'

function Recipe(arg) {
  const [cat, setCat] = useState("Dinner")
  const dataRecipe = arg.dataRecipe
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className='relative'>
          <img className='w-full h-full mt-5 lg:mt-0 lg:w-[90%] lg:m-auto lg:object-cover' src={Rgif} alt="" />
        </div>
        <div className='w-[80%] bg-white mt-[-10%] relative z-10 p-6 lg:w-[40%] lg:mt-[-20%] lg:mx-[5%]'>
          <div className='flex gap-1 font-semibold mb-3'>
            <Link to={"/"} className='underline underline-offset-2 text-[#004e36] '>Home</Link>
            <p>/ Recipes</p>
          </div>
          <div className='mt-3'>
            <h2 className='text-[2.3em] font-medium mt-5 lg:text-[4em]' id='corda'>Whole Foods Market Recipes</h2>
            <p className='font-normal mt-10'>Our recipes are for those looking to master the basics, the classics or the I've-never-cooked-this-before-but-really-want-to. We start with nutrient-dense, unprocessed ingredients and seasonal whole foods to turn even the easiest weeknight meal into a form of creative, delicious expression. The kitchen is where we can stop to connect with the here and now, and bring recipes to life through our love of food.</p>
          </div>
        </div>
      </div>
      <div className='lg:mt-10'>
        <div>
          <h3 className='text-[1.6em] w-[70%] text-center m-auto font-bold'>Whatever Makes You Whole.</h3>
        </div>
        <div className='mt-5 lg:flex lg:gap-5 lg:m-auto lg:w-[60%]'>
          <div className='lg:my-14' onClick={() => {
            setCat("Breakfast")
          }} >
            <img className=' w-[363px] h-[200px] object-cover m-auto' src={Break} alt="" />
            <p className='text-[#004E36] underline underline-offset-2 font-semibold text-[1.3em] mx-5 lg:mx-0'>Breakfast</p>
          </div>
          <div className='mt-14' onClick={() => {
            setCat("")
          }} >
            <img className=' w-[363px] h-[200px] object-cover m-auto' src={Lunch} alt="" />
            <p className='text-[#004E36] underline underline-offset-2 font-semibold text-[1.3em] mx-5 lg:mx-0'>Lunch</p>
          </div>
          <div className='mt-14' onClick={() => {
            setCat("Dinner")
          }} >
            <img className=' w-[363px] h-[200px] object-cover m-auto' src={Dinner} alt="" />
            <p className='text-[#004E36] underline underline-offset-2 font-semibold text-[1.3em] mx-5 lg:mx-0'>Dinner</p>
          </div>
          <div className='mt-14' onClick={() => {
            setCat("Seassonal")
          }} >
            <img className=' w-[363px] h-[200px] object-cover m-auto' src={Seasonal} alt="" />
            <p className='text-[#004E36] underline underline-offset-2 font-semibold text-[1.3em] mx-5 lg:mx-0'>Seassonal</p>
          </div>
        </div>
      </div>
      <div className='mt-24 mb-20'>
        <h3 className='text-[1.6em] w-[70%] text-center m-auto font-bold'>Latest Recipes</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:w-[80%] lg:m-auto"  >
          {
            cat == "" ? "Heç bir məhsul tapılmadı"
              : 
              dataRecipe?.recipes
                ?.filter(item => item.category == cat)
                ?.map((item, i) => {
                  return (
                    <CardRecipe item={item} key={i} />
                  )
                })
          }
        </section>
      </div>
    </div>
  )
}

export default Recipe