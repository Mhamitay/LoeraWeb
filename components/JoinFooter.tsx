
import React from 'react';

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="text-white/70 hover:gold-text transition-colors duration-300">
    {children}
  </a>
);

const JoinFooter: React.FC = () => {
  return (
    <footer className="bg-black w-full pt-20">
      <div className="container mx-auto px-4 text-center">
        {/* Join Section */}
        <div className="max-w-xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Be part of our golden story.</h2>
          <p className="text-white/70 mb-8">Receive exclusive news, collection previews, and private invitations from Loréa.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-transparent border-b border-white/40 focus:gold-border focus:outline-none py-2 text-center sm:text-left transition-colors duration-300"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-transparent border-2 gold-border gold-text font-serif tracking-widest uppercase hover:gold-bg hover:text-black transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        {/* Footer Section */}
        <div className="w-full h-px bg-white/10 mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <p className="text-sm text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Loréa — The Essence of Gold
          </p>
          <div className="flex items-center gap-6">
            <SocialIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </SocialIcon>
            <SocialIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default JoinFooter;
