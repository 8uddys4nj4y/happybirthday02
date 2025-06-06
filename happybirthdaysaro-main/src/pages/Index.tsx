
import BirthdayHero from '@/components/BirthdayHero';
import InteractiveCake from '@/components/InteractiveCake';
import PhotoGallery from '@/components/PhotoGallery';
import PersonalMessage from '@/components/PersonalMessage';
import MemoryCorner from '@/components/MemoryCorner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <BirthdayHero />
      <InteractiveCake />
      <PhotoGallery />
      <PersonalMessage />
      <MemoryCorner />
      <Footer />
    </div>
  );
};

export default Index;
