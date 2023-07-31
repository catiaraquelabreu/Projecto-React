import React, { useState } from "react";
import SubHeader from "../Components/Layout/SubHeader/SubHeader";
import HeroSection from "../Components/Layout/Hero/HeroSection/HeroSection";
import MainResultProduct from "../Components/Layout/MainSection/MainResultProduct/MainResultProduct";

function ResultProduct() {
  const titleProp = `alt text api`;
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <div>
      <SubHeader />
      <HeroSection titleContent={titleProp} />
      <MainResultProduct
        selectedMedia={selectedMedia}
        setSelectedMedia={setSelectedMedia}
      />
    </div>
  );
}

export default ResultProduct;
