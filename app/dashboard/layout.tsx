
import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function DashboardLayout({
    children,
    count,
}: Readonly<{
    children: React.ReactNode;
    count: React.ReactNode;
}>){
    return (
        <div className='bg-orange-50 min-h-screen'>
            <Header />
            <div className="flex flex-row items-start"> 
                <Sidebar />
                <main className="flex-1">
                    {children}
                    {count}
                </main>
            </div>
        </div>
    );
}