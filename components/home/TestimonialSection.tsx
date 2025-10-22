import Image from "next/image";
import Link from "next/link";

export default function TestimonialSection() {
  return (
    <section className="bg-muted/30 px-10 py-20">
      <div className="mx-auto max-w-4xl text-center">
        {/* Webflow Logo */}
        <div className="mb-12">
          <div className="text-foreground inline-flex items-center gap-2 text-2xl font-bold">
            <span className="rounded bg-black px-2 py-1 text-sm text-white">W</span>
            <span>Webflow</span>
          </div>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-foreground/80 mb-12 text-2xl leading-relaxed font-medium md:text-3xl">
          "NumerLett's solutions have transformed our workflow, making us more efficient and
          innovative in our approach to technology."
        </blockquote>

        {/* Author */}
        <div className="mb-16">
          <p className="text-foreground mb-1 text-lg font-semibold">Jane Doe</p>
          <p className="text-muted-foreground">CEO, Tech Innovations</p>
        </div>

        {/* CTA Section */}
        <div className="bg-background/80 rounded-3xl p-12 shadow-lg backdrop-blur-sm">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-left">
              <h3 className="text-foreground mb-4 text-2xl font-bold md:text-3xl">
                Stay Updated with NumerLett
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Join our community to receive the latest insights and updates on our innovative tech
                solutions. Sign up now to explore how NumerLett can empower your business.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/signup"
                className="bg-brand hover:bg-brand-dark rounded-full px-8 py-3 text-center font-medium text-white transition-colors"
              >
                Sign Up
              </Link>
              <Link
                href="/demo"
                className="border-border text-foreground hover:bg-muted rounded-full border px-8 py-3 text-center font-medium transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
