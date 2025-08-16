import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Palette,
  PenTool,
  Globe,
  TrendingUp,
  Bot,
  Monitor,
  Video,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ExternalLink
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-xl font-medium text-gray-900">
              Aquarius Red
            </div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
            I help brands grow.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 font-light max-w-2xl mx-auto">
            Design, content, and automation.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-medium rounded-full">
            Work with me
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-12">
            About Me
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            I'm a freelancer and B.Tech CSE student with expertise in design, content, websites, and AI.
            I combine technical skills with business creativity to help startups and entrepreneurs scale.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-20">
            Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { title: "Design & branding", subtitle: "Content & copywriting" },
              { title: "Websites & funnels", subtitle: "Marketing & growth" },
              { title: "AI & automation", subtitle: "Digital products" },
              { title: "Video & multimedia", subtitle: "Fast Delivery" }
            ].map((service, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-lg font-medium text-gray-900">
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-20">
            Portfolio
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { title: "AI & automation", subtitle: "Digital products" },
              { title: "Video & multimedia", subtitle: "Fast Delivery" },
              { title: "Design & branding", subtitle: "Content & copywriting" },
              { title: "Websites & funnels", subtitle: "Marketing & growth" }
            ].map((project, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-lg font-medium text-gray-900">
                  {project.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-12">
            Contact
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light mb-12">
            Ready to take your business to the next level? Get in touch and let's discuss your project.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-medium rounded-full">
            Get in touch
          </Button>
        </div>
      </section>
    </div>
  );
}
