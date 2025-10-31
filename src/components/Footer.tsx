// React Component: Footer
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4" role="contentinfo">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="max-w-2xl mx-auto mb-2">
            House of Ishvita is a luxury fashion styling platform offering personalized AI-powered styling 
            and virtual try-ons to help you discover your perfect look.
          </p>
          <p className="max-w-2xl mx-auto">
            Our mission is to empower you with the latest fashion trends and technology for a seamless styling experience.
          </p>
          <p className="mt-6 italic font-light">
            With love and vision — Ishika · Vanshika · Harshita.
          </p>
        </div>
        
        <div className="border-t border-white/30 pt-8">
          <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Ishika</h3>
              <a
                href="https://www.instagram.com/ishika_singla10?igsh=MTVtbnZxcnhsdWcxMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightBg hover:text-white transition-colors underline"
                aria-label="Visit Ishika's Instagram profile"
              >
                ishika_singla10
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Vanshika</h3>
              <a
                href="https://www.instagram.com/vnshka_17?igsh=Y25raHFwaWxlYmFx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightBg hover:text-white transition-colors underline"
                aria-label="Visit Vanshika's Instagram profile"
              >
                vnshka_17
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Harshita</h3>
              <a
                href="https://www.instagram.com/harshitaa05?igsh=MWt5M3JtcWVxc3kyaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightBg hover:text-white transition-colors underline"
                aria-label="Visit Harshita's Instagram profile"
              >
                harshitaa05
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-white/80">
          <p>&copy; 2025 House of Ishvita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
