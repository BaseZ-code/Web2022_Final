import { Link } from 'react-router-dom'

type BreadcrumbItem = {
  label: string
  href?: string
}

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/hotels' },
  { label: 'Greece', href: '/hotels' },
  { label: 'Crete Hotels', href: '/hotels' },
  { label: 'Grand Azure Resort & Spa' },
]

export function Breadcrumb() {
  return (
    <nav className="w-full pt-24 px-6" aria-label="Breadcrumb">
      <ol className="w-full max-w-[1232px] h-6 flex items-center gap-2 p-0 m-0 list-none">
        {breadcrumbItems.map((item, index) => {
          const isCurrent = index === breadcrumbItems.length - 1

          return (
            <li className="inline-flex items-center gap-2 text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[14px] font-normal leading-6 whitespace-nowrap" key={item.label}>
              {item.href && !isCurrent ? (
                <Link
                  to={item.href}
                  className="text-inherit no-underline transition-[color,transform] duration-150 ease-in-out hover:text-[#151827] hover:-translate-y-px active:text-[#151827] active:font-semibold active:translate-y-px focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-[3px] focus-visible:rounded"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isCurrent ? 'text-[#151827] font-semibold' : ''} aria-current={isCurrent ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isCurrent ? <span className="text-[#5f6271]">›</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
