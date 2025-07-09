import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative" data-aos="zoom-in-right">
            <Image
              src="/about.jpg"
              alt="About DataKernels"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[hsl(var(--core-blue))] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6" data-aos="fade-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                About DataKernels
              </h2>
              <div className="w-24 h-1 bg-[hsl(var(--core-blue))] mb-6"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              At <strong>Datakernels Analytics and Consulting LLP</strong>, we harness the power of Artificial Intelligence and modern technologies 
              to build intelligent solutions that accelerate business growth. Our dedicated team of developers and 
              data experts collaborate closely to craft tools that bring automation, intelligence, and impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              From custom software and web platforms to AI-driven analytics and mobile apps, our expertise lies in 
              making complex systems smart, scalable, and user-friendly. We empower organizations to make 
              data-backed decisions and stay ahead of the curve.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To simplify AI for every business—delivering intelligent, accessible, and impactful digital solutions.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become a global leader in AI-first business transformation—redefining how industries operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
