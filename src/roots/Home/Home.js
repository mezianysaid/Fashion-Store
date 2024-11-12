import React, { Suspense } from "react";

const HeroSection = React.lazy(() =>
  import("../../components/HeroSection/heroSection")
);
const FeaturedProducts = React.lazy(() =>
  import("../../components/FeatureProducts/featureProducts")
);
const Footer = React.lazy(() => import("../../components/Footer/footer"));

function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <FeaturedProducts />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
