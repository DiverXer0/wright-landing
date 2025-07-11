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
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('https://images.unsplash.com/flagged/photo-1573603867114-76112e1d7a23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNofGVufDB8fHxibHVlfDE3NTIyMDQ0MDJ8MA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649768870222-17848797d6b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMjA0NDA4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Dan Wright"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                Dan Wright
              </h1>
              <p className="text-2xl md:text-3xl text-blue-100 font-light mb-8">
                Technology Leader & Innovator
              </p>
            </div>
            
            <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transforming businesses through strategic technology leadership and innovative solutions. 
              15+ years of proven excellence in IT operations and digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="premium-btn bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                💼 Connect on LinkedIn
              </button>
              <button className="premium-btn bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300">
                📅 Schedule a Chat
              </button>
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
              <button className="premium-btn bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl">
                💼 Connect on LinkedIn
              </button>
              <button className="premium-btn bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300">
                📅 Schedule a Chat
              </button>
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