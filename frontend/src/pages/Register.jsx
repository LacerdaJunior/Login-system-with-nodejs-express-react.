import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Lock, CheckCircle, Flame } from "lucide-react";
import { Footer } from "../components/footer";
import { Header } from "../components/Header";

export function Register() {
  return (
    <div className="min-h-screen bg-white font-space flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="flex flex-col items-center gap-2">
          <Flame size={40} className="text-brand fill-brand" />
          <h2 className="text-3xl font-bold tracking-tighter">Criar conta</h2>
          <p className="text-zinc-500">
            Comece sua jornada no LoginSystem hoje
          </p>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full pl-10 pr-4 py-3 border-2 border-zinc-100 rounded-xl focus:border-brand outline-none transition-all"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-zinc-400" size={20} />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full pl-10 pr-4 py-3 border-2 border-zinc-100 rounded-xl focus:border-brand outline-none transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-zinc-400" size={20} />
            <input
              type="password"
              placeholder="Crie uma senha"
              className="w-full pl-10 pr-4 py-3 border-2 border-zinc-100 rounded-xl focus:border-brand outline-none transition-all"
            />
          </div>

          <button className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg hover:bg-[#4F46E5] transition-all shadow-lg shadow-brand/20 flex items-center justify-center gap-2">
            Criar conta grátis <CheckCircle size={20} />
          </button>
        </form>

        <p className="text-center text-zinc-600">
          Já possui conta?{" "}
          <Link to="/login" className="text-brand font-bold hover:underline">
            Faça login
          </Link>
        </p>
      </motion.div>
      <Footer />
    </div>
  );
}
