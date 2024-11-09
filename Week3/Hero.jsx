// import "./Hero.css";
import { Button } from "./components/ui/button";

function Hero() {
  return (
    <section className="p-8 mx-16">
      <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9] ">
        <div className="flex flex-col justify-center p-16 gap-4">
          <span className="inline-block rounded-[9999px] px-2 py-1 text-xs w-fit bg-[#febc26]">
            WEEKLY DISCOUNT
          </span>
          <h1 className="text-6xl font-semibold line">
            Premium Product Online Shop
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <Button className="w-fit " asChild>
            <a to="/shop">Shop Now</a>
          </Button>
          {/* <a
            to="/shop"
            className="py-2 px-4 text-white font-medium bg-black rounded-md inline-block w-fit transition duration-500 ease-in-out hover:text-[#febc26]"
          >
            Shop Now
          </a> */}
        </div>
        <div className="relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
