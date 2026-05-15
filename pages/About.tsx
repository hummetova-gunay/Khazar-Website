
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  const stats = [
    { value: '1991', label: 'Founded' },
    { value: '1st', label: 'Private University in Azerbaijan' },
    { value: '7+', label: 'Independent Schools' },
    { value: '200+', label: 'International Partners' },
  ];

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-8xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="font-soria text-6xl md:text-8xl text-khazar-maroon mb-12">About <span className="italic">Us</span></h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <ScrollReveal>
            <div className="prose prose-xl text-khazar-maroon/80 font-light leading-relaxed space-y-8">
              <p className="text-2xl text-khazar-maroon font-normal">
                Khazar University stands as a beacon of advanced study and research in the Republic of Azerbaijan, fostering academic excellence since its inception.
              </p>
              <p>
                As the nation's premier private institution for undergraduate and graduate studies, Khazar pioneered a decentralized structure where independent schools unite under a single academic vision. Our diverse majors span Arts, Humanities, Social Sciences, Architecture, Engineering, Economics, and Education.
              </p>
              <p>
                We take immense pride in our faculty—a distinguished group of national and international leaders in their respective fields. From business visionaries to acclaimed legal experts, our professors bring real-world mastery into the classroom.
              </p>
              <p>
                With Azerbaijan's most extensive MBA program and a deep-rooted commitment to industry collaboration, Khazar continues to bridge the gap between academic theory and global market demands.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-8">
              <img src="https://picsum.photos/seed/about1/600/800" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" alt="Campus building" />
              <img src="https://picsum.photos/seed/about2/600/800" className="rounded-2xl shadow-xl w-full h-[400px] object-cover mt-12" alt="Students studying" />
            </div>
          </ScrollReveal>
        </div>

        <div className="bg-khazar-maroon text-khazar-cream rounded-3xl p-16 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          <ScrollReveal>
            <h2 className="font-soria text-4xl md:text-6xl mb-16 text-center">Facts & Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-soria text-6xl font-bold mb-4">{stat.value}</div>
                  <div className="uppercase tracking-[0.2em] text-sm opacity-60">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default About;
