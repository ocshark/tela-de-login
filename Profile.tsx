import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Eye, ShieldCheck, Award, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function Profile() {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="pt-24 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-primary/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-primary/5 active:scale-90 transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-primary" />
          </button>
          <h1 className="text-primary font-bold text-lg tracking-tight">Perfil</h1>
        </div>
        <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-white shadow-sm">
          <img
            src="https://picsum.photos/seed/avatar/100/100"
            alt="Avatar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-10 mt-6"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Configurar Perfil</h2>
        <p className="text-on-surface-variant font-medium">Mantenha suas informações atualizadas para uma melhor experiência.</p>
      </motion.section>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-12 shadow-liquid relative overflow-hidden"
      >
        {/* Decorative Wave */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.8,-0.8C84.4,14.1,78.3,28.2,69.2,40.1C60.1,52,48.1,61.7,34.7,68.2C21.3,74.7,6.4,78,-9.2,76.9C-24.8,75.8,-41,70.3,-54.1,60.1C-67.2,49.9,-77.2,35,-81.4,18.7C-85.6,2.4,-84,-15.2,-77.1,-30.5C-70.2,-45.8,-58.1,-58.8,-44,-66.4C-29.9,-74,-15,-76.2,0.4,-76.9C15.8,-77.6,31.3,-83.6,44.7,-76.4Z" fill="currentColor" className="text-primary" transform="translate(100 100)" />
          </svg>
        </div>

        <form className="space-y-8 relative z-10">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">Nome Completo</label>
            <div className="relative group">
              <input
                type="text"
                placeholder="Seu nome completo"
                className="w-full bg-surface-container-high border-none rounded-2xl py-5 px-6 text-lg font-bold text-on-surface placeholder-on-surface-variant/30 focus:ring-2 focus:ring-primary/10 focus:bg-surface-container-highest transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant/50 uppercase tracking-widest ml-1">E-mail</label>
              <input
                type="email"
                placeholder="email@exemplo.com"
                className="w-full bg-surface-container border-none rounded-2xl py-4 px-6 text-on-surface placeholder-on-surface-variant/30 focus:ring-2 focus:ring-primary/10 focus:bg-surface-container-high transition-all"
              />
            </div>
            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant/50 uppercase tracking-widest ml-1">Telefone</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                className="w-full bg-surface-container border-none rounded-2xl py-4 px-6 text-on-surface placeholder-on-surface-variant/30 focus:ring-2 focus:ring-primary/10 focus:bg-surface-container-high transition-all"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-on-surface-variant/50 uppercase tracking-widest ml-1">Sobre Você</label>
            <textarea
              rows={4}
              placeholder="Conte um pouco sobre você..."
              className="w-full bg-surface-container border-none rounded-2xl py-4 px-6 text-on-surface placeholder-on-surface-variant/30 focus:ring-2 focus:ring-primary/10 focus:bg-surface-container-high transition-all resize-none"
            />
          </div>

          {/* Visibility Toggle */}
          <div className="p-6 bg-surface-container-low rounded-3xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-2xl">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-on-surface">Perfil Público</p>
                <p className="text-sm text-on-surface-variant">Permitir que outros usuários vejam suas informações.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsPublic(!isPublic)}
              className={cn(
                "w-14 h-8 rounded-full relative transition-colors duration-300",
                isPublic ? "bg-primary" : "bg-on-surface-variant/20"
              )}
            >
              <motion.div
                animate={{ x: isPublic ? 24 : 4 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm"
              />
            </button>
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Salvar Alterações</span>
              <CheckCircle className="w-5 h-5" />
            </button>
          </div>
        </form>
      </motion.div>

      {/* Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 bg-surface-container rounded-[2rem] p-8 flex flex-col justify-between"
        >
          <div>
            <ShieldCheck className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold text-xl mb-1">Segurança da Conta</h3>
            <p className="text-on-surface-variant">Verifique seu status de autenticação em duas etapas.</p>
          </div>
          <button className="mt-8 flex items-center text-primary font-bold hover:underline group">
            Configurar agora <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-primary/5 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border-2 border-primary/5"
        >
          <Award className="w-12 h-12 text-primary mb-4" />
          <p className="font-bold text-primary text-lg">Membro Premium</p>
          <p className="text-sm text-primary/60 mt-1">Desde Janeiro 2024</p>
        </motion.div>
      </div>
    </div>
  );
}
