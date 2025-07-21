'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaAws, FaEthereum } from 'react-icons/fa';
import { SiRedux, SiMongodb, SiMysql, SiSolidity, SiRust, SiNextdotjs, SiNuxtdotjs, SiWeb3Dotjs, SiFigma, SiTailwindcss, SiSocketdotio, SiGraphql, SiMobx, SiVuedotjs, SiAngular, SiTypescript } from 'react-icons/si';
import { StarsCanvas } from "./star-background";

const techIconMap: Record<string, React.ReactNode> = {
  'React.js': <FaReact className="text-cyan-300" />,
  'React': <FaReact className="text-cyan-300" />,
  'Node.js': <FaNodeJs className="text-green-400" />,
  'HTML': <FaHtml5 className="text-orange-400" />,
  'CSS': <FaCss3Alt className="text-blue-400" />,
  'JavaScript': <FaJs className="text-yellow-300" />,
  'Redux': <SiRedux className="text-purple-400" />,
  'MERN': <FaNodeJs className="text-green-400" />,
  'MongoDB': <SiMongodb className="text-green-500" />,
  'MySQL': <SiMysql className="text-blue-400" />,
  'Solidity': <SiSolidity className="text-gray-200" />,
  'Rust': <SiRust className="text-orange-500" />,
  'NextJS': <SiNextdotjs className="text-gray-200" />,
  'Next.js': <SiNextdotjs className="text-gray-200" />,
  'NuxtJS': <SiNuxtdotjs className="text-green-400" />,
  'Web3.js': <SiWeb3Dotjs className="text-yellow-400" />,
  'Figma': <SiFigma className="text-pink-400" />,
  'TailwindCSS': <SiTailwindcss className="text-cyan-400" />,
  'Socket.IO': <SiSocketdotio className="text-gray-200" />,
  'GraphQL': <SiGraphql className="text-pink-400" />,
  'MobX': <SiMobx className="text-orange-400" />,
  'Vue.js': <SiVuedotjs className="text-green-400" />,
  'Angular': <SiAngular className="text-red-400" />,
  'MetaMask': <FaEthereum className="text-yellow-400" />,
  'Amazon S3': <FaAws className="text-yellow-400" />,
  'Agile': <span className="text-cyan-300 font-bold">Agile</span>,
  'Solana': <FaEthereum className="text-cyan-400" />,
  'Ethereum': <FaEthereum className="text-cyan-400" />,
  'Phantom': <FaEthereum className="text-purple-400" />,
  'Typescript': <SiTypescript className="text-blue-400" />,
  'Uniswap': <span className="text-pink-400 font-bold">UNI</span>,
  'Compound': <span className="text-green-400 font-bold">COMP</span>,
  'Aave': <span className="text-blue-400 font-bold">AAVE</span>,
};

