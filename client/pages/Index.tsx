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
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of recent projects and creative work across different domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Logo Design", title: "Modern Tech Startup", category: "Branding" },
              { type: "Website", title: "E-commerce Platform", category: "Development" },
              { type: "Blog Post", title: "Growth Marketing Guide", category: "Content" },
              { type: "Video Thumbnail", title: "YouTube Channel", category: "Design" },
              { type: "Landing Page", title: "SaaS Product Launch", category: "Development" },
              { type: "Social Media", title: "Brand Campaign", category: "Design" }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-400 text-sm font-medium">
                      {project.type} Preview
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {project.type}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What clients say about working with me.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Amazing work, very professional! Delivered exactly what we needed and more. Highly recommend!",
                author: "Sarah Johnson",
                role: "Startup Founder"
              },
              {
                text: "Incredible attention to detail and fast turnaround. Our website conversion rate increased by 300%!",
                author: "Mike Chen",
                role: "E-commerce Owner"
              },
              {
                text: "Creative, reliable, and always goes above and beyond. Best freelancer I've worked with!",
                author: "Emily Rodriguez",
                role: "Marketing Manager"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to take your business to the next level? Get in touch and let's discuss your project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Send me a message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input placeholder="Your name" className="bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" className="bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      className="bg-white min-h-[120px] resize-none"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 transition-opacity flex-1">
                      Get a Free Quote
                    </Button>
                    <Button variant="outline" className="border-gray-300 hover:border-gray-400 flex-1">
                      Book a Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Get in touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-brand-blue" />
                    <span className="text-gray-600">your.email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-brand-blue" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="text-gray-600">Available Worldwide</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow me
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent mb-4">
              Your Name
            </div>
            <p className="text-gray-400 mb-8">
              Helping businesses grow with design, content, websites, and automation.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
