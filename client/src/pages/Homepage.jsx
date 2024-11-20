import HeroSection from '../components/HeroSection';
import PropertyList from '../components/PropertyList';

const HomePage = () => (
  <div>
    <HeroSection />
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Properties</h2>
      <PropertyList />
    </div>
  </div>
);

export default HomePage;
