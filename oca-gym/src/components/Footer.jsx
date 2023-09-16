
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#323333]  w-full flex-col lg:flex-row z-20 px-10 flex justify-between items-center text-gray-100 text-center py-2">
      <div className="flex lg:text-2xl my-2 lg:my-6 gap-2 ">
        <Link
          className="hover:scale-110"
          target="_blank"
          href=""
        >
          {" "}
          <BsInstagram />
        </Link>
        <Link className="hover:scale-110" href="">
          {" "}
          <BsFacebook />
        </Link>
      </div>

      <p className="text-sm">© Ochoa Combat Academy Gym</p>
    </div>
  )
}
export default Footer