import React, { useState, useEffect } from 'react';
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
  ArrowRight,
  Download as DownloadIcon,
  Monitor,
  Cpu,
  Bookmark,
  ChevronRight,
  ShieldCheck,
  ShoppingCart,
  HeartPulse,
  Send,
  MessageSquare,
  BookOpen,
  Terminal,
  Compass,
  Eye,
  Volume2,
  Copy,
  Check
} from 'lucide-react';

// The exact SVG Logo requested by the user
function Logo() {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 256 256" 
      fill="none" 
      xmlns="http://www.w3.org/2056/svg"
      className="transition-transform duration-300 hover:scale-110"
    >
      <path 
        fill="rgb(84, 84, 84)" 
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z" 
      />
    </svg>
  );
}

// ==========================================
// HIGH QUALITY SVG ILLUSTRATIONS OF ELECTRONIC COMPONENTS
// ==========================================

function ArduinoUnoSvg() {
  return (
    <svg viewBox="0 0 120 100" className="w-full h-32 object-contain bg-slate-900 p-2 rounded-lg">
      <rect x="8" y="10" width="104" height="80" rx="6" fill="#006666" />
      <rect x="15" y="15" width="90" height="6" fill="#111" />
      <rect x="15" y="79" width="90" height="6" fill="#111" />
      <rect x="3" y="27" width="18" height="13" fill="#cbd5e1" />
      <rect x="52" y="35" width="38" height="18" fill="#1a1a1a" />
      <circle cx="56" cy="44" r="1.5" fill="#fff" />
      <line x1="54" y1="35" x2="54" y2="30" stroke="#888" strokeWidth="0.8" />
      <line x1="62" y1="35" x2="62" y2="30" stroke="#888" strokeWidth="0.8" />
      <line x1="70" y1="35" x2="70" y2="30" stroke="#888" strokeWidth="0.8" />
      <line x1="78" y1="35" x2="78" y2="30" stroke="#888" strokeWidth="0.8" />
      <circle cx="32" cy="55" r="2.5" fill="#facc15" className="animate-pulse" />
      <circle cx="39" cy="55" r="2.5" fill="#4ade80" />
      <text x="50" y="72" fill="#fff" fontSize="6.5" fontFamily="monospace" fontWeight="bold">UNO R4 WIFI</text>
    </svg>
  );
}

function ArduinoMegaSvg() {
  return (
    <svg viewBox="0 0 140 100" className="w-full h-32 object-contain bg-slate-900 p-2 rounded-lg">
      <rect x="5" y="15" width="130" height="70" rx="6" fill="#034e6c" />
      <rect x="12" y="20" width="115" height="5" fill="#111" />
      <rect x="12" y="75" width="115" height="5" fill="#111" />
      <rect x="123" y="29" width="8" height="42" fill="#111" />
      <rect x="2" y="50" width="15" height="10" fill="#222" />
      <rect x="75" y="38" width="26" height="26" rx="2" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
      <circle cx="79" cy="42" r="1" fill="#fff" />
      <text x="35" y="48" fill="#fff" fontSize="6" fontFamily="monospace" fontWeight="bold">MEGA 2560</text>
      <text x="35" y="56" fill="#10b981" fontSize="5" fontFamily="monospace">54 HIGH INTENSITY PINS</text>
    </svg>
  );
}

function BreadboardSvg() {
  return (
    <svg viewBox="0 0 120 100" className="w-full h-32 object-contain bg-slate-50 p-2 rounded-lg border border-slate-300 shadow-inner">
      <rect x="5" y="5" width="110" height="90" rx="4" fill="#fafafa" stroke="#cbd5e1" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="108" y2="12" stroke="#ef4444" strokeWidth="1.2" />
      <line x1="12" y1="18" x2="108" y2="18" stroke="#3b82f6" strokeWidth="1.2" />
      <line x1="12" y1="82" x2="108" y2="82" stroke="#ef4444" strokeWidth="1.2" />
      <line x1="12" y1="88" x2="108" y2="88" stroke="#3b82f6" strokeWidth="1.2" />
      {[28, 36, 44, 52, 60, 68, 74].map((y, idx) => (
        <g key={idx}>
          {[15, 25, 35, 45, 55, 65, 75, 85, 95, 105].map((x) => (
            <circle key={x} cx={x} cy={y} r="1.3" fill="#94a3b8" />
          ))}
        </g>
      ))}
      <rect x="5" y="48" width="110" height="4" fill="#e2e8f0" />
    </svg>
  );
}

function LedsSvg() {
  return (
    <svg viewBox="0 0 120 100" className="w-full h-32 object-contain bg-slate-900 p-2 rounded-lg">
      {/* 3 LEDs - Red, Green, Blue */}
      <line x1="25" y1="52" x2="25" y2="82" stroke="#cbd5e1" strokeWidth="1.5" />
      <line x1="31" y1="52" x2="31" y2="78" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="22" y="32" width="11" height="20" rx="5" fill="#ef4444" opacity="0.9" />
      <circle cx="27" cy="38" r="10" fill="#ef4444" opacity="0.35" className="animate-pulse" />
      
      <line x1="58" y1="52" x2="58" y2="82" stroke="#cbd5e1" strokeWidth="1.5" />
      <line x1="64" y1="52" x2="64" y2="78" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="55" y="32" width="11" height="20" rx="5" fill="#22c55e" opacity="0.9" />
      <circle cx="60" cy="38" r="10" fill="#22c55e" opacity="0.35" className="animate-pulse" />

      <line x1="91" y1="52" x2="91" y2="82" stroke="#cbd5e1" strokeWidth="1.5" />
      <line x1="97" y1="52" x2="97" y2="78" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="88" y="32" width="11" height="20" rx="5" fill="#3b82f6" opacity="0.9" />
      <circle cx="93" cy="38" r="10" fill="#3b82f6" opacity="0.35" className="animate-pulse" />
      
      <text x="21" y="93" fill="#cbd5e1" fontSize="6" fontFamily="monospace">LED HUB (RGB EMISSION)</text>
    </svg>
  );
}

