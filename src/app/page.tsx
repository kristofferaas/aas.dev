import InteractiveGlobe from '../components/InteractiveGlobe';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-white font-geist-sans text-2xl font-bold">
          aas.dev
        </h1>
      </div>

      {/* Interactive Globe */}
      <div className="w-full h-screen">
        <InteractiveGlobe />
      </div>

      {/* Floating subtitle */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <p className="text-white/70 font-geist-sans text-lg">
          Interactive Digital World
        </p>
      </div>
    </div>
  );
}
