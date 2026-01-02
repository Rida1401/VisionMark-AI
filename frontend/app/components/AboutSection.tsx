"use client";

import { Code, Shield, Users, Award } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Technology",
      description: "Built with Next.js, Flask, and cutting-edge AI",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy Focused",
      description: "Your data security is our top priority",
      color: "text-emerald-600", 
      bgColor: "bg-emerald-100"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Friendly",
      description: "Intuitive interface designed for everyone",
      color: "text-purple-600",
      bgColor: "bg-purple-100" 
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Enterprise Grade",
      description: "Reliable performance at any scale",
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">VisionMark AI</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Digital Identity</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Next-generation attendance management powered by advanced facial recognition.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-900">VisionMark AI</span> represents the pinnacle of modern biometric technology, 
              seamlessly combining artificial intelligence with user-centric design to deliver 
              unparalleled security and convenience.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Built with Next.js, Flask, MongoDB, and DeepFace, <span className="font-semibold text-slate-900">VisionMark AI</span> provides a 
              comprehensive full-stack solution for facial recognition applications with 
              privacy and security at the forefront of every decision.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Powered By</h3>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'Flask', 'MongoDB', 'DeepFace', 'Python', 'TypeScript'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`p-3 rounded-xl ${highlight.bgColor} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={highlight.color}>
                  {highlight.icon}
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-slate-800 mb-2">
                {highlight.title}
              </h4>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mt-16 text-center">
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            To democratize advanced facial recognition technology, making it accessible, secure, 
            and user-friendly for organizations of all sizes while maintaining the highest 
            standards of privacy and ethical AI practices.
          </p>
        </div>
      </div>

      {/* Owner Credit */}
      <div className="mt-12 text-center pt-8 border-t border-slate-100">
        <p className="text-slate-500 text-sm">
          Created & Owned by <span className="font-semibold text-slate-700">Rida</span>
        </p>
      </div>
    </section>
  );
}
