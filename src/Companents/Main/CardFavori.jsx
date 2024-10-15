import React from 'react'

function CardFavori(props) {
    const dataFavori = props.item; 

    console.log(props)

  return (
    <div>
        <div className="flex flex-col items-center">
           <img src={dataFavori.imag} alt="" />
            <p className="text-[#004E36] text-[1.2em] mx-auto font-semibold text-center mt-4">
                {dataFavori.title}
            </p>
            <p>{dataFavori.size}</p>
        </div>
    </div>
  )
}

export default CardFavori