import { motion } from 'motion/react';
import { Cpu, Database, Wifi, Zap } from 'lucide-react';

export function OrbitalDecoration() {
  return (
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] overflow-hidden pointer-events-none">
      {/* Large circular glow in corner */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbital rings */}
      {[200, 300, 400].map((size, index) => (
        <motion.div
          key={size}
          className="absolute bottom-0 left-0 rounded-full border border-white/5"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: 'translate(-50%, 50%)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40 + index * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Glow nodes on orbits */}
      {[
        { size: 250, angle: 45, icon: Cpu },
        { size: 320, angle: 120, icon: Database },
        { size: 380, angle: 80, icon: Wifi },
        { size: 300, angle: 200, icon: Zap },
      ].map((node, index) => {
        const x = Math.cos((node.angle * Math.PI) / 180) * node.size;
        const y = Math.sin((node.angle * Math.PI) / 180) * node.size;
        const Icon = node.icon;

        return (
          <motion.div
            key={index}
            className="absolute bottom-0 left-0"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {/* Outer glow */}
            <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl" />
            </div>
            
            {/* Core node */}
            <div className="relative w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center">
              <Icon className="w-4 h-4 text-blue-300/60" />
            </div>
          </motion.div>
        );
      })}

      {/* Additional decorative particles */}
      {[
        { x: 150, y: -150 },
        { x: 200, y: -250 },
        { x: 100, y: -350 },
      ].map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400/40 rounded-full"
          style={{
            transform: `translate(${particle.x}px, ${particle.y}px)`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />
      ))}
    </div>
  );
}
