import { useEffect } from 'react';
import work1 from './assets/work_01.webp';
import work2 from './assets/work_02.webp';
import work3 from './assets/work_03.webp';
import work4 from './assets/work_04.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    gsap.utils.toArray('.work-item').forEach((item) => {
      const img = item.querySelector('.work-item-img');
      const nameH1 = item.querySelector('.work-item-name h1');

      const split = new SplitText(nameH1, {
        type: 'chars',
        mask: 'chars',
      });

      gsap.set(split.chars, { yPercent: 125 });

      split.chars.forEach((char, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: `top+=${index * 25 - 250} top`,
          end: `top+=${index * 25 - 100} top`,
          scrub: 1,
          animation: gsap.fromTo(
            char,
            { yPercent: 125 },
            { yPercent: 0, ease: 'none' }
          ),
        });
      });

      ScrollTrigger.create({
        trigger: item,
        start: 'top bottom',
        end: 'top top',
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          {
            clipPath: 'polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)',
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'none',
          }
        ),
      });

      ScrollTrigger.create({
        trigger: item,
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)',
            ease: 'none',
          }
        ),
      });
    });

    document.fonts.ready.then(() => {
      SplitText.create('.hero h1', {
        type: 'chars',
        onSplit: (self) => {
          gsap.from(self.chars, {
            y: 100,
            autoAlpha: 0,
            stagger: {
              amount: 0.5,
              from: 'center',
            },
            scrollTrigger: {
              trigger: '.hero',
              start: 'top bottom',
              end: 'bottom center',
            },
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <section className="hero">
        <h1>Beyond the limits</h1>
      </section>
      <section className="work-item">
        <div className="work-item-img">
          <img src={work1} alt="work-img" />
        </div>
        <div className="work-item-name">
          <h1>APPLE</h1>
        </div>
      </section>
      <section className="work-item">
        <div className="work-item-img">
          <img src={work2} alt="" />
        </div>
        <div className="work-item-name">
          <h1>NIKE X NBA</h1>
        </div>
      </section>
      <section className="work-item">
        <div className="work-item-img">
          <img src={work3} alt="" />
        </div>
        <div className="work-item-name">
          <h1>Google</h1>
        </div>
      </section>
      <section className="work-item">
        <div className="work-item-img">
          <img src={work4} alt="" />
        </div>
        <div className="work-item-name">
          <h1>GUCCI X OURA</h1>
        </div>
      </section>
      <section className="outro">
        <h1>BACK TO BASE</h1>
      </section>
    </>
  );
};

export default App;
