import React from "react";
import Hero from "./components/Hero";
import Navbar from "@/components/Navbar";
import AboutApp from "@/app/(landing)/components/AboutApp";
import Features from "@/app/(landing)/components/Features";

const Page = () => {

    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutApp/>
            <Features/>
        </>
    );
};

export default Page;