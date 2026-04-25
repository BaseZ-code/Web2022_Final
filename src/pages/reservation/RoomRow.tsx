import type { Room } from './roomData';
import Button from '../../components/Button';

// ── Icons ──────────────────────────────────────────────────────────────────

function AdultIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="7" r="4" fill="#6B7280" />
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChildIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="6" r="3.5" fill="#6B7280" />
      <path d="M7 21c0-3 2.239-5 5-5s5 2 5 5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 13l-2 4h10l-2-4" stroke="#6B7280" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#16A34A" strokeWidth="2" />
      <path d="M7.5 12.5l3 3 6-6" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#005CBD" strokeWidth="2" />
      <path d="M12 8v1M12 11v5" stroke="#005CBD" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ── RoomRow ────────────────────────────────────────────────────────────────

interface RoomRowProps {
  room: Room;
  isFirst: boolean;
  onSelect: (id: string) => void;
}

function RoomRow({ room, isFirst, onSelect }: RoomRowProps) {
  const isUrgent = room.selectVariant === 'urgent';

  return (
    <tr className={`group transition-colors duration-150 ${
      isFirst
        ? 'bg-blue-50 hover:bg-blue-100/70'
        : 'bg-white hover:bg-blue-50/40'
    }`}>
      {/* Room Type — left accent border lives here so border-collapse doesn't swallow it */}
      <td className={`px-6 py-5 align-top min-w-[220px] border-l-4 ${
        isFirst ? 'border-[#005CBD]' : 'border-transparent'
      }`}>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span
            className="text-[16px] font-semibold leading-[100%] text-[#191C22]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {room.name}
          </span>
          {room.badge && (
            <span
              className={`inline-block text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-sm leading-tight ${
                room.badge.color === 'red' ? 'bg-[#C0392B]' : room.badge.color === 'blue' ? 'bg-[#005CBD]' : 'bg-green-600'
              }`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {room.badge.label}
            </span>
          )}
        </div>

        <p
          className="text-[14px] font-normal text-[#424753] leading-[140%] mb-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {room.description}
        </p>

        {room.detailsHref && (
          <a
            href={room.detailsHref}
            className="inline-flex items-center gap-1 text-[16px] font-semibold text-[#005CBD] leading-[100%] hover:underline"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <InfoIcon />
            Room details
          </a>
        )}
      </td>

      {/* Sleeps */}
      <td className="px-6 py-5 align-middle">
        <div className="flex items-center gap-1">
          {room.guests.map((type, i) =>
            type === 'child' ? <ChildIcon key={i} /> : <AdultIcon key={i} />
          )}
        </div>
      </td>

      {/* Today's Price */}
      <td className="px-6 py-5 align-middle min-w-[160px]">
        <p
          className="text-[14px] font-normal text-[#424753] line-through leading-[100%] mb-0.5"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          ${room.originalPrice.toLocaleString()}
        </p>
        <p
          className="text-[24px] font-bold text-[#005CBD] leading-[32px]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          ${room.currentPrice.toLocaleString()}
        </p>
        {room.includesTaxes && (
          <p
            className="text-[13px] font-normal text-[#424753] mt-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Includes taxes & fees
          </p>
        )}
      </td>

      {/* Options */}
      <td className="px-6 py-5 align-middle min-w-[240px]">
        <ul className="space-y-1 mb-1">
          {room.options.map((opt) => (
            <li key={opt} className="flex items-center gap-1.5">
              <CheckCircleIcon />
              <span
                className="text-[16px] font-normal text-[#16A34A] leading-[100%]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {opt}
              </span>
            </li>
          ))}
        </ul>
        {room.urgency && (
          <p
            className="text-[14px] font-bold text-[#C0392B] mt-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {room.urgency}
          </p>
        )}
      </td>

      {/* Select Button */}
      <td className="px-6 py-5 align-middle">
        <Button
          id={`select-room-${room.id}`}
          onClick={() => onSelect(room.id)}
          variant="custom"
          size="custom"
          className={`w-[97.5px] h-[37px] !rounded-[8px] px-6 py-2 text-[16px] !font-normal text-white leading-[100%] text-center focus:ring-2 focus:ring-offset-2 ${
            isUrgent
              ? 'bg-[#B61B4A] hover:bg-[#9A1640] focus:ring-[#B61B4A]'
              : 'bg-[#005CBD] hover:bg-[#004AA0] focus:ring-[#005CBD]'
          }`}
        >
          Select
        </Button>
      </td>
    </tr>
  );
}

export default RoomRow;
