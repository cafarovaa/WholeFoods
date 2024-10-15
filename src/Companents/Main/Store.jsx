import React from 'react'
import CardStore from './CardStore'

function Store(arg) {
    const dataStore = arg.dataStore
  return (
    <div>
        <div className='mt-10 p-5 lg:mx-[12%]'>
            <h4 className='font-semibold text-[1.5em]' id='corda'>Find a Whole Foods Market near you</h4>
            <p className='mt-3 font-medium lg:w-[30%]'>Get store hours and directions, view weekly sales, order grocery pickup and more.    </p>
        </div> 
        <hr className='bg-black my-3 h-[1px] w-[320px] m-auto lg:mx-[13.5%]' />
        <div>
            <section >
                {
                dataStore?.store?.map((item,i) => {
                    return (
                    <CardStore item={item} key={i}/>                
                    )
                })
                }
            </section>
        </div>
    </div>
  )
}

export default Store