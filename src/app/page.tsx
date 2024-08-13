
import MainBanner from "@/components/homePage/MainBanner";
import BrowseByRange from "@/components/homePage/BrowseByRange";
import { ProductGrid } from "@/components/homePage/ProductGrid";
const HomePage: React.FC = () => {
  return (
    <div>
      <MainBanner/>
      <BrowseByRange/>
      <ProductGrid/>
    </div>
  );
};

export default HomePage;
