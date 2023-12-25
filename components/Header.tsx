import { FaRegCompass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between p-3 shadow-sm">
      <div className="flex gap-3 items-center">
        <FaRegCompass className="text-blue-600" size={50} />
        <h2 className="text-4xl font-bold text-blue-600 tracking-wider">
          BizFinder
        </h2>
      </div>
      <div className="flex items-center gap-3 ">
        <Link href="https://www.github.com/Sayakdutt/BizFinder" target="_blank">
          <FaGithub size={40} className="hover:bg-slate-300 hover:rounded-lg hidden md:visible"/>
        </Link>
        <Link href="https://www.linkedin.com/in/sayak-dutta-b5b971240/" target="_blank">
          <FaLinkedin  size={40} className="text-blue-700 hover:bg-slate-300 hover:rounded-lg" />
        </Link>
        <Link href="https://twitter.com/Sayakd01" target="_blank">
          <FaSquareXTwitter size={40} className="hover:bg-slate-300 hover:rounded-lg"/>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
