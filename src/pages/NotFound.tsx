import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from './home/Navbar'

export function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main
        className="w-full min-h-[calc(100svh-325px)] grid content-center justify-items-center gap-3 px-6 py-12 text-center"
        aria-labelledby="not-found-title"
      >
        <p className="m-0 text-[#005cbd] font-['Plus_Jakarta_Sans'] text-[56px] font-bold leading-none">
          404
        </p>
        <h1 id="not-found-title" className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[28px] font-bold">
          Page not found
        </h1>
        <p className="m-0 text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[16px] font-normal">
          The page you are looking for does not exist.
        </p>
        <Link
          className="min-h-[40px] inline-flex items-center justify-center px-4 py-2 rounded-lg text-white bg-[#005cbd] font-['Plus_Jakarta_Sans'] text-[14px] font-bold no-underline"
          to="/hotels"
        >
          Back to Hotels
        </Link>
      </main>
      <Footer />
    </div>
  )
}
