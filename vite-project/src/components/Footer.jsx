import React from 'react';
import Logo from './Logo';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Footer() {
  const data = [
    { title2: "/season1", title1: "season-1" },
    { title2: "/season2", title1: "season-2" },
    { title2: "", title1: "season-3 (not yet)" },
  ];

  const data2 = [
    { title1: "about empty spaces", title2: "/about", title3: "about_empty_spaces" },
    { title1: "about hcm", title2: "/about", title3: "about_hcm" },
    { title1: "origin", title2: "/about", title3: "origin" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Element name="footer">
      <footer
        style={{
          backgroundImage:
            'url(https://w0.peakpx.com/wallpaper/972/488/HD-wallpaper-bloody-background-blood-thumbnail.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="overflow-hidden"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link to="/login2">
            <h1 className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-white text-center py-10 font-black hover:underline transition duration-300 hover:text-cyan-300'>
              CONTACT WITH US
            </h1>
          </Link>
        </motion.div>

        <motion.h1
          className="items-center flex justify-center font-extrabold text-white text-2xl py-5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollLink
            to="navbar"
            smooth={true}
            duration={600}
            offset={-70}
            className="cursor-pointer hover:text-cyan-300 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl transition duration-300"
          >
            <span>Back to top</span>
          </ScrollLink>
        </motion.h1>

        <div className="text-white font-bold md:flex justify-around py-20 gap-10">
          {/* Section 1 */}
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="font-bold md:border-b-2 text-4xl sm:text-3xl lg:text-4xl xl:text-6xl 2xl:text-6xl border-cyan-300 mb-4">
              Get to know
            </h1>
            {data2.map((item, key) => (
              <RouterLink key={key} to={item.title3}>
                <h1 className="text-yellow-300 text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl hover:underline hover:text-white transition duration-300">
                  {item.title1}
                </h1>
              </RouterLink>
            ))}
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="font-bold md:border-b-2 text-4xl sm:text-3xl  lg:text-4xl xl:text-6xl 2xl:text-6xl border-cyan-300 mb-4">
              Connect with us
            </h1>
            <h1 className="text-yellow-300 text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl hover:underline hover:text-white transition duration-300">
              <a href="https://github.com/Kushagra-369" target="_blank" rel="noopener noreferrer">
                git hub
              </a>
            </h1>
            <h1 className="text-yellow-300 text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl hover:underline hover:text-white transition duration-300">
              <a href="https://www.linkedin.com/in/kushagra-chhabra-83b215355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
            </h1>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="font-bold md:border-b-2 text-4xl sm:text-3xl lg:text-4xl xl:text-6xl 2xl:text-6xl border-cyan-300 mb-4">
              Read our novel
            </h1>
            {data.map((item, key) => (
              <h1 key={key} className="text-yellow-300 text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl hover:underline hover:text-white transition duration-300">
                <RouterLink to={item.title2}>{item.title1}</RouterLink>
              </h1>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.div
            className="pb-10 px-5 text-center text-sm sm:text-sm md:text-sm lg:text-xl xl:text-2xl 2xl:text-2xl text-red-500"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1><Link to ="/failed">CLICK TO SEE OUR FAILED PROJECTS</Link></h1>
          </motion.div>
        </div>

        <motion.div
          className="pb-10 px-5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Logo />
        </motion.div>
      </footer>
    </Element>
  );
}
