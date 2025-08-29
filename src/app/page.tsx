export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-black font-geist-sans text-sm mb-8">aas.dev</h1>
      
      <div className="text-center">
        <a 
          href="/contact" 
          className="text-blue-600 hover:text-blue-800 font-geist-sans text-sm transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
