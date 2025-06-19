import React from 'react';
import Logo from './Logo';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';

export default function Footer() {
  const data = [
    { title2: "/season1", title1: "season-1" },
    { title2: "", title1: "season-2 (not yet)" },
    { title2: "", title1: "season-3 (not yet)"},
  ];

  const data2 = [
    { title1: "about empty spaces", title2: "/about", title3: "about_empty_spaces" },
    { title1: "about hcm", title2: "/about", title3: "about_hcm" },
    { title1: "origin", title2: "/about", title3: "origin" },
  ];

  return (
    <Element name="footer">
      <div>
        <footer
          style={{
            backgroundImage:
              'url(https://w0.peakpx.com/wallpaper/972/488/HD-wallpaper-bloody-background-blood-thumbnail.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          {/* Scroll Link */}
          <h1 className="items-center flex justify-center font-extrabold text-white text-2xl py-5">
            <ScrollLink
              to="navbar"
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer"
            >
              <span>Back to top</span>
            </ScrollLink>
          </h1>

          <div className="text-white font-bold md:flex justify-around py-20">
            {/* Get to know section */}
            <div className="text-center">
              <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">Get to know</h1>
              <br />
              <div>
                {data2.map((item, key) => (
                  <RouterLink key={key} to={item.title3}>
                    <h1 className="text-yellow-300 text-2xl">{item.title1}</h1>
                  </RouterLink>
                ))}
              </div>
            </div>

            {/* Connect with us section */}
            <br />
            <div className="text-center">
              <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">connect with us</h1>
              <br />
              <h1 className="text-yellow-300 text-2xl">
                <a href="https://github.com/Kushagra-369" target="_blank" rel="noopener noreferrer">
                  git hub
                </a>
              </h1>
              <h1 className="text-yellow-300 text-2xl">
                <a
                  href="https://www.linkedin.com/in/kushagra-chhabra-83b215355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin
                </a>
              </h1>
            </div>

            {/* Read our novel section */}
            <br />
            <div className="text-center">
              <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">read our novel</h1>
              <br />
              {data.map((item, key) => (
                <div key={key}>
                  <h1 className="text-yellow-300 text-2xl">
                    <RouterLink to={item.title2}>{item.title1}</RouterLink>
                  </h1>
                </div>
              ))}
            </div>
            <br />
          </div>

          {/* Logo at bottom */}
          <div>
            <Logo />
          </div>
        </footer>
      </div>
    </Element>
  );
}
