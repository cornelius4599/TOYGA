import Header from './components/Header';
import BannerWithDetails from './components/Banner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <BannerWithDetails />
        <Footer />
      </main>
    </div>
  );
}
