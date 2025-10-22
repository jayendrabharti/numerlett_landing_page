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
      <div className="bg-brand-light mx-auto flex max-w-7xl flex-col gap-10 rounded-4xl px-20 py-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-foreground/80 mb-4 text-4xl font-bold md:text-5xl">
            Discover Our Integrated SaaS and AI-Powered Solutions for Modern Businesses
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="h-64 w-full overflow-hidden rounded-2xl bg-white/50 shadow-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-foreground/90 px-4 text-center text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <Link
          href="/features"
          className="mx-auto flex flex-row gap-1 border-b border-black text-lg transition-all duration-150 hover:gap-4"
        >
          Learn More
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
