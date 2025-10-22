import Link from "next/link";
import { RefreshCw, Eye, Briefcase } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: RefreshCw,
      title: "Transforming industries through cutting-edge technology and intelligent automation.",
      description:
        "At NumerLett, we envision a future where AI enhances productivity and collaboration.",
      linkText: "Explore",
      linkHref: "/explore",
    },
    {
      icon: Eye,
      title: "Join us in revolutionizing how businesses operate and thrive in the digital age.",
      description: "Our AI solutions are designed to streamline processes and drive success.",
      linkText: "Learn More",
      linkHref: "/learn-more",
    },
    {
      icon: Briefcase,
      title: "Discover how our technology adapts to your unique business needs.",
      description: "Experience the future of work with NumerLett's innovative SaaS offerings.",
      linkText: "Get Started",
      linkHref: "/get-started",
    },
  ];

  return (
    <section className="bg-background px-10 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-foreground/80 mx-auto mb-4 max-w-4xl text-4xl font-bold md:text-5xl">
            Empowering the future of work with innovative AI-driven solutions.
          </h2>
        </div>

        {/* Solutions Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-3xl bg-teal-100/60 p-8 text-center transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/80">
                <solution.icon className="text-brand h-8 w-8" />
              </div>

              {/* Content */}
              <div className="mb-6 flex flex-col gap-4">
                <h3 className="text-foreground/90 text-xl leading-tight font-semibold">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={solution.linkHref}
                className="text-brand hover:text-brand-dark border-brand hover:border-brand-dark border-b text-sm font-medium transition-colors"
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
