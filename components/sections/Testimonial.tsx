import { reviews } from "@/data/review";
import ReviewCard from "./ReviewCard";

const Testimonial = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section
      className="relative w-full overflow-hidden pb-20 pt-10"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Adjusted for Light Mode */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Loved by Riders
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl text-lg">
            Don't just take our word for it. See what our community has to say
            about their experience.
          </p>
        </div>
      </div>

      {/* Marquee Container - Full Width */}
      <div className="w-full flex flex-col gap-6 relative z-10 py-2">
        {/* Row 1: Moves Left */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex gap-6 justify-start w-max animate-marquee pl-6 py-4">
            {duplicatedReviews.map((review, idx) => (
              <ReviewCard key={`row1-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right (Reversed array to mix up the order) */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex gap-6 justify-start w-max animate-marquee-reverse pl-6 py-4">
            {[...duplicatedReviews].reverse().map((review, idx) => (
              <ReviewCard key={`row2-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
