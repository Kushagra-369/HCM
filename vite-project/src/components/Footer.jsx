import React from 'react'
import Logo from './Logo'

export default function Footer() {
  // Handler for downloading the DOCX file
  const handleDocxDownload = () => {
    fetch('/project/empty_spaces_season_1.docx')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'empty_spaces_season_1.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div>
      <footer
        style={{
          backgroundImage:
            'url(https://w0.peakpx.com/wallpaper/972/488/HD-wallpaper-bloody-background-blood-thumbnail.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="items-center flex justify-center font-extrabold text-white text-2xl py-5">
          <a href="#">Back to top</a>
        </h1>
        <div className="text-white font-bold md:flex justify-around py-20">
          <div className="text-center">
            <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">
              Get to know
            </h1>
            <br />
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">about empty spaces</a>
            </h1>
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">about hcm </a>
            </h1>
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">origin </a>
            </h1>
          </div>
          <br />
          <div className="text-center">
            <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">
              connect with us
            </h1>
            <br />
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">git hub</a>
            </h1>
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">facebook</a>
            </h1>
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">linkedin</a>
            </h1>
          </div>
          <br />
          <div className="text-center">
            <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">
              read our novel
            </h1>
            <br />
            {/* DOCX Download Button */}
            <h1 className="text-yellow-300 text-2xl">
              <button onClick={handleDocxDownload} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                season 1 (Word)
              </button>
            </h1>
            {/* PDF Direct Download Link */}
            <h1 className="text-yellow-300 text-2xl">
              <a href="/project/empty_spaces_season_1.pdf" download>
                season 1 (PDF)
              </a>
            </h1>
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">season 2</a>
            </h1>
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">season 3</a>
            </h1>
         
          </div>
          <br />
          <div className="text-center">
            <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">
              let us help you
            </h1>
            <br />
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">your account</a>
            </h1>
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">returns centre</a>
            </h1>
            <h1 className="text-yellow-300 text-2xl">
              <a href="#">help</a>
            </h1>
          </div>
        </div>
        <div>
          <Logo />
        </div>
      </footer>
    </div>
  );
}
