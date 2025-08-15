import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plug, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Building,
  BookOpen,
  Rocket,
  DollarSign,
  MessageCircle,
  Mail,
  MapPin
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'beta-waitlist',
          ...formData
        }).toString()
      });
      
      if (response.ok) {
        setSubmitMessage('Thank you! You\'ve been added to our beta waitlist.');
        setFormData({ name: '', email: '', company: '', role: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const plugins = [
    {
      name: "Skills Assessment",
      description: "Real-time skill gap analysis with market benchmarking",
      status: "Beta",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Role Matching",
      description: "AI-powered job matching with 95% accuracy",
      status: "Beta", 
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Salary Benchmarker",
      description: "Live market salary data and negotiation insights",
      status: "Beta",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Learning Path Engine",
      description: "Personalized career development roadmaps",
      status: "Development",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Mentorship Connector",
      description: "AI-matched mentor-mentee relationships",
      status: "Development",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const metrics = [
    { value: "50,000+", label: "Waitlisted Professionals", icon: <Users className="w-8 h-8" /> },
    { value: "5", label: "Core Plugins", icon: <Plug className="w-8 h-8" /> },
    { value: "3", label: "Integration Pilots", icon: <Building className="w-8 h-8" /> },
    { value: "95%", label: "AI Matching Accuracy", icon: <Target className="w-8 h-8" /> }
  ];

  const timeline = [
    { period: "Q4 2025", milestone: "Closed Beta Launch", status: "current" },
    { period: "Q1 2026", milestone: "Public Release", status: "upcoming" },
    { period: "Q2 2026", milestone: "Plugin Marketplace", status: "upcoming" },
    { period: "Q3 2026", milestone: "Enterprise Scale", status: "future" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">VibeTensor</h1>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                BETA
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#product" className="text-gray-600 hover:text-gray-900">Product</a>
              <a href="#progress" className="text-gray-600 hover:text-gray-900">Progress</a>
              <a href="#business" className="text-gray-600 hover:text-gray-900">Business</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-300 rounded-full px-6 py-3 mb-8"
            >
              <Rocket className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">Early Access Beta Program</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Plugin-Based
              <span className="gradient-text block">Career Intelligence Toolkit</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Embeddable career plugins that developers and enterprises integrate via our API/SDK. 
              Each plugin installs directly into LMS, ATS, chatbots, or web portals.
              <span className="font-semibold text-purple-600"> 50,000+ professionals</span> already on our waitlist.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <a href="#waitlist" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all">
                <Users className="w-5 h-5" />
                <span>Join Beta Waitlist</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section id="progress" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Progress</h2>
            <p className="text-lg text-gray-600">Build stage with strong early traction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="text-purple-600 mb-4 flex justify-center">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Career Intelligence <span className="text-purple-600">Plugin Ecosystem</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modular career tools that embed directly into existing platforms via our API/SDK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plugins.map((plugin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plugin.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {plugin.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{plugin.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    plugin.status === 'Beta' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {plugin.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{plugin.description}</p>
                <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center space-x-1 group">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Roadmap</h2>
            <p className="text-lg text-gray-600">From closed beta to enterprise scale</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center space-x-6 p-6 rounded-2xl border-2 ${
                  item.status === 'current' 
                    ? 'bg-purple-50 border-purple-500' 
                    : item.status === 'upcoming'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className={`w-4 h-4 rounded-full ${
                  item.status === 'current' ? 'bg-purple-500' :
                  item.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-400'
                }`}></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600 font-medium">{item.period}</span>
                    <span className="font-semibold text-gray-900">{item.milestone}</span>
                    {item.status === 'current' && (
                      <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-medium">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Waitlist Form Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join 50,000+ Professionals on Our Beta Waitlist
            </h2>
            <p className="text-xl text-purple-100">
              Get early access to the career intelligence platform built for the future of work
            </p>
          </div>
          
          {/* Netlify Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <form 
              name="beta-waitlist" 
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="beta-waitlist" />
              <input type="hidden" name="bot-field" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested as a...
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your role</option>
                    <option value="individual">Individual Professional</option>
                    <option value="developer">Developer</option>
                    <option value="hr">HR Professional</option>
                    <option value="enterprise">Enterprise Decision Maker</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Join Beta Waitlist</span>
                    </>
                  )}
                </button>
              </div>
              
              {submitMessage && (
                <div className={`text-center p-4 rounded-lg ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">VibeTensor</h3>
              <p className="text-gray-400">Plugin-based career intelligence platform</p>
            </div>
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Warangal, India</span>
              </div>
              <span>•</span>
              <a href="mailto:info@vibetensor.com" className="hover:text-white">
                info@vibetensor.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
