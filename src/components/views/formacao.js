import React from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "../../translations";

function FormacaoAcademica() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const graduations = t('formacao.graduations') || [];
  const certificacoes = t('formacao.certificacoes') || [];
  const idiomas = t('formacao.idiomas') || [];

  return (
    <section id="formacao-academica" className="py-20 bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('formacao.title')}
          </h2>
          <p className="text-lg text-slate-400">
            {t('formacao.subtitle')}
          </p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded mt-4"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Academic Degrees */}
          <div className="bg-slate-800/80 p-8 rounded-xl border-l-4 border-indigo-500 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-7 h-7 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Formação Acadêmica
              </h3>
              <div className="space-y-6">
                {Array.isArray(graduations) && graduations.map((grad, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-5 rounded-lg border border-slate-700">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white">{grad.curso}</h4>
                      <span className="text-xs bg-indigo-900/80 text-indigo-300 font-semibold px-2.5 py-1 rounded-full border border-indigo-700">
                        {grad.status || grad.periodo}
                      </span>
                    </div>
                    <p className="text-indigo-300 text-sm font-medium">{grad.instituicao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Specialized Knowledge */}
          <div className="bg-slate-800/80 p-8 rounded-xl border-l-4 border-emerald-500 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-7 h-7 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certificações
              </h3>
              <ul className="space-y-4">
                {Array.isArray(certificacoes) && certificacoes.map((cert, idx) => (
                  <li key={idx} className="flex items-start bg-slate-900/60 p-3.5 rounded-lg border border-slate-700">
                    <svg className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-200 text-sm font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="max-w-5xl mx-auto bg-slate-800/60 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Idiomas</h4>
              <p className="text-xs text-slate-400">Fluência e comunicação profissional</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {Array.isArray(idiomas) && idiomas.map((id, idx) => (
              <div key={idx} className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-700 flex items-center space-x-3">
                <span className="text-sm font-bold text-white">{id.lingua}</span>
                <span className="text-xs bg-indigo-900/60 text-indigo-300 font-semibold px-2 py-0.5 rounded border border-indigo-700">
                  {id.nivel}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default FormacaoAcademica;

