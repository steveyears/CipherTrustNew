"use client"

import Layout from "@/components/Layout";
import Community from "./Resources";
import Join from "@/components/Join";
import Help from "../GettingStartedPage/Help";

const PricingPage = () => {
    return (
        <Layout>
            <Community />
            <Help />
            <Join />
        </Layout>
    );
};

export default PricingPage;
