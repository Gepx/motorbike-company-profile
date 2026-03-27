import { Clock, ClockCheck, MapPin, Phone } from "lucide-react";

export const locationData = [
  {
    id: 1,
    title: "Address",
    description:
      "Jl. Lintas Sumatera, Km 128, Sei Rampah, Kabupaten Serdang Bedagai, Sumatera Utara 20995",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Phone & WhatsApp",
    description: "+62 812-1234-5678",
    icon: Phone,
  },
  {
    id: 3,
    title: "Dealer Operational Time",
    description: `Monday - Friday: 08:00 - 17:00
      Saturday: 08:00 - 15:00
      Sunday: Closed`,
    icon: Clock,
  },
  {
    id: 4,
    title: "Workshop Operational Time",
    description: `Monday - Friday: 08:00 - 16:30
      Saturday: 08:00 - 15:30
      Sunday: 09:00 - 11:30`,
    icon: ClockCheck,
  },
];
