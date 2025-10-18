import Image from "next/image";
import Link from "next/link";

export default function TestimonialSection() {
  return (
    <section className="py-20 px-10 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Webflow Logo */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-2xl font-bold text-foreground">
            <span className="bg-black text-white px-2 py-1 rounded text-sm">
              W
            </span>
            <span>Webflow</span>
          </div>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-2xl md:text-3xl font-medium text-foreground/80 leading-relaxed mb-12">
          "NumerLett's solutions have transformed our workflow, making us more
          efficient and innovative in our approach to technology."
        </blockquote>

        {/* Author */}
        <div className="mb-16">
          <p className="text-lg font-semibold text-foreground mb-1">Jane Doe</p>
          <p className="text-muted-foreground">CEO, Tech Innovations</p>
        </div>

        {/* CTA Section */}
        <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stay Updated with NumerLett
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Join our community to receive the latest insights and updates on
                our innovative tech solutions. Sign up now to explore how
                NumerLett can empower your business.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/signup"
                className="bg-brand text-white px-8 py-3 rounded-full hover:bg-brand-dark transition-colors font-medium text-center"
              >
                Sign Up
              </Link>
              <Link
                href="/demo"
                className="border border-border text-foreground px-8 py-3 rounded-full hover:bg-muted transition-colors font-medium text-center"
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
