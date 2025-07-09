export default function CoreValues() {
  const values = [
    {
      title: "INNOVATION",
      description:
        "Pioneering cutting-edge solutions that transform businesses and drive technological advancement.",
      color: "bg-blue-200 text-blue-900",
      aos: "fade-right",
    },
    {
      title: "EXCELLENCE",
      description:
        "Delivering superior quality in every project with meticulous attention to detail and precision.",
      color: "bg-purple-200 text-purple-900",
      aos: "fade-up",
    },
    {
      title: "INTEGRITY",
      description:
        "Building trust through transparent communication and ethical business practices in all our relationships.",
      color: "bg-green-200 text-green-900",
      aos: "fade-up",
    },
    {
      title: "PARTNERSHIP",
      description:
        "Collaborating closely with clients to understand their vision and achieve shared success.",
      color: "bg-red-200 text-red-900",
      aos: "fade-up",
    },
  ];

  return (
    <section id="core-values" className="py-24 bg-background">
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-20 px-6" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-core-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The principles that guide our work and define our commitment to excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group ${value.color} p-8 min-h-[300px] flex flex-col justify-center items-center text-center
                transition-all duration-300 relative overflow-hidden`}
              data-aos={value.aos}
              data-aos-delay={index * 100}
            >
              <div
                className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-[1.08] z-10"
                style={{ zIndex: 10 }}
              >
                <div className="w-full h-full p-8 flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl group-hover:text-3xl transition-all duration-300 mb-4 font-normal">
                    {value.title}
                  </h3>
                  <p className="text-base group-hover:text-md transition-all duration-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
