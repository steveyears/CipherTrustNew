"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Hero from "./Hero";
import FeatureSlider from "./FeatureSlider";
import Features from "./Features";

const FeaturesPage = () => {
    return (
        <Layout>
            <Hero />

            <Features />
            <FeatureSlider />
            <Join />
        </Layout>
    );
};

export default FeaturesPage;
