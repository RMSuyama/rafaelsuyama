import React from 'react';
const JoinUsView = () => {
  return (
    <section id="join-us" className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Pronto para transformar seu departamento jurídico?
        </h2>

        <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed">
          Estou disponível para novos desafios em <span className="text-indigo-300 font-semibold">Legal Operations</span>, <span className="text-indigo-300 font-semibold">Controladoria</span> e <span className="text-indigo-300 font-semibold">Automação</span>.
          Vamos construir o futuro da advocacia juntos.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:rafaelmoreirasuyama@gmail.com"
            className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition transform hover:-translate-y-1 shadow-lg"
          >
            Enviar E-mail
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition transform hover:-translate-y-1"
          >
            Conectar no LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinUsView;
