import Link from "next/link";
import mainImage from "../../assets/mainHome.jpg";
import secondHomeImage from "../../assets/secondHome.jpg";
import thirHomeImage from "../../assets/thirdHome.jpg";
import Image from "next/image";
import Champ from "../../assets/JacobAndChamp.jpg";

export default function Home() {
  return (
    <main>
      <div className="w-full h-auto pb-10 bg-bodyBackground text-offWhite">
        {/* ---------------hero main ------------------ */}
        <div className="h-[450px] lg:h-screen relative text-center flex flex-col items-center justify-center w-full  bg-cover text-gray-100 uppercase font-semibold">
          {/* -----------hero image------------- */}
          <div className="absolute w-auto  h-full bg-gradient-to-tr from-black to-gray-900">
            <Image
              className="opacity-50 object-cover h-full"
              alt="Image of a woman boxing"
              src={mainImage}
            />
          </div>
          {/* ----------------------------------Main Heading--------------- */}
          <h2 className=" relative text-xl lg:text-6xl font-bold">
            Welcome to Ochoa combat academy
          </h2>
          <h3>NO CONTRACT REQUIRED</h3>

          <button
            className="relative border uppercase border-primary text-primary py-1 px-3 rounded-full
         mt-6 hover:bg-primary hover:text-white duration-300 lg:text-xl lg:px-5 "
          >
            <Link href="Contact"> start sweating </Link>
          </button>
        </div>

        {/* ------- first hero section ----image with the girl-----------------*/}
        {/* -----------------hero intro ----------- */}
        <div>
          <div className="border-b border-primary pb-10 flex mx-auto flex-col max-w-lg lg:max-w-[30%] items-center justify-center text-center my-20 ">
            <p className="uppercase px-2 font-medium text-lg lg:text-3xl">{`Bond Through Martial Arts: Family-Focused Combat Gym Opens its Doors!`}</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center lg:flex-row mt-20">
            <div className="relative mb-10">
              <div className="absolute w-full h-full bg-primary -translate-x-6 -translate-y-6"></div>
              <Image
                alt="image of a girl and a boy stretching their legs"
                className="relative w-80 sm:w-96 lg:w-[800px] bg-primary hover:-translate-x-3 hover:-translate-y-3 duration-300"
                src={secondHomeImage}
              />
            </div>
            <div className="text-lg lg:text-3xl text-center uppercase font-medium lg:ml-32 max-w-xs lg:max-w-md">
              <h3>{`Build Confidence and Unity: Train Together at Our Family-Friendly Gym!`}</h3>
              <button
                className="border text-[13px] lg:text-base uppercase border-primary text-primary py-1 px-3 rounded-full
         mt-6 hover:bg-primary hover:text-white duration-300"
              >
                <Link href="services">How to join</Link>
              </button>
            </div>
          </div>

          {/* -------------second hero section--image of training---switched------------- */}

          <div className="text-center flex flex-col items-center justify-center lg:flex-row-reverse mt-20">
            <div className="relative mb-10">
              <div className="absolute w-full h-full bg-primary -translate-x-6 -translate-y-6"></div>
              <Image
                alt="image of 3 different flavor smoothies on the table"
                className="relative z-10 w-80 sm:w-96  lg:w-[800px] bg-primary hover:-translate-x-3 hover:-translate-y-3 duration-300"
                src={thirHomeImage}
              />
            </div>
            <div className="text-lg lg:text-3xl text-center uppercase font-medium lg:mr-32 max-w-xs lg:max-w-md">
              <h3>{`From Tots to Teens: Discover the Joy of Combat Training as a Family!`}</h3>
              <p className="font-thin lg:text-lg mt-4"></p>
              <button
                className="border text-[13px] lg:text-base uppercase border-primary text-primary py-1 px-3 rounded-full
         mt-6 hover:bg-primary hover:text-white duration-300"
              >
                <Link href="facility">check out more</Link>
              </button>
            </div>
          </div>

          {/* --------------------Champ Section--------------------- */}

          <div className=" flex flex-col text-center item-center mt-10">
            <h2 className="my-4 text-2xl lg:text-4xl py-10 px-8 font-bold">
              MEET OUR NEW CHAMPION GABRIEL REYES!!
            </h2>
            <div className="w-full flex items-center justify-center flex-col">
              <Image
                src={Champ}
                className="w-60 md:w-96 rounded-sm md:rounded-md"
              />
            </div>

            <div className="my-10 w-[90%] mx-auto md:w-[50%] space-y-8 flex items-center justify-center flex-col ">
              <h3 className="my-4 text-xl font-bold px-8  border-b-2 py-2 border-primary">
                WATCH HIS FIGHT HIGHLIGHTS!!
              </h3>
              <div className="relative pt-[56.25%] w-full h-full">
                <iframe  className="absolute w-full h-full top-0" src="https://www.youtube.com/embed/l3BZnMA9xbQ?si=Ro_OMDH4wosN8-rq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true" mozallowfullscreen webkitallowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
