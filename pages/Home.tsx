
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Bookmark, GraduationCap, Microscope, Award, Quote } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Section 1: Hero with Quote */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-khazar-dark/60 via-transparent to-khazar-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08759dfc3f0?auto=format&fit=crop&q=80&w=1920" 
          className="absolute inset-0 w-full h-full object-cover -z-10" 
          alt="Khazar University Academic Environment"
        />
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <ScrollReveal>
            <div className="mb-8 flex justify-center text-khazar-gold">
              <Quote size={60} fill="currentColor" opacity={0.3} />
            </div>
            <h1 className="font-soria text-4xl md:text-7xl lg:text-8xl text-khazar-cream font-bold leading-tight italic drop-shadow-2xl">
              "The secret of getting ahead is <br /> getting started."
            </h1>
            <div className="mt-12 w-24 h-1 bg-khazar-gold mx-auto"></div>
            <p className="text-khazar-cream text-xl md:text-2xl mt-8 font-light uppercase tracking-[0.3em] opacity-90">
              Khazar University — Excellence Since 1991
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-10 left-10 z-20 hidden md:block">
            <ScrollReveal delay={500}>
                <div className="text-khazar-cream/40 text-xs tracking-widest vertical-rl rotate-180 uppercase">Scroll to explore</div>
            </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Active Research (eiLink) */}
      <section className="py-32 px-6 bg-white border-b border-khazar-maroon/10">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <ScrollReveal>
              <div className="inline-flex items-center gap-3 text-khazar-gold font-bold tracking-widest uppercase text-sm mb-6">
                <Microscope size={20} /> Research & Innovation
              </div>
              <h2 className="font-soria text-5xl md:text-6xl text-khazar-maroon leading-tight mb-8">
                Driving Industry through <span className="italic">eiLink Center</span>
              </h2>
              <p className="text-xl text-khazar-dark/70 leading-relaxed font-light mb-10">
                The eiLink (Education Industry Link) Research and Development Center was established at Khazar University in December 2015. With the support of the Society of Petroleum Engineers (SPE) Azerbaijan Section, we bridge the gap between academic theory and industrial application.
              </p>
              <button className="bg-khazar-maroon text-white px-10 py-5 rounded-none font-bold text-lg hover:bg-khazar-maroonDark transition-all btn-swipe shadow-lg">
                Explore Our Labs
              </button>
            </ScrollReveal>
            <ScrollReveal delay={200} className="relative group">
              <div className="image-zoom-container aspect-video rounded-none shadow-2xl relative">
                <div className="absolute inset-0 border-4 border-khazar-gold -m-4 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover relative z-10" alt="eiLink Research Center" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Brief History Timeline */}
      <section className="py-32 bg-khazar-cream">
        <div className="max-w-8xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <h2 className="font-soria text-5xl md:text-7xl text-khazar-maroon">Our <span className="italic">Legacy</span></h2>
            <p className="text-khazar-maroon/60 uppercase tracking-widest mt-4">Pioneering Education in Azerbaijan</p>
          </ScrollReveal>
          
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-khazar-maroon/20 hidden md:block"></div>
            
            <div className="space-y-24">
              {[
                { year: '1991', title: 'The Foundation', desc: 'Established as Azerbaijan University, the first private institution in the Republic.' },
                { year: '1992', title: 'Khazar University', desc: 'The Cabinet of Ministers officially renamed the institution to Khazar University.' },
                { year: '1995', title: 'Full Accreditation', desc: 'Achieved full state accreditation, setting a benchmark for quality education.' },
                { year: 'Today', title: 'Global Impact', desc: 'Leading in research, industry links, and international student exchange.' }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 100} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 text-center md:text-right px-8">
                    {i % 2 === 0 ? (
                       <>
                        <h3 className="text-4xl font-soria font-bold text-khazar-maroon mb-2">{item.year}</h3>
                        <h4 className="text-xl font-bold text-khazar-gold uppercase tracking-tighter mb-4">{item.title}</h4>
                        <p className="text-khazar-dark/70 font-light">{item.desc}</p>
                       </>
                    ) : null}
                  </div>
                  <div className="z-10 bg-khazar-maroon text-white w-12 h-12 flex items-center justify-center font-bold border-4 border-khazar-cream shadow-xl">
                    <Bookmark size={20} />
                  </div>
                  <div className="md:w-1/2 text-center md:text-left px-8">
                    {i % 2 !== 0 ? (
                       <>
                        <h3 className="text-4xl font-soria font-bold text-khazar-maroon mb-2">{item.year}</h3>
                        <h4 className="text-xl font-bold text-khazar-gold uppercase tracking-tighter mb-4">{item.title}</h4>
                        <p className="text-khazar-dark/70 font-light">{item.desc}</p>
                       </>
                    ) : null}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Success Stories */}
      <section className="py-32 bg-khazar-maroon text-khazar-cream overflow-hidden">
        <div className="max-w-8xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="image-zoom-container aspect-[4/5] rounded-none shadow-2xl">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale" alt="Academic Success Story" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="order-1 lg:order-2">
               <div className="inline-flex items-center gap-3 text-khazar-gold font-bold tracking-widest uppercase text-sm mb-6">
                <Award size={20} /> Success Stories
              </div>
              <h2 className="font-soria text-5xl md:text-7xl leading-tight mb-8">Inspiring <span className="italic">Excellence</span></h2>
              <p className="text-xl opacity-80 leading-relaxed font-light mb-10">
                From pioneering scholars like Prof. Hamlet Isakhanli to our global network of alumni leading industries, Khazar is built on individual achievements that change the world. Discover how our community members are shaping the future of science, art, and business.
              </p>
              <button className="border-2 border-khazar-gold text-khazar-gold px-10 py-5 rounded-none font-bold text-lg hover:bg-khazar-gold hover:text-khazar-maroon transition-all btn-swipe">
                Learn Their Stories
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 5: Events / News */}
      <section className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-6">
          <ScrollReveal className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-soria text-5xl md:text-6xl text-khazar-maroon">Events & <span className="italic">News</span></h2>
              <p className="text-khazar-dark/40 uppercase tracking-widest mt-2">Latest happenings at our campus</p>
            </div>
            <Link to="#" className="text-khazar-maroon font-bold hidden md:block link-grow">View All News</Link>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: 'Oct 24', title: 'Global Sustainability Forum 2024', img: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f3?auto=format&fit=crop&q=80&w=600' },
              { date: 'Nov 12', title: 'New R&D Lab Opening in Neftchilar', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600' },
              { date: 'Dec 05', title: 'Winter Convocation Ceremony', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150} className="group cursor-pointer">
                <div className="image-zoom-container aspect-video mb-6 relative">
                  <div className="absolute top-4 left-4 z-20 bg-khazar-gold text-khazar-dark px-3 py-1 font-bold text-xs">
                    {item.date}
                  </div>
                  <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                </div>
                <h3 className="text-2xl font-soria font-bold text-khazar-maroon group-hover:text-khazar-gold transition-colors mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-khazar-maroon font-semibold group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={18} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Active Scholarships */}
      <section className="py-40 bg-khazar-dark text-khazar-cream relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 -mr-20 -mb-20">
            <GraduationCap size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="flex justify-center mb-10 text-khazar-gold">
                <GraduationCap size={80} />
            </div>
            <h2 className="font-soria text-5xl md:text-8xl font-bold leading-tight mb-8">
              Empowering Your <span className="italic">Potential</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-70 mb-16 font-light">
              Khazar University offers a range of scholarships for international and local students, including Merit-Based Excellence Awards and International Fellowship Programs.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-khazar-gold text-khazar-dark px-14 py-6 rounded-none font-bold text-xl hover:bg-white hover:text-khazar-maroon transition-all btn-swipe shadow-2xl">
                Apply for Scholarship
              </button>
              <button className="border-2 border-khazar-cream/40 text-khazar-cream px-14 py-6 rounded-none font-bold text-xl hover:bg-khazar-cream hover:text-khazar-dark transition-all btn-swipe">
                Scholarship Details
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
