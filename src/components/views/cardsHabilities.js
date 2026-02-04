import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "../../translations";

function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  // SVG Icons for each pillar
  const icons = {
    architect: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    observability: (
      <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6" />
      </svg>
    ),
    reliability: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    governance: (
      <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  };

  const cards = [
    {
      icon: icons.architect,
      title: t('home.architect'),
      desc: t('home.architect_desc'),
      skills: t('home.architect_skills')
    },
    {
      icon: icons.observability,
      title: t('home.observability'),
      desc: t('home.observability_desc'),
      skills: t('home.observability_skills')
    },
    {
      icon: icons.reliability,
      title: t('home.reliability'),
      desc: t('home.reliability_desc'),
      skills: t('home.reliability_skills')
    },
    {
      icon: icons.governance,
      title: t('home.governance'),
      desc: t('home.governance_desc'),
      skills: t('home.governance_skills')
    }
  ];

  return (
    <div className="w-full bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-4 bg-slate-700/30 w-16 h-16 rounded-lg flex items-center justify-center self-center lg:self-start">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 text-center lg:text-left">
                {card.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4 min-h-[40px] text-center lg:text-left">
                {card.desc}
              </p>

              <div className="mt-auto border-t border-slate-700 pt-4">
                <ul className="space-y-2">
                  {Array.isArray(card.skills) && card.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300">
                      <svg className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
