import { reviews } from './reviewData';
import type { Review } from './reviewData';

// ── Star Rating ────────────────────────────────────────────────────────────

function StarFull() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarHalf() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="half-grad">
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#D1D5DB" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="url(#half-grad)"
      />
    </svg>
  );
}

function StarEmpty() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#D1D5DB" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => {
        if (rating >= i) return <StarFull key={i} />;
        if (rating >= i - 0.5) return <StarHalf key={i} />;
        return <StarEmpty key={i} />;
      })}
    </div>
  );
}

// ── Review Card ────────────────────────────────────────────────────────────

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex flex-col gap-4 bg-white rounded-2xl border border-[#E5E7EB] p-5 shadow-sm flex-1 min-w-0">
      {/* Top row: stars + date */}
      <div className="flex items-center justify-between gap-2">
        <StarRow rating={review.rating} />
        <span
          className="text-[14px] font-normal text-[#424753] leading-[100%] whitespace-nowrap"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {review.date}
        </span>
      </div>

      {/* Quote */}
      <p
        className="text-[14px] font-normal text-[#191C22] leading-[160%] flex-1"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {review.quote}
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3 mt-auto">
        {/* Avatar */}
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${review.reviewer.avatarBg} ${review.reviewer.avatarText}`}
        >
          <span
            className="text-[12px] font-bold leading-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {review.reviewer.initials}
          </span>
        </div>

        {/* Name + country */}
        <div>
          <p
            className="text-[14px] font-semibold text-[#191C22] leading-[100%]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {review.reviewer.name}
          </p>
          <p
            className="text-[13px] font-normal text-[#424753] leading-[100%] mt-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {review.reviewer.country}
          </p>
        </div>
      </div>
    </article>
  );
}

// ── GuestReviews Section ───────────────────────────────────────────────────

export default function GuestReviews() {
  return (
    <section className="w-full" aria-labelledby="guest-reviews-heading">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2
          id="guest-reviews-heading"
          className="text-[16px] font-normal text-[#191C22] leading-[100%]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Guest Reviews
        </h2>
        <a
          href="#"
          className="text-[16px] font-semibold text-[#005CBD] leading-[100%] hover:underline"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Read all 1,248 reviews
        </a>
      </div>

      {/* Cards grid */}
      <div className="flex gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
