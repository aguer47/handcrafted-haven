import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import FeaturedArtisans from '@/components/FeaturedArtisans';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <FeaturedArtisans />
      <CustomerReviews />
      <Footer />
    </div>
  );
}
