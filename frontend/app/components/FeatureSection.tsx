"use client";

import { Camera, UserPlus, Shield, BarChart3, Clock, Settings } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Real-time Recognition",
      description: "Recognize faces instantly using live webcam capture with industry-leading accuracy and speed.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Easy Registration",
      description: "Register new users seamlessly via webcam with secure encrypted facial embeddings storage.",
      color: "from-emerald-500 to-emerald-600", 
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      textColor: "text-emerald-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "User Management",
      description: "Comprehensive dashboard to view, manage, and monitor all registered users with real-time analytics.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50", 
      iconBg: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Bank-grade encryption and secure data handling ensure your facial data remains completely protected.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100", 
      textColor: "text-amber-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Sub-second processing times with optimized algorithms for instant recognition and response.",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      iconBg: "bg-rose-100",
      textColor: "text-rose-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Easy Integration",
      description: "Simple API integration with existing systems and customizable configuration options.",
      color: "from-indigo-500 to-indigo-600", 
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      textColor: "text-indigo-600"
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
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">VisionMark AI Features</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Modern Recognition</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Experience cutting-edge facial recognition technology with enterprise-grade security and user-friendly interface.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group p-8 rounded-2xl border-2 border-slate-200 hover:border-slate-300 bg-white hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2`}
          >
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
            
            {/* Content */}
            <div className="relative z-10">
              <div className={`p-4 rounded-xl ${feature.iconBg} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={feature.textColor}>
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
          </div>
        ))}
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
