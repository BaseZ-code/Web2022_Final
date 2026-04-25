import TextField from "../../components/Field";
import Button from "../../components/Button";

export default function NewsletterSubscription() {
  return (
    <section className="py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Container */}
        <div className="bg-[#E7E8F1] rounded-[2rem] py-16 px-6 md:px-12 flex flex-col items-center text-center">
          
          {/* Envelope Icon */}
          <div className="text-[#255CBA] mb-6">
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <path d="M2 6l10 7 10-7"></path>
            </svg>
          </div>

          {/* Heading */}
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold text-[#191C22] mb-4">
            Get Travel Deals Directly
          </h2>
          
          {/* Subheading */}
          <p className="font-['Plus_Jakarta_Sans'] text-[16px] md:text-[18px] text-[#424753] max-w-2xl mb-8 leading-relaxed">
            Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.
          </p>

          {/* Input & Button Form */}
          <form 
            className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 mb-4"
            onSubmit={(e) => e.preventDefault()}
          >
			<TextField 
			  type="email" 
			  placeholder="Your email address" 
			  required
			  variant="form"
			  containerClassName="flex-1 w-full"
			  className="font-['Plus_Jakarta_Sans'] px-6 py-4 text-[#191C22] placeholder:text-[#6B7280] text-[15px]"
			/>
			<Button 
			  type="submit" 
			  variant="primary" 
			  size="lg"
			>
			  Subscribe Now
			</Button>
		</form>
          {/* Footer Text */}
          <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#6B7280]">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>

        </div>
      </div>
    </section>
  );
}
