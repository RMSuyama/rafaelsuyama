import React from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "../../translations";

const ControladoriaJuridicaComponent = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const features = [
    {
      title: t('controladoria.management'),
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      desc: t('controladoria.management_desc')
    },
    {
      title: t('controladoria.growth'),
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      desc: t('controladoria.growth_desc')
    },
    {
      title: t('controladoria.analysis'),
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      desc: t('controladoria.analysis_desc')
    },
    {
      title: t('controladoria.planning'),
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      desc: t('controladoria.planning_desc')
    },
    {
      title: t('controladoria.tools'),
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      desc: t('controladoria.tools_desc')
    }
  ];

  return (
    <section id="controladoria-juridica" className="py-20 bg-slate-800 text-slate-200">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Feature Grid (Left side on desktop this time) */}
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            {features.map((item, index) => (
              <div key={index} className={`bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-colors flex flex-col items-center text-center ${index === 4 ? 'col-span-2' : ''}`}>
                <div className="drop-shadow-lg">
                  {item.icon}
                </div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Text Content (Right side) */}
          <div className="space-y-6 text-lg leading-relaxed order-1 md:order-2 text-justify">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('controladoria.title')}
            </h2>
            <h3 className="text-xl text-indigo-400 font-medium">
              {t('controladoria.subtitle')}
            </h3>

            <p>
              {t('controladoria.p1')}<strong className="text-white">{t('controladoria.p1_bold')}</strong>{t('controladoria.p1_end')}
            </p>
            <p>
              {t('controladoria.p2')}
            </p>
            <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-indigo-500 italic text-slate-400">
              "{t('controladoria.quote')}"
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ControladoriaJuridicaComponent;
