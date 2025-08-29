export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full mx-4">
        <h1 className="text-black font-geist-sans text-2xl font-semibold mb-8 text-center">
          Contact
        </h1>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 font-geist-sans text-sm mb-4">
              Get in touch with me
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@aas.dev" className="text-blue-600 hover:text-blue-800 font-geist-sans text-sm transition-colors">
                contact@aas.dev
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a href="https://github.com/aas-dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-geist-sans text-sm transition-colors">
                GitHub
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <a href="https://linkedin.com/in/aas-dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-geist-sans text-sm transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="pt-6 text-center">
            <a href="/" className="text-gray-500 hover:text-gray-700 font-geist-sans text-sm transition-colors">
              ← Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}