import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="flex flex-col gap-4">
        <p className="text-7xl text-balance font-extrabold text-foreground/70">
          Empowering Your Business with Innovative Tech Solutions
        </p>
        <p className="text-lg font-light text-balance">
          At NumerLett, we specialize in cutting-edge SaaS and AI-powered
          solutions designed to elevate your business. Discover how our products
          can transform your operations and drive growth and success.
        </p>
      </div>
      <div className="relative">
        <Image
          src="/images/landing_image_5.png"
          alt="Description of the image"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-2xl"
          style={{
            filter: "blur(0px)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>
    </section>
  );
}
