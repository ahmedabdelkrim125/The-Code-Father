import React from 'react';
import { Github, Linkedin, ExternalLink, Code, Smartphone, Database, Palette, Users, ArrowRight, Sun, Moon } from 'lucide-react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const teamMembers = [
    {
      name: "Ahmed Abdelkrim",
      role: "Flutter Developer",
      image: "/IMG-20250828-WA0015.jpg",
      linkedin: "https://www.linkedin.com/in/ahmed-abdelkrim166/",
      github: "https://github.com/ahmedabdelkrim125",
      tech: ["Flutter", "Dart", "Firebase", "Git"],
      gradient: "from-blue-400 to-purple-600"
    },
    {
      name: "Omar Mohammed",
      role: ".NET Backend Developer",
      image: null,
      linkedin: "#",
      tech: [".NET Core", "C#", "SQL Server", "Azure"],
      gradient: "from-green-400 to-blue-600"
    },
    {
      name: "Mahmoud Ragab",
      role: ".NET Backend Developer", 
      image: null,
      linkedin: "#",
      tech: [".NET Core", "C#", "Entity Framework", "Docker"],
      gradient: "from-purple-400 to-pink-600"
    },
    {
      name: "Aya Hesham",
      role: "UI/UX Designer",
      image: null,
      linkedin: "https://www.linkedin.com/in/aya--designer/",
      behance: "https://www.behance.net/ayahisham119",
      tech: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      gradient: "from-pink-400 to-red-600"
    },
    {
      name: "Nada Osama",
      role: "UI/UX Designer",
      image: null,
      linkedin: "https://www.linkedin.com/in/nadaosama74/",
      tech: ["Figma", "Adobe Creative Suite", "User Research", "Wireframing"],
      gradient: "from-orange-400 to-pink-600"
    },
    {
      name: "Yusra",
      role: "Flutter Developer",
      image: null,
      linkedin: "#",
      tech: ["Flutter", "Dart", "State Management", "API Integration"],
      gradient: "from-teal-400 to-blue-600"
    }
  ];

  const technologies = [
    { name: "Flutter", icon: Smartphone, color: "text-blue-500" },
    { name: ".NET Core", icon: Code, color: "text-purple-500" },
    { name: "SQL Server", icon: Database, color: "text-green-500" },
    { name: "Figma", icon: Palette, color: "text-pink-500" },
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
            isDarkMode 
              ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
              : 'bg-black/10 border-black/20 text-gray-800 hover:bg-black/20'
          }`}
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className={`absolute inset-0 backdrop-blur-sm ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20' 
            : 'bg-gradient-to-r from-blue-200/30 to-purple-200/30'
        }`}></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              The CodeFather
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              A dynamic team of developers and designers crafting exceptional digital experiences
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className={`flex items-center space-x-2 backdrop-blur-md rounded-full px-6 py-3 border transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/10 border-white/20 hover:bg-white/20' 
                    : 'bg-black/10 border-black/20 hover:bg-black/20'
                }`}
              >
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4">
            <Users className="w-6 h-6 text-blue-400" />
            <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{teamMembers.length} talented professionals</span>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-black/20' : 'bg-white/30'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Current Project</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Check out our latest work - a comprehensive grocery mobile app with heuristic evaluation
            </p>
          </div>
          
          <div className={`backdrop-blur-md rounded-3xl border overflow-hidden transform hover:scale-105 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20' 
              : 'bg-gradient-to-br from-black/10 to-black/5 border-black/20'
          }`}>
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Grocery Mobile App
                  </h3>
                  <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A comprehensive heuristic evaluation of a grocery mobile application, showcasing our team's expertise in user experience design and mobile app development.
                  </p>
                  <a 
                    href="https://www.behance.net/gallery/234516587/Grocery-Mobile-App-Heuristic-Evaluation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                  >
                    <span>View on Behance</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="relative">
                  <div className={`rounded-2xl p-4 border overflow-hidden ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-white/10' 
                      : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-black/10'
                  }`}>
                    <img 
                      src="/d7f763234516587.68c4ab6fa94ff.webp" 
                      alt="Grocery Mobile App Screens"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="text-center mt-4">
                      <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Mobile-First Design</h4>
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>User-centered approach with comprehensive evaluation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Meet Our Team</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A diverse group of passionate professionals united by our love for creating amazing digital products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`group relative backdrop-blur-md rounded-2xl border overflow-hidden hover:scale-105 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20' 
                    : 'bg-gradient-to-br from-black/10 to-black/5 border-black/20'
                }`}
              >
                <div className="p-8">
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.gradient} p-1 mx-auto`}>
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full rounded-full flex items-center justify-center text-2xl font-bold ${
                          isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
                        }`}>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{member.name}</h3>
                    <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{member.role}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {member.tech.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm border ${
                          isDarkMode 
                            ? 'bg-white/10 text-gray-300 border-white/20' 
                            : 'bg-black/10 text-gray-700 border-black/20'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    )}
                    {member.github && (
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {member.behance && (
                      <a 
                        href={member.behance} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50' 
          : 'bg-gradient-to-r from-blue-200/50 to-purple-200/50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Ready to Work Together?
          </h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's bring your ideas to life with our combined expertise in development and design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold">
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className={`inline-flex items-center space-x-2 border-2 px-8 py-4 rounded-full transition-all duration-300 font-semibold ${
              isDarkMode 
                ? 'border-white/30 text-white hover:bg-white/10' 
                : 'border-black/30 text-gray-800 hover:bg-black/10'
            }`}>
              <span>View More Work</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${
        isDarkMode 
          ? 'bg-black/30 border-white/10' 
          : 'bg-white/30 border-black/10'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>The CodeFather</h3>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Crafting digital excellence since 2024</p>
          <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            © 2024 The CodeFather Team. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;