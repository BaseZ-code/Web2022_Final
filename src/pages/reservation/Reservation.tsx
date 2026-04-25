import RoomSelection from './RoomSelection';
import GuestReviews from './GuestReviews';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { ReservationGallery } from '../../components/ReservationGallery/ReservationGallery'
import { ReservationDetails } from '../../components/ReservationDetails/ReservationDetails'
import { ReservationHeader } from '../../components/ReservationHeader/ReservationHeader'
import { ReservationSidePanel } from '../../components/ReservationSidePanel/ReservationSidePanel'
import NavBar from '../home/Navbar';
import Footer from '../../components/Footer';

export default function Reservation() {
    return (
		<div className="flex flex-col min-h-screen">
		  <main className="w-full min-h-[calc(100svh-325px)] bg-[var(--color-page)]" aria-label="Reservation details">
			<NavBar />
			<Breadcrumb />
			<ReservationHeader />
			<ReservationGallery />
			<div className="w-[calc(100%-48px)] grid grid-cols-[minmax(0,1fr)_378px] items-start gap-12 mx-6 my-6 max-lg:grid-cols-1">
			  <ReservationDetails />
			  <ReservationSidePanel />
			</div>
            <div className="px-6 mb-16 space-y-12">
              <RoomSelection />
              <GuestReviews />
            </div>
			<Footer />
		  </main>
		</div>
    );
}
