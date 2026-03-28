import { Value } from "@/types/values";
import Image from "next/image";

const ValuePCard = ({ value }: { value: Value }) => {
  return (
    <div
      key={value.id}
      className="h-full group bg-white rounded-3xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center"
    >
      <div className="w-30 h-30 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
        <Image
          src={value.image}
          alt={value.title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
        {value.title}
      </h2>
      <p className="text-gray-500 font-medium leading-relaxed text-sm flex-grow">
        {value.description}
      </p>
    </div>
  );
};

export default ValuePCard;
