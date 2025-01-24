import React, { Children, ReactNode } from "react";

export default function Layout({children} : {children: React.ReactNode}){
    return (
        <>
        <h1 className="bg-sky-100 p-20 rounded-xl">Hey i am inside Layout for customer</h1>
        <div>
            {children}
        </div>
        </>
    )
}