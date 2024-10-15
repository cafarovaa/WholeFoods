import React from 'react';
import Foto1 from '../../assets/img1.jpg';
import Foto2 from '../../assets/img2.png';
import Foto3 from '../../assets/img3.png';
import Foto4 from '../../assets/img4.png';
import Foto5 from '../../assets/img5.jpg';
import Lett from '../../assets/Lett.jpg';
import Card from './Card'
import { Link } from 'react-router-dom';

function Main( arg ) {
   const data = arg.data

   console.log(arg)

  return (
    <main>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:mt-[20vh]">
        <div className="order-2 lg:order-1 bg-[#f8f7f5] p-[20px] w-full lg:w-[428px] lg:h-[506px] lg:mr-10">
          <h2 className="text-[2.5em] font-semibold" id="corda">Dive into Savings this October</h2>
          <p className="mt-6 font-medium">Explore Autumnal favourites to cosy up with. Shop today, in store and on Deliveroo.*</p>
          <p className="mt-4 font-medium">*terms and conditions apply. See in store for details.</p>
          <div className="flex justify-center items-center py-14">
            <Link to={"/Store"} className="bg-[#004e36] text-white font-semibold p-3 m-5 w-[256px] text-center" href="">Find Your Local Store</Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-[623px] lg:h-[534px]">
          <img className="w-full h-full object-cover" src={Foto1} alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center mt-10 lg:mt-[20vh]">
        <div className="order-2 lg:order-1 bg-[#f8f7f5] p-[20px] w-full lg:w-[428px] lg:h-[406px] lg:mr-10">
          <h2 className="text-[1.8em] font-bold">Save big every weekday this October</h2>
          <p className="mt-6 font-medium">Save on weekday and weekend-ready favourites like soup, salad bags and more available in all stores for October.</p>
          <div className="flex justify-center items-center py-14">
            <Link to={"/Daily"} className="bg-[#004e36] text-white font-semibold p-3 m-5 w-[256px] text-center" href="">See the deals</Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-[623px] lg:h-[534px]">
          <img className="w-full h-full object-cover" src={Foto2} alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center mt-10 lg:mt-[20vh]">
        <div className="order-2 lg:order-1 bg-[#f8f7f5] p-[20px] w-full lg:w-[428px] lg:h-[506px] lg:mr-10">
          <h2 className="text-[1.8em] font-bold">Even more favourites, at prices you'll love.</h2>
          <p className="mt-6 font-medium">
            We've introduced over 141 staple, UK-favourite brands to our offering across our five 
            <Link to={"/Store"} className="underline"> London stores</Link>. These new products, including Kellogg's Cornflakes, Twinings English Breakfast Tea, Tropicana Orange Juice and more, have all passed our rigorous Quality Food Standards, which prohibit over 230 preservatives, flavours, colours, sweeteners and other ingredients commonly found in food.
          </p>
          <div className="flex justify-center items-center py-14">
            <Link to={"/Favourit"} className="bg-[#004e36] text-white font-semibold p-3 m-5 w-[256px] text-center" href="">Explore Now</Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-[623px] lg:h-[534px]">
          <img className="w-full h-full object-cover" src={Foto3} alt="" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:justify-center items-center p-4 lg:p-10 bg-white">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <img 
            src={Foto4} 
            alt="Vegetables in a bag" 
            className="w-full h-auto lg:w-[623px] lg:h-[534px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between mt-10">
          <div>
            <div className='flex'>
              <h2 className="text-3xl font-bold mb- lg:mt-[20vh]">
                Order pizzas, salads and more <br /> favourites.
              </h2>
              <img 
                src={Foto5} 
                alt="Mobile app screenshot" 
                className="w-[90px] h-[120px] lg:hidden object-cover"
              />
            </div>
            <p className="mb-6 mt-10 lg:mt-14">
              Choose from hundreds of our favourite products and get them <br />
              delivered to your door in a flash with Deliveroo.
            </p>
            <a href='https://deliveroo.co.uk/brands/whole-foods-market' target='_blank' className="w-full lg:w-[300px] lg:mt-10 bg-[#004e36] text-white font-semibold py-3 px-4 mb-6">
              Shop now on Deliveroo
            </a>
          </div>
          <div className="flex justify-center md:justify-start">
            <img 
              src={Foto5} 
              alt="Mobile app screenshot" 
              className="hidden lg:inline lg:mt-5 lg:w-48 lg:h-auto"
            />
          </div>
        </div>
      </div>

      <hr className='bg-black my-3 h-[2px] w-[350px] m-7 lg:m-auto lg:mt-20' />
      
      <div>
        <h2 className='text-[1.8em] font-bold p-10 text-center '>Discover Our Latest & <br /> Greatest</h2>
        <p className='text-center p-5 mt-[-40px] font-medium lg:text-center'>
          Check out what's hot right now, including limited-time-only savings, new finds and seasonal <br /> favourites.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          data?.food?.map((item,i) => {
            return (
              <Card item={item} key={i}/>
            )
          })
        }
      </section>
      <div className="relative">
      <a href=""><img src={Lett} alt="" className="md:w-[90%] w-auto h-auto m-auto mb-5 mt-20 md:mb-10 object-cover"/></a>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-[1.2em] md:text-3xl font-bold text-center">Our purpose is to nourish people and the <br /> planet.</p>
      </div>
    </div>

    </main>
  );
}

export default Main;
