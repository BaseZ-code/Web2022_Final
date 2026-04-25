import type { NavLink, NavButton } from '../../components/Topbar';
import Topbar from '../../components/Topbar';

export default function NavBar() {
	const navLinks: NavLink[] = [
		{ label: 'Hotels', href: '/hotels' },
		{ label: 'Flights', href: '/flights' },
		{ label: 'Bundles', href: '/bundles' },
		{ label: 'Activities', href: '/activities' },
	];

	const buttons: NavButton[] = [
	{ 
		label: 'Sign In', 
		onClick: () => alert('Sign in modal'), 
		primary: false 
	},
	{ 
		label: 'Create Account', 
		href: '/register', 
		primary: true 
	},
	];

	return (
		<Topbar 
			logo={<h1 className="font-jakarta font-black text-[24px] leading-[32px] tracking-[-1.2px] align-middle text-[#2563EB]">T-Goda</h1>} 
			navLinks={navLinks} 
			buttons={buttons}
			currentPath="/hotels"
		/>
	);
}
