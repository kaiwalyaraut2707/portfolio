import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  ExternalLink,
  Quote,
  Award,
  Users,
  Target
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-black">
              Kaiwalya Raut
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#home" className="text-gray-800 hover:text-black transition-colors duration-300">Home</a>
              <a href="#about" className="text-gray-800 hover:text-black transition-colors duration-300">About</a>
              <a href="#services" className="text-gray-800 hover:text-black transition-colors duration-300">Services</a>
              <a href="#portfolio" className="text-gray-800 hover:text-black transition-colors duration-300">Portfolio</a>
              <a href="#testimonials" className="text-gray-800 hover:text-black transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="text-gray-800 hover:text-black transition-colors duration-300">Contact</a>
            </div>
            <Button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 transition-all duration-300 hover:scale-105 shadow-lg">
              Work With Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white/7 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            I help brands grow with{" "}
            <span className="text-gray-300">
              Design, Content, Websites, and Automation
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            A freelancer blending creativity, technology, and growth to deliver impactful results.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Work With Me
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Floating tech elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white/30 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-32 w-2 h-2 bg-white rounded-full animate-ping"></div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
                About Me
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm <strong className="text-black">Kaiwalya Raut</strong>, a freelancer specializing in design, content, websites, and AI. I combine technical expertise with business creativity to help startups and entrepreneurs scale and succeed in the digital world.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Driven by a passion for innovation and a keen eye for detail, I've helped dozens of businesses transform their digital presence and achieve meaningful growth through strategic design and technology solutions. My goal is to create work that not only looks great but delivers measurable results.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center p-4 rounded-lg bg-gray-50 border">
                  <div className="text-3xl font-bold text-black mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 border">
                  <div className="text-3xl font-bold text-black mb-2">25+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 border">
                  <div className="text-3xl font-bold text-black mb-2">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden border">
                <div className="w-40 h-40 bg-black rounded-full flex items-center justify-center text-white text-6xl font-bold z-10 shadow-2xl">
                  KR
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-black rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-gray-400 rotate-12 animate-bounce"></div>
                <div className="absolute top-1/2 right-8 w-3 h-3 bg-black rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help your business grow and succeed in the digital landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                icon: <Palette className="h-10 w-10" />,
                title: "Design & Branding",
                description: "Logos, Brand Kits, Social Media Design"
              },
              {
                icon: <PenTool className="h-10 w-10" />,
                title: "Content Creation & Copywriting",
                description: "Blogs, Web Copy, Social Media Captions"
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Website & Funnel Building",
                description: "Websites, Landing Pages, E-commerce"
              },
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: "Marketing & Growth",
                description: "SEO, Social Media Marketing, Ads"
              },
              {
                icon: <Bot className="h-10 w-10" />,
                title: "AI & Automation",
                description: "Workflow Automation, Chatbots, AI Content"
              },
              {
                icon: <Monitor className="h-10 w-10" />,
                title: "Digital Products",
                description: "Templates, E-books, Courses"
              },
              {
                icon: <Video className="h-10 w-10" />,
                title: "Video & Multimedia",
                description: "Thumbnails, Reels/Shorts Editing, Explainers"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border bg-white hover:bg-black cursor-pointer transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-100 group-hover:bg-white flex items-center justify-center text-black group-hover:text-black transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of recent projects and creative work across different domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Design", title: "Youtube Thumbnails", category: "Design" },
              { type: "Logo", title: "Brand Logo", category: "Branding" },
              { type: "Social Media", title: "Instagram Posts", category: "Design" },
              { type: "Publishing", title: "Books Covers", category: "Design" },
              { type: "Web", title: "Website Designs", category: "Development" },
              { type: "Marketing", title: "Ads and Marketing Campaigns", category: "Marketing" }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  {/* Show actual thumbnail image for Youtube Thumbnails card */}
                  {project.title === "Youtube Thumbnails" ? (
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F6e635168f63247a0bc5d2339f6255adb%2Fc843272e50714a12b7cd2056ec4d992b?format=webp&width=800"
                      alt="Youtube Thumbnails Portfolio"
                      className="w-full h-full object-contain bg-gray-100"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/90 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center">
                      <div className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </div>
                      <div className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.type}
                      </div>
                    </div>
                  </div>
                  {project.title !== "Youtube Thumbnails" && (
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                      <div className="text-gray-400 text-sm font-medium">
                        {project.type} Preview
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 bg-white group-hover:bg-black transition-all duration-500">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-black group-hover:text-white transition-colors duration-500">
                      {project.title}
                    </h3>
                    <span className="text-xs px-3 py-1 bg-black text-white rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it - here's what my clients have to say about working with me.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Amazing work, very professional! Delivered exactly what we needed and more. The attention to detail was incredible.",
                author: "Sarah Johnson",
                role: "Startup Founder",
                rating: 5
              },
              {
                text: "Incredible attention to detail and fast turnaround. Our website conversion rate increased by 300% after the redesign!",
                author: "Mike Chen",
                role: "E-commerce Owner",
                rating: 5
              },
              {
                text: "Creative, reliable, and always goes above and beyond. Best freelancer I've worked with in years!",
                author: "Emily Rodriguez",
                role: "Marketing Manager",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-black mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-black">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
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
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to take your business to the next level? Get in touch and let's discuss your project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-2 border-gray-200 shadow-xl bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-8">
                  Send me a message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-3">
                      Name
                    </label>
                    <Input 
                      placeholder="Your name" 
                      className="border-2 border-gray-200 focus:border-black h-12 text-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-3">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="border-2 border-gray-200 focus:border-black h-12 text-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-3">
                      Project Details
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      className="border-2 border-gray-200 focus:border-black min-h-[150px] resize-none text-lg bg-white"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-black hover:bg-gray-800 text-white font-bold px-6 py-3 transition-all duration-300 hover:scale-105 flex-1">
                      Get a Free Quote
                    </Button>
                    <Button className="bg-white hover:bg-black text-black hover:text-white border-2 border-black font-bold px-6 py-3 transition-all duration-300 hover:scale-105 flex-1">
                      Book a Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-8">
                  Get in touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">your.email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">Available Worldwide</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-black mb-6">
                  Follow me
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="text-3xl font-bold text-white mb-4">
                Kaiwalya Raut
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Helping businesses grow with design, content, websites, and automation. 
                Let's create something amazing together.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-300">About</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors duration-300">Services</a>
                <a href="#portfolio" className="block text-gray-300 hover:text-white transition-colors duration-300">Portfolio</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-300">Design & Branding</p>
                <p className="text-gray-300">Web Development</p>
                <p className="text-gray-300">Content Creation</p>
                <p className="text-gray-300">AI & Automation</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Kaiwalya Raut Freelancer. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
