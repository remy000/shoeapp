import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offers"
          width={773}
          height={680}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg max-sm:text-[50px] font-bold">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          dolore error nemo facere magnam labore? Corporis, odit libero
          explicabo nihil aut, veritatis repudiandae quasi animi, voluptates
          quae quisquam voluptatum perferendis.
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <Button label="shop now" iconURL={arrowRight} />
          <button
            className="flex justify-center
                  items-center gap-2
                    px-7 py-4 border 
                    font-montserrat text-lg 
                    leading-none bg-white rounded-full text-slate-gray
                  border-slate-gray mt-3"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
