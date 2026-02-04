import React from 'react';

function FormacaoAcademica() {
  return (
    <section id="formacao-academica" className="py-20 bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Formação Acadêmica
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Degree */}
          <div className="bg-slate-800 p-8 rounded-xl border-l-4 border-indigo-500 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">Bacharel em Direito</h3>
            <p className="text-lg text-indigo-400 mb-1">UNIVR – Centro Universitário do Vale do Ribeira</p>
            <p className="text-slate-400 text-sm">2015 – 2019</p>
          </div>

          {/* Certifications */}
          <div className="bg-slate-800 p-8 rounded-xl border-l-4 border-green-500 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6">Certificações e Especializações</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Técnico em Transações Imobiliárias - IBRESP (2018)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Normas Anticorrupção, Antissuborno e Compliance Público</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Lei Geral de Proteção de Dados (LGPD)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>EXIN Privacy and Data Protection Níveis Essentials & Foundation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormacaoAcademica;
