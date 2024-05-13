import { SidebarLink } from "./SidebarLink";
import { RiDashboardLine } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdSchool } from "react-icons/md";
import { HiLibrary } from "react-icons/hi";
import { PiStudent } from "react-icons/pi";

const Aside = () => {
  return (
    <aside className="w-[250px] h-screen bg-gray-900 border-r p-4 sticky top-0 flex justify-center">
      <ul className="text-white mt-10">
        <SidebarLink
          to="dashboard"
          text="Dashboard"
          icon={<RiDashboardLine />}
        />
        <SidebarLink to="students" text="Students" icon={<PiStudent />} />
        <SidebarLink to="teachers" text="Teachers" icon={<GiTeacher />} />
        <SidebarLink to="courses" text="Courses" icon={<SiGoogleclassroom />} />
        <SidebarLink to="faculty" text="Faculty" icon={<MdSchool />} />
        <SidebarLink to="library" text="Library" icon={<HiLibrary />} />
      </ul>
    </aside>
  );
}

export default Aside