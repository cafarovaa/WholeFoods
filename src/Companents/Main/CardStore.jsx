import React from 'react';

const CardStore = ({ item }) => {
  const formattedHours = item.hours.replace("Store Hours", "<strong>Store Hours</strong>");

  const handleNumberClick = () => {
    if (window.confirm('https://www.wholefoodsmarket.co.uk saytını açmaq istəyirsinizmi?')) {
      window.open('https://www.wholefoodsmarket.co.uk', '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <div className="p-5 max-w-4xl mx-auto">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-8">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h4 className="text-[#004E36] underline underline-offset-2 text-xl font-semibold lg:text-left">
            {item.title}
          </h4>
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: formattedHours }} />
          <p className="mt-4">{item.about}</p>
          <button
            className="text-[#004E36] underline underline-offset-2 font-semibold mt-4 cursor-pointer"
            onClick={handleNumberClick}
          >
            {item.number}
          </button>
        </div>
        <iframe
          className="w-full h-72 lg:w-1/2"
          src={item.map}
          title="Store Location"
        />
      </div>
      <hr className='bg-black my-3 h-[1px] mt:5 lg:w-[50%]' />
    </div>
  );
};

export default CardStore;