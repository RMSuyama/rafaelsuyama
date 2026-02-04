import React from "react";
import codeGif from "../../statics/gif/code.gif";
import chart from '../../statics/gif/chart.gif'
import python from '../../statics/gif/python.gif'
import data from '../../statics/gif/database.gif'
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "../../translations";

function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const cards = [
    {
      img: codeGif,
      text: t('home.architect')
    },
    {
      img: chart,
      text: t('home.observability')
    },
    {
      img: python,
      text: t('home.reliability')
    },
    {
      img: data,
      text: t('home.governance')
    }
  ];

  return (
    <div className="w-full bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center group text-center h-full"
            >
              <div className="w-24 h-24 mb-6 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                <img
                  src={card.img}
                  className="w-16 h-16 object-contain"
                  alt="Skill Icon"
                />
              </div>
              <p className="text-slate-300 font-share-tech text-lg leading-relaxed group-hover:text-white transition-colors">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
