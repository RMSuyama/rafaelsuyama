import React from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "../../translations";

function ExperienciaProfissional() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const experiences = t('trajetoria.experiences') || [];

  return (
    <section id="experiencia-profissional" className="py-20 bg-slate-800 text-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('trajetoria.title')}
          </h2>
          <p className="text-lg text-indigo-400 font-medium">
            {t('trajetoria.subtitle')}
          </p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Array.isArray(experiences) && experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900/60 p-6 md:p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-700/60">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {exp.cargo}
                    </h3>
                    {exp.empresa && (
                      <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                        {exp.empresa}
                      </p>
                    )}
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-flex items-center text-xs font-semibold text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/50">
                      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.periodo}
                    </span>
                    {exp.local && (
                      <p className="text-[11px] text-slate-400 mt-1">{exp.local}</p>
                    )}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 text-slate-300 text-sm leading-relaxed">
                  {Array.isArray(exp.bullets) && exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-400 mr-2.5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {Array.isArray(exp.tags) && exp.tags.length > 0 && (
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700 hover:border-slate-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienciaProfissional;

