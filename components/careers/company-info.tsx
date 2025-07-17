import { Card, CardContent } from "@/components/ui/card";

export function CompanyInfo() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
          alt="datakernels team working on AI solutions"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">Join Our AI Revolution</h2>
          <p className="text-sm opacity-90">
            Building the future, one algorithm at a time
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Why Choose datakernels?
          </h3>
          <div className="space-y-3 text-gray-600">
            <p>
              <strong>Cutting-edge Technology:</strong> Work with the latest
              AI/ML frameworks and tools
            </p>
            <p>
              <strong>Global Impact:</strong> Build solutions that transform
              businesses worldwide
            </p>
            <p>
              <strong>100% Remote:</strong> Work from anywhere with complete
              flexibility
            </p>
            <p>
              <strong>Learning Environment:</strong> Continuous mentorship and
              skill development opportunities
            </p>
            <p>
              <strong>Comfort from Home:</strong> Create your perfect workspace
              in the comfort of your home
            </p>
            <p>
              <strong>Collaborative Culture:</strong> Join a team of passionate
              AI enthusiasts
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            What We Offer
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Flexible working hours and pure remote work</li>
            <li>Continuous learning and mentorship programs</li>
            <li>Access to latest tools and technologies</li>
            <li>Collaborative and supportive work environment</li>
            <li>Opportunity to work on cutting-edge AI projects</li>
            <li>Professional growth and career advancement</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
