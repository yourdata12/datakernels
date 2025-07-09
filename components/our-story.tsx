import Image from "next/image";

export default function OurStory() {
  return (
    <section id="our-story" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-core-blue mx-auto mb-6"></div>
        </div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-foreground">
              From Vision to Reality
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Datakernels Analytics and Consulting LLP, we started with a
              bold idea — to bridge the gap between cutting-edge artificial
              intelligence and real-world business applications. Our journey
              began with a team of passionate engineers and data scientists
              determined to unlock AI's full potential for companies of every
              size.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a shared vision in a small workspace has evolved
              into a thriving innovation hub. Today, we collaborate with
              businesses across industries, helping them automate workflows,
              gain deeper insights, and drive smarter decisions through scalable
              tech.
            </p>
          </div>

          <div className="relative" data-aos="zoom-in-up" data-aos-delay="200">
            <Image
              src="/story-pexels-1.jpg"
              alt="Founders brainstorming AI business vision"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <Image
              src="/story-pexels-2.jpg"
              alt="Innovating AI-powered workflow automation"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div
            className="space-y-6 order-1 lg:order-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              Innovation at Our Core
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From AI applications and CRM systems to analytics dashboards and
              document intelligence, we’ve successfully delivered over 50
              projects that drive measurable impact. Our work is rooted in
              strategy, speed, and scalability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just build software — we build intelligent ecosystems.
              With deep expertise in automation tools like n8n and seamless AI
              integration, we empower organizations to achieve operational
              excellence and stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
