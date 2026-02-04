import React from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "../../translations";
import ProfileImage from "../../statics/img/Foto.jpeg";

function SobreMim() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="sobre-mim" className="relative py-24 bg-slate-800 text-slate-300 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-700/10 skew-x-12 transform origin-top-right z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Section */}
          <div className="lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={ProfileImage}
                alt="Rafael Suyama"
                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-slate-700 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-7/12 text-center lg:text-left space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {t('sobre.title')}
              </h2>
              <p className="text-xl text-indigo-400 font-medium">
                {t('sobre.role')}
              </p>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                <strong className="text-white">{t('sobre.future_title')}</strong> {t('sobre.future_desc')}<span className="text-indigo-300 font-bold">{t('sobre.reliability_99')}</span>{t('sobre.and_integrity')}
              </p>
              <p>
                {t('sobre.combining')}<span className="text-indigo-300 font-semibold">{t('sobre.reliability_eng')}</span>{t('sobre.eliminate')}
              </p>
              <p>
                {t('sobre.focus')}
                <span className="bg-slate-700/50 px-2 py-1 rounded mx-1 text-white text-sm border border-slate-600">{t('sobre.scaling')}</span>,
                <span className="bg-slate-700/50 px-2 py-1 rounded mx-1 text-white text-sm border border-slate-600">{t('sobre.resilience')}</span> and
                <span className="bg-slate-700/50 px-2 py-1 rounded mx-1 text-white text-sm border border-slate-600">{t('sobre.jurimetrics')}</span>
                {t('sobre.build')}
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:-translate-y-1"
              >
                {t('sobre.button')}
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SobreMim;


