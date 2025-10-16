import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'
import logo from './assets/image.png'

// Import all images
import img1 from './assets/images/1000836989.jpg'
import img2 from './assets/images/1000836990.jpg'
import img3 from './assets/images/1000836991.jpg'
import img4 from './assets/images/1000836992.jpg'
import img5 from './assets/images/1000836993.jpg'
import img6 from './assets/images/1000836994.jpg'
import img7 from './assets/images/1000836995.jpg'
import img8 from './assets/images/1000836996.jpg'
import img9 from './assets/images/1000836997.jpg'
import img10 from './assets/images/1000836998.jpg'
import img11 from './assets/images/1000836999.jpg'
import img12 from './assets/images/1000837000.jpg'
import img13 from './assets/images/1000837001.jpg'
import img14 from './assets/images/1000837002.jpg'
import img15 from './assets/images/1000837003.jpg'
import img16 from './assets/images/1000837004.jpg'
import img17 from './assets/images/1000837005.jpg'
import img18 from './assets/images/1000837006.jpg'
import img19 from './assets/images/1000837007.jpg'
import img20 from './assets/images/1000837008.jpg'
import img21 from './assets/images/1000837009.jpg'
import img22 from './assets/images/1000837010.jpg'
import img23 from './assets/images/1000837011.jpg'
import img24 from './assets/images/1000837012.jpg'
import img25 from './assets/images/1000837013.jpg'
import img26 from './assets/images/1000837014.jpg'
import img27 from './assets/images/1000837015.jpg'
import img28 from './assets/images/1000837016.jpg'
import img29 from './assets/images/1000837017.jpg'
import img30 from './assets/images/1000837018.jpg'
import img31 from './assets/images/1000837019.jpg'
import img32 from './assets/images/1000837020.jpg'
import img33 from './assets/images/1000837021.jpg'
import img34 from './assets/images/1000837022.jpg'
import img35 from './assets/images/1000837023.jpg'
import img36 from './assets/images/1000837024.jpg'
import img37 from './assets/images/1000837025.jpg'
import img38 from './assets/images/1000837026.jpg'
import img39 from './assets/images/1000837027.jpg'
import img40 from './assets/images/1000837028.jpg'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const services = [
    {
      title: "Treadmill Therapy",
      description: "State-of-the-art equine treadmill for controlled exercise, rehabilitation, and fitness training. Perfect for injury recovery and maintaining peak performance.",
      image: img4,
      features: ["Controlled pace", "Incline adjustment", "Weather-independent", "Progress monitoring"]
    },
    {
      title: "Sea Salt & Oxygen Therapy",
      description: "Advanced respiratory therapy combining sea salt inhalation with oxygen enrichment to support respiratory health and overall wellbeing.",
      image: img23,
      features: ["Respiratory support", "Natural healing", "Stress reduction", "Enhanced recovery"]
    },
    {
      title: "Laser Therapy",
      description: "Cutting-edge laser treatment for pain management, tissue repair, and accelerated healing of injuries and chronic conditions.",
      image: img40,
      features: ["Pain relief", "Faster healing", "Non-invasive", "Reduced inflammation"]
    },
    {
      title: "Residential Rehabilitation",
      description: "Comprehensive residential care programs tailored to your horse's specific needs, with 24/7 professional supervision and personalized treatment plans.",
      image: img6,
      features: ["24/7 care", "Custom programs", "Expert supervision", "Comfortable facilities"]
    }
  ]

  // Before & After progress images (with dates and weights)
  const beforeAfterImages = [
    img1, img2, img3, img5, img11, img12, img13, img14, img15, img16, 
    img17, img18, img19, img20, img31, img32, img33, img34, img35, img36
  ]

  // General facility and therapy images (no dates)
  const facilityImages = [
    img4, img6, img7, img8, img9, img10, img21, img22, img23, img24,
    img25, img26, img27, img28, img29, img30, img37, img38, img39, img40
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Cheshire",
      rating: 5,
      text: "The team at HLS Equine Therapy transformed my horse's recovery journey. The treadmill therapy was exactly what we needed, and the staff's expertise is unmatched."
    },
    {
      name: "James Thompson",
      location: "Lancashire",
      rating: 5,
      text: "Outstanding facilities and professional care. My competition horse received the best possible rehabilitation, and we're back to winning thanks to their dedication."
    },
    {
      name: "Emma Roberts",
      location: "Manchester",
      rating: 5,
      text: "I cannot recommend HLS Equine Therapy highly enough. The residential program gave my horse the time and treatment needed for a full recovery."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="HLS Equine Therapy" className="h-16 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">HLS Equine Therapy</h1>
                <p className="text-sm text-teal-600">Professional Horse Rehabilitation</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-teal-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition">Services</a>
              <a href="#results" className="text-gray-700 hover:text-teal-600 transition">Results</a>
              <a href="#gallery" className="text-gray-700 hover:text-teal-600 transition">Gallery</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition">Contact</a>
              <Button className="bg-teal-600 hover:bg-teal-700">Book Consultation</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-teal-600">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-teal-600">Services</a>
              <a href="#results" className="block text-gray-700 hover:text-teal-600">Results</a>
              <a href="#gallery" className="block text-gray-700 hover:text-teal-600">Gallery</a>
              <a href="#about" className="block text-gray-700 hover:text-teal-600">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-teal-600">Contact</a>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Book Consultation</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={img4} alt="Hero" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Equine Therapy & Rehabilitation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Leading equine therapy center in North West England offering state-of-the-art treadmill therapy, 
              sea salt & oxygen treatment, laser therapy, and comprehensive residential rehabilitation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive equine therapy and rehabilitation services tailored to your horse's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ChevronRight className="h-5 w-5 text-teal-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 bg-teal-600 hover:bg-teal-700 w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Results Section */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="h-10 w-10 text-teal-600" />
              <h2 className="text-4xl font-bold text-gray-900">Before & After Results</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real progress tracking showing the transformative results of our therapy programs. 
              Each image shows documented weight gain and recovery progress over time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {beforeAfterImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-75 transition border-2 border-teal-100 hover:border-teal-400"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`Progress ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-12 bg-teal-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our comprehensive therapy programs deliver measurable results. We track progress through regular 
              weigh-ins and photographic documentation, ensuring your horse receives the best possible care 
              and achieves optimal recovery outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art equipment and comfortable accommodations for your horse's rehabilitation journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilityImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-75 transition"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`Facility ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by horse owners across North West England
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About HLS Equine Therapy</h2>
              <p className="text-gray-600 mb-4">
                HLS Equine Therapy is a leading equine rehabilitation and therapy center located in North West England. 
                We specialize in providing comprehensive care for horses recovering from injury, managing chronic conditions, 
                or seeking to maintain peak performance.
              </p>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art facilities include an advanced equine treadmill, sea salt and oxygen therapy chambers, 
                cutting-edge laser therapy equipment, and comfortable residential rehabilitation accommodations. Every treatment 
                plan is customized to meet the specific needs of each horse, ensuring optimal recovery and results.
              </p>
              <p className="text-gray-600 mb-6">
                With years of experience and a team of dedicated professionals, we are committed to providing the highest 
                standard of equine care. Our holistic approach combines modern technology with proven therapeutic techniques 
                to deliver exceptional outcomes for horses and peace of mind for their owners.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700">
                Learn More About Us
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={img6} alt="About 1" className="rounded-lg shadow-lg" />
              <img src={img7} alt="About 2" className="rounded-lg shadow-lg mt-8" />
              <img src={img8} alt="About 3" className="rounded-lg shadow-lg" />
              <img src={img9} alt="About 4" className="rounded-lg shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact us today to discuss your horse's needs and schedule a consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+44 (0) 1234 567890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@hlsequinetherapy.co.uk</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">North West England</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Tell us about your horse's needs..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logo} alt="HLS Equine Therapy" className="h-16 w-auto mb-4" />
              <p className="text-gray-400">
                Professional equine therapy and rehabilitation services in North West England.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#results" className="text-gray-400 hover:text-white">Results</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Treadmill Therapy</li>
                <li className="text-gray-400">Sea Salt & Oxygen</li>
                <li className="text-gray-400">Laser Therapy</li>
                <li className="text-gray-400">Residential Care</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+44 (0) 1234 567890</li>
                <li>info@hlsequinetherapy.co.uk</li>
                <li>North West England</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HLS Equine Therapy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Gallery" className="max-w-full max-h-full object-contain" />
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  )
}

export default App

