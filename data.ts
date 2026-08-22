import { Mail, Phone, MapPin, Users, Award, Target, Zap } from "lucide-react";

export const projects = [
  {
    number: "01",
    titlePlain: "Industrial Bracket",
    titleUnderlined: "Prototyping",
    tag: "Automotive / ABS",
    description:
      "High-strength ABS filament used to rapid-prototype a custom industrial mounting bracket for an automotive client — reducing tooling costs by 60% and cutting delivery time from 6 weeks to 4 days.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=85",
    link: "#",
    stat: "60% cost reduction",
  },
  {
    number: "02",
    titlePlain: "Architectural",
    titleUnderlined: "Scale Model",
    tag: "Real Estate / PETG",
    description:
      "A detailed 1:50 scale architectural model in precision PETG filament for a leading Mumbai developer. 0.1 mm layer resolution delivered flawless surface detail for client presentations.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=85",
    link: "#",
    stat: "0.1 mm resolution",
  },
  {
    number: "03",
    titlePlain: "Medical Device",
    titleUnderlined: "Enclosure",
    tag: "Healthcare / TPU",
    description:
      "Biocompatible TPU flexible filament for ergonomic housings on a portable diagnostic device. Four iterations in under two weeks enabled rapid FDA pre-submission feedback.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=85",
    link: "#",
    stat: "4 iterations / 2 weeks",
  },
  {
    number: "04",
    titlePlain: "Drone Frame",
    titleUnderlined: "Components",
    tag: "Aerospace / CF-PLA",
    description:
      "Carbon-fibre reinforced PLA for custom racing drone arms and frame plates — achieving a strength-to-weight ratio competitive with CNC-machined aluminium at a fraction of the cost.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1400&q=85",
    link: "#",
    stat: "CNC-competitive strength",
  },
];

export const services = [
  {
    id: 1,
    title: "3D Printer Filament",
    description:
      "High-quality, engineered filaments for seamless finish and superior performance in all your 3D printing projects.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/342897574/IZ/WL/TD/40268963/fibreel-tpu-black-filament-the-strong-flexible-and-durable-material-for-your-3d-prints-500x500.jpg",
    side: "left" as const,
  },
  {
    id: 2,
    title: "Printing Service",
    description:
      "Professional 3D printing services with precision engineering and rapid turnaround times for your prototypes and production parts.",
    image:
      "https://5.imimg.com/data5/AJ/UD/MY-40268963/mono-filament-500x500.jpg",
    side: "right" as const,
  },
  // {
  //   id: 3,
  //   title: "Designing Services",
  //   description:
  //     "Expert CAD design and modeling services to transform your ideas into ready-to-print 3D models with optimal structural integrity.",
  //   image:
  //     "https://5.imimg.com/data5/SELLER/Default/2024/11/466064847/VP/UI/WH/40268963/3d-print-architecture-model-500x500.jpg",
  //   side: "left" as const,
  // },
  // {
  //   id: 4,
  //   title: "Rapid Prototyping",
  //   description:
  //     "Fast-track your product development with our rapid prototyping solutions, delivering functional prototypes in record time.",
  //   image:
  //     "https://5.imimg.com/data5/SELLER/Default/2024/11/465097325/AQ/XY/DX/40268963/whatsapp-image-2024-11-13-at-12-44-27-pm-500x500.jpeg",
  //   side: "right" as const,
  // },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Rohan M.",
    role: "3D Print Enthusiast",
    image:
      "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    text: "I've tried a lot of filament brands, and FibReel's range and consistency keep me coming back. The silk finish in particular is genuinely gorgeous, and prints come out clean every time",
    rating: 5,
  },
  {
    id: 2,
    name: "A. Kulkarni",
    role: "Engineering Faculty",
    image:
      "https://images.unsplash.com/photo-1660092626225-f291ab2970b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    text: "We've used FibReel and Imprime3D as service providers for our lab for a while now. Reliable filament, a helpful team, and they take the time to explain things. Exactly what an educational setting needs.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram S.",
    role: "R&D Lead",
    image:
      "https://images.unsplash.com/photo-1650783756107-739513b38177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&q=80",
    text: "Amazing output and a genuinely dedicated team. We've run multiple prototyping projects through Imprime3D and the quality has been consistent every time. Highly recommended for serious prototype work.",
    rating: 5,
  },
  {
    id: 4,
    name: "Meera P.",
    role: "Architect",
    image:
      "https://images.unsplash.com/photo-1650783756107-739513b38177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&q=80",
    text: "A real one-stop 3D printing solution. The service and communication are top-notch, and they delivered exactly what we needed, on time. Easy to recommend.",
    rating: 5,
  },
  {
    id: 5,
    name: "Procurement Lead",
    role: "OEM Customer",
    image:
      "https://images.unsplash.com/photo-1650783756107-739513b38177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&q=80",
    text: "Premium quality and a wide range of materials, delivered reliably even internationally. The standard matches anything we'd expect from a global brand.",
    rating: 5,
  },
  {
    id: 6,
    name: "Tomasz K.",
    role: " Distributor, Poland",
    image:
      "https://images.unsplash.com/photo-1650783756107-739513b38177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    artImage:
      "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&q=80",
    text: "FibReel spools reach us with the same quality standard we'd expect from any premium global brand. Vacuum-sealed, well-documented, and exactly what we ordered every time.",
    rating: 5,
  },
] as const;

export const contactInfo = [
  { icon: Mail, label: "Email", value: "studio@3dartistry.com", delay: 0.1 },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", delay: 0.2 },
  {
    icon: MapPin,
    label: "Studio",
    value: "123 Art District, Creative Quarter",
    delay: 0.3,
  },
] as const;

export const teamMembers = [
  {
    name: "Arjun Mehta",
    role: "Founder & Materials Engineer",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",
    bio: "Materials science graduate with 12+ years developing high-performance polymer filaments for industrial applications",
  },
  {
    name: "Priya Sharma",
    role: "Head of R&D",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Polymer chemist specialising in bio-compatible and carbon-reinforced filament formulations",
  },
  {
    name: "Rahul Desai",
    role: "Lead Prototyping Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Mechanical engineer with deep expertise in FDM/SLA processes and precision manufacturing tolerances",
  },
];

export const stats = [
  { icon: Award, value: "10+", label: "Established years" },
  { icon: Target, value: "15000+", label: "kg / Month production capacity " },
  { icon: Zap, value: "50+", label: "printers for testing and 3d printing " },
  { icon: Users, value: "5", label: "export markets across 3 continents" },
];
