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
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 skew-x-12 transform origin-top-right z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Image Section */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 rounded-2xl blur-md opacity-40 group-hover:opacity-80 transition duration-500"></div>
              <img
                src={ProfileImage}
                alt="Rafael Moreira Suyama"
                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl border-4 border-slate-700 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-7/12 text-center lg:text-left space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-950/80 border border-indigo-700 text-indigo-300 rounded-full text-xs font-semibold mb-3">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('sobre.location')}
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
                {t('sobre.title')}
              </h2>
              <p className="text-lg lg:text-xl text-indigo-400 font-semibold">
                {t('sobre.role')}
              </p>
            </div>

            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-slate-300 text-justify">
              <p>{t('sobre.bio1')}</p>
              <p>{t('sobre.bio2')}</p>
              <p className="border-l-4 border-indigo-500 pl-4 py-1 italic bg-slate-900/40 rounded-r text-slate-200">
                {t('sobre.bio3')}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-lg shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all transform hover:-translate-y-0.5"
              >
                {t('sobre.button')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="mailto:rafaelmoreirasuyama@gmail.com"
                className="inline-flex items-center px-6 py-3 border border-slate-600 text-base font-bold rounded-lg text-slate-200 bg-slate-700/50 hover:bg-slate-700 hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                E-mail
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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



