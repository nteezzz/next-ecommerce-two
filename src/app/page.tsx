import MainBanner from "@/components/homePage/MainBanner";
import BrowseByRange from "@/components/homePage/BrowseByRange";
import { ProductGrid } from "@/components/homePage/ProductGrid";
import InspirationBanner from "@/components/homePage/InspirationBanner";
import ShareBanner from "@/components/homePage/ShareBanner";
const HomePage: React.FC = () => {
  return (
    <div>
      <MainBanner />
      <BrowseByRange />
      <ProductGrid />
      <InspirationBanner />
      {/* <ShareBanner/> */}
    </div>
  );
};

export default HomePage;
