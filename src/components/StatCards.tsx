import { HiLink } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import StatCard from "./StatCard";

function StatCards() {
  return (
    <div className="bg-yellow-300 py-10 space-y-5 px-2  md:flex justify-around items-baseline w-full md:py-12">
      <StatCard title={"SHORT URLS CREATED"} data={450}>
        <HiLink className="h-10 w-10 text-blue-500" />
      </StatCard>
      <StatCard title={"USERS"} data={550}>
        <ImUsers className="h-10 w-10 text-green-500" />
      </StatCard>
      <StatCard title={"REFERERS"} data={650}>
        <FaHandsHelping className="h-10 w-10 text-purple-500" />
      </StatCard>
    </div>
  );
}

export default StatCards;
