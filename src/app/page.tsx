export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-black font-geist-sans text-2xl font-bold mb-8">
          aas.dev
        </h1>

        {/* Globe Component */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          {/* Globe container */}
          <div className="relative w-full h-full">
            {/* Main globe sphere */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-full shadow-2xl animate-pulse"></div>

            {/* Globe grid lines */}
            <div
              className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin"
              style={{ animationDuration: '20s' }}
            ></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin"
              style={{
                animationDuration: '15s',
                animationDirection: 'reverse',
              }}
            ></div>

            {/* Latitude lines */}
            <div className="absolute inset-0 rounded-full">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full border-t border-white/20"
                  style={{
                    top: `${20 + i * 15}%`,
                    transform: 'rotateX(60deg)',
                  }}
                ></div>
              ))}
            </div>

            {/* Longitude lines */}
            <div className="absolute inset-0 rounded-full">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full border-l border-white/20"
                  style={{
                    left: `${12.5 + i * 12.5}%`,
                    transform: 'rotateY(60deg)',
                  }}
                ></div>
              ))}
            </div>

            {/* Continents overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-green-600/30 opacity-60"></div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/20 to-transparent animate-pulse"></div>

            {/* Floating elements */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-8 right-8 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Orbit rings */}
          <div
            className="absolute inset-0 rounded-full border border-white/10 animate-spin"
            style={{ animationDuration: '30s' }}
          ></div>
          <div
            className="absolute inset-0 rounded-full border border-white/5 animate-spin"
            style={{ animationDuration: '25s', animationDirection: 'reverse' }}
          ></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 font-geist-sans text-lg">
          Exploring the digital world 🌍
        </p>
      </div>
    </div>
  );
}
