import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Alfred - Local AI Coding Assistant",
  description:
    "A fully local and privacy-focused AI coding assistant for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="alfred" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable} font-sans antialiased bg-rich-black min-h-screen selection:bg-rich-blue/20 selection:text-white`}
      >
        {/* Ambient background effects */}
        <div className="fixed inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
        <div className="fixed -top-[40%] -left-[20%] w-[70%] h-[70%] bg-rich-blue/5 rounded-full filter blur-[100px] opacity-30 pointer-events-none"></div>
        <div className="fixed -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-rich-green/5 rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>

        {/* Main content */}
        <div className="relative z-10">{children}</div>

        {/* Glass cursor trail effect (optional) */}
        <div
          id="cursor-trail"
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        ></div>

        {/* Add cursor trail effect */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const cursorTrail = document.getElementById('cursor-trail');
              if (!cursorTrail) return;
              
              const particles = [];
              const particleCount = 12;
              
              // Create particles
              for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'cursor-particle';
                particle.style.cssText = \`
                  position: absolute;
                  width: 5px;
                  height: 5px;
                  background: rgba(66, 165, 245, \${0.15 - (i * 0.01)});
                  border-radius: 50%;
                  pointer-events: none;
                  opacity: 0;
                  transform: translate(-50%, -50%);
                  transition: opacity 0.3s ease;
                \`;
                cursorTrail.appendChild(particle);
                particles.push({
                  element: particle,
                  x: 0,
                  y: 0
                });
              }
              
              // Track mouse movement
              let mouseX = 0;
              let mouseY = 0;
              
              document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
              });
              
              // Animation loop
              function animate() {
                let x = mouseX;
                let y = mouseY;
                
                particles.forEach((particle, index) => {
                  // Create trail effect with delay
                  const nextParticle = particles[index + 1] || particles[0];
                  
                  // Smooth follow with easing
                  particle.x = particle.x + (nextParticle.x - particle.x) * 0.3;
                  particle.y = particle.y + (nextParticle.y - particle.y) * 0.3;
                  
                  particle.element.style.transform = \`translate(\${particle.x}px, \${particle.y}px)\`;
                  particle.element.style.opacity = index === 0 ? '0' : '1';
                  
                  // Set position for first particle
                  if (index === 0) {
                    particle.x = x;
                    particle.y = y;
                  }
                });
                
                requestAnimationFrame(animate);
              }
              
              animate();
            });
          `,
          }}
        />
      </body>
    </html>
  );
}
