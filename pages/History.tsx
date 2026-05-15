
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const History: React.FC = () => {
  const milestones = [
    { year: '1991', event: 'Founded as Azerbaijan University by Cabinet resolution' },
    { year: '1992', event: 'Officially renamed Khazar University' },
    { year: '1995', event: 'Full accreditation as Azerbaijan’s first private university' },
    { year: '2006', event: 'Recognized by international experts as a model of modern higher education' },
    { year: '2011', event: 'Renewal of full accreditation across all schools' },
  ];

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-8xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="font-soria text-6xl md:text-8xl text-khazar-maroon mb-12">Our <span className="italic">History</span></h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <div className="prose prose-xl text-khazar-maroon/80 font-light leading-relaxed">
                <h3 className="font-soria text-3xl text-khazar-maroon mb-6 font-semibold">The Beginning (1991)</h3>
                <p>
                  Khazar University was established on March 18, 1991, to fill a critical need in post-Soviet Azerbaijan: the training of English-speaking specialists capable of navigating global standards. Founded as a multidisciplinary institution, it introduced the two-cycle (Bachelor’s and Master’s) system, initially focusing on economics, management, and computer sciences.
                </p>
                <p className="mt-8">
                  By 1992, the institution took the name Khazar University, symbolizing its connection to the Caspian region and its international outlook.
                </p>
                
                <h3 className="font-soria text-3xl text-khazar-maroon mt-16 mb-6 font-semibold">Evolution and Accreditation</h3>
                <p>
                  The university's commitment to quality was validated early on. It received its first official authorization in 1993 and became fully accredited in 1995—the first private university in the country to do so. Over the following decades, Khazar has consistently renewed its accreditation and forged partnerships with leading universities worldwide.
                </p>
                <p className="mt-8">
                  In 2006, international experts hailed Khazar as a model of modern higher education, recognizing its pioneering role in university-industry relations and faculty exchange programs.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-1">
            <ScrollReveal delay={300} className="sticky top-40 space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-khazar-maroon/5">
                <h3 className="font-soria text-2xl text-khazar-maroon mb-8 font-bold border-b pb-4">Timeline</h3>
                <div className="space-y-8">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="font-bold text-khazar-maroon">{m.year}</div>
                      <div className="text-sm opacity-70 leading-snug">{m.event}</div>
                    </div>
                  ))}
                </div>
              </div>
              <img src="https://picsum.photos/seed/history1/400/600" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" alt="Historical photo" />
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">
            <img src="https://picsum.photos/seed/hist2/800/600" className="w-full h-full object-cover rounded-xl" alt="Old campus" />
            <img src="https://picsum.photos/seed/hist3/800/600" className="w-full h-full object-cover rounded-xl" alt="Graduation ceremony" />
            <img src="https://picsum.photos/seed/hist4/800/600" className="w-full h-full object-cover rounded-xl" alt="Faculty group" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default History;
