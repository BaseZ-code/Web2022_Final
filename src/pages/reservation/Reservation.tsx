import RoomSelection from './RoomSelection';
import GuestReviews from './GuestReviews';

export default function Reservation() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] px-6 py-10 flex flex-col gap-20">
      <RoomSelection />
      <GuestReviews />
    </main>
  );
}
