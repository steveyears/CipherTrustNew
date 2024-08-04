"use client";

import Layout from "@/components/Layout";
import GettingStarted from "./GettingStarted";
import Faq from "./Faq";
import Help from "./Help";

const HowToUsePage = () => {
    return (
        <Layout>
            <GettingStarted />
            <Faq />
            <Help />
        </Layout>
    );
};

export default HowToUsePage;
