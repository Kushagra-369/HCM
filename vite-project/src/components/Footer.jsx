import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage:
          'url(https://w0.peakpx.com/wallpaper/972/488/HD-wallpaper-bloody-background-blood-thumbnail.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Back to Top Link */}
      <div className="flex justify-center py-5">
        <a
          href="#top"
          className="font-extrabold text-white text-2xl hover:text-cyan-300"
        >
          Back to top
        </a>
      </div>

      {/* Footer Content */}
      <div className="text-white font-bold md:flex justify-around py-20">
        {/* Get to Know Section */}
        <div className="text-center">
          <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">
            Get to know
          </h1>
          <br />
          <ul>
            <li>
              <a
                href="#about-empty-spaces"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                About Empty Spaces
              </a>
            </li>
            <li>
              <a
                href="#about-hcm"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                About HCM
              </a>
            </li>
            <li>
              <a
                href="#origin"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                Origin
              </a>
            </li>
          </ul>
        </div>

        {/* Connect with Us Section */}
        <div className="text-center">
          <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">
            Connect with us
          </h1>
          <br />
          <ul>
            <li>
              <a
                href="#github"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#facebook"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#linkedin"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Read Our Novel Section */}
        <div className="text-center">
          <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">
            Read our novel
          </h1>
          <br />
          <ul>
            <li>
              <a
                href="/project/empty_spaces_season_1.docx"
                download
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                Season 1
              </a>
            </li>
            <li>
              <a
                href="#season-2"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                Season 2
              </a>
            </li>
            <li>
              <a
                href="#season-3"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                Season 3
              </a>
            </li>
          </ul>
        </div>

        {/* Let Us Help You Section */}
        <div className="text-center">
          <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">
            Let us help you
          </h1>
          <br />
          <ul>
            <li>
              <a
                href="#your-account"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                Your Account
              </a>
            </li>
            <li>
              <a
                href="#returns-centre"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                Returns Centre
              </a>
            </li>
            <li>
              <a
                href="#help"
                className="text-yellow-300 text-2xl hover:text-cyan-300"
              >
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center py-5">
        <Logo />
      </div>
    </footer>
  );
}
