import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg max-sm:text-[50px] font-bold">
          We provide you
          <span className="text-coral-red"> Super Quality </span>
          Product
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius soluta,
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          A quo dolorum unde laudantium distinctio et modi quis asperiores iusto
          saepe, nesciunt aliquam.
        </p>
        <div className="mt-4">
          <Button label="View Detail" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <img
          src={shoe8}
          alt="shoe8"
          width={550}
          height={500}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
