"use client";

import Layout from "@/components/Layout";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import HowItWorks from "./HowItWorks";
import Services from "@/components/Services";
import Join from "@/components/Join";
import Testimonial from "@/components/Testimonial";
import OpenSource from "@/components/OpenSource/opensource";

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <HowItWorks />
            <Services />
            <Collaboration />
            <Benefits />
            <OpenSource />
            <Testimonial />
            <Join />
        </Layout>
    );
};

export default HomePage;
