import React from 'react'
import Foto1 from '../../assets/img2.png'
import Daily1 from '../../assets/Daily1.jpg'
import Daily2 from '../../assets/Daily2.png'
import Daily3 from '../../assets/Daily3.png'
import Daily4 from '../../assets/Daily4.png'
import Daily5 from '../../assets/Daily5.png'

function Daily() {
  return (
    <div>
        <div>
            <div>
                <img className='w-[412px] h-[200px] object-cover lg:m-auto lg:h-[100%] lg:w-[40%]' src={Foto1} alt="" />
            </div>
            <div className='text-center lg:w-[50%] lg:m-auto'>
                <h3 className='text-[1.8em] font-bold mt-3'>Daily Deals</h3>
                <p className='mt-10 mb-20 font-medium'>This October, enjoy big savings every weekday with favourites like hot soup, salads, cookies and more. Available in all stores.</p>
            </div>
        </div>
        <div className='lg:flex lg:flex-row-reverse lg:w-[50%] lg:m-auto'>
            <div className='bg-[#f8f7f5] w-[90%] m-auto p-5 lg:mb-10'>
                <div>
                    <p className='font-bold'>Every Monday - 25% Whole Foods Market Sliced Bread</p>
                    <p className='mt-3 font-medium'>Kick-start the week with 25% off Whole Foods Market white and whole meal sliced bread. </p>
                </div>
                <div className='mt-14'>
                    <p className='font-bold'>Every Tuesday - 25% off G’s Salad Bags</p>
                    <p className='mt-3 font-medium'>Grab 25% off G's rocket, spinach and mixed leaf salad bags. </p>
                </div>
                <div className='mt-14'>
                    <p className='font-bold'>Every Wednesday - 20% off Whole Foods Market Packaged Soups</p>
                    <p className='mt-3 font-medium'>Explore our range of packaged soups with 25% off. A flavour for every mood, all freshly made to meet our high ingredient standards</p>
                </div>
                <div className='mt-14'>
                    <p className='font-bold'>Every Thursday - 25% Whole Foods Market 4 pack Brown Butter Cookies</p>
                    <p className='mt-3 font-medium'>Treat yourself on Thursdays with 25% off our 4 pack Brown Butter Cookies</p>
                </div>
                <div className='mt-14'>
                    <p className='font-bold'>Every Friday - 25% off Farmison & Co Mince Beef</p>
                    <p className='mt-3 font-medium'>Enjoy 25% off our grass-fed, free-range mince beef from Farmison & Co</p>
                </div>
                <div className='mt-14 mb-10'>
                    <p className='mt-3 font-medium'>*Valid 02/10–31/12/24 only on the specific day of the week stated for the applicable product...</p>
                </div>
            </div>

            <div className='lg:w-[40%]'>
                <img className='w-[250px] h-[170px] m-auto object-cover lg:w-[100px] lg:h-[120px] ' src={Daily1} alt="" />
                <img className='w-[250px] h-[170px] m-auto object-cover lg:w-[100px] lg:h-[120px] ' src={Daily2} alt="" />
                <img className='w-[250px] h-[170px] m-auto object-cover lg:w-[100px] lg:h-[120px] ' src={Daily3} alt="" />
                <img className='w-[250px] h-[170px] m-auto object-cover lg:w-[100px] lg:h-[120px] ' src={Daily4} alt="" />
                <img className='w-[250px] h-[170px] m-auto object-cover lg:w-[100px] lg:h-[120px] ' src={Daily5} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Daily