import { TbBrandJavascript } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="wrapper px-4 py-14">
      <SectionTitle text="Services" />
      <div className="flex flex-col items-center justify-around gap-10 mt-10 card:flex-row card:w-11/12 card:items-stretch mx-auto">
        <ServiceCard
          icon={<TbBrandJavascript />}
          title="Frontend Development"
          active={true}
          text="when people see the frontend of websites, they form their initial impression. I like to make the greatest first impression possible."
        />
        <ServiceCard
          icon={<FaFigma />}
          title="UI / UX Design"
          text="I love to design beautiful, intuitive, and user-friendly interfaces and experiences, All using tools like Adobe XD and my favourite one Figma"
        />
        <ServiceCard
          icon={<VscServerProcess />}
          title="Backend Development"
          text="I love to build backends for websites and applications. I can build RESTful APIs, GraphQL, and Node.js."
        />
      </div>
    </div>
  );
};
export default Services;
