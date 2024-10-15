import React from 'react'
import Prod from '../../assets/product.png'
import { Link } from 'react-router-dom'
import CardFavori from './CardFavori'

function Favourit(arg) {
  const dataFavori = arg.dataFavori
  return (
    <div>
      <div className='w-[90%]  m-auto'>
        <div>
          <img className='object-cover pt-5 w-auto h-auto' src={Prod} alt="" />  
        </div>
        <div className=' text-center '>
          <h2 className='text-[2.5em] text-[#004e36] font-semibold mt-10 w-[90%] m-auto' id='corda'>Even more favourites, at prices you’ll love.</h2>
          <p className='pt-10 font-medium'>This March, we’ll be introducing over 141 staple, UK-favourite brands to our offering across our seven <Link className='underline underline-offset-2 text-[#004e36] font-bold' to={"/Store"}> London stores</Link>. These new products, including Kellogg's Cornflakes, Twinings English Breakfast Tea, Tropicana Orange Juice and more, have all passed our rigorous Quality Food Standards, which prohibit over 230 preservatives, flavours, colours, sweeteners and other ingredients commonly found in food.</p>
          <p className='font-bold mt-10'>Jade Hoai, our director of purchasing and distribution shares with us her comments on the changes: </p>
          <p className='font-medium mt-5'>“We are constantly reviewing our offering at Whole Foods Market to ensure we are providing our customers the best experience possible. We want to ensure we remain a trusted location for shoppers to come and do their weekly shop, knowing that all products in-store have passed our rigorous quality standards. All products will be competitively priced with major retailers, allowing customers to come in-store and shop their favourite, household brands and still leave with a value-led basket of quality products.”</p>
          <p className='font-bold mt-14'>Find a selection of the products hitting Whole Foods Market shelves below.</p>
        </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 mb-20">
            {
              dataFavori?.favourites?.map((item,i) => {
                return (
                  <CardFavori item={item} key={i}/>                
                )
              })
            }
          </section>
      </div>
    </div>
  )
}

export default Favourit