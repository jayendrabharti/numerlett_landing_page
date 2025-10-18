import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Transform Your Operations with Our Cutting-Edge Technologies",
      image: "/images/landing_image_1.png",
    },
    {
      title: "Empower Your Team with Our User-Friendly Platforms",
      image: "/images/landing_image_2.png",
    },
    {
      title: "Unlock Insights with Our Advanced Analytics",
      image: "/images/landing_image_3.png",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto bg-brand-light py-10 px-20 rounded-4xl flex flex-col gap-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground/80 mb-4">
            Discover Our Integrated SaaS and AI-Powered Solutions for Modern
            Businesses
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="w-full h-64 bg-white/50 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground/90 text-center px-4">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <Link
          href="/features"
          className="flex flex-row mx-auto text-lg gap-1 border-b border-black transition-all hover:gap-4 duration-150"
        >
          Learn More
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
