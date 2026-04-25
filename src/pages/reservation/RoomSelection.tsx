import { useState } from 'react';
import { rooms } from './roomData';
import RoomRow from './RoomRow';

const TABLE_HEADERS = ['Room Type', 'Sleeps', "Today's Price", 'Options'] as const;

export default function RoomSelection() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedRoom(id);
  };

  return (
    <section className="w-full" aria-labelledby="select-room-heading">
      {/* Section title */}
      <h2
        id="select-room-heading"
        className="text-[16px] font-normal text-[#191C22] leading-[100%] mb-4"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        Select Your Room
      </h2>

      {/* Table card */}
      <div className="rounded-2xl border border-[#E5E7EB] bg-white shadow-sm overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b border-[#E5E7EB] bg-[#F8F9FA]">
              {TABLE_HEADERS.map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-[16px] font-bold text-[#191C22] leading-[100%] align-middle"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {header}
                </th>
              ))}
              {/* Empty header for the Select column */}
              <th className="px-6 py-4" aria-label="Select room" />
            </tr>
          </thead>

          {/* Rows */}
          <tbody className="divide-y divide-[#E5E7EB]">
            {rooms.map((room, index) => (
              <RoomRow
                key={room.id}
                room={room}
                isFirst={index === 0}
                onSelect={handleSelect}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected room feedback (optional UX touch) */}
      {selectedRoom && (
        <p
          className="mt-3 text-[14px] font-semibold text-[#005CBD]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          ✓ Room selected:{' '}
          <span className="font-bold text-[#191C22]">
            {rooms.find((r) => r.id === selectedRoom)?.name}
          </span>
        </p>
      )}
    </section>
  );
}
