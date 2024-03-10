import hero from "../assets/hero.png";
import btn1 from "../assets/app-store.svg";
import btn2 from "../assets/google-play.svg";
import carBenefits from "../assets/car.png";
import carAbout from "../assets/car01.png";
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdHandshake,
  MdKey,
  MdTrendingUp,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="max-w-[1440px] pt-20 mx-5 sm:mx-32">
        <div className="flex flex-col lg:flex-row items-center justify-start h-full">
          <div className="text-left mt-0">
            <h1 className="text-[42px] font-extrabold">
              Explore the Finest <span className="text-accent">Global</span>{" "}
              Offers
            </h1>
            <p className="text-xl leading-8 max-w-[550px] mb-10">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals.
            </p>
            <div className="mb-10">
              <Link
                to="/catalog"
                className="bg-primary-blue rounded-[10px] p-5 w-full h-16 uppercase font-medium text-white tracking-[2px] text-lg max-w-[220px]"
              >
                See our Catalog
              </Link>
            </div>
            <div className="flex space-x-3 justify-start">
              <button className="bg-primary h-[54px] rounded-[5px] px-4 transition-all duration-300">
                <img src={btn1} width={132} height={36} alt="" />
              </button>
              <button className="bg-primary h-[54px] rounded-[5px] px-4 transition-all duration-300">
                <img src={btn2} width={132} height={36} alt="" />
              </button>
            </div>
          </div>
          <div className="relative w-full h-full max-w-[860px] max-h-[542px]">
            <img src={hero} alt="hero2" className="object-contain" />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] pt-20 mx-5 sm:mx-32">
        <div className="flex gap-8 flex-col lg:flex-row justify-between items-center">
          <div className="flex-1 mb-0 hidden lg:block">
            <img
              src={carAbout}
              width={600}
              height={448}
              className="rounded-[20px] h-[448px]"
              alt="about"
            />
          </div>
          <div className="lg:flex-1 w-full flex flex-col lg:flex-row items-center justify-start h-full ">
            <div className="max-w-[648px] lg:max-w-[400px] lg+:max-w-[517px] w-full lg:text-start">
              <h2 className=" text-[42px]  lg:text-4xl mb-6 font-bold">
                Car Services <span className="text-accent">Simplified</span>
              </h2>
              <p className="mb-[42px] text-xl max-w-[550px] lg:max-w-[400px] lg+:max-w-[517px]">
                Rent, choose, and repair with ease. Our convenient locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </p>
              <div className="flex items-center justify-between mb-12">
                <div className="flex flex-col items-center w-[155px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    <p>100+</p>
                  </div>
                  <div>
                    <p className="uppercase text-[14px] lg+:text-lg font-black">
                      car <br className="xs:hidden" /> types
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[155px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    <p>100+</p>
                  </div>
                  <div>
                    <p className="uppercase text-[14px] lg+:text-lg font-black">
                      rental <br className="xs:hidden" /> outlets
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[155px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    <p>100+</p>
                  </div>
                  <div className="">
                    <p className="uppercase text-[14px] lg+:text-lg font-black">
                      repair <br className="xs:hidden" /> points
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <Link
                  to="/catalog"
                  className="bg-accent rounded-[10px] p-5 w-full h-16 uppercase font-medium text-white tracking-[2px] text-lg max-w-[184px]"
                >
                  See all cars
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 mb-0 block lg:hidden">
            <img
              src={carAbout}
              width={600}
              height={448}
              className="rounded-[20px] h-[448px]"
              alt="about"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 relative max-w-[1440px] py-20  mx-5 sm:mx-32">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-bold text-center">
          Unmatched excellence and satisfaction
        </h2>
        <p className="max-w-[880px] text-[20px] lg:text-[25px] mx-auto text-center mb-2">
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </p>
        <div className="flex justify-center mb-2">
          <img src={carBenefits} width={1060} height={400} alt="" />
        </div>
        <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          <div className="flex flex-col items-center text-center">
            <MdKey className="text-[60px] text-accent mb-4" />
            <h3 className="text-2xl mb-4 font-semibold">
              Rent simply and quickly
            </h3>
            <p className="text-xl sm:w-[530px] xl:w-[330px]">
              We prioritize you need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MdTrendingUp className="text-[60px] text-accent mb-4" />
            <h3 className="text-2xl mb-4 font-semibold">
              Modern & well maintained vehicles
            </h3>
            <p className="text-xl sm:w-[530px] xl:w-[330px]">
              We prioritize you need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MdHandshake className="text-[60px] text-accent mb-4" />
            <h3 className="text-2xl mb-4 font-semibold">
              Prompt and flexible services
            </h3>
            <p className="text-xl sm:w-[530px] xl:w-[330px]">
              We prioritize you need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
