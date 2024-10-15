import React from 'react';
import { Link } from 'react-router-dom';
import Deliv from '../../assets/Deliver.jpg';
import Gift from '../../assets/Gift.jpg';

function Order() {
  return (
    <div>
      <div className='lg:flex lg:gap-3 lg:w-[90%] lg:m-auto lg:mb-20'>
        <div className='p-5 bg-[#f8f7f5] mt-20 lg:mt-24 w-[90%] m-auto h-auto lg:h-[400px] lg:w-[100%]'>
          <div className='flex gap-1 font-semibold'>
            <Link to={"/"} className='underline underline-offset-2 text-[#004e36]'>Home</Link>
            <p> / Online Ordering </p>
          </div>
          <h2 className='text-[2.5em] text-[#004e36] font-semibold mt-5' id='corda'>Online Ordering</h2>
          <p className='text-[1.2em] mt-5 mb-5'>Online ordering is a convenient way to get everything you need from Whole Foods Market. Shop for groceries with Deliveroo and even get gift cards to share with your loved ones.</p>
        </div>
        <div className='mt-3 mb-10'>
          <img className='w-[90%] m-auto h-[200px] mb-3 object-cover lg:w-[319px] lg:mt-20' src={Deliv} alt="Deliveroo logo" />
          <a 
              className="underline underline-offset-4 mx-5 font-bold text-[1.2em] text-[#004e36]" 
              href="https://deliveroo.co.uk/brands/whole-foods-market" 
              target="_blank" 
              rel="noopener noreferrer"
          >
              Order on Deliveroo
          </a>
          <p className='w-[90%] mx-5 mt-2 font-medium lg:text-[1em]'>Choose from hundreds of our favourite products and get them delivered to your door in a flash with Deliveroo.</p>
        </div>
        <div className='mt-14 mb-20'>
          <img className='w-[90%] m-auto h-[200px] mb-3 object-cover lg:mt-9' src={Gift} alt="Gift card image" />
          <a 
              className="underline underline-offset-4 mx-5 font-bold text-[1.2em] text-[#004e36]" 
              href="https://wwws-uk1.givex.com/cws4.0/wfmuk/" 
              target="_blank" 
              rel="noopener noreferrer"
          >
              Gift Cards
          </a>
          <p className='w-[90%] mx-5 mt-2 font-medium lg:text-[1em]'>Our gift cards are the perfect gift for foodies - or even as a little treat for yourself! You can now buy one of our gift cards online and load it up with any amount from £5 to £500.</p>
        </div>
      </div>
    </div>
  )
}

export default Order;
