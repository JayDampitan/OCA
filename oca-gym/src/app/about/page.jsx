
import Image from 'next/image'
import aboutMain from "../../../assets/aboutMain.jpg"


function About() {
  return (
    <div className="text-center bg-bodyBackground text-offWhite flex items-center flex-col justify-center h-[100vh] w-full">
      <div className="bg-primary w-full flex-col flex items-center justify-center py-24 lg:py-44">
        <h2 className="  text-offWhite uppercase text-lg lg:text-4xl font-semibold">
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
              // width="70%"
              // height="70%"
              alt="Image of the Ochoa Combat Gym members"
              className="w-fullz h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default About;
