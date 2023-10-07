import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-center flex-col items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-normal lg:max-w-md font-palanquin font-bold">
        Join <span className="text-coral-red">Us</span> Today!!!
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 pt-2 pb-3 pr-3 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe here"
          className="input w-full"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
