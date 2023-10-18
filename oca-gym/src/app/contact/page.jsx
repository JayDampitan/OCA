import { FaAddressBook, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex text-offWhite bg-bodyBackground h-auto lg:h-auto py-6 w-full justify-center">
      <div className="w-[90%] lg:h-[80vh] mt-20 lg:mt-36  bg-primary rounded-2xl flex flex-col  items-center justify-center py-6">
        <h2 className="text-2xl mb-6 font-semibold lg:text-5xl border-b-2 ">
          contact us
        </h2>

        <div className="flex flex-col lg:flex-row h-[80%] w-full items-center">
          <div className=" lg:w-[50%]  w-full text-center lg:text-center">
            <p className="lg:text-2xl font-semibold">
              <span>
                <FaAddressBook className="inline mr-2" />
              </span>{" "}
              1055 W Bush St.
            </p>
            <p className="lg:text-2xl font-semibold">Lemoore ca. 93245</p>
            <p className="lg:text-2xl font-semibold">
              <span>
                <FaPhoneAlt className="inline mr-2" />
              </span>
              559-309-0266
            </p>
            <p className="lg:text-2xl font-semibold">
              <span>
                <FaMailBulk className="inline mr-2" />
              </span>
              jacob@ochoacombatacademy.com
            </p>
          </div>
          <div className="h-[50vh] lg:w-[40%] lg:h-[70%] mt-8 ">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.595781109884!2d-119.79935138827574!3d36.29785669573986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094bf5db2a5e487%3A0x90f9d601b705629e!2s1025%20W%20Bush%20St%2C%20Lemoore%2C%20CA%2093245!5e0!3m2!1sen!2sus!4v1694813677033!5m2!1sen!2sus"
              width="600"
              className="w-[80%] h-72 lg:h-96 rounded-sm"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3215.5998661301796!2d-119.7968334!3d36.2977576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094bf5db2bb6993%3A0x93073e165e124ee0!2s1055%20W%20Bush%20St%2C%20Lemoore%2C%20CA%2093245!5e0!3m2!1sen!2sus!4v1697643652243!5m2!1sen!2sus"
    
              className="w-[100%] h-full rounded-sm"
            ></iframe>
          </div>
        </div>

        {/* -----------form section---------------- */}
      </div>
    </div>
  );
}
export default Contact;
