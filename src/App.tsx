import Home from "./pages/home/Home";
import Reservation from "./pages/reservation/Reservation";

type Page = 'Home' | 'Reservation';

export default function App() {
	const currentPage: Page = 'Home';

	if (currentPage === 'Home') {
		return (
			<Home />
		);
	} else if (currentPage == 'Reservation') {
		return (
			<Reservation />
		);
	}
}
