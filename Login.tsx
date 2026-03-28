import React from 'react';
import { motion } from 'motion/react';
import { Lock, User, Key, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[480px]">
        {/* Header Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center md:text-left space-y-2"
        >
          <h1 className="text-on-background text-4xl md:text-5xl font-extrabold tracking-tight">
            Bem-vindo.
          </h1>
          <p className="text-on-surface-variant text-lg opacity-80">
            Acesse sua conta para continuar.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-12 shadow-liquid relative overflow-hidden"
        >
          {/* Form Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Lock className="text-primary w-6 h-6" />
            </div>
            <div>
              <h2 className="text-on-surface font-bold text-xl tracking-tight">Login Seguro</h2>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold opacity-60">Identity Portal</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Username */}
            <div className="space-y-2">
              <label className="block text-on-surface font-bold text-sm ml-1" htmlFor="username">
                Nome de usuário
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  id="username"
                  type="text"
                  placeholder="ex: joao_silva"
                  className="block w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-2xl text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-on-surface font-bold text-sm" htmlFor="password">
                  Senha
                </label>
                <button type="button" className="text-primary text-sm font-bold hover:underline decoration-2 underline-offset-4">
                  Esqueci minha senha
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Key className="w-5 h-5 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="block w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-2xl text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-5 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Entrar no Sistema
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Decorative Elements */}
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-on-surface-variant text-sm">
            Não possui uma conta?{' '}
            <Link to="/register" className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1">
              Cadastre-se agora
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
