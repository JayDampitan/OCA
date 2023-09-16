
import Image from 'next/image'
import aboutMain from "../../../assets/aboutMain.jpg"


function About() {
  return (
    <div className="text-center bg-bodyBackground text-offWhite flex items-center flex-col justify-center h-[100%] w-full">
      <div className="bg-primary w-full flex-col flex items-center justify-center py-24 lg:py-44">
        <h2 className="  text-offWhite uppercase text-lg lg:text-4xl font-semibold">
          welcome ochoa combat academy
        </h2>
        <p className="max-w-3xl text-sm text-offWhite mt-10 sm:text-xl px-2 leading-6 lg:leading-10">
         {` Welcome to The Body Shop Health Club. If you like that hometown gym
          atmosphere combined with 24 hour access for members, welcome to our
          club. Family owned and operated, we take great pride in providing an
          alternative to the corporate clubs. Whether you're a beginner or a
          seasoned athlete, our helpful staff is trained to assist you.`}
        </p>
      </div>

      <div>
        <h2 className="uppercase  text-lg lg:text-5x font-bold mt-10">
          meet our team
        </h2>

        <div className="my-10 flex flex-col items-center justify-center">
          <div className="w-[80%] lg:w-[80%] bg-primary p-2">
            <Image
              src={aboutMain}
              width="70%"
              height="70%"
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
