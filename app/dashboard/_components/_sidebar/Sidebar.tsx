import { LuStore, LuUsers, LuUser, LuWheat, LuTruck } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar(){
    return(
        <nav className="w-[10vw] h-[90vh] bg-orange-200 flex flex-col items-center py-20 justify center gap-10">
            <NavItem icon={<LuStore className='text-3xl text-black-500'/>} path="/dashboard" />
            <NavItem icon={<LuTruck className='text-3xl text-black-500'/>} path="/dashboard/providers" />
            <NavItem icon={<LuWheat className='text-3xl text-black-500'/>} path="/dashboard/products" />
            <NavItem icon={<LuUser className='text-3xl text-black-500'/>} path="/dashboard/managers" />
            <NavItem icon={<LuUsers className='text-3xl text-black-500'/>} path="/dashboard/employees" />
        </nav>
    )
}