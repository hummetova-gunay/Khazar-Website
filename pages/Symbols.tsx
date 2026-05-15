
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Music, Award, Book, Quote } from 'lucide-react';

const Symbols: React.FC = () => {
  const songs = [
    { title: 'Khazar University Hymn', lyrics: 'Hamlet Isakhanli', music: 'Vasif Adigozelov & Ramiz Mustafayev' },
    { title: 'Khazar University Student Waltz', lyrics: 'Hamlet Isakhanli', music: 'Ramiz Mustafayev' },
    { title: 'Dunya (World) School Song', lyrics: 'Hamlet Isakhanli', music: 'Nailakhanim Isayeva' },
  ];

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-8xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="font-soria text-6xl md:text-8xl text-khazar-maroon mb-12">Tradition & <span className="italic">Symbols</span></h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start">
          <ScrollReveal>
            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-khazar-maroon/5">
              <div className="flex items-center gap-4 mb-10 text-khazar-maroon">
                <Music size={40} />
                <h2 className="font-soria text-4xl font-bold">Official Songs</h2>
              </div>
              <div className="space-y-10">
                {songs.map((song, idx) => (
                  <div key={idx} className="border-l-4 border-khazar-maroon pl-6">
                    <h3 className="font-soria text-2xl text-khazar-maroon font-semibold mb-2">{song.title}</h3>
                    <p className="text-sm opacity-60 uppercase tracking-widest">Lyrics: {song.lyrics}</p>
                    <p className="text-sm opacity-60 uppercase tracking-widest mt-1">Music: {song.music}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-khazar-maroon text-khazar-cream p-12 rounded-3xl shadow-2xl relative overflow-hidden">
               <Quote className="absolute -top-10 -right-10 text-white/5" size={300} />
              <div className="flex items-center gap-4 mb-10">
                <Award size={40} />
                <h2 className="font-soria text-4xl font-bold">Graduates' Oath</h2>
              </div>
              <p className="text-2xl md:text-3xl font-light leading-relaxed italic mb-8 relative z-10">
                “I swear to apply all my knowledge and skills gained at Khazar University for the benefit of my family, my people and my country! I swear always to honor Khazar University!”
              </p>
              <p className="opacity-80 text-sm uppercase tracking-widest">
                Administered during graduation ceremonies in March & September.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-khazar-cream p-12 md:p-20 rounded-3xl border border-khazar-maroon/10">
            <div>
              <div className="flex items-center gap-4 mb-8 text-khazar-maroon">
                <Book size={40} />
                <h2 className="font-soria text-4xl font-bold uppercase tracking-tighter">Khazar Review</h2>
              </div>
              <div className="prose prose-lg text-khazar-maroon/80 font-light leading-relaxed">
                <p>
                  The popular and editorial/scientific <span className="font-semibold italic">Khazar Review</span> is a unique publication among Azerbaijani higher education institutions. 
                </p>
                <p className="mt-6">
                  Evolving from a newspaper style to a prestigious monthly 80-page magazine, it serves as a critical intellectual hub for research, culture, and university life.
                </p>
                <a 
                  href="http://khazar-review.khazar.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 mt-8 text-khazar-maroon font-bold text-lg hover-underline relative"
                >
                  Visit Official Site
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-khazar-maroon opacity-5 rounded-2xl"></div>
              <img src="https://picsum.photos/seed/review/800/1000" className="rounded-lg shadow-xl relative z-10 w-full object-cover h-[500px]" alt="Khazar Review Magazine" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Symbols;
