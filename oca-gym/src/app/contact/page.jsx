import { FaAddressBook, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex text-offWhite bg-bodyBackground h-auto lg:h-screen py-6 w-full justify-center">
      <div className="w-[90%] lg:h-[80vh] mt-20 lg:mt-36 lg:pl-20 bg-primary rounded-2xl flex flex-col lg:flex-row items-center justify-center py-6">
        <div className="uppercase lg:w-[50%] w-full text-center lg:text-start">
          <h2 className="text-lg my-3 font-semibold lg:text-4xl after:border after:block after:mx-auto lg:after:mx-0 after:max-w-[150px] lg:after:max-w-[250px] after:border-offWhite">
            contact us
          </h2>
          <p>
            <span>
              <FaAddressBook className="inline mr-2" />
            </span>{" "}
            1025 W Bush St.
          </p>
          <p className="my-2 lg:ml-7">lemoore ca. 93245</p>
          <p>
            <span>
              <FaPhoneAlt className="inline mr-2" />
            </span>
            559-123-4567
          </p>
          <p className="lowercase my-2">
            <span>
              <FaMailBulk className="inline mr-2" />
            </span>
            ochoacombat@gmail.com
          </p>

          <div className="mt-10 mx-auto flex items-center justify-center lg:justify-start ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.595781109884!2d-119.79935138827574!3d36.29785669573986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094bf5db2a5e487%3A0x90f9d601b705629e!2s1025%20W%20Bush%20St%2C%20Lemoore%2C%20CA%2093245!5e0!3m2!1sen!2sus!4v1694813677033!5m2!1sen!2sus" width="600" className="w-[80%] h-72 lg:h-96 rounded-sm"></iframe>
          </div>
        </div>

        {/* -----------form section---------------- */}
        <div className="py-3 px-6 w-[90%] lg:w-[40%] mt-8 uppercase">
          <form className="flex flex-col lg:gap-1" action="">
            <label>name</label>
            <input className="rounded-sm" type="text" />
            <label>address</label>
            <input className="rounded-sm" type="address" />
            <label>email</label>
            <input className="rounded-sm" type="email" />
            <label>phone</label>
            <input className="rounded-sm" type="phone" />
            <label htmlFor="">message</label>
            <textarea
              className="rounded-sm resize-none"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="mx-auto px-5 text-[13px] lg:text-base uppercase border border-offWhite bg-offWhite text-primary mt-3 rounded-full hover:text-offWhite hover:bg-primary duration-300">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
