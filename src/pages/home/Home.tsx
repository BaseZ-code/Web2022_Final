import NavBar from './Navbar';
import HeroSection from './Hero';
import FeaturesSection from './Feature';
import TrendingDestinations from './Trending';
import PromoBanner from './Banner';
import NewsletterSubscription from './Newsletter';

export default function Home() {
	return (
		<div className="min-h-screen bg-[#F8F9FA]">
			<NavBar />
			<HeroSection />
			<FeaturesSection />
			<TrendingDestinations />
			<PromoBanner />
			<NewsletterSubscription />
		</div>
	);
}
