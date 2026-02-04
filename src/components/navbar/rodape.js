import React from "react";

function Rodape() {
  const socialLinks = [
    {
      name: 'System Network',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/'
    },
    {
      name: 'Source Control',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/RMSuyama'
    },
    {
      name: 'Direct Relay',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.272l-.504 1.841 1.887-.495c.91.564 1.969.849 3.366.85h.001c3.181 0 5.765-2.586 5.766-5.766 0-3.18-2.585-5.766-5.767-5.766zm3.393 8.203c-.19.539-.93.991-1.228 1.025-.278.033-.645.045-1.062-.092-.257-.085-1.01-.334-2.185-1.127-1.455-.985-2.392-2.457-2.615-2.77-.023-.031-.186-.247-.186-.471s.117-.354.161-.401c.045-.047.098-.06.13-.08.032-.02.053-.024.077-.024s.048 0 .073.003c.027.001.064.004.093.072.033.079.113.275.123.296.009.021.015.045.003.073-.012.028-.018.045-.036.068-.018.023-.039.051-.055.068-.018.019-.039.039-.017.077.022.038.1.165.215.267.148.132.273.174.344.204.071.031.113.025.156-.025.043-.05.183-.213.232-.286.049-.073.098-.061.166-.036.068.025.432.204.507.241.075.037.124.056.143.087.018.031.018.178-.052.376z" />
        </svg>
      ),
      url: 'https://wa.me/+5513996267989'
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 text-center">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tighter">Rafael Suyama</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-500 font-bold">Legal Reliability Engineering</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-400 transform hover:scale-110 transition-all duration-200"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Rafael Suyama. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Rodape;