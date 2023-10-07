const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]] shadow-2xl px-10 py-16">
      <div className=" flex w-11 justify-center items-center bg-coral-red rounded-full p-2">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-3 font-bold leading-normal text-3xl">{label}</h3>
      <p className="mt-3 font-palanquin text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
