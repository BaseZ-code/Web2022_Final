const galleryImages = [
  {
    src: '/Reservation/FirstPic.png',
    alt: 'Infinity pool overlooking the sea',
    featured: true,
  },
  {
    src: '/Reservation/Container.png',
    alt: 'Bedroom balcony with sunset sea view',
  },
  {
    src: '/Reservation/Container-1.png',
    alt: 'Resort pool courtyard',
  },
  {
    src: '/Reservation/Container-2.png',
    alt: 'Outdoor lounge with fire pit',
  },
  {
    src: '/Reservation/Container-3.png',
    alt: 'Indoor spa pool corridor',
  },
]

export function ReservationGallery() {
  return (
    <section
      className="w-[calc(100%-48px)] h-[508px] grid grid-cols-4 grid-rows-[242px_242px] gap-4 mx-6 max-md:h-auto max-md:grid-cols-2 max-md:grid-rows-none"
      aria-label="Hotel photo gallery"
    >
      {galleryImages.map((image) => (
        <figure
          className={`relative w-full overflow-hidden rounded-xl m-0 bg-white ${
            image.featured
              ? 'col-span-2 row-span-2 h-[500px] max-md:col-auto max-md:row-auto max-md:h-[242px]'
              : 'h-[242px]'
          }`}
          key={image.src}
        >
          <img src={image.src} alt={image.alt} className="w-full h-full block object-cover" />
        </figure>
      ))}
    </section>
  )
}
