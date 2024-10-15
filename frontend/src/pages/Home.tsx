import HeroLanding from "@/components/sections/hero-landing";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import BentoGrid from "@/components/sections/bentogrid";
import Powered from "@/components/sections/powered";
import PreviewLanding from "@/components/sections/preview-landing";
import InfoLanding from "@/components/sections/info-landing";

const Home = () => {
  return (
    <div>
      <HeroLanding />
      <PreviewLanding />
      <Powered />
      <BentoGrid />
      {/* <InfoLanding /> */}
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