function CapacitorSvg() {
  return (
    <svg viewBox="0 0 120 100" className="w-full h-32 object-contain bg-slate-900 p-2 rounded-lg">
      <rect x="42" y="22" width="36" height="53" rx="3" fill="#111" stroke="#444" strokeWidth="1" />
      <rect x="42" y="22" width="10" height="53" fill="#94a3b8" />
      <text x="44" y="34" fill="#111" fontSize="9" fontFamily="monospace" fontWeight="bold">-</text>
      <text x="44" y="50" fill="#111" fontSize="9" fontFamily="monospace" fontWeight="bold">-</text>
      <text x="44" y="66" fill="#111" fontSize="9" fontFamily="monospace" fontWeight="bold">-</text>
      <line x1="48" y1="75" x2="48" y2="92" stroke="#cbd5e1" strokeWidth="2.5" />
      <line x1="72" y1="75" x2="72" y2="87" stroke="#cbd5e1" strokeWidth="2.5" />
      <text x="54" y="40" fill="#4ade80" fontSize="7" fontFamily="sans-serif">470μF</text>
      <text x="54" y="52" fill="#fbbf24" fontSize="7" fontFamily="sans-serif">50V MAX</text>
    </svg>
  );
}

function ResistorSvg() {
  return (
    <svg viewBox="0 0 120 100" className="w-full h-32 object-contain bg-slate-50 p-2 rounded-lg border border-slate-200">
      <line x1="8" y1="50" x2="112" y2="50" stroke="#94a3b8" strokeWidth="2.5" />
      <rect x="34" y="38" width="52" height="24" rx="4" fill="#fed7aa" stroke="#f97316" strokeWidth="1" />
      <rect x="43" y="38" width="4" height="24" fill="#a16207" /> 
      <rect x="52" y="38" width="4" height="24" fill="#000000" /> 
      <rect x="62" y="38" width="4" height="24" fill="#ef4444" /> 
      <rect x="73" y="38" width="4" height="24" fill="#eab308" /> 
      <text x="40" y="78" fill="#475569" fontSize="6.5" fontFamily="monospace" fontWeight="bold">10KΩ RESISTOR</text>
    </svg>
  );
}

function SensorsSvg() {
  return (
    <svg viewBox="0 0 120 100" className="w-full h-32 object-contain bg-slate-900 p-2 rounded-lg">
      <rect x="10" y="20" width="100" height="60" rx="5" fill="#1e3a8a" />
      <circle cx="35" cy="50" r="16" fill="#cbd5e1" stroke="#000" strokeWidth="1.5" />
      <circle cx="35" cy="50" r="11" fill="#475569" />
      <circle cx="35" cy="50" r="5" fill="#0f172a" />
      <text x="32" y="38" fill="#fff" fontSize="6" fontWeight="bold">T</text>
      
      <circle cx="85" cy="50" r="16" fill="#cbd5e1" stroke="#000" strokeWidth="1.5" />
      <circle cx="85" cy="50" r="11" fill="#475569" />
      <circle cx="85" cy="50" r="5" fill="#0f172a" />
      <text x="82" y="38" fill="#fff" fontSize="6" fontWeight="bold">R</text>

      <line x1="45" y1="80" x2="45" y2="92" stroke="#fbbf24" strokeWidth="2" />
      <line x1="55" y1="80" x2="55" y2="92" stroke="#fbbf24" strokeWidth="2" />
      <line x1="65" y1="80" x2="65" y2="92" stroke="#fbbf24" strokeWidth="2" />
      <line x1="75" y1="80" x2="75" y2="92" stroke="#fbbf24" strokeWidth="2" />
      <text x="44" y="28" fill="#fff" fontSize="5" fontFamily="monospace">SONAR RANGE</text>
    </svg>
  );
}

function CircuitBoardSvg() {
  return (
    <svg viewBox="0 0 120 100" className="w-full h-32 object-contain bg-emerald-950 p-2 rounded-lg">
      <rect x="10" y="10" width="100" height="80" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1" />
      <path d="M 20 20 L 40 20 L 50 30 L 50 60 L 70 60 L 80 70" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
      <path d="M 90 20 L 90 40 L 70 50 L 30 50 L 20 60" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
      <rect x="52" y="38" width="22" height="22" rx="2" fill="#111" />
      <text x="24" y="82" fill="#6ee7b7" fontSize="5" fontFamily="monospace">ALTAR EMBEDDED ENGINE</text>
    </svg>
  );
}

