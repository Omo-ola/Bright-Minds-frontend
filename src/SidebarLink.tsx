import { Link } from "react-router-dom";
import { SidebarLinkProps } from "./types/props";

export function SidebarLink({ to, text, icon }: SidebarLinkProps) {
  return (
    <li className="flex items-center hover:bg-gray-500 transition">
      <Link
        to={to}
        className="flex items-center space-x-2 font-medium my-2 px-8 gap-2"
      >
        <div className="text-2xl">{icon}</div>
        <span className="text-2xl">{text}</span>
      </Link>
    </li>
  );
}
