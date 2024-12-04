import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import tw from "twin.macro";

import ThreeColWithSideImage from "components/features/ThreeColWithSideImage.js";
import ShieldIconImage from "./images/shield-icon.svg";
import SupportIconImage from "./images/support-icon.svg";
import CustomizeIconImage from "./images/customize-icon.svg";
import ReliableIconImage from "./images/reliable-icon.svg";
import FastIconImage from "./images/fast-icon.svg";
import SimpleIconImage from "./images/simple-icon.svg";
import TwoColumnWithFeaturesAndTestimonial from "./components/hero/TwoColumnWithFeaturesAndTestimonial";
import TwoColumnsWithTwoFeaturesAndButtons from "./components/features/TwoColWithTwoFeaturesAndButtons";
import { ReactComponent as AirPlay } from "feather-icons/dist/icons/airplay.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import FiveColumnDark from "./components/footers/FiveColumnDark";
import ThreeColCenteredStatsPrimaryBackground from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import ThreeColSimpleWithImage from "./components/blogs/ThreeColSimpleWithImage";
import ThreeColSlider from "components/cards/ThreeColSlider.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";
import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import GridWithFeaturedPost from "components/blogs/GridWithFeaturedPost";
import SimpleWithSideImage from "components/faqs/SimpleWithSideImage.js";
import TwoColumnWithImage from "components/testimonials/TwoColumnWithImage";
const myCards = [
    {
        imageSrc: ShieldIconImage,
        title: "My Own Title",
        description: "We strictly only deal with vendors that provide top notch security."
    },
    { imageSrc: SupportIconImage, title: "24/7 Support" },
    { imageSrc: CustomizeIconImage, title: "Customizable" },
    { imageSrc: ReliableIconImage, title: "Reliable" },
    { imageSrc: FastIconImage, title: "Fast" },
    { imageSrc: SimpleIconImage, title: "Easy" }
];
const stats = [
    {
        key: "Students",
        value: "500+",
    },
    {
        key: "Staff",
        value: "$100M+",
    },
    {
        key: "Employees",
        value: "150+",
    },
]

const customFeature = [
    {
        Icon: AirPlay,
        title: "Airplay Feature",
        description: "We have the best professional marketing people across the globe just to work with you."
    },
    {
        Icon: MoneyIcon,
        title: "Affordable",
        description: "We promise to offer you the best rate we can - at par with the industry standard."
    }
];
export default () => (
    
    <>
        <TwoColumnWithFeaturesAndTestimonial heading={"Jamia Mohammadia Arabia"}/>
       <ThreeColWithSideImage
           heading={"جامعہ کی خصوصیات"}
           subheading={"خصوصیات"} description={"Features"} cards={myCards} />
        
        <ThreeColCenteredStatsPrimaryBackground heading={"Jamia Counts"} stats={stats}/>
        <TwoColumnWithImage />
        <ProfileThreeColGrid/>
        <TwoColumnsWithTwoFeaturesAndButtons features={customFeature}
            description={"My Custom description for the features of the product."}
            heading={"Student Studying in Madinah"}/>
        <VerticalWithAlternateImageAndText/>
        //
        <ThreeColSimpleWithImage/>
        <GridWithFeaturedPost/>
        <SimpleWithSideImage/>
        <FiveColumnDark institurename={"Jamia"}/>
        
    </>
);
