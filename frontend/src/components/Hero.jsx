import { motion } from "framer-motion";
import heroImage from "../assets/hero.svg";

export const Hero = () => {
  return (
    <section className="font-space max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">

      <div className="flex-1 space-y-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-black">
          Projeto base para portfólio futuro desenvolvido por Guilherme Lacerda.
        </h1>

        <p className="text-lg md:text-xl text-gray-800 max-w-md mx-auto md:mx-0 leading-relaxed">
          Este projeto tem intuito base de aplicar conhecimentos em API REST com
          Node.js e frameworks para futuros projetos.
        </p>

        <div className="flex justify-center md:justify-start">
          <a
            href="https://linktr.ee/lacerdadev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#191a23] text-white px-8 py-4 rounded-xl text-xl font-medium font-space transition-colors hover:bg-black"
            >
              Mais sobre mim
            </motion.button>
          </a>
        </div>
      </div>


      <div className="flex-1 relative flex justify-center items-center">
        <div className="relative w-full max-w-lg">
          <motion.img
            src={heroImage}
            alt="Digital Illustration"
            className="w-full h-auto drop-shadow-[10px_10px_0px_rgba(0,0,0,0.1)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};
