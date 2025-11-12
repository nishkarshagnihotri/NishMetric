import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe } from 'lucide-react';
import logo from '../src/assets/logo.png';
const App = () => {
  const handleExploreClick = () => {
    window.open('https://www.youtube.com', '_blank');
  };
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-indigo-50 text-gray-900">
      {/* Navbar */}
      <div className="relative flex justify-between items-center px-10 py-5 bg-white/80 backdrop-blur-md shadow-md top-0 z-50">
        <div className="flex items-center space-x-3 h-full">
          <div className="relative h-16 aspect-square">
            <img
              src={logo}
              alt="Logo"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-indigo-700">
            NishMetric
          </h1>
        </div>
        <div>
          <nav className="space-x-8 text-gray-700 font-medium">
            <a href="#home" className="hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#about" className="hover:text-indigo-600 transition">
              About
            </a>
            <a href="#projects" className="hover:text-indigo-600 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col items-center justify-center text-center py-28 px-6"
      >
        <motion.h2
          className="text-6xl font-bold text-indigo-700 mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Businesses with <br /> Intelligent Data Solutions
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mb-10 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          We at{' '}
          <span className="font-semibold text-indigo-600">NishMetric</span>{' '}
          believe in transforming raw data into powerful insights. Your growth —
          powered by analytics.
        </motion.p>
        <motion.button
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition-all"
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            handleExploreClick();
          }}
        >
          Explore Our Work
        </motion.button>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 px-10 bg-white text-center">
        <h3 className="text-4xl font-bold text-indigo-700 mb-6">About Us</h3>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
          NishMetric is a next-generation analytics company that helps
          organizations harness the power of data. From visualization to
          automation, we build scalable insights systems designed to optimize
          business performance and drive measurable results.
        </p>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 px-10 bg-indigo-50 text-center">
        <h3 className="text-4xl font-bold text-indigo-700 mb-10">
          Our Projectss
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Sales Intelligence Dashboard',
              desc: 'A dynamic sales analytics platform providing insights into team performance, targets, and revenue growth.',
            },
            {
              title: 'Customer Insights System',
              desc: 'AI-powered insights to help businesses understand behavior, predict churn, and improve retention.',
            },
            {
              title: 'Performance Metrics Hub',
              desc: 'A unified dashboard visualizing KPIs across departments for better decision-making.',
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
              }}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 transition-all"
              onClick={() => handleExploreClick()}
            >
              <h4 className="text-2xl font-semibold mb-3 text-indigo-600">
                {project.title}
              </h4>
              <p className="text-gray-600 text-base">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 px-10 text-center bg-white">
        <h3 className="text-4xl font-bold text-indigo-700 mb-6">
          Get In Touch with
        </h3>
        <p className="text-gray-600 mb-8 text-lg">
          Interested in collaborating or learning more about NishMetric? Let’s
          connect.
        </p>
        <div className="flex justify-center gap-8 text-indigo-600 text-3xl">
          <a
            href="mailto:nishkarsh.agnihotri11@gmail.com"
            className="hover:text-indigo-800 transition"
          >
            <Mail />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-indigo-800 transition"
          >
            <Linkedin />
          </a>
          <a href="#" className="hover:text-indigo-800 transition">
            <Globe />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-indigo-700 text-white py-6 text-center">
        <p className="text-sm">
          © 2025 <span className="font-semibold">NishMetric</span>. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default App;
