import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import JourneyMedia from './components/JourneyMedia';
import type { JourneyItem } from './components/JourneyMedia';
import BrandCollab from './components/BrandCollab';
import Contact from './components/Contact';

const journeyItems: JourneyItem[] = [
  {
    id: 'img1',
    type: 'image',
    src: '/media/1.webp',
    title: 'Discover. Experience. Share.',
    description: 'Stories from every corner of the world.',
    reverse: false,
  },
  {
    id: 'vid1',
    type: 'video',
    src: '/media/V1.mp4',
    title: 'Cinematic Escapes',
    description: '"Adventure begins outside your comfort zone."',
    reverse: true,
  },
  {
    id: 'img2',
    type: 'image',
    src: '/media/2.webp',
    title: 'Explore Beyond Boundaries',
    description: 'Where adventure meets storytelling.',
    reverse: false,
  },
  {
    id: 'vid2',
    type: 'video',
    src: '/media/V3.mp4',
    title: 'Unseen Perspectives',
    description: '"The world is full of stories waiting to be explored."',
    reverse: true,
  },
  {
    id: 'img3',
    type: 'image',
    src: '/media/3.webp',
    title: 'Travel With Purpose',
    description: 'More than travel — real experiences.',
    reverse: false,
  },
  {
    id: 'vid3',
    type: 'video',
    src: '/media/V5.mp4',
    title: 'Every Journey Has a Story',
    description: 'Capturing moments that inspire exploration.',
    reverse: true,
  },
];

const App: React.FC = () => {
  return (
    <div className="bg-[var(--color-alt-bg)] min-h-screen">
      <Hero />
      <About />
      <JourneyMedia items={journeyItems} />
      <BrandCollab />
      <Contact />
      <footer className="bg-black py-8 text-center text-white/50 text-sm font-montserrat">
        &copy; {new Date().getFullYear()} Bilal Shakeel. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
