import { Search, Globe, Calendar } from 'lucide-react';
import Button from '../../components/Button';
import SeaImage from '../../assets/Sea.png';
import TextField from '../../components/Field';

export default function HeroSection() {
  return (
    // 1. Separated the screen padding (px-4) from the max-width container
    <section className="w-full px-4 pt-4 md:pt-8 pb-12">
      {/* 2. Pure max-width container with no horizontal padding to match other sections */}
      <div className="max-w-6xl mx-auto">
        
        {/* Background Container */}
        <div 
          className="relative w-full min-h-[500px] rounded-[16px] overflow-hidden bg-cover bg-center flex flex-col items-center justify-center px-4 py-12"
          style={{ backgroundImage: `url(${SeaImage})` }}      
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl space-y-[24px]">
            
            {/* Main Heading */}
            <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] md:text-[60px] leading-[1.2] md:leading-[60px] tracking-[-1.5px] text-[#FFFFFF] max-w-2xl align-middle">
              Escape to Your Perfect<br className="hidden md:block" /> Paradise
            </h1>
            
            {/* Subheading */}
            <p className="font-['Plus_Jakarta_Sans'] font-medium text-[16px] md:text-[20px] leading-[28px] tracking-[0px] text-[#FFFFFFE5] max-w-2xl align-middle">
              Unlock exclusive prices on over 2 million properties and flights across<br className="hidden md:block" /> the globe.
            </p>

            {/* Search Bar Container */}
            <div className="bg-white p-2 rounded-[12px] flex flex-col md:flex-row items-center gap-2 w-full max-w-[850px] mt-[16px]">
              
              {/* Location Input */}
              <TextField
                variant="search"
                icon={<Globe className="w-5 h-5" />}
                placeholder="Where to next?"
                containerClassName="w-full flex-1"
                className="bg-[#f1f3f5] rounded-[8px] border border-gray-200 h-[52px] font-['Plus_Jakarta_Sans'] text-[16px] placeholder-[#6B7280]"
              />

              {/* Date Input */}
              <TextField
                variant="search"
                icon={<Calendar className="w-5 h-5" />}
                placeholder="Oct 12 - Oct 18"
                containerClassName="w-full flex-1"
                className="bg-[#f1f3f5] rounded-[8px] border border-gray-200 h-[52px] font-['Plus_Jakarta_Sans'] text-[16px] placeholder-[#6B7280]"
              />            

              {/* Primary Button */}
              <Button 
                variant="custom" 
                size="custom"
                icon={<Search className="w-5 h-5" />}
                className="w-full md:w-[151.42px] h-[52px] bg-[#005CBD] hover:bg-[#004bb0] text-white !font-semibold !rounded-[8px] px-[32px]"
              >
                Search
              </Button> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