function LabKitSvg() {
  return (
    <svg viewBox="0 0 120 100" className="w-full h-32 object-contain bg-orange-50/20 p-2 rounded-lg border border-orange-200">
      <rect x="15" y="15" width="90" height="70" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
      <line x1="45" y1="15" x2="45" y2="85" stroke="#334155" strokeWidth="1.5" />
      <line x1="45" y1="50" x2="105" y2="50" stroke="#334155" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="4" fill="#ec4899" />
      <circle cx="30" cy="45" r="4" fill="#3b82f6" />
      <rect x="55" y="23" width="40" height="20" rx="2" fill="#fff" stroke="#ccc" />
      <rect x="55" y="60" width="16" height="15" fill="#111" />
      <text x="18" y="10" fill="#1e293b" fontSize="6" fontWeight="bold">LEARNER EXPEDITION KIT</text>
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
  // Navigation active state - default is 'Home' to show the homepage.
  // Links: Download | Products | Help | Support
  const [activeLink, setActiveLink] = useState<'Home' | 'Download' | 'Products' | 'Help' | 'Support'>('Home');
  const navLinks = ['Download', 'Products', 'Help', 'Support'];

  // Shopping Cart state
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; qty: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Download simulation progress states
  const [downloadProgress, setDownloadProgress] = useState<Record<string, number>>({});
  const [downloadingState, setDownloadingState] = useState<Record<string, boolean>>({});

  // Support form state
  const [supportData, setSupportData] = useState({
    name: '',
    email: '',
    device: 'Windows Client App',
    message: ''
  });
  const [supportSuccess, setSupportSuccess] = useState(false);
  const [incidentHash, setIncidentHash] = useState('');

  // Free interactive Trial enrollment state
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [trialForm, setTrialForm] = useState({
    studentName: '',
    studentEmail: '',
    educationLevel: 'High School',
    coupon: ''
  });
  const [trialEnrolled, setTrialEnrolled] = useState(false);

  // Active documentation section under Help Page
  const [activeDocSection, setActiveDocSection] = useState('getting-started');

  // Interactive help search query
  const [helpSearch, setHelpSearch] = useState('');

  // Clean interactive toasts system
  const [toasts, setToasts] = useState<Toast[]>([]);
  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Trigger simulated download sequence
  const startDownloadSimulator = (platform: string, extension: string) => {
    if (downloadingState[platform]) return;

    showToast(`Initializing connection to ALTAR distribution channels for ${platform}...`, 'info');
    setDownloadingState(prev => ({ ...prev, [platform]: true }));
    setDownloadProgress(prev => ({ ...prev, [platform]: 0 }));

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 8;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setDownloadingState(prev => ({ ...prev, [platform]: false }));
        showToast(`ALTAR_${platform}_Release.${extension} successfully downloaded! Check your file directory.`, 'success');
      }
      setDownloadProgress(prev => ({ ...prev, [platform]: currentProgress }));
    }, 250);
  };

  // Handle support ticket submission
  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportData.name || !supportData.email || !supportData.message) {
      showToast('Please fill out all required fields.', 'info');
      return;
    }
    const hash = 'ALTAR-INC-' + Math.floor(1000 + Math.random() * 9000);
    setIncidentHash(hash);
    setSupportSuccess(true);
    showToast(`Technical dispatch registered! Hash: ${hash}`, 'success');
  };

  // Handle Free trial application submission
  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialForm.studentName || !trialForm.studentEmail) {
      showToast('Please input student name and email address', 'info');
      return;
    }
    setTrialEnrolled(true);
    showToast(`Assigned learning credentials to ${trialForm.studentEmail}!`, 'success');
  };

  // Add Item to Shopping Cart
  const handleAddProduct = (product: { id: string; name: string; price: number }) => {
    setCartCount(prev => prev + 1);
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`Added ${product.name} to checkout kit!`, 'success');
  };

  // Copy support email address to clipboard
  const [copiedEmail, setCopiedEmail] = useState(false);
  const copySupportEmail = () => {
    navigator.clipboard.writeText('support@altar.education');
    setCopiedEmail(true);
    showToast('Support address copied to local clipboard', 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Navigation click callback
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setActiveLink(link as any);
    showToast(`Successfully loaded ALTAR ${link} view`, 'info');
  };

  // 1. Electronic Products list
  const products = [
    {
      id: 'prod-uno',
      name: 'ALTAR Uno R4 WiFi Board',
      category: 'Microcontroller',
      price: 27.50,
      stock: 45,
      desc: 'Sleek, high speed feedback logic core with dynamic ESP32 S3 support. Pre-configured for auto-AR mesh scaling.',
      renderImg: () => <ArduinoUnoSvg />
    },
    {
      id: 'prod-mega',
      name: 'ALTAR Mega 2560 Board',
      category: 'Microcontroller',
      price: 38.90,
      stock: 18,
      desc: 'Extended high-density boards containing 54 robust visual pin alignments for sophisticated physical mock telemetry.',
      renderImg: () => <ArduinoMegaSvg />
    },
    {
      id: 'prod-bread',
      name: 'Pristine Solderless Breadboard',
      category: 'Prototyping',
      price: 6.20,
      stock: 110,
      desc: 'Integrated dual power distribution trails. Certified zero latency feedback links when loaded under AR.',
      renderImg: () => <BreadboardSvg />
    },
    {
      id: 'prod-led',
      name: 'Dynamic Diffused RGB LED Hub',
      category: 'LEDs',
      price: 4.80,
      stock: 90,
      desc: 'Triple pack solid state diodes showing automatic frequency modulation. Interacts immediately with simulated voltage.',
      renderImg: () => <LedsSvg />
    },
    {
      id: 'prod-cap',
      name: 'Aluminum Capacitor Condition Packs',
      category: 'Capacitors',
      price: 9.99,
      stock: 35,
      desc: 'Radial leads representing pristine power smoothing and filtering conditioning logs. Rated up to 50V.',
      renderImg: () => <CapacitorSvg />
    },
    {
      id: 'prod-res',
      name: 'Metal Film Resistors Pack (10KΩ)',
      category: 'Resistors',
      price: 3.50,
      stock: 250,
      desc: 'High precision passive current regulating units marked with clear identification color band classification rings.',
      renderImg: () => <ResistorSvg />
    },
    {
      id: 'prod-sense',
      name: 'Acoustic Sonar Distance Sensor',
      category: 'Sensors',
      price: 12.40,
      stock: 40,
      desc: 'Equipped with dual transmitter and receiver signal cylinders. Measures micro distances cleanly under physical environments.',
      renderImg: () => <SensorsSvg />
    },
    {
      id: 'prod-pcb',
      name: 'Core Multi-Layer Circuit Board V1',
      category: 'Circuit Boards',
      price: 19.50,
      stock: 22,
      desc: 'Precision routed custom circuit plates containing real copper guides and pre-soldered test pads.',
      renderImg: () => <CircuitBoardSvg />
    },
    {
      id: 'prod-kit',
      name: 'Adventure Science Lab Kit Suite',
      category: 'Laboratory Kits',
      price: 89.00,
      stock: 15,
      desc: 'Complete organizer box holding integrated resistors, LEDs, capacitor cylinders, clean hookup wires, and smart AR targets.',
      renderImg: () => <LabKitSvg />
    }
  ];

  // 2. Showcase feature lists
  const altarFeatures = [
    {
      title: 'AI Lab Instructor',
      desc: 'An automated voice-regulated companion tracking real-time circuit configurations, warning students of common errors instantly.'
    },
    {
      title: 'AR Laboratories',
      desc: 'Interactive 3D wire tracing overlays highlighting precise pins and routing logic directions directly over terminal slots.'
    },
    {
      title: 'Voice Guidance',
      desc: 'Intelligent synthesized step-by-step diagnostic readouts, keeping student hands fully independent and focused on hardware.'
    },
    {
      title: 'Real-Time Error Detection',
      desc: 'Protects components from electrical overload by scanning polar alignment mismatches or short circuit paths dynamically.'
    },
    {
      title: 'Interactive Quizzes',
      desc: 'Dynamic quick checks built inside each experiment checkpoint to strengthen understanding of voltage law and passive resistance.'
    },
    {
      title: 'Smart Study Materials',
      desc: 'Pre-rendered printable layouts, circuit schematic worksheets, and companion learning cards matched automatically to user metrics.'
    },
    {
      title: 'AI Learning Assistant',
      desc: 'Empowers students to ask open questions during experiments, generating customized math breakdowns or reference circuits.'
    },
    {
      title: 'AR Glasses Integration',
      desc: 'Native support for Apple Vision Pro, Oculus systems, and spatial projectors to experience realistic hardware labs anywhere.'
    }
  ];

  // Collapsible FAQ's
  const faqs = [
    {
      q: 'Do I need real hardware to make ALTAR work?',
      a: 'Not at all! While ALTAR delivers brilliant companion instruction for physical electronics (Arduino Uno, Mega, Breadboards), our platform contains a fully functional software-only 3D simulation simulator allowing immersive learning.'
    },
    {
      q: 'How does ALTAR help educators track progress?',
      a: 'ALTAR includes a comprehensive educator portal. Teachers can distribute standardized quiz assignments, monitor lab completion percentages, and view student diagnostic logs in real-time.'
    },
    {
      q: 'What age group is the Adventure Science Suite suitable for?',
      a: 'The suite is beautifully graded with introductory lessons starting at age 10, stretching all the way to complex serial communications, digital signal processing, and electrical hardware programming for colleges.'
    },
    {
      q: 'Are custom scholastic purchase orders supported?',
      a: 'Yes, we provide dynamic volume education tiers and institutional licensing packages for school-wide deployments. Simply contact our support desk below.'
    }
  ];

  return (
    <div id="root-container" className="relative min-h-screen overflow-hidden bg-[#f0f0ee] select-none text-slate-800">
      
      {/* BACKGROUND VIDEO ELEMENT - Visually identical looping source */}
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
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[0.5px] pointer-events-none z-0" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        
        {/* ==========================================
            NAVBAR (CENTERED, PILL-STYLE, PILLS)
           ========================================== */}
        <header className="w-full shrink-0">
          <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
            
            {/* Left circular logo container - click returns back to homepage */}
            <div 
              id="navbar-logo-circle"
              onClick={() => {
                setActiveLink('Home');
                showToast('Welcome to ALTAR Home', 'info');
              }}
              className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0 cursor-pointer shadow-md shadow-black/5 hover:scale-105 active:scale-95 transition-all duration-300 bg-[#EDEDED] border border-white/20"
              title="Return to Home"
            >
              <Logo />
            </div>

            {/* Right pill navigation container */}
            <div 
              id="navbar-links-pill"
              className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3 shadow-md shadow-black/5 bg-[#EDEDED] border border-white/20"
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

            {/* Micro shopping cart button representing premium hardware logs */}
            {activeLink === 'Products' && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0 cursor-pointer shadow-md shadow-black/5 hover:scale-105 active:scale-95 transition-all duration-300 bg-blue-500 text-white relative border border-blue-400"
                title="View Laboratory Cart"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
            )}

          </nav>
        </header>

        {/* ==========================================
            RENDER PAGE CONTROLLER
           ========================================== */}

        {/* 1. HOMEPAGE HERO (VISUALLY IDENTICAL EXCEPT APPROVED CODES) */}
        {activeLink === 'Home' && (
          <main className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28 animate-up">
            <div className="max-w-xs flex flex-col items-start text-left bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-xl shadow-black/5">
              
              {/* 1. Badge link */}
              <a
                id="hero-sharktank-badge"
                href="#sharktank"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('The Future of AR Learning has arrived.', 'info');
                }}
                className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3 group cursor-pointer"
              >
                Seen on Shark Tank in India
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>

              {/* 2. Headline -> Completely replaces with requested text */}
              <h1 id="hero-headline-h1" className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
                The Future of Learning Starts Here.
              </h1>

              {/* 3. Subtext -> Completely replaces with requested text */}
              <p id="hero-subtext-p" className="text-[13px] text-gray-700 font-normal mb-3 leading-relaxed">
                Master labs with AI guidance, immersive AR experiences, and real-time feedback that helps you learn by doing.
              </p>

              {/* 4. CTA anchor -> Replaced text, exact styling preserved */}
              <button
                id="hero-cta-button"
                onClick={() => {
                  setIsTrialModalOpen(true);
                }}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group cursor-pointer shadow-sm active:scale-95 bg-transparent"
              >
                Start Free Trial
                <span className="inline-block transition-transform duration-205 group-hover:translate-x-0.5">
                  →
                </span>
              </button>

            </div>
          </main>
        )}

        {/* 2. DOWNLOAD PAGE */}
        {activeLink === 'Download' && (
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 md:py-16 overflow-y-auto animate-up">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white p-6 sm:p-10 shadow-xl max-w-4xl mx-auto">
              <div className="flex items-center gap-2.5 mb-2">
                <DownloadIcon className="text-blue-600 w-5 h-5 animate-bounce" />
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest font-mono">Distribution Hub</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Download ALTAR Software Sync</h2>
              <p className="text-slate-650 text-sm mb-8 leading-relaxed max-w-xl">
                Unlock instant access to interactive modules. Download our client engines to pair with custom microchip models and synchronize immersive hardware projections beautifully.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Android Download */}
                <div className="bg-slate-50/90 rounded-xl p-5 border border-slate-250 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">Android Mobile Engine</h3>
                        <span className="text-[10px] text-emerald-600 font-mono font-medium">Native Package (.apk)</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Synchronize breadboard pin readings via Bluetooth in real-time. Features on-device voice diagnostic support.
                    </p>
                  </div>

                  {downloadingState['Android'] ? (
                    <div className="space-y-1.5 mt-4">
                      <div className="flex justify-between text-[10px] text-blue-600 font-mono">
                        <span>Streaming sector bytes...</span>
                        <span>{downloadProgress['Android']}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full transition-all duration-150" style={{ width: `${downloadProgress['Android']}%` }} />
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => startDownloadSimulator('Android', 'apk')}
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-2.5 rounded-lg transition-transform cursor-pointer"
                    >
                      Retrieve Android APK (45.8 MB)
                    </button>
                  )}
                </div>

                {/* Windows Desktop */}
                <div className="bg-slate-50/90 rounded-xl p-5 border border-slate-250 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                        <Monitor className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">Windows Studio Suite</h3>
                        <span className="text-[10px] text-blue-600 font-mono font-medium">DirectX Universal Installer (.msi)</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Our high-performance computer interface. Supports offline spatial laboratories, 3D interactive hardware emulators, and local sensor testing layouts.
                    </p>
                  </div>

                  {downloadingState['Windows'] ? (
                    <div className="space-y-1.5 mt-4">
                      <div className="flex justify-between text-[10px] text-blue-600 font-mono">
                        <span>Writing installation matrix...</span>
                        <span>{downloadProgress['Windows']}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full transition-all duration-150" style={{ width: `${downloadProgress['Windows']}%` }} />
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => startDownloadSimulator('Windows', 'msi')}
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-2.5 rounded-lg transition-transform cursor-pointer"
                    >
                      Retrieve Windows MSI (112.4 MB)
                    </button>
                  )}
                </div>

                {/* Future iOS Release Slot */}
                <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100 relative flex flex-col justify-between">
                  <span className="absolute top-3 right-3 bg-blue-100 text-blue-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wide font-mono uppercase">
                    TestFlight Q4 2026
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">iOS Mobile Application</h3>
                        <span className="text-[10px] text-purple-500 font-mono">Pre-Release Sandboxed Edition</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      Native Swift package optimized specifically for iPhones with LiDAR technology. Currently under active development cycles internally.
                    </p>
                  </div>
                  <button
                    disabled
                    className="w-full bg-slate-250 text-slate-400 font-bold text-xs py-2.5 rounded-lg cursor-not-allowed bg-[#E5E7EB]"
                  >
                    Private Sandbox Access Only
                  </button>
                </div>

                {/* AR Glasses Companion App */}
                <div className="bg-slate-50/90 rounded-xl p-5 border border-slate-250 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-pink-100 text-pink-600 rounded-lg">
                        <Eye className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">Spatial HUD Companion</h3>
                        <span className="text-[10px] text-pink-600 font-mono">AR Vision Extended Engine</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Universal extension software for Apple Vision Pro and Meta Quest headsets. Bridges camera indicators and physical wires instantly.
                    </p>
                  </div>

                  {downloadingState['VisionOS'] ? (
                    <div className="space-y-1.5 mt-4">
                      <div className="flex justify-between text-[10px] text-blue-600 font-mono">
                        <span>Streaming spacial blocks...</span>
                        <span>{downloadProgress['VisionOS']}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full transition-all duration-150" style={{ width: `${downloadProgress['VisionOS']}%` }} />
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => startDownloadSimulator('VisionOS', 'pkg')}
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-2.5 rounded-lg transition-transform cursor-pointer"
                    >
                      Retrieve spatial component pack (88.2 MB)
                    </button>
                  )}
                </div>

              </div>

              {/* QR Verification section */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-blue-500 rounded-full shrink-0">
                    <Compass className="w-6 h-6 animate-spin" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Need immediate mobile installation sync?</h4>
                    <p className="text-[11px] text-slate-400">Scan this secure QR code directly on your tablet or smartphone to mirror current active lab projects.</p>
                  </div>
                </div>
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://altar.education" 
                  alt="Sync QR Link" 
                  className="w-16 h-16 object-contain bg-white p-1 rounded-lg border border-slate-200 shadow-inner"
                />
              </div>

            </div>
          </main>
        )}

        {/* 3. PRODUCTS PAGE */}
        {activeLink === 'Products' && (
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-12 overflow-y-auto animate-up text-left">
            
            {/* Header info bar */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-250 uppercase tracking-widest font-mono inline-block">
                  ALTAR Storefront
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">Laboratory Electronics & Kits</h2>
                <p className="text-xs text-slate-500">Acquire premium components pre-calibrated for AR interactive identification systems.</p>
              </div>

              {/* Stats ribbon */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg border">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Guaranteed AR Tracking
                </span>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded-lg flex items-center gap-2 shadow cursor-pointer transition-transform duration-100"
                >
                  <ShoppingCart className="w-4 h-4" /> Cart ({cartCount})
                </button>
              </div>
            </div>

            {/* Products grid containing exact items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((p) => (
                <div key={p.id} className="bg-white/95 rounded-2xl overflow-hidden border border-slate-200/60 shadow hover:shadow-lg transition-all flex flex-col justify-between">
                  
                  {/* High Quality SVG representation */}
                  <div className="p-4 bg-slate-100 border-b border-slate-150 flex items-center justify-center relative">
                    {p.renderImg()}
                    <span className="absolute top-2 right-2 bg-white/85 text-[9px] font-mono font-bold px-2 py-0.5 rounded border">
                      {p.category}
                    </span>
                  </div>

                  {/* Component Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-center text-[10.5px]">
                        <span className="text-slate-400 uppercase font-bold tracking-wider font-mono">CALIBRATION ID: {p.id.toUpperCase()}</span>
                        <span className="text-emerald-700 font-bold font-mono bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                          {p.stock} units
                        </span>
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mt-1.5">{p.name}</h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{p.desc}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-base font-black text-blue-600">${p.price.toFixed(2)}</span>
                      
                      <button
                        onClick={() => handleAddProduct(p)}
                        className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1"
                      >
                        Add to Kit <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* ==========================================
                SHOWCASE ALTAR FEATURES SECTION
               ========================================== */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-white p-6 sm:p-8 shadow-md">
              <span className="bg-blue-50 text-blue-700 text-[10px] font-extrabold px-2 py-0.5 rounded border border-blue-250 uppercase tracking-widest font-mono">
                Integrated Learning Tech
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-2 mb-1">Pioneering Intelligent Features</h3>
              <p className="text-xs text-slate-400 mb-6">Every component in our store integrates immediately with the custom software companion suite to deliver:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {altarFeatures.map((f, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => showToast(`Simulating active module: ${f.title}`, 'info')}
                    className="p-4 bg-[#EDEDED]/50 border border-white rounded-xl hover:bg-[#EDEDED]/80 cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-center gap-1.5 text-blue-600 font-bold text-xs mb-1.5 uppercase font-mono">
                      <Sparkles className="w-3.5 h-3.5" /> {f.title}
                    </div>
                    <p className="text-[11.5px] text-slate-605 leading-relaxed font-normal">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </main>
        )}

        {/* 4. HELP PAGE */}
        {activeLink === 'Help' && (
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 md:py-16 overflow-y-auto animate-up text-left">
            <div id="help-content-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white p-6 sm:p-8 shadow-xl">
              
              {/* Left sidebar nav */}
              <div className="lg:col-span-4 space-y-4">
                <div>
                  <span className="bg-slate-100 text-slate-600 text-[9.5px] font-bold px-2 py-0.5 rounded border tracking-widest font-mono uppercase">
                    Interactive Tutor
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1.5">Documentation</h2>
                </div>

                {/* Filter search bar */}
                <div className="relative">
                  <input
                    type="text"
                    value={helpSearch}
                    onChange={(e) => setHelpSearch(e.target.value)}
                    placeholder="Search docs (e.g. blink, AR)..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-xs focus:outline-none focus:border-blue-500"
                  />
                  <HelpCircle className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                </div>

                <div className="flex flex-col gap-1">
                  {[
                    { id: 'getting-started', label: '1. Getting Started' },
                    { id: 'first-lab', label: '2. Running Your First Lab' },
                    { id: 'ar-setup', label: '3. AR Glasses Setup' },
                    { id: 'ai-guide', label: '4. AI Instructor Prompts' },
                    { id: 'quiz-guide', label: '5. Quiz Verification' },
                    { id: 'troubleshooting', label: '6. Common Troubleshooting' }
                  ].map((doc) => {
                    const isSelected = activeDocSection === doc.id;
                    return (
                      <button
                        key={doc.id}
                        onClick={() => {
                          setActiveDocSection(doc.id);
                          showToast(`Loaded ${doc.label}`, 'info');
                        }}
                        className={`w-full text-left p-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                          isSelected 
                            ? 'bg-slate-800 text-white shadow-sm' 
                            : 'bg-slate-100/50 hover:bg-slate-100 text-slate-705'
                        }`}
                      >
                        {doc.label}
                      </button>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-150 mt-4 text-[11.5px] leading-relaxed">
                  <strong className="text-blue-800 font-bold block mb-1">Need live hardware help?</strong>
                  Our lab engineers are currently in dispatch queue. Browse Support page now to issue real incident diagnostic logs.
                </div>
              </div>

              {/* Right core documentation readout page */}
              <div id="help-reading-view" className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                
                {activeDocSection === 'getting-started' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 border-b pb-2">1. Getting Started with ALTAR</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-slate-600">
                      Welcome to ALTAR, the next-generation science sandbox. Our software companion acts as a bridge between actual electronics component boards and high-fidelity simulated 3D spatial environments.
                    </p>
                    <div className="bg-[#EDEDED]/40 p-4 rounded-xl border space-y-2">
                      <h4 className="text-xs font-bold text-slate-900">Immediate Checklist:</h4>
                      <ul className="list-disc pl-5 text-slate-550 text-[11.5px] space-y-1">
                        <li>Download the mobile APK device client for Bluetooth board streaming.</li>
                        <li>Source a compliant ALTAR Uno or Mega microchip board from our Products catalog.</li>
                        <li>Initialize high resolution companion camera streaming via glasses or tablets.</li>
                      </ul>
                    </div>
                    <p className="text-xs text-slate-500">
                      Once connected, our computer system reads precise electronic current metrics and matches values against reference models simultaneously.
                    </p>
                  </div>
                )}

                {activeDocSection === 'first-lab' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-950 border-b pb-2">2. Running Your First Lab (Blink LED)</h3>
                    <p className="text-xs text-slate-655 leading-relaxed text-slate-600">
                      The traditional entrance file of physical hardware engineering is illuminating an LED diode safely. Here is how to complete it via ALTAR:
                    </p>
                    <div className="border border-slate-200.5 rounded-xl overflow-hidden p-4 bg-slate-50 space-y-3 font-mono text-[11px]">
                      <div className="text-emerald-700 font-bold">// ALTAR BLINK COMPANION OUTLINE</div>
                      <div>1. Insert the LED anode (longer leg) into Pinhole 15a on the breadboard matrix.</div>
                      <div>2. Connect a 220 Ohm resistor from pin 15b down to continuous ground.</div>
                      <div>3. Wire Pin 13 from the ALTAR Uno board right to pin 15a.</div>
                      <div>4. Load firmware - our AI dynamic detector will certify current levels look correct!</div>
                    </div>
                    <div className="p-3 bg-amber-50 text-amber-800 rounded-lg text-xs font-medium border border-amber-200">
                      ⚠️ WARNING: Connecting an LED straight to a 5V source without a current regulating resistor will cause overload damage.
                    </div>
                  </div>
                )}

                {activeDocSection === 'ar-setup' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 border-b pb-2">3. AR Glasses Setup & Calibration</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-slate-600">
                      By leveraging modern spatial computing, ALTAR projects animated wire layouts straight over real parts. Follow these guidelines:
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-50 rounded-lg border">
                        <strong className="text-slate-800">Calibration targets</strong>
                        <p className="text-slate-500 mt-1">Our lab cards have special contrast shapes. Keep them flat beside the breadboard so glasses scan alignment.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border">
                        <strong className="text-slate-800">Ambient Lighting</strong>
                        <p className="text-slate-500 mt-1">Prefer flat white overhead illumination. Strong shadows and dark corners can interrupt tracking.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeDocSection === 'ai-guide' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 border-b pb-2">4. AI Instructor Consultation Prompts</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-slate-600">
                      The ALTAR AI companion contains native training blocks about capacitors, resistors, microprocessors, and circuit layout principles. Trigger it verbally using examples:
                    </p>
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg border bg-blue-50/20 text-xs italic">
                        "Hey ALTAR, what is the key difference between an electrolytic capacitor and a ceramic capacitor?"
                      </div>
                      <div className="p-2.5 rounded-lg border bg-blue-50/20 text-xs italic">
                        "Hey ALTAR, inspect my breadboard coordinate flow. Is there any risk of shorting ground Pin 4?"
                      </div>
                    </div>
                  </div>
                )}

                {activeDocSection === 'quiz-guide' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 border-b pb-2">5. Quiz & Intellectual Verification</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-slate-600">
                      Educators can lock individual lab segments behind small interactive tests. Confirm you have studied:
                    </p>
                    <ul className="list-disc pl-6 text-xs text-slate-550 space-y-1 text-slate-600">
                      <li>Ohm's Law formulas (Voltage = Current × Resistance)</li>
                      <li>Diode symbols, polarity markings, and anode indicators</li>
                      <li>Standard color-code rings decoding 1/4W resistor values</li>
                      <li>Serial baud rates and interface logging configs</li>
                    </ul>
                  </div>
                )}

                {activeDocSection === 'troubleshooting' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 border-b pb-2">6. Common Troubleshooting FAQs</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-slate-600">
                      Experiencing system faults? Here is our active electronic lab checklist:
                    </p>
                    <div className="p-3 rounded-lg border bg-red-50 text-red-905 text-xs space-y-1.5 border-red-200">
                      <div><strong>1. Bluetooth target disconnected:</strong> Powercycle your Android engine or re-pair connection pins within the device menu.</div>
                      <div><strong>2. Capacitance value readout keeps fluctuating:</strong> Confirm the radial leads are pushed cleanly into the breadboard terminal points.</div>
                      <div><strong>3. Camera lag on Vision companion:</strong> Reduce household Wi-Fi router packet traffic or reload screen projection elements.</div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </main>
        )}

        {/* 5. SUPPORT PAGE */}
        {activeLink === 'Support' && (
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 md:py-16 overflow-y-auto animate-up text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Contact Form */}
              <div className="lg:col-span-7 bg-white/80 backdrop-blur-md rounded-2xl border border-white p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="text-blue-600 w-5 h-5" />
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest font-mono">Incident Dispatch</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-1 leading-none">Create Technical Case Ticket</h2>
                <p className="text-xs text-slate-500 mb-6">Our laboratory support specialists will study your board log within 12 standard business hours.</p>

                {supportSuccess ? (
                  <div className="p-6 bg-emerald-50 text-center rounded-xl border border-emerald-200 space-y-3">
                    <div className="inline-flex p-3 bg-emerald-100 text-emerald-600 rounded-full">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">Case Incident Created</h3>
                    <p className="text-xs text-slate-500">
                      Excellent submission, <strong className="text-slate-800">{supportData.name}</strong>! Your diagnostic ticket has been prioritized under incident hash <strong className="text-blue-600">{incidentHash}</strong>.
                    </p>
                    <div className="p-3 bg-white rounded border text-left text-[11px] text-slate-610 space-y-1">
                      <div><strong>Track Category:</strong> {supportData.device}</div>
                      <div><strong>Email Link:</strong> {supportData.email}</div>
                    </div>
                    <button
                      onClick={() => {
                        setSupportSuccess(false);
                        setSupportData({ name: '', email: '', device: 'Windows Client App', message: '' });
                      }}
                      className="px-5 py-2 bg-slate-800 text-white hover:bg-slate-900 text-xs font-bold rounded-lg mt-2"
                    >
                      Issue New Case File
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSupportSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-650 uppercase tracking-wide mb-1">Student / Educator Name *</label>
                      <input
                        type="text"
                        required
                        value={supportData.name}
                        onChange={(e) => setSupportData({ ...supportData, name: e.target.value })}
                        placeholder="Zackary Mal"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-650 uppercase tracking-wide mb-1">Authorized Email *</label>
                        <input
                          type="email"
                          required
                          value={supportData.email}
                          onChange={(e) => setSupportData({ ...supportData, email: e.target.value })}
                          placeholder="zack@altar.education"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-650 uppercase tracking-wide mb-1">Affected Core Element *</label>
                        <select
                          value={supportData.device}
                          onChange={(e) => setSupportData({ ...supportData, device: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-850 focus:outline-none focus:border-blue-500"
                        >
                          <option>Windows Client App</option>
                          <option>Android Bluetooth Sync</option>
                          <option>Capacitor Polarity Fault</option>
                          <option>Scholastic Adventure Kit Order</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-650 uppercase tracking-wide mb-1">Describe Terminal Log / Hardware Error *</label>
                      <textarea
                        required
                        rows={4}
                        value={supportData.message}
                        onChange={(e) => setSupportData({ ...supportData, message: e.target.value })}
                        placeholder="Detail pin reads (e.g. Pin 13), physical breadboard positions, or mobile Bluetooth error feedback."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-lg transition-transform uppercase tracking-wider active:scale-95 cursor-pointer"
                    >
                      Submit Secure Incident Ticket
                    </button>
                  </form>
                )}

              </div>

              {/* Right core info panels */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Accordion FAQ block */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white p-5 sm:p-6 shadow-xl space-y-4">
                  <h3 className="font-extrabold text-slate-900 text-sm">Pre-Resolved FAQ's</h3>
                  <div className="space-y-2">
                    {faqs.map((faq, i) => (
                      <div key={i} className="p-3 bg-slate-50/70 border border-slate-200 rounded-xl text-left">
                        <strong className="text-slate-800 text-[11px] leading-tight block">{faq.q}</strong>
                        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Support card */}
                <div className="bg-white/85 rounded-xl p-5 border shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-500 rounded-full">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Direct Email Response</h4>
                      <p className="text-[10px] text-slate-400">support@altar.education</p>
                    </div>
                  </div>
                  <button
                    onClick={copySupportEmail}
                    className="p-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                    title="Copy support address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Developer Discord & Forums */}
                <div className="bg-white/85 rounded-xl p-5 border shadow-sm space-y-3">
                  <h4 className="text-xs font-bold text-slate-900">Global Developer Communities</h4>
                  <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-bold">
                    <a
                      href="#discord"
                      onClick={(e) => { e.preventDefault(); showToast('Redirecting to secure Discord Chat server!', 'info'); }}
                      className="p-2 rounded bg-indigo-50 border border-indigo-100 text-indigo-700 hover:bg-indigo-100 transition-colors"
                    >
                      Discord Community
                    </a>
                    <a
                      href="#forums"
                      onClick={(e) => { e.preventDefault(); showToast('Loading ALTAR scholastic forums!', 'info'); }}
                      className="p-2 rounded bg-emerald-50 border border-emerald-100 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    >
                      Scholastic Forums
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </main>
        )}

      </div>

      {// ==========================================
       // FLOATING NOTIFICATION WRAPPER
       // ==========================================
      }
      <div id="toast-wrapper" className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-xs w-full pointer-events-none">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-center gap-2 p-3.5 rounded-xl shadow-xl text-xs font-semibold text-slate-800 bg-white/95 backdrop-blur-md border border-slate-200 animate-slide-in-right justify-between`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500 shrink-0" />
              <span>{t.message}</span>
            </div>
            <button 
              onClick={() => setToasts(p => p.filter(toast => toast.id !== t.id))}
              className="text-slate-400 hover:text-slate-600 ml-1.5 cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {// ==========================================
       // FREE TRIAL ENROLLMENT MODAL
       // ==========================================
      }
      {isTrialModalOpen && (
        <div id="trial-modal-overlay" className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 border border-slate-200/50 shadow-2xl relative animate-up max-h-[90vh] overflow-y-auto text-slate-800">
            
            <button
              id="close-trial-modal"
              onClick={() => {
                setIsTrialModalOpen(false);
                setTrialEnrolled(false);
              }}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!trialEnrolled ? (
              <div>
                <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                  Academic Trial Slots
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Join Free Sandbox Trial
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Schedule physical feedback on bio-sensitive hardware, interactive emulated microcontrollers and premium AR tracking algorithms.
                </p>

                <form onSubmit={handleTrialSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Student Full Name *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400"><User className="w-3.5 h-3.5" /></span>
                      <input
                        type="text"
                        required
                        value={trialForm.studentName}
                        onChange={e => setTrialForm({...trialForm, studentName: e.target.value})}
                        placeholder="Zackary Mal"
                        className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Academic Email address *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400"><Mail className="w-3.5 h-3.5" /></span>
                      <input
                        type="email"
                        required
                        value={trialForm.studentEmail}
                        onChange={e => setTrialForm({...trialForm, studentEmail: e.target.value})}
                        placeholder="zack@altar.education"
                        className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Education Level *</label>
                      <select
                        value={trialForm.educationLevel}
                        onChange={e => setTrialForm({...trialForm, educationLevel: e.target.value})}
                        className="w-full p-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option>High School</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                        <option>Educator Console</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Coupon (Optional)</label>
                      <input
                        type="text"
                        value={trialForm.coupon}
                        onChange={e => setTrialForm({...trialForm, coupon: e.target.value})}
                        placeholder="ALTAR-FREE"
                        className="w-full p-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none"
                      />
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 leading-normal">
                    By submitting, your academic profile will automatically generate sandbox keys and link your desktop apps to spatial platforms.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-transform active:scale-95 uppercase tracking-wide mt-2 cursor-pointer"
                  >
                    Confirm Academic Trial Request
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="inline-flex items-center justify-center bg-emerald-50 text-emerald-500 rounded-full p-3 mb-2">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-tight">Academic Trial Provisioned</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Excellent, <strong className="text-slate-800">{trialForm.studentName}</strong>! Check your academic inbox at <strong className="text-blue-600">{trialForm.studentEmail}</strong>. We have loaded free access keys and customized study materials.
                </p>
                <div className="bg-slate-50 p-2.5 rounded-lg border text-left text-[11px] text-slate-600 space-y-1">
                  <div><strong>Course Tier:</strong> {trialForm.educationLevel} Sandbox Access</div>
                  <div><strong>Included Kits:</strong> Basic Arduino Emulation guide</div>
                </div>
                <button
                  onClick={() => {
                    setIsTrialModalOpen(false);
                    setTrialEnrolled(false);
                  }}
                  className="px-5 py-1.5 bg-slate-800 text-white hover:bg-slate-900 rounded-lg text-xs font-semibold mt-4 cursor-pointer"
                >
                  Close & Open Labs
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {// ==========================================
       // SHOPPING CART DRAWER VIEW
       // ==========================================
      }
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between relative animate-slide-in-right text-slate-801">
            
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex p-3 bg-blue-50 text-blue-500 rounded-xl">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Checkout Adventurer Kit</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Confirm your selected items match hardware parameters. All kits are pre-calibrated for AR glasses synchronization.
              </p>

              <div className="space-y-2 max-h-96 overflow-y-auto mt-4 pr-1">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-slate-850 block">{item.name}</strong>
                      <span className="text-slate-400">Qty: {item.qty} × ${(item.price).toFixed(2)}</span>
                    </div>
                    <span className="font-bold text-slate-900">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}

                {cartItems.length === 0 && (
                  <p className="text-xs text-slate-400 text-center py-10">Your learning kit is currently empty. Browse Products and add microchips.</p>
                )}
              </div>
            </div>

            <div className="space-y-2 mt-6 border-t pt-4">
              <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-3">
                <span>Estimated Hub Price:</span>
                <span className="text-base font-black text-blue-650">
                  ${cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0).toFixed(2)}
                </span>
              </div>

              <button
                disabled={cartItems.length === 0}
                onClick={() => {
                  showToast('Connecting checkout to secure billing portal... Ready!', 'success');
                  setCartItems([]);
                  setCartCount(0);
                  setIsCartOpen(false);
                }}
                className={`w-full py-2.5 font-bold text-xs rounded-lg transition-transform uppercase tracking-wider ${
                  cartItems.length === 0 
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer active:scale-95'
                }`}
              >
                Forward to Secure Pay-Portal
              </button>
              
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg text-center"
              >
                Continue Browsing Electronics
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
