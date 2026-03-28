import { Reviews } from "@/types/reviews";
import { Star } from "lucide-react";

const ReviewCard = ({ review }: { review: Reviews }) => (
  <div className="w-[350px] shrink-0 bg-white border border-gray-100 rounded-3xl p-8 flex flex-col gap-6 shadow-[0_8px_15px_rgb(0,0,0,0.08)] transition-transform hover:scale-[1.02] cursor-pointer">
    {/* Stars */}
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    {/* Review Text */}
    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
      "{review.text}"
    </p>

    {/* User Info */}
    <div className="flex items-center gap-3 mt-2">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-10 h-10 rounded-full object-cover border border-gray-100"
      />
      <div className="flex flex-col">
        <span className="text-gray-900 text-sm font-bold">{review.name}</span>
        <span className="text-gray-500 text-xs">{review.role}</span>
      </div>
    </div>
  </div>
);

export default ReviewCard;
