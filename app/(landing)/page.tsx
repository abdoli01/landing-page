import React from "react";
import Hero from "./components/Hero";
import Navbar from "@/components/Navbar";
import AboutApp from "@/app/(landing)/components/AboutApp";

const Page = () => {

    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutApp/>
        </>
    );
};

export default Page;