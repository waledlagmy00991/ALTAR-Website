import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  CheckCircle, 
  Video, 
  Calendar,
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

// The exact SVG Logo requested by the user
function Logo() {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 256 256" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 hover:scale-110"
    >
      <path 
        fill="rgb(84, 84, 84)" 
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z" 
      />
    </svg>
  );
}

// Inline Toast Notification Component for smooth feedback
interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info';
}

export default function App() {
  // Navigation active state just to show active state on single-page links
  const [activeLink, setActiveLink] = useState('Story');
  const navLinks = ['Story', 'Products', 'Help', 'Support'];

  // Modals state
  const [isFittingModalOpen, setIsFittingModalOpen] = useState(false);
  const [isSharkTankModalOpen, setIsSharkTankModalOpen] = useState(false);
  const [isInteractiveInfoOpen, setIsInteractiveInfoOpen] = useState("");

  // Fitting Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    preferredDate: '',
    additionalNotes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Simple clean toast system
  const [toasts, setToasts] = useState<Toast[]>([]);
  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Handle Free Fitting Form Submit
  const handleFittingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      showToast('Please fill out all required fields to register.', 'info');
      return;
    }
    setFormSubmitted(true);
    showToast('Your fitting session has been requested successfully!', 'success');
  };

  // Link actions callback to show feedback
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setActiveLink(link);
    
    if (link === 'Story') {
      setIsSharkTankModalOpen(true);
      showToast('Opening our Shark Tank india story!', 'info');
    } else if (link === 'Products') {
      setIsFittingModalOpen(true);
      showToast('Browse custom smart prosthetic fitting kits.', 'info');
    } else if (link === 'Help') {
      setIsInteractiveInfoOpen('Help');
      showToast('Loaded active setup guidance center', 'info');
    } else if (link === 'Support') {
      setIsInteractiveInfoOpen('Support');
      showToast('Access custom technical dispatch line', 'info');
    }
  };

  return (
    <div id="root-container" className="relative min-h-screen overflow-hidden bg-[#f0f0ee]">
      
      {/* BACKGROUND VIDEO ELEMENT */}
      <video
        id="hero-bg-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* SUBTLE OVERLAY FILTER (Allows perfect readability of all client elements) */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px] pointer-events-none z-0" />

      {/* FOREGROUND CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* NAVBAR */}
        <header className="w-full">
          <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
            
            {/* Left circular logo container */}
            <div 
              id="navbar-logo-circle"
              onClick={() => {
                showToast('Welcome to ALTAR Home', 'info');
              }}
              className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0 cursor-pointer shadow-md shadow-black/5 hover:scale-105 active:scale-95 transition-all duration-300"
              style={{ backgroundColor: '#EDEDED' }}
            >
              <Logo />
            </div>

            {/* Right navigation pill container */}
            <div 
              id="navbar-links-pill"
              className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3 shadow-md shadow-black/5"
              style={{ backgroundColor: '#EDEDED' }}
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  id={`nav-link-${link.toLowerCase()}`}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`text-[12px] sm:text-[14px] font-medium transition-colors duration-200 cursor-pointer ${
                    activeLink === link 
                      ? 'text-gray-900 font-bold underline decoration-blue-500 underline-offset-4' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>

          </nav>
        </header>

        {/* HERO CONTENT SECTION (Bottom-left aligned) */}
        <main className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-xs flex flex-col items-start text-left">
            
            {/* 1. Badge link */}
            <a
              id="hero-sharktank-badge"
              href="#sharktank"
              onClick={(e) => {
                e.preventDefault();
                setIsSharkTankModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3 group cursor-pointer"
            >
              Seen on Shark Tank in India
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            {/* 2. Headline */}
            <h1 id="hero-headline-h1" className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              Simple, smart prosthetics made for people who keep fighting.
            </h1>

            {/* 3. Subtext */}
            <p id="hero-subtext-p" className="text-[13px] text-gray-400 font-normal mb-3">
              Reclaim your movement now.
            </p>

            {/* 4. CTA anchor */}
            <button
              id="hero-cta-button"
              onClick={() => {
                setIsFittingModalOpen(true);
              }}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group cursor-pointer shadow-sm active:scale-95"
            >
              Try a free fitting
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </button>

          </div>
        </main>

      </div>

      {/* FLOATING NOTIFICATIONS */}
      <div id="toast-wrapper" className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-xs w-full pointer-events-none">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-center gap-2 p-3 rounded-lg shadow-lg text-xs font-medium text-slate-800 bg-white border border-slate-200 animate-slide-in-right justify-between`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>{t.message}</span>
            </div>
            <button 
              onClick={() => setToasts(p => p.filter(toast => toast.id !== t.id))}
              className="text-slate-400 hover:text-slate-600 ml-1"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {/* INTERACTIVE FITTING REGISTRATION MODAL */}
      {isFittingModalOpen && (
        <div id="fitting-modal-overlay" className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 border border-slate-200/50 shadow-2xl relative animate-up max-h-[90vh] overflow-y-auto">
            
            <button
              id="close-fitting-modal"
              onClick={() => {
                setIsFittingModalOpen(false);
                setFormSubmitted(false);
              }}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <div>
                <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                  Clinical Trial & Fitting
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Book Free Fitting Trial
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Schedule physical feedback on bio-sensitive carbon-fiber limbs with award-winning clinicians.
                </p>

                <form onSubmit={handleFittingSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Full Name *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400"><User className="w-3.5 h-3.5" /></span>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Zackary Mal"
                        className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Email address *</label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400"><Mail className="w-3.5 h-3.5" /></span>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          placeholder="zack@altar.in"
                          className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Phone Number *</label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400"><Phone className="w-3.5 h-3.5" /></span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 "
                          className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Selected Location *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400"><MapPin className="w-3.5 h-3.5" /></span>
                      <select
                        value={formData.city}
                        onChange={e => setFormData({...formData, city: e.target.value})}
                        className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="Mumbai">Mumbai Lab (Main Office)</option>
                        <option value="Bangalore">Bangalore Research Center</option>
                        <option value="Delhi">Delhi Smart Lab</option>
                        <option value="Hyderabad">Hyderabad Bio-Lab</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Preferred Date (Optional)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400"><Calendar className="w-3.5 h-3.5" /></span>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                        className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Remarks & Requirements</label>
                    <textarea
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={e => setFormData({...formData, additionalNotes: e.target.value})}
                      placeholder="Myoelectric controls, below-knee, above-elbow etc."
                      className="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-transform active:scale-95 uppercase tracking-wide mt-2"
                  >
                    Confirm Free Request
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="inline-flex items-center justify-center bg-emerald-50 text-emerald-500 rounded-full p-3 mb-2">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-tight">Fitting Request Submitted</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Excellent, <strong className="text-slate-800">{formData.fullName}</strong>! Our clinical coordinator from the <strong className="text-blue-600">{formData.city} Lab</strong> will call you at <strong className="text-slate-800">{formData.phone}</strong> inside 24 hours to finalize your secure reservation.
                </p>
                <div className="bg-slate-50 p-2.5 rounded-lg border text-left text-[11px] text-slate-600 space-y-1">
                  <div><strong>Location:</strong> {formData.city} Clinical Wing</div>
                  {formData.preferredDate && <div><strong>Preferred:</strong> {formData.preferredDate}</div>}
                  <div><strong>Email confirmation sent to:</strong> {formData.email}</div>
                </div>
                <button
                  onClick={() => {
                    setIsFittingModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="px-5 py-1.5 bg-slate-800 text-white hover:bg-slate-900 rounded-lg text-xs font-semibold mr-2 mt-4"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* SHARK TANK STORY MODAL */}
      {isSharkTankModalOpen && (
        <div id="sharktank-modal-overlay" className="fixed inset-0 bg-black/45 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-100 shadow-2xl relative animate-up">
            
            <button
              id="close-sharktank-modal"
              onClick={() => setIsSharkTankModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-amber-500" /> Seen on Shark Tank India
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Empowering Millions of Lives
              </h3>
              
              <div className="my-3 py-2.5 px-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded text-xs text-slate-700 italic">
                "Our technology changes the paradigm: beautiful, highly structural prosthetic accessories that deliver biofeedback signals safely without the premium price markup."
              </div>

              <p className="text-xs text-slate-650 leading-relaxed mb-4">
                During our pitches in India, we demonstrated how our custom hardware integrations (such as capacitance-regulated motor inputs and ultrasonic sonar avoidances) allow smooth locomotion.
              </p>

              <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-slate-100 mb-4 text-center">
                <div>
                  <div className="text-base font-extrabold text-blue-600">3x</div>
                  <div className="text-[10px] text-slate-400">Better bio-signals</div>
                </div>
                <div>
                  <div className="text-base font-extrabold text-blue-600">₹0 Cost</div>
                  <div className="text-[10px] text-slate-400">Fitting assessment</div>
                </div>
                <div>
                  <div className="text-base font-extrabold text-blue-600">100%</div>
                  <div className="text-[10px] text-slate-400">Carbon strength</div>
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => {
                    setIsSharkTankModalOpen(false);
                    setIsFittingModalOpen(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded-lg flex items-center gap-1"
                >
                  Schedule Trial <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ADDITIONAL INTERACTIVE DRAWERS FOR EXTRA HELP & SUPPORT LINK INTERACTIONS */}
      {isInteractiveInfoOpen && (
        <div id="interactive-drawer-overlay" className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-end">
          <div className="bg-white w-full max-w-sm h-full p-6 shadow-2xl flex flex-col justify-between relative animate-slide-in-right text-slate-800">
            
            <button
              onClick={() => setIsInteractiveInfoOpen("")}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              {isInteractiveInfoOpen === 'Help' ? (
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-blue-50 text-blue-500 rounded-xl">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">ALTAR Interaction Labs</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Welcome to our physical & AR systems assistance portal. Here is how you can easily optimize:
                  </p>
                  <div className="space-y-2 mt-4">
                    <div className="p-3 bg-slate-50 rounded-lg border text-xs">
                      <strong className="text-slate-800">1. Adjust Sensor Feedback</strong>
                      <p className="text-slate-500 mt-1">Our on-screen widgets track real-time electrical signals perfectly when wired via an Arduino hub.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border text-xs">
                      <strong className="text-slate-800">2. Charge Capacitor System</strong>
                      <p className="text-slate-500 mt-1">Ensure the radial alignment matches the negative stripe marking indicators precisely.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-red-50 text-red-500 rounded-xl">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Incident Dispatch Center</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Submit active logs directly to our lead logistics coordinator and electronics testing lab team.
                  </p>

                  <div className="space-y-3 mt-4">
                    <input
                      type="text"
                      placeholder="Enter affected component serial"
                      className="w-full p-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none"
                    />
                    <textarea
                      rows={3}
                      placeholder="Describe the failure or physical damage..."
                      className="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsFittingModalOpen(true);
                  setIsInteractiveInfoOpen("");
                }}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-transform active:scale-95"
              >
                Schedule Virtual Consultant
              </button>
              <button
                onClick={() => setIsInteractiveInfoOpen("")}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-transform"
              >
                Discard Section
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
