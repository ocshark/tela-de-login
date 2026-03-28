import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="pt-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Liquid <span className="text-primary">Clarity</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          Uma experiência digital fluida, editorial e autoritária. Bem-vindo ao futuro da identidade digital.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="aspect-video bg-surface-container rounded-[2rem] overflow-hidden group relative"
          >
            <img
              src={`https://picsum.photos/seed/card-${i}/800/450`}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <h3 className="text-white font-bold text-2xl">Explorar {i}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
