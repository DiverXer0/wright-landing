import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillsData = [
    { name: 'Azure Cloud', level: 95 },
    { name: 'Microsoft 365', level: 90 },
    { name: 'Cybersecurity', level: 88 },
    { name: 'Agile Leadership', level: 92 },
    { name: 'Digital Transformation', level: 85 },
    { name: 'IT Operations', level: 98 }
  ];

  const projectsData = [
    {
      title: 'Azure Cloud Migration',
      role: 'Head of Technology',
      challenge: 'Migrating legacy systems to Azure cloud infrastructure for 500+ users',
      solution: 'Implemented phased migration strategy with zero downtime',
      outcome: '40% cost reduction, 99.9% uptime achieved',
      image: 'https://images.unsplash.com/photo-1652105425180-3cc628d303cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB0ZWNofGVufDB8fHxibHVlfDE3NTIyMDQ0MDJ8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Cybersecurity Framework',
      role: 'Security Lead',
      challenge: 'Implementing comprehensive security across multiple business units',
      solution: 'Deployed enterprise-grade security protocols and training programs',
      outcome: '95% reduction in security incidents, SOC 2 compliance achieved',
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg'
    },
    {
      title: 'Digital Transformation Initiative',
      role: 'Transformation Director',
      challenge: 'Modernizing workflow processes across 8 departments',
      solution: 'Implemented Microsoft 365 ecosystem with custom automation',
      outcome: '60% productivity increase, $2M annual savings',
      image: 'https://images.pexels.com/photos/7789851/pexels-photo-7789851.jpeg'
    }
  ];

  const testimonialsData = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Dan transformed our entire IT infrastructure with remarkable precision. His leadership and technical expertise saved us millions.',
      image: 'https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      content: 'Working with Dan was exceptional. He delivered complex projects on time and exceeded all expectations.',
      image: 'https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg'
    }
  ];

  return (
    <div className="App">
      {/* Hero Section - Optimized for 267x400 Portrait */}
      <section className="hero-section-alt relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - Takes 3 columns */}
            <div className="lg:col-span-3 text-left">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 text-sm font-medium mb-6">
                  15+ Years Technology Leadership
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="block">Dan</span>
                  <span className="block text-blue-300">Wright</span>
                </h1>
                
                <div className="w-24 h-1 bg-blue-400 mb-8 rounded-full"></div>
                
                <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 max-w-lg">
                  Transforming businesses through strategic technology leadership and innovative digital solutions
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://linkedin.com/in/dan--wright" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-btn bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
                >
                  💼 Connect on LinkedIn
                </a>
                <a 
                  href="https://calendly.com/YOUR_CALENDLY_LINK" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-btn bg-transparent border-2 border-blue-400 text-blue-100 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300 text-center"
                >
                  📅 Schedule a Chat
                </a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-400/30">
                <div>
                  <div className="text-3xl font-bold text-blue-300 mb-1">$10M+</div>
                  <div className="text-blue-200 text-sm">Cost Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300 mb-1">50+</div>
                  <div className="text-blue-200 text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300 mb-1">99.9%</div>
                  <div className="text-blue-200 text-sm">Uptime</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Takes 2 columns, optimized for 267x400 portrait */}
            <div className="lg:col-span-2 relative flex justify-center">
              <div className="relative">
                {/* Main Image Container - Optimized for 267x400 */}
                <div className="glass-card p-4 md:p-6 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl portrait-container">
                  <img 
                    src={`${process.env.PUBLIC_URL}https://diverxer0.github.io/wright-landing/images/profile-photo.jpg`}
                    alt="Dan Wright - Technology Leader"
                    className="w-full h-auto object-cover object-center rounded-2xl profile-image mx-auto"
                    style={{ aspectRatio: '267/400' }}
                    onError={(e) => {
                      console.log('Image failed to load, using fallback');
                      e.target.src = 'images/profile-photo.jpg';
                    }}
                  />
                </div>
                
                {/* Floating Cards - Hidden on very small screens, shown as static on mobile */}
                <div className="hidden sm:block absolute -top-4 -right-2 glass-card p-3 rounded-2xl backdrop-blur-lg bg-blue-500/20 border border-blue-400/30 shadow-xl max-w-[120px]">
                  <div className="text-white font-semibold text-sm">Azure Expert</div>
                  <div className="text-blue-200 text-xs">Cloud Architecture</div>
                </div>
                
                <div className="hidden sm:block absolute -bottom-4 -left-2 glass-card p-3 rounded-2xl backdrop-blur-lg bg-blue-500/20 border border-blue-400/30 shadow-xl max-w-[120px]">
                  <div className="text-white font-semibold text-sm">Security Leader</div>
                  <div className="text-blue-200 text-xs">Cybersecurity</div>
                </div>
                
                {/* Mobile Static Cards */}
                <div className="sm:hidden mt-4 flex gap-2 justify-center">
                  <div className="glass-card p-2 rounded-xl backdrop-blur-lg bg-blue-500/20 border border-blue-400/30 shadow-xl text-center">
                    <div className="text-white font-semibold text-xs">Azure Expert</div>
                  </div>
                  <div className="glass-card p-2 rounded-xl backdrop-blur-lg bg-blue-500/20 border border-blue-400/30 shadow-xl text-center">
                    <div className="text-white font-semibold text-xs">Security Leader</div>
                  </div>
                </div>
              </div>
              
              {/* Background Decorations - Adjusted for portrait layout */}
              <div className="absolute -top-8 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about"
        data-animate
        className={`py-20 bg-gradient-to-b from-white to-blue-50 transition-all duration-1000 ${
          isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Dan
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A visionary technology leader with over 15 years of experience driving digital transformation 
              across diverse industries. Expert in cloud architecture, cybersecurity, and agile methodologies, 
              Dan has consistently delivered innovative solutions that reduce costs, enhance security, and 
              accelerate business growth.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              From spearheading Azure migrations to implementing enterprise-grade security frameworks, 
              Dan combines technical expertise with strategic thinking to solve complex business challenges. 
              His collaborative leadership style has empowered teams to achieve remarkable results while 
              maintaining the highest standards of operational excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-semibold">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$10M+</div>
                <div className="text-gray-600 font-semibold">Cost Savings Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section 
        id="experience"
        data-animate
        className={`py-20 bg-gray-900 transition-all duration-1000 ${
          isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Strategic technology leadership across diverse industries and scale
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="experience-card glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">Head of Technology</h3>
                  <p className="text-blue-300 text-lg font-semibold">Global Manufacturing Corp</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 text-sm font-medium">
                    2020 - Present
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-4">Key Responsibilities</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Led enterprise-wide digital transformation initiative across 12 global locations</li>
                    <li>• Managed $15M annual technology budget and 45+ person IT team</li>
                    <li>• Spearheaded Azure cloud migration for 2,000+ user ecosystem</li>
                    <li>• Established cybersecurity framework achieving SOC 2 Type II compliance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-4">Strategic Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Reduced operational costs by 40% through infrastructure optimization</li>
                    <li>• Increased system uptime from 95% to 99.9% through proactive monitoring</li>
                    <li>• Accelerated product development cycles by 60% via DevOps implementation</li>
                    <li>• Achieved zero security breaches during tenure through robust protocols</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Experience 2 */}
            <div className="experience-card glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">IT Director</h3>
                  <p className="text-blue-300 text-lg font-semibold">TechSolutions Enterprise</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 text-sm font-medium">
                    2017 - 2020
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-4">Key Responsibilities</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Orchestrated Microsoft 365 deployment for 1,500+ users</li>
                    <li>• Built and led high-performance IT operations team</li>
                    <li>• Implemented enterprise-grade security and compliance protocols</li>
                    <li>• Managed technology vendor relationships and strategic partnerships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-4">Strategic Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Delivered $3.2M in annual cost savings through vendor optimization</li>
                    <li>• Improved employee productivity by 45% via collaboration tools</li>
                    <li>• Reduced IT support tickets by 70% through automation</li>
                    <li>• Established disaster recovery protocols with 99.95% reliability</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Experience 3 */}
            <div className="experience-card glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">Senior Systems Manager</h3>
                  <p className="text-blue-300 text-lg font-semibold">Innovation Labs Inc</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 text-sm font-medium">
                    2014 - 2017
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-4">Key Responsibilities</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Led infrastructure modernization and cloud adoption initiatives</li>
                    <li>• Managed critical systems architecture and performance optimization</li>
                    <li>• Developed IT governance frameworks and best practices</li>
                    <li>• Coordinated cross-functional teams for technology implementations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-4">Strategic Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Reduced system downtime by 85% through proactive monitoring</li>
                    <li>• Achieved 30% cost reduction via infrastructure consolidation</li>
                    <li>• Implemented agile methodologies increasing delivery speed by 50%</li>
                    <li>• Established technology roadmap aligning with business strategy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section 
        id="results"
        data-animate
        className={`py-20 bg-gradient-to-b from-blue-50 to-white transition-all duration-1000 ${
          isVisible.results ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Key Results & Impact
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quantifiable business outcomes that drive organizational success
            </p>
          </div>
          
          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="result-card glass-card p-6 rounded-3xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl text-center hover:bg-white/80 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">$15M+</div>
              <div className="text-gray-700 font-semibold mb-2">Cost Savings</div>
              <div className="text-sm text-gray-500">Achieved through strategic technology optimization</div>
            </div>
            
            <div className="result-card glass-card p-6 rounded-3xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl text-center hover:bg-white/80 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-700 font-semibold mb-2">System Uptime</div>
              <div className="text-sm text-gray-500">Maintained across all critical business systems</div>
            </div>
            
            <div className="result-card glass-card p-6 rounded-3xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl text-center hover:bg-white/80 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-700 font-semibold mb-2">Productivity Increase</div>
              <div className="text-sm text-gray-500">Through digital transformation initiatives</div>
            </div>
            
            <div className="result-card glass-card p-6 rounded-3xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl text-center hover:bg-white/80 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">Zero</div>
              <div className="text-gray-700 font-semibold mb-2">Security Breaches</div>
              <div className="text-sm text-gray-500">Maintained through robust cybersecurity protocols</div>
            </div>
          </div>
          
          {/* Strategic Achievements */}
          <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategic Achievements</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="achievement-item p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Cloud Migration Excellence</h4>
                  <p className="text-gray-700 mb-3">Successfully migrated 2,000+ user ecosystem to Azure cloud infrastructure with zero business disruption.</p>
                  <div className="text-sm text-blue-600 font-semibold">Impact: 40% cost reduction, 99.9% uptime achieved</div>
                </div>
                
                <div className="achievement-item p-6 bg-green-50 rounded-2xl border-l-4 border-green-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Team Leadership</h4>
                  <p className="text-gray-700 mb-3">Built and led high-performance IT teams across multiple organizations, mentoring 45+ professionals.</p>
                  <div className="text-sm text-green-600 font-semibold">Impact: 95% employee retention, 60% faster delivery</div>
                </div>
                
                <div className="achievement-item p-6 bg-purple-50 rounded-2xl border-l-4 border-purple-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h4>
                  <p className="text-gray-700 mb-3">Orchestrated enterprise-wide digital transformation across 12 global locations.</p>
                  <div className="text-sm text-purple-600 font-semibold">Impact: $3.2M annual savings, 45% productivity boost</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="achievement-item p-6 bg-orange-50 rounded-2xl border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity Excellence</h4>
                  <p className="text-gray-700 mb-3">Implemented comprehensive security frameworks achieving SOC 2 Type II compliance.</p>
                  <div className="text-sm text-orange-600 font-semibold">Impact: Zero security incidents, 100% compliance</div>
                </div>
                
                <div className="achievement-item p-6 bg-teal-50 rounded-2xl border-l-4 border-teal-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Process Optimization</h4>
                  <p className="text-gray-700 mb-3">Automated critical business processes reducing manual intervention by 70%.</p>
                  <div className="text-sm text-teal-600 font-semibold">Impact: 70% reduction in support tickets, improved efficiency</div>
                </div>
                
                <div className="achievement-item p-6 bg-red-50 rounded-2xl border-l-4 border-red-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Strategic Partnerships</h4>
                  <p className="text-gray-700 mb-3">Established vendor partnerships and technology alliances driving innovation and cost efficiency.</p>
                  <div className="text-sm text-red-600 font-semibold">Impact: 30% vendor cost reduction, improved service levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section 
        id="projects"
        data-animate
        className={`py-20 bg-gray-900 transition-all duration-1000 ${
          isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transformative initiatives that delivered measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div 
                key={index}
                className="project-card glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-blue-300 font-semibold mb-4">{project.role}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-200 mb-2">CHALLENGE</h4>
                    <p className="text-gray-300 text-sm">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-200 mb-2">SOLUTION</h4>
                    <p className="text-gray-300 text-sm">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-200 mb-2">OUTCOME</h4>
                    <p className="text-green-300 text-sm font-semibold">{project.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Commented out for now */}
      {/* 
      <section 
        id="skills"
        data-animate
        className={`py-20 bg-gradient-to-b from-blue-50 to-white transition-all duration-1000 ${
          isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Azure', 'Microsoft 365', 'PowerBI', 'SharePoint', 'Teams', 'Security Center', 'DevOps', 'PowerShell'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-semibold hover:bg-blue-200 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Testimonials */}
      <section 
        id="testimonials"
        data-animate
        className={`py-20 bg-gray-900 transition-all duration-1000 ${
          isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What Leaders Say
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-300"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-blue-300">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-200 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how strategic technology leadership can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" 
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
              >
                💼 Connect on LinkedIn
              </a>
              <a 
                href="https://calendly.com/YOUR_CALENDLY_LINK" 
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 text-center"
              >
                📅 Schedule a Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dan Wright</h3>
              <p className="text-gray-400">
                Technology Leader & Innovator
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 dan.wright@email.com</li>
                <li>📱 +1 (555) 123-4567</li>
                <li>🌐 LinkedIn Profile</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Expertise</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cloud Architecture</li>
                <li>Digital Transformation</li>
                <li>Cybersecurity</li>
                <li>Agile Leadership</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dan Wright. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
