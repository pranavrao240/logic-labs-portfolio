import { Mail, Phone, MapPin, Users, Award, Target, Zap } from "lucide-react";

export const projects = [
  {
    number: "01",
    titlePlain: "IoT Smart Irrigation",
    titleUnderlined: "System",
    tag: "Embedded / ESP32",
    description:
      "A fully automated crop watering system using ESP32, soil moisture sensors, and cloud integration, enabling real-time remote monitoring via an Android dashboard.",
    image:
      "https://images.unsplash.com/photo-1563514223768-651263bfd3ab?w=1400&q=85",
    link: "#",
    stat: "100% Automated watering",
  },
  {
    number: "02",
    titlePlain: "E-Commerce",
    titleUnderlined: "Portal",
    tag: "React.js / Node.js",
    description:
      "A responsive full-stack online store with user authentication, dynamic shopping cart, product inventory search, and payment gateway integration.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1400&q=85",
    link: "#",
    stat: "Secure payment gateway",
  },
  {
    number: "03",
    titlePlain: "AI Plant Disease",
    titleUnderlined: "Detector",
    tag: "Python / PyTorch",
    description:
      "A deep learning image classification model trained on leafy crop data, detecting leaf spots and rot types with high confidence via a friendly user Web UI.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=85",
    link: "#",
    stat: "96% accuracy rate",
  },
  {
    number: "04",
    titlePlain: "Android Attendance",
    titleUnderlined: "App",
    tag: "Flutter / Firebase",
    description:
      "A mobile attendance logger app utilizing geofencing parameters and real-time database updates to restrict student logging outside college radius.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1400&q=85",
    link: "#",
    stat: "Geofenced check-in",
  },
];

export const services = [
  {
    id: 1,
    title: "Software Projects",
    description:
      "End-to-end software development including Web Apps, Android Apps, AI/ML, and system programs tailored to requirements.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80",
    side: "left" as const,
  },
  {
    id: 2,
    title: "Hardware Projects",
    description:
      "Custom embedded system prototype manufacturing, microcontroller configuration, and sensor networks for automation.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
    side: "right" as const,
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Rohan M.",
    role: "Startup Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    text: "Logic Labs developed our startup's MVP using React and Node.js. Extremely clean codebase, highly responsive communication, and delivered ahead of schedule.",
    rating: 5,
  },
  {
    id: 2,
    name: "Prof. A. Kulkarni",
    role: "Engineering Department Head",
    image:
      "https://images.unsplash.com/photo-1660092626225-f291ab2970b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    text: "An excellent engineering partner for both academic prototypes and commercial integrations. Very thorough explanations and solid technical handovers.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram S.",
    role: "Product Manager, AgroTech",
    image:
      "https://images.unsplash.com/photo-1650783756107-739513b38177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&q=80",
    text: "The IoT Smart Farming prototype was fully functional. Pranav set up the sensor calibration and ESP32 code step-by-step, making it extremely easy to demonstrate.",
    rating: 5,
  },
  {
    id: 4,
    name: "Meera P.",
    role: "BE Information Technology Graduate",
    image:
      "https://images.unsplash.com/photo-1650783756107-739513b38177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&q=80",
    text: "Outstanding documentation and diagrams. Logic Labs provided the complete SRS and technical report on time, making our final review seamless.",
    rating: 5,
  },
] as const;

export const contactInfo = [
  { icon: Mail, label: "Email", value: "projects@logiclabs.in", delay: 0.1 },
  { icon: Phone, label: "Phone", value: "+91 93598 78663", delay: 0.2 },
  {
    icon: MapPin,
    label: "Location",
    value: "Nashik, Maharashtra, India",
    delay: 0.3,
  },
] as const;

export const teamMembers = [
  {
    name: "Pranav Rao",
    role: "Full-Stack Developer & Embedded Systems Specialist",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",
    bio: "Freelance developer helping startups, businesses, and engineering students bring custom software and hardware ideas to life.",
  },
];

export const stats = [
  { icon: Award, value: "10+", label: "Established years" },
  { icon: Target, value: "1000+", label: "Projects successfully delivered" },
  { icon: Zap, value: "100%", label: "Working software & hardware guarantee" },
  { icon: Users, value: "98%", label: "Client satisfaction rate" },
];
