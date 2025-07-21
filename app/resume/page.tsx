'use client';

import { StarsCanvas } from "@/components/main/star-background";

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-[#030014]">
      {/* Background */}
      <StarsCanvas />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Morimura Din
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Full Stack Web3 Developer
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <span>📧 sweetieprovider@gmail.com</span>
              <span>📍 Sendai, Miyagi, Japan</span>
              <span>🎂 1994-02-03</span>
            </div>
          </div>

          {/* Professional Profile */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500 pb-2">
              Professional Profile
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                Full Stack Developer with 8 years of experience in designing, developing, and maintaining web applications. 
                Proficient in front-end and back-end development, with expertise in programming design, development, and 
                implementation using a range of technologies and programming languages.
              </p>
              <p>
                Collaborative team player with strong problem-solving skills and a proven track record of developing highly 
                functional web applications. Certified in Full-Stack Web Development with React.js, Next.js, Vue.js, TailwindCSS 
                and Front End Web Development.
              </p>
              <p>
                Passionate about staying up-to-date with the latest technologies and trends in the industry.
              </p>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500 pb-2">
              Professional Experience
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Full Stack Web3 Developer</h3>
                <p className="text-purple-400">Self Employed | 03/2025 - Present</p>
                <p className="text-gray-400 text-sm mb-3">Sendai, Miyagi, Japan</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Collaborated with UX and UI designers to create modern UI using TailWindCSS, focusing on utility-first principles to accelerate development and maintain scalability</li>
                  <li>• Integrated prominent DeFi protocols like Uniswap, Compound, and Aave with decentralized applications, allowing seamless access to financial services for over 3,000 users</li>
                  <li>• Implemented functionalities for decentralized applications (DApps) by integrating Smart Contracts with front-end using Web3.js</li>
                  <li>• Developed decentralized applications such as NFT marketplaces, crowdfunding platforms, and decentralized exchanges, attracting over 2,500 daily active users cumulatively</li>
                  <li>• Conceptualized and led the development of highly engaging, visually striking meme coins, demonstrating creative design skills and ability to build compelling cryptocurrency projects</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Senior Full Stack Engineer</h3>
                <p className="text-purple-400">Drip Finance | 08/2023 – 03/2025</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Investigated new technologies that can be used to enhance existing product features</li>
                  <li>• Created RESTful APIs with Node.js and Express to provide data access for client-side applications</li>
                  <li>• Collaborated with UX designers to develop three dimensional responsive user interface</li>
                  <li>• Enhanced wallet connect & web3 integrations using wagmi/rainbowkit modules</li>
                  <li>• Designed databases using MySQL and MongoDB for storing application data</li>
                  <li>• Modified existing software to correct errors, adapt to new hardware or upgrade interfaces</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Senior Frontend Developer</h3>
                <p className="text-purple-400">Forest Staking | 04/2023 – 07/2023</p>
                <p className="text-gray-400 text-sm mb-3">London, England</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Designed a visually stunning and highly intuitive user interface using the Figma design platform, delivering an exceptional user experience that increased customer engagement and satisfaction by 30%</li>
                  <li>• Ensured that the websites are optimized for mobile devices by implementing best practices for responsive design</li>
                  <li>• Designed interactive prototypes to demonstrate functionalities of user interface components</li>
                  <li>• Managed day-to-day tasks related to UI development including bug fixes, feature requests</li>
                  <li>• Evaluated emerging technologies related to UI development such as NextJS and NuxtJS</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Smart Contract Developer</h3>
                <p className="text-purple-400">Soteria Smart Contracts Inc | 04/2022 – 03/2023</p>
                <p className="text-gray-400 text-sm mb-3">Ontario, Canada</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Collaborated with cross-functional teams to develop and deploy Smart Contracts on the Ethereum & Solana networks using Solidity and Rust</li>
                  <li>• Pioneered the implementation of advanced Smart Contract features, such as atomic swaps, flash loans, liquid staking and batch transactions, increasing the efficiency and scalability of decentralized finance (DeFi) protocols</li>
                  <li>• Designed and deployed 10+ high-performance, secure Smart Contracts on the Ethereum and Solana blockchains, powering decentralized applications (dApps) with over $10 million in total value locked</li>
                  <li>• Integrated secure wallet functionality, supporting MetaMask, Phantom, and Solana Wallet, into 8 decentralized applications (dApps), enabling seamless user onboarding</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Senior Full Stack Engineer</h3>
                <p className="text-purple-400">Fixer | 03/2019 – 03/2022</p>
                <p className="text-gray-400 text-sm mb-3">Tokyo, Japan</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Integrated third-party services like Amazon S3 into existing applications</li>
                  <li>• Optimized web page performance by minimizing HTTP requests and leveraging caching techniques</li>
                  <li>• Analyzed business requirements and translated them into technical specifications documents</li>
                  <li>• Implemented agile development practices across multiple projects, ensuring timely delivery of high-quality solutions within budget constraints</li>
                  <li>• Analyzed user needs and software requirements to determine feasibility of design within time and cost constraints</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
                <p className="text-purple-400">Wippo IT | 07/2016 – 12/2018</p>
                <p className="text-gray-400 text-sm mb-3">Chisinau, Moldova</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Developed and maintained front-end web applications using HTML, CSS, JavaScript, React.js, and Redux</li>
                  <li>• Created reusable components that can be shared across different projects, reducing development time</li>
                  <li>• Developed custom CMS from scratch utilizing MERN stack technologies</li>
                  <li>• Wrote well-designed, testable code</li>
                  <li>• Prepared reports and correspondence concerned project specifications, activities and status</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Web Developer Intern</h3>
                <p className="text-purple-400">IQGeo Japan KK | 02/2015 – 01/2016</p>
                <p className="text-gray-400 text-sm mb-3">Tokyo, Japan</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Designed and implemented responsive, mobile-first user interfaces for 10+ web applications using leading JavaScript frameworks like React, Vue.js, and Angular, delivering seamless experiences across devices</li>
                  <li>• Developed complex, full-stack web applications by integrating JavaScript-based front-end libraries and frameworks with robust back-end APIs, databases, and serverless functions, resulting in 25% faster time-to-market</li>
                  <li>• Implemented real-time, collaborative features in web applications using WebSockets, Socket.IO, and GraphQL subscriptions, enhancing user engagement and satisfaction by 35%</li>
                  <li>• Optimized web application performance by leveraging progressive rendering, code splitting, and state management techniques with Redux, MobX, and Vuex, leading to a 40% improvement in page load times</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white">Junior Web Developer</h3>
                <p className="text-purple-400">Freelancer | 06/2014 – 12/2014</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Assisted in the design of user interface (UI) features, site animation and special effects</li>
                  <li>• Provided technical support for users experiencing difficulty accessing websites due to browser compatibility issues or other errors encountered during navigation across pages on a website</li>
                  <li>• Monitored website analytics metrics like unique visitors per day, month, year to identify areas for improvement or potential problems with website performance or usability issues</li>
                  <li>• Maintained website performance by troubleshooting issues related to server configuration and database optimization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500 pb-2">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Bachelor's Degree of Computer Science</h3>
                <p className="text-purple-400">Tohoku University</p>
                <p className="text-gray-400 text-sm">08/2011 – 05/2014 | Sendai, Japan</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500 pb-2">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Blockchain</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Solidity, Clarity, Web3.js, Ether.js, Stacks.js</li>
                  <li>• Truffle, Hardhat, Golang, Rust, TON</li>
                  <li>• Ethereum, Solana, Polygon, Arbitrum, Avalanche</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Backend</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Node.js, Express.js, Python</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Frontend</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• React.js,Vue.js, Next.js, Nuxt.js,Chakra UI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Database & DevOps</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• AWS, Docker, Kubernetes, Git</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Industry Expertise */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500 pb-2">
              Industry Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Blockchain & DeFi</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Smart Contract Development</li>
                  <li>• DAPP, DEX, NFT, DeFi</li>
                  <li>• Telegram Bot/TMA</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Trading & Automation</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Fedex, Crypto trading</li>
                  <li>• Sniper, PumpFun, Tapswap</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Passions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500 pb-2">
              Passions
            </h2>
            <div className="space-y-4">
              <div className="bg-[#0a0a0a] p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">Creating Beautiful Meme Coins</h3>
                <p className="text-gray-300">
                  Passionate about designing and developing captivating meme coins that spark viral engagement on the blockchain
                </p>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">Innovative Solutions</h3>
                <p className="text-gray-300">
                  Driven to suggest creative new features and solutions that push the boundaries of technology
                </p>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500 pb-2">
              Interests
            </h2>
            <div className="flex space-x-6 text-gray-300">
              <span>📚 Reading</span>
              <span>⚽ Soccer</span>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500 pb-2">
              Let's Connect
            </h2>
            <div className="flex justify-center space-x-8 text-gray-300">
              <div>
                <p>sweetieprovider@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p>Sendai, Miyagi, Japan</p>
              </div>
              <div>
                <p className="font-semibold">Experience</p>
                <p>8+ Years</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 