import React from 'react';

function Card(props) {
  const data = props.item;

  // Alternativ şəkil seçimi
  const imgSrc = data.id === 1 ? 'path/to/alternative-image.png' : data.img;

  return (
    <div className="flex flex-col items-center">
      <img
        className={`w-full h-auto object-cover ${data.id === 1 ? 'hidden sm:block' : ''}`}
        src={imgSrc}
        alt="Image"
      />
      <p className="text-[#004E36] text-[1.2em] mx-auto font-semibold text-center mt-4">
        {data.composition}
      </p>
    </div>
  );
}

export default Card;
