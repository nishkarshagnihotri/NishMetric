// NishMetric Full React Setup (Tailwind + Charts + Animation)

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { motion } from "framer-motion";
import { Menu, X, Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import Logo from "./assets/nishmetric-logo.png";

const CONTACT_EMAIL = "nishkarsh.agnihotri11@gmail.com";
const WHATSAPP =
  "https://wa.me/918954242748?text=Hi%20Nishkarsh%20I’m%20interested%20in%20your%20data%20analytics%20services.";
const TAGLINE = "Turning data into intelligent decisions.";

const NAV_ITEMS = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const lineData = [
  { name: "Jan", value: 300 },
  { name: "Feb", value: 700 },
  { name: "Mar", value: 900 },
  { name: "Apr", value: 850 },
  { name: "May", value: 1100 },
  { name: "Jun", value: 1250 },
];

const barData = [
  { name: "A", uv: 2400 },
  { name: "B", uv: 1398 },
  { name: "C", uv: 9800 },
  { name: "D", uv: 3908 },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center p-5">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="NishMetric" className="h-10 w-10 rounded-full" />
          <h1 className="font-bold text-2xl">NishMetric</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:underline">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 items-center bg-blue-700 py-4"
        >
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center p-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {TAGLINE}
        </motion.h2>
        <p className="text-lg mb-6 max-w-lg">
          Empowering businesses with insightful data visualization and
          analytics.
        </p>
        <div className="flex gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <MessageCircle className="inline mr-2" /> Chat on WhatsApp
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="bg-white text-blue-700 px-5 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <Mail className="inline mr-2" /> Email Me
          </a>
        </div>
      </main>

      {/* Charts Section */}
      <section className="p-10 grid md:grid-cols-2 gap-10 bg-white text-blue-700 rounded-t-3xl">
        <div>
          <h3 className="text-xl font-semibold mb-3">Performance Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Project Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="uv" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm">
        <div className="flex justify-center gap-6 mb-2">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        </div>
        <p>© 2025 NishMetric | Designed with 💙 by Nishkarsh Agnihotri</p>
      </footer>
    </div>
  );
}