const blockchainSVG = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="animate-spin-slow" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" stroke="#06b6d4" strokeWidth="2" fill="none" />
    <circle cx="16" cy="16" r="7" stroke="#a78bfa" strokeWidth="2" fill="none" />
    <circle cx="16" cy="16" r="2" fill="#06b6d4" />
    <path d="M16 9V16L22 19" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const experiences = [
  {
    title: 'Full Stack Web3 Developer',
    company: 'Self Employed',
    date: '03/2025',
    location: 'Sendai, Miyagi, Japan',
    bullets: [
      'Collaborated with UX and UI designers to create modern UI using TailWindCSS, focusing on utility-first principles to accelerate development and maintain scalability.',
      'Integrated prominent DeFi protocols like Uniswap, Compound, and Aave with decentralized applications, allowing seamless access to financial services for over 3,000 users.',
      'Implemented functionalities for decentralized applications (DApps) by integrating Smart Contracts with front-end using Web3.js.',
      'Developed decentralized applications such as NFT marketplaces, crowdfunding platforms, and decentralized exchanges, attracting over 2,500 daily active users cumulatively.',
      'Conceptualized and led the development of highly engaging, visually striking meme coins, demonstrating my creative design skills and ability to build compelling cryptocurrency projects.'
    ],
    techs: ['TailwindCSS', 'Web3.js', 'Uniswap', 'Compound', 'Aave']
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Drip Finance',
    date: '08/2023 – 03/2025',
    location: '',
    bullets: [
      'Investigated new technologies that can be used to enhance existing product features.',
      'Created RESTful APIs with Node.js and Express to provide data access for client-side applications.',
      'Collaborated with UX designers to develop three dimensional responsive user interface.',
      'Enhanced wallet connect & web3 integrations using wagmi/rainbowkit modules.',
      'Designed databases using MySQL and MongoDB for storing application data.',
      'Modified existing software to correct errors, adapt to new hardware or upgrade interfaces.'
    ],
    techs: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'wagmi', 'rainbowkit']
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Forest Staking',
    date: '04/2023 – 07/2023',
    location: 'London, England',
    bullets: [
      'Designed a visually stunning and highly intuitive user interface using the Figma design platform, delivering an exceptional user experience that increased customer engagement and satisfaction by 30%.',
      'Ensured that the websites are optimized for mobile devices by implementing best practices for responsive design.',
      'Designed interactive prototypes to demonstrate functionalities of user interface components.',
      'Managed day-to-day tasks related to UI development including bug fixes, feature requests.',
      'Evaluated emerging technologies related to UI development such as NextJS and NuxtJS.'
    ],
    techs: ['Figma', 'NextJS', 'NuxtJS']
  },
  {
    title: 'Smart Contract Developer',
    company: 'Soteria Smart Contracts Inc',
    date: '04/2022 – 03/2023',
    location: 'Ontario, Canada',
    bullets: [
      'Collaborated with cross-functional teams to develop and deploy Smart Contracts on the Ethereum & Solana networks using Solidity and Rust.',
      'Pioneered the implementation of advanced Smart Contract features, such as atomic swaps, flash loans, liquid staking and batch transactions, increasing the efficiency and scalability of decentralized finance (DeFi) protocols.',
      'Designed and deployed 10+ high-performance, secure Smart Contracts on the Ethereum and Solana blockchains, powering decentralized applications (dApps) with over $10 million in total value locked.',
      'Integrated secure wallet functionality, supporting MetaMask, Phantom, and Solana Wallet, into 8 decentralized applications (dApps), enabling seamless user onboarding.'
    ],
    techs: ['Solidity', 'Rust', 'Ethereum', 'Solana', 'MetaMask', 'Phantom']
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Fixer',
    date: '03/2019 – 03/2022',
    location: 'Tokyo, Japan',
    bullets: [
      'Integrated third-party services like Amazon S3 into existing applications.',
      'Optimized web page performance by minimizing HTTP requests and leveraging caching techniques.',
      'Analyzed business requirements and translated them into technical specifications documents.',
      'Implemented agile development practices across multiple projects, ensuring timely delivery of high-quality solutions within budget constraints.',
      'Analyzed user needs and software requirements to determine feasibility of design within time and cost constraints.'
    ],
    techs: ['Amazon S3', 'Agile']
  },
  {
    title: 'Full Stack Developer',
    company: 'Wippo IT',
    date: '07/2016 – 12/2018',
    location: 'Chisinau, Moldova',
    bullets: [
      'Developed and maintained front-end web applications using HTML, CSS, JavaScript, React.js, and Redux.',
      'Created reusable components that can be shared across different projects, reducing development time.',
      'Developed custom CMS from scratch utilizing MERN stack technologies.',
      'Wrote well-designed, testable code.',
      'Prepared reports and correspondence concerned project specifications, activities and status.'
    ],
    techs: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'MERN']
  },
  {
    title: 'Web Developer Intern',
    company: 'IQGeo Japan KK',
    date: '02/2015 – 01/2016',
    location: 'Tokyo, Japan',
    bullets: [
      'Designed and implemented responsive, mobile-first user interfaces for 10+ web applications using leading JavaScript frameworks like React, Vue.js, and Angular, delivering seamless experiences across devices.',
      'Developed complex, full-stack web applications by integrating JavaScript-based front-end libraries and frameworks with robust back-end APIs, databases, and serverless functions, resulting in 25% faster time-to-market.',
      'Implemented real-time, collaborative features in web applications using WebSockets, Socket.IO, and GraphQL subscriptions, enhancing user engagement and satisfaction by 35%.',
      'Optimized web application performance by leveraging progressive rendering, code splitting, and state management techniques with Redux, MobX, and Vuex, leading to a 0% improvement in page load times.'
    ],
    techs: ['React', 'Vue.js', 'Angular', 'WebSockets', 'Socket.IO', 'GraphQL', 'Redux', 'MobX', 'Vuex']
  },
  {
    title: 'Junior Web Developer',
    company: 'Freelancer',
    date: '06/2014 – 12/2014',
    location: '',
    bullets: [
      'Assisted in the design of user interface (UI) features, site animation and special effects.',
      'Provided technical support for users experiencing difficulty accessing websites due to browser compatibility issues or other errors encountered during navigation across pages on a website.',
      'Monitored website analytics metrics like unique visitors per day, month, year to identify areas for improvement or potential problems with website performance or usability issues.',
      'Maintained website performance by troubleshooting issues related to server configuration and database optimization.'
    ],
    techs: ['HTML', 'CSS', 'JavaScript']
  },
];

