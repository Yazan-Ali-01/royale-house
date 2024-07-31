import BrowseByCategory from "@/components/categoriesSection/BrowseByCategory";
import FirstSection from "@/components/firstSection/firstSection";
import SecondSection from "@/components/flashSalesSection/SecondSection";
import Footer from "@/components/Footer";
import HighlightSection from "@/components/productHighlightSection/HighlightSection";


export default function Home({ searchParams }) {
  return (
    <div className='space-y-8'>
      <FirstSection />
      <SecondSection searchParams={searchParams} />
      <BrowseByCategory />
      <HighlightSection />
      <Footer />
    </div>
  );
}
