import Link from "next/link";
import { RefreshCw, Eye, Briefcase } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: RefreshCw,
      title:
        "Transforming industries through cutting-edge technology and intelligent automation.",
      description:
        "At NumerLett, we envision a future where AI enhances productivity and collaboration.",
      linkText: "Explore",
      linkHref: "/explore",
    },
    {
      icon: Eye,
      title:
        "Join us in revolutionizing how businesses operate and thrive in the digital age.",
      description:
        "Our AI solutions are designed to streamline processes and drive success.",
      linkText: "Learn More",
      linkHref: "/learn-more",
    },
    {
      icon: Briefcase,
      title:
        "Discover how our technology adapts to your unique business needs.",
      description:
        "Experience the future of work with NumerLett's innovative SaaS offerings.",
      linkText: "Get Started",
      linkHref: "/get-started",
    },
  ];

  return (
    <section className="py-20 px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground/80 mb-4 max-w-4xl mx-auto">
            Empowering the future of work with innovative AI-driven solutions.
          </h2>
        </div>

        {/* Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-teal-100/60 p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mb-6">
                <solution.icon className="w-8 h-8 text-brand" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 mb-6">
                <h3 className="text-xl font-semibold text-foreground/90 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={solution.linkHref}
                className="text-sm text-brand font-medium hover:text-brand-dark transition-colors border-b border-brand hover:border-brand-dark"
              >
                {solution.linkText} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