const ExperienceCard = ({ title, company, date, location, bullets, techs, index }: any) => {
  const [isStructured, setIsStructured] = useState(false);

  // Flashy initial positions - cards scattered randomly
  const flashyPositions = [
    { x: -200, y: -300, rotation: -45, scale: 0.2 },
    { x: 300, y: -400, rotation: 30, scale: 0.3 },
    { x: -400, y: 200, rotation: -60, scale: 0.4 },
    { x: 500, y: -200, rotation: 45, scale: 0.2 },
    { x: -300, y: 400, rotation: -30, scale: 0.3 },
    { x: 200, y: 300, rotation: 60, scale: 0.4 },
    { x: -500, y: -100, rotation: -15, scale: 0.2 },
    { x: 400, y: 500, rotation: 75, scale: 0.3 }
  ];

  const flashyPattern = flashyPositions[index % flashyPositions.length];

  const flashyVariants = {
    hidden: { 
      opacity: 0, 
      x: flashyPattern.x, 
      y: flashyPattern.y, 
      rotate: flashyPattern.rotation, 
      scale: flashyPattern.scale,
      filter: "blur(20px)"
    },
    visible: { 
      opacity: 1, 
      x: flashyPattern.x, 
      y: flashyPattern.y, 
      rotate: flashyPattern.rotation, 
      scale: flashyPattern.scale,
      filter: "blur(0px)",
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        delay: index * 0.15
      } 
    },
    structured: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1
      }
    }
  };

  // Trigger structured layout after flashy animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStructured(true);
    }, 3000 + (index * 150));
    
    // Fallback to ensure cards are visible after animation
    const fallbackTimer = setTimeout(() => {
      setIsStructured(true);
    }, 8000); // 8 seconds total fallback
    
    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [index]);

  return (
    <div className="relative w-full md:w-72 lg:w-80 p-3">
      <motion.div
        initial="hidden"
        animate={isStructured ? "structured" : "visible"}
        variants={flashyVariants}
        whileHover={{ 
          scale: 1.05, 
          transition: { duration: 0.3 } 
        }}
        style={{
          opacity: isStructured ? 1 : undefined
        }}
      >
        <div className="bg-[#181A20] border-l-4 border-cyan-500 rounded-lg shadow-lg p-5 transition-all duration-500 hover:shadow-cyan-500/30 flex flex-col gap-3 relative overflow-hidden group hover:scale-105">
        {/* Flashy glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg animate-pulse" />
        {/* Animated border glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm" />
        {/* Flashy sparkle effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-all duration-1000 rounded-lg animate-spin-slow" />
        
        <div className="flex items-center gap-2 mb-2 relative z-10">
          <div className="animate-spin-slow">
            {blockchainSVG}
          </div>
          <h3 className="text-lg font-bold text-cyan-400">{title}</h3>
        </div>
        
        <div className="text-gray-300 font-semibold mb-1 relative z-10">
          {company}
          {location && <span className="text-gray-400 font-normal">, {location}</span>}
        </div>
        
        <div className="text-sm text-gray-400 mb-3 relative z-10">{date}</div>
        
        <ul className="list-disc list-inside text-gray-200 mb-3 space-y-1 text-sm relative z-10">
          {bullets.slice(0, 3).map((b: string, i: number) => <li key={i}>{b}</li>)}
          {bullets.length > 3 && (
            <li className="text-cyan-400 font-medium">+{bullets.length - 3} more achievements</li>
          )}
        </ul>
        
        {techs && techs.length > 0 && (
          <div className="flex flex-row flex-wrap gap-2 mt-2 relative z-10">
            {techs.slice(0, 4).map((tech: string, i: number) => (
              <span key={i} className="flex items-center gap-1 bg-[#23243a] text-cyan-300 px-2 py-1 rounded text-xs font-semibold shadow hover:bg-[#2a2d4a] transition-colors">
                {techIconMap[tech] || tech}
                <span>{tech}</span>
              </span>
            ))}
            {techs.length > 4 && (
              <span className="text-cyan-400 text-xs font-medium">+{techs.length - 4}</span>
            )}
          </div>
        )}
        </div>
      </motion.div>
    </div>
  );
};

export function ModernTechExperience() {
  return (
    <section id="experience" className="w-full flex flex-col items-center justify-center py-16 relative overflow-hidden">
      {/* 1. Deep space background color (bottom-most layer) */}
      <div className="absolute inset-0 w-full h-full bg-[#030014] -z-30" />
      {/* 2. Blackhole video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="false"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 opacity-80"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      {/* 3. Glowing, blurred cosmic gradient overlay (paint effect) */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#a259ff66] via-[#6a82fb33] to-transparent blur-2xl opacity-70 -z-15 pointer-events-none" />
      {/* 4. Animated starfield effect */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <StarsCanvas />
      </div>
      {/* 5. Experience content (top layer) */}
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12 relative z-10">Experience</h2>
      <div className="relative w-full max-w-7xl mx-auto z-10">
        {/* Flashy to structured layout */}
        <div className="relative min-h-[800px] p-8">
          {/* Experience cards in structured grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} {...exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 