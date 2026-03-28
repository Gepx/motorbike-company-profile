import { values } from "@/data/values";
import ValuePCard from "./ValuePCard";
import ValuePButton from "./ValuePButton";

const ValueProposition = () => {
  return (
    <section
      className="relative w-full min-h-screen py-20 overflow-hidden"
      id="value-proposition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Build for Your Ride
            </h1>
            <p className="mt-2 text-gray-500">
              Experience the highest standard of quality, service, and support
              for your entire journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {values.map((value) => {
              return <ValuePCard key={value.id} value={value} />;
            })}
          </div>

          <ValuePButton />
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
