import { FaFacebook, FaTwitter } from "react-icons/fa";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { TfiFacebook, TfiInstagram, TfiTwitter } from "react-icons/tfi";

function Footer() {
  return (
    <div className="pt-[70px] pb-[10px] px-8 md:px-[70px]">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-[40%] md:pr-[150px] flex flex-col items-start justify-center gap-4">
          <img src="/logo.png" alt="footer logo" className="h-[40px]" />
          <p className="text-[14px]/[28px] text-[#6F6C90] tracking-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            fugit nam autem magnam maiores, quasi numquam dolor repellat, maxime
            repudiandae, voluptas illum! Itaque enim reprehenderit obcaecati
            aliquid repellendus culpa in.
          </p>
        </div>
        {/* Desktop Sections */}
        <div className="hidden md:flex flex-col gap-8 w-[20%]">
          <h3 className="text-[18px] font-semibold text-[#170F49]">Company</h3>
          <div className="flex flex-col gap-1 text-[14px]/[28px] text-[#6F6C90] tracking-normal">
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Careers</a>
            <a href="#">Culture</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-8 w-[20%]">
          <h3 className="text-[18px] font-semibold text-[#170F49]">
            Contact Us
          </h3>
          <div className="flex flex-col gap-4 text-[14px]/[28px] text-[#6F6C90] tracking-normal">
            <a href="#" className="flex items-center gap-2">
              <HiOutlineEnvelope className="h-4 w-4 mt-1" color="#3A4F39" />
              <span>contact@company.com</span>
            </a>

            <a href="#" className="flex items-center gap-2">
              <HiOutlinePhone color="#3A4F39" className="h-4 w-4 mt-1" />
              (414) 687 - 5892
            </a>
            <a href="#" className="flex items-start gap-2">
              <HiOutlineMapPin color="#3A4F39" className="h-4 w-4 mt-1" />
              794 Mcallister St <br />
              San Francisco, 94102
            </a>
          </div>
        </div>
        {/* Mobile sections */}
        <div className="md:hidden flex justify-between">
          <div className="flex flex-col gap-8">
            <h3 className="text-[18px] font-semibold text-[#170F49]">
              Company
            </h3>
            <div className="flex flex-col gap-1 text-[14px]/[28px] text-[#6F6C90] tracking-normal">
              <a href="#">About</a>
              <a href="#">Contact Us</a>
              <a href="#">Careers</a>
              <a href="#">Culture</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[18px] font-semibold text-[#170F49]">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 text-[14px]/[28px] text-[#6F6C90] tracking-normal">
              <a href="#" className="flex items-center gap-2">
                <HiOutlineEnvelope className="h-4 w-4 mt-1" color="#3A4F39" />
                <span>contact@company.com</span>
              </a>

              <a href="#" className="flex items-center gap-2">
                <HiOutlinePhone color="#3A4F39" className="h-4 w-4 mt-1" />
                (414) 687 - 5892
              </a>
              <a href="#" className="flex items-start gap-2">
                <HiOutlineMapPin color="#3A4F39" className="h-4 w-4 mt-1" />
                794 Mcallister St <br />
                San Francisco, 94102
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-6 w-[20%] mx-auto items-center justify-center">
          <div className="flex gap-10 items-center justify-center text-[##3A4F39]">
            <TfiFacebook className="h-4 w-4" color="#3A4F39" />
            <TfiInstagram className="h-4 w-4" color="#3A4F39" />
            <FaTwitter className="h-4 w-4" color="#3A4F39" />
          </div>
        </div>
      </div>
      <hr className="mt-8 w-[75%] m-auto text-[#D9DBE9]" />
      <p className="text-[14px] text-[#6F6C90] text-center mt-5">
        Copyright © 2022 BRIX Templates
      </p>
    </div>
  );
}

export default Footer;
