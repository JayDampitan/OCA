import Image from "next/image";
import aboutMain from "../../../assets/aboutMain.jpg";
import Champ from "../../../assets/JacobAndChamp.jpg";
import Ringside from "../../../assets/ringside.jpg";

function About() {
  return (
    <div className="text-center bg-bodyBackground text-offWhite flex items-center flex-col justify-center h-auto w-full ">
      <div className="bg-primary w-full flex-col flex items-center justify-center pt-36 pb-20 lg:py-44">
        <h2 className=" border-b border-offWhite text-offWhite uppercase text-lg lg:text-4xl font-semibold">
          welcome ochoa combat academy
        </h2>
        <p className="max-w-3xl text-sm text-offWhite mt-10 sm:text-xl px-2 leading-6 lg:leading-10">
          {` Welcome to our family-friendly combat gym, where we're dedicated to fostering not only martial arts skills but also strong family bonds. At our gym, we believe that fitness and self-defense should be accessible to everyone, from kids to grandparents, and we've created an inclusive environment to make that possible. Our experienced and certified instructors are passionate about helping families grow together through the discipline and camaraderie of martial arts.`}
        </p>
      </div>

      <div>
        <h2 className="uppercase  text-lg lg:text-5x font-bold mt-10">
          meet our team
        </h2>

        <div className="m-10 flex flex-col items-center justify-center">
          <div className="w-[100%] lg:w-[100%] bg-primary p-2">
            <Image
              src={aboutMain}
              alt="Image of the Ochoa Combat Gym members"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* <div className="w-full flex items-center justify-center flex-col">
        <Image src={Champ} className="w-60 md:w-96 rounded-sm md:rounded-md" />
        <h3 className="my-4 text-2xl px-8 font-bold">
          MEET OUR NEW CHAMPION GABRIEL REYES!!
        </h3>
      </div>

      <div className="my-10 w-[90%] md:w-[50%] space-y-8 flex items-center justify-center flex-col ">
        <h3 className="my-4 text-xl font-bold px-8  border-b-2 py-2 border-primary">
          WATCH HIS FIGHTS HIGHLIGHTS!!
        </h3>
        <div className="relative overflow-hidden pt-[56.25%] w-full h-full">
          <iframe
            className="absolute w-full h-full top-0"
            src="https://www.youtube.com/embed/l3BZnMA9xbQ?si=Vto6P44H8I_sSKfA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div> */}
    </div>
  );
}
export default About;
