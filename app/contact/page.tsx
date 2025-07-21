'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#181a23] pt-10 pb-20 relative">
      {/* Sidebar Socials */}
      {/* Removed Discord, Telegram, and Skype icons */}

      {/* Main Content */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center px-4 md:px-0">
        <div className="flex flex-col items-center mb-8 w-full">
          <span className="text-xs text-cyan-400 font-mono tracking-widest mb-1">../contact</span>
          <div className="flex items-center gap-2">
            <h1 className="text-[3.5rem] md:text-[4rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-lg leading-none relative -top-2 text-center">
              Contact
            </h1>
          </div>
          <p className="text-gray-200 text-center mt-4 max-w-xl font-medium">
            I'm always open to new work opportunities or collaborating on some amazing new projects. Just fill out the form and I'll get back to you. <span className="ml-1">💪</span>
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full mb-8 items-center justify-center">
          {/* Removed Telegram card */}
          <div className="flex-1 bg-[#23233b] rounded-xl p-5 flex flex-col items-start shadow-lg border border-[#23233b] min-w-[220px] max-w-xs w-full">
            <div className="flex items-center gap-2 mb-1">
              {/* No label or icon, just the address */}
            </div>
            <span className="text-gray-300 text-sm">sweetieprovider@gmail.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full flex flex-col gap-4 mt-2 items-center">
          <input
            type="text"
            placeholder="Name 🧑"
            className="bg-[#181a23] border border-[#23233b] rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition w-full max-w-xl"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email @"
            className="bg-[#181a23] border border-[#23233b] rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition w-full max-w-xl"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message 💬"
            rows={5}
            className="bg-[#181a23] border border-[#23233b] rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition resize-none w-full max-w-xl"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            disabled={sending}
            className="mt-4 mx-auto flex items-center gap-2 px-8 py-2 rounded-xl border-2 border-cyan-400 text-cyan-200 font-semibold text-lg shadow-[0_8px_40px_0_rgba(0,212,255,0.18)] hover:bg-cyan-400 hover:text-[#181a23] transition-all duration-300 relative"
            style={{ boxShadow: '0 8px 40px 0 rgba(0,212,255,0.18)' }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
} 