import React from "react";
import NewsletterForm from "./NewsletterForm";

function Newsletter() {
  return (
    <section className="py-[40px] lg:py-[88px] bg-newsletter bg-cover">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-blue p-12 rounded-2xl lg:bg-newsletterBox lg:bg-no-repeat lg:h-[216px]" data-aos="fade-up" data-aos-offset="400">
          <div className="flex-1 w-full">
            <h3 className="h3 mb-4">Start Mining Now</h3>
            <p className="max-w-[348px]">Join now with CRAPPO to get the latest news and start mining now.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}

export default Newsletter;