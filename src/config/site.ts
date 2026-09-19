export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  commonFixes: string[];
  turnaround: string;
  featured: boolean;
  iconName: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProblemDiagnosticItem {
  id: string;
  symptom: string;
  tag: string;
  description: string;
  probableCauses: string[];
  recommendedAction: string;
  severity: "High" | "Medium" | "Low";
  visualEffect: "black-screen" | "vertical-lines" | "no-power" | "no-sound" | "flickering" | "no-wifi" | "hdmi" | "backlight" | "color-distortion";
  prefilledWhatsApp: string;
}

export interface BrandItem {
  name: string;
  logo: string;
  logoText?: string;
}

export interface ServiceAreaGroup {
  emirate: string;
  badge: string;
  areas: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "RoyalTechLabs",
  legalName: "RoyalTechLabs Electronics LLC",
  domain: "royaltechlabs.ae",
  url: "https://royaltechlabs.ae",
  ogImage: "/images/og-image.jpg",
  description: "RoyalTechLabs brings laboratory-grade doorstep TV repair directly to your home in Dubai, Sharjah, and Ajman. Precision component-level diagnostics for OLED, QLED, LED, and 4K Smart TVs from Samsung, LG, Sony, TCL and all major brands.",
  
  // Centralized Contact Info (Configurable)
  phone: "+971 56 470 4098",
  phoneDisplay: "+971 56 470 4098",
  phoneHref: "tel:+971564704098",
  whatsappNumber: "+971 56 470 4098",
  whatsappCleanNumber: "971564704098",
  email: "royaltechlabs9@gmail.com",

  // Physical Workshop / Lab Address
  address: "Industrial area 6 behind macro emirates, Sharjah",
  addressStreet: "Industrial area 6 behind macro emirates",
  addressCity: "Sharjah",
  addressRegion: "Sharjah",
  addressCountry: "AE",

  // Web3Forms Access Key
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "b740bf2b-5c4b-4d90-995c-dfb7de93de2f",
  
  // Operational Details
  availability: "24/7 Doorstep Service",
  typicalArrival: "30–60 Minutes in Prime Areas",
  coverageSummary: "Dubai • Sharjah • Ajman",
  
  // Configurable Statistics (Configurable placeholders for business owner verification)
  stats: [
    { label: "Technical Lab Experience", value: 12, suffix: "+ Yrs", note: "Certified master engineers" },
    { label: "TV Diagnostics Conducted", value: 15400, suffix: "+", note: "Across all brands in UAE" },
    { label: "Resolved At Doorstep", value: 98, suffix: "%", note: "Fixed inside your living room" },
    { label: "Customer Satisfaction", value: 4.9, suffix: "★", note: "Verified household rating" },
  ],

  // WhatsApp link generator
  getWhatsAppLink: (customMessage?: string) => {
    const defaultMsg = "Hi RoyalTechLabs, I need expert doorstep diagnosis for my TV in Dubai/Sharjah/Ajman.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/971564704098?text=${text}`;
  },

  // Major Brands (Official Logos from public/brands)
  brands: [
    { name: "Samsung", logo: "/brands/samsung.png", logoText: "SAMSUNG" },
    { name: "LG", logo: "/brands/lg.png", logoText: "LG" },
    { name: "Sony", logo: "/brands/sony.png", logoText: "SONY" },
    { name: "TCL", logo: "/brands/tcl.png", logoText: "TCL" },
    { name: "Hisense", logo: "/brands/hisense.png", logoText: "Hisense" },
    { name: "Philips", logo: "/brands/philips.png", logoText: "PHILIPS" },
    { name: "Panasonic", logo: "/brands/panasonic.png", logoText: "Panasonic" },
    { name: "Sharp", logo: "/brands/sharp.png", logoText: "SHARP" },
    { name: "Hitachi", logo: "/brands/hitachi.png", logoText: "HITACHI" },
  ] as BrandItem[],

  // Comprehensive Services with Dedicated Unique Imagery
  services: [
    {
      id: "oled-repair",
      title: "OLED TV Precision Repair",
      shortDesc: "Specialized micro-soldering and panel board diagnostics for LG, Sony, and Samsung OLEDs.",
      longDesc: "Precision micro-soldering and timing controller diagnostics for ultra-thin OLED displays. We troubleshoot standby power loops, T-Con timing controller failures, and organic LED power line drops with zero panel degradation.",
      commonFixes: ["Power supply loop failure", "T-Con board signal repair", "Standby blinking error codes"],
      turnaround: "Same-Day Doorstep Check",
      featured: true,
      iconName: "Sparkles",
      badge: "Flagship Specialty",
      imageSrc: "/images/service-oled-repair.jpg",
      imageAlt: "RoyalTechLabs technician diagnosing ultra-thin OLED television with micro-soldering iron and magnification loupe",
    },
    {
      id: "led-tv-repair",
      title: "LED TV Backlight & Panel Repair",
      shortDesc: "Complete troubleshooting of edge-lit and direct-lit LED televisions across all screen sizes (32\" to 85\"+).",
      longDesc: "Rapid resolution for the most common TV problems in UAE homes. From sound-only black screens to uneven dark patches, our mobile repair units carry brand-new aluminum LED strips and driver modules.",
      commonFixes: ["Uniform LED strip replacement", "Inverter board rebuild", "Optical diffuser alignment"],
      turnaround: "On-Site Repair",
      featured: true,
      iconName: "Tv",
      badge: "High Demand",
      imageSrc: "/images/service-led-repair.jpg",
      imageAlt: "Technician installing and testing internal LED diffuser strips inside opened TV on clean antistatic bench",
    },
    {
      id: "qled-4k-repair",
      title: "QLED & 4K Smart TV Calibration",
      shortDesc: "Quantum Dot LED backlight diagnostics, local dimming board replacement, and 4K processor fixes.",
      longDesc: "Comprehensive repair for Samsung Neo QLED, Hisense ULED, and TCL Mini-LED TVs. We address flickering matrix zones, HDMI 2.1 120Hz sync issues, and color filter anomalies.",
      commonFixes: ["Local dimming LED driver fix", "HDMI port IC replacement", "4K mainboard reballing"],
      turnaround: "Fast Home Diagnosis",
      featured: true,
      iconName: "Monitor",
      badge: "Lab Calibrated",
      imageSrc: "/images/service-qled-4k.jpg",
      imageAlt: "Calibrated 4K HDR television display testing with wide quantum dot color gamut spectrum",
    },
    {
      id: "motherboard-repair",
      title: "Mainboard Component-Level Repair",
      shortDesc: "Component-level micro-soldering for reboot loops, frozen logos, and dead system boards.",
      longDesc: "Instead of costly full-board replacements, RoyalTechLabs technicians diagnose capacitor bulges, EEPROM firmware corruptions, and processor overheating directly, saving up to 60% of replacement costs.",
      commonFixes: ["Firmware chip reprogramming", "SoC thermal reflow", "Power rail short-circuit trace"],
      turnaround: "Same-Day / 24H",
      featured: false,
      iconName: "Cpu",
      imageSrc: "/images/service-motherboard.jpg",
      imageAlt: "Precision micro-soldering with iron and solder smoke on television circuit board",
    },
    {
      id: "backlight-repair",
      title: "Direct-Lit Backlight Replacement",
      shortDesc: "Eliminate dark screen with sound, blue/purple tinting, or dim picture with brand-new LED arrays.",
      longDesc: "If shining a phone flashlight on your dark TV shows a faint picture underneath, your backlight strips need replacement. We install 100% genuine aluminum-substrate LED arrays with optimal heat dissipation.",
      commonFixes: ["Original aluminum LED strips", "Constant-current driver calibration", "Even luminance testing"],
      turnaround: "1–2 Hours At Home",
      featured: false,
      iconName: "SunMedium",
      imageSrc: "/images/service-backlight.jpg",
      imageAlt: "Illuminated high-density LED matrix backplane and optic driver circuitry for flat panel television",
    },
    {
      id: "power-supply-repair",
      title: "Switch-Mode Power Supply (PSU) Fix",
      shortDesc: "Fixing TVs that won't turn on, click repeatedly, or trip home circuit breakers.",
      longDesc: "Frequent voltage fluctuations in high-density apartments stress TV power boards. We replace blown MOSFETs, bridge rectifiers, and filtering capacitors right at your premises.",
      commonFixes: ["Standby circuit restoration", "Blown fuse & varistor swap", "Clicking relay diagnosis"],
      turnaround: "Immediate On-Site Fix",
      featured: false,
      iconName: "Zap",
      imageSrc: "/images/service-power-supply.jpg",
      imageAlt: "Technician repairing high-voltage television switch-mode power board with filter capacitors and transformer",
    },
    {
      id: "smart-tv-os",
      title: "Smart TV OS & Connectivity Lab",
      shortDesc: "Fixing TV stuck on logo, unresponsive remotes, Netflix/YouTube crashes, and Wi-Fi disconnects.",
      longDesc: "We resolve software bricking, failed OTA updates, Wi-Fi module hardware dropouts, and Bluetooth remote pairing failures for Tizen OS, webOS, Android TV, and Google TV platforms.",
      commonFixes: ["Wi-Fi/BT module replacement", "Factory service menu re-flash", "Bootloop firmware recovery"],
      turnaround: "Quick Home Visit",
      featured: false,
      iconName: "Wifi",
      imageSrc: "/images/service-smart-tv.jpg",
      imageAlt: "Detailed close-up of smart television main logic board featuring multi-core SoC processor and flash memory",
    },
    {
      id: "display-diagnosis",
      title: "Screen & Panel Gate Feasibility Check",
      shortDesc: "Thorough inspection of vertical lines, horizontal bars, ghosting, and panel gate driver issues.",
      longDesc: "Not every screen line requires throwing the TV away. We test COF tape bonds, T-Con ribbon cables, and voltage rails (VGH/VGL) to ascertain if a cost-effective bonding repair is viable.",
      commonFixes: ["T-Con ribbon reseating & cleaning", "COF gate driver bypass testing", "Honest panel viability quote"],
      turnaround: "Accurate Assessment",
      featured: false,
      iconName: "Activity",
      imageSrc: "/images/service-display-panel.jpg",
      imageAlt: "Broadcast SMPTE color bars and frequency lines on flat panel display during diagnostic test",
    },
  ] as ServiceItem[],

  // Interactive Diagnostic Symptoms
  problems: [
    {
      id: "black-screen",
      symptom: "Black Screen (Sound Works)",
      tag: "Backlight / Display Driver",
      description: "TV turns on and you hear voices or channels changing, but the display remains completely dark or faintly visible under flashlight.",
      probableCauses: ["Burnt LED Backlight Array", "Inverter / Driver Board Failure", "T-Con Display Signal Interruption"],
      recommendedAction: "Professional doorstep LED backlight replacement or T-Con testing.",
      severity: "High",
      visualEffect: "black-screen",
      prefilledWhatsApp: "Hi RoyalTechLabs, my TV has a BLACK SCREEN but sound is playing. Can a technician inspect it today?",
    },
    {
      id: "no-power",
      symptom: "No Power / Dead TV",
      tag: "Power Supply / Main Board",
      description: "No red standby light, TV does not respond to power button or remote control, or makes a clicking noise and shuts down.",
      probableCauses: ["Blown Power Supply Board (PSU)", "Surge Damage / Blown Fuse", "Short-circuited Mainboard Processor"],
      recommendedAction: "Doorstep multimeter voltage rail inspection and PSU rebuild.",
      severity: "High",
      visualEffect: "no-power",
      prefilledWhatsApp: "Hi RoyalTechLabs, my TV is completely DEAD with NO POWER. Please dispatch a technician for home diagnosis.",
    },
    {
      id: "vertical-lines",
      symptom: "Vertical or Horizontal Lines",
      tag: "Panel / T-Con / COF",
      description: "Single or multi-colored vertical stripes, horizontal banding, or split-screen distortion across the display.",
      probableCauses: ["Faulty T-Con (Timing Controller) Board", "Loose or oxidized LVDS ribbon cable", "COF (Chip-on-Film) bonding breakdown"],
      recommendedAction: "T-Con board signal test & ribbon continuity check before considering panel swap.",
      severity: "Medium",
      visualEffect: "vertical-lines",
      prefilledWhatsApp: "Hi RoyalTechLabs, I have VERTICAL/HORIZONTAL LINES on my TV screen. Brand: [My Brand]. Can you help diagnose this?",
    },
    {
      id: "no-sound",
      symptom: "No Sound / Distorted Audio",
      tag: "Speaker / Audio IC",
      description: "Picture is crisp and clear, but there is zero audio, buzzing, crackling, or the volume does not change.",
      probableCauses: ["Blown Internal Speaker Drivers", "Mainboard Audio Processor IC Failure", "Optical/HDMI ARC handshake issue"],
      recommendedAction: "Audio circuit diagnosis and speaker coil replacement.",
      severity: "Low",
      visualEffect: "no-sound",
      prefilledWhatsApp: "Hi RoyalTechLabs, my TV has NO SOUND while the picture is working fine. What would be the repair cost?",
    },
    {
      id: "flickering",
      symptom: "Screen Flickering / Blinking",
      tag: "LED Array / Power Ripple",
      description: "The picture rapidly dims, flashes bright and dark, or the whole screen blinks rhythmically every few seconds.",
      probableCauses: ["Failing LED Backlight string", "Filter capacitor leakage on PSU", "Variable refresh rate or backlight PWM error"],
      recommendedAction: "Check backlight power stability and LED string current draw.",
      severity: "Medium",
      visualEffect: "flickering",
      prefilledWhatsApp: "Hi RoyalTechLabs, my TV screen is FLICKERING / BLINKING. I would like a doorstep technician visit.",
    },
    {
      id: "no-wifi",
      symptom: "No Wi-Fi / TV Frozen on Logo",
      tag: "Firmware / Smart Board",
      description: "TV cannot connect to home Wi-Fi network, gets stuck on brand boot logo, or streaming apps crash immediately.",
      probableCauses: ["Faulty Wi-Fi/Bluetooth hardware module", "Corrupted EEPROM/eMMC storage chip", "Outdated firmware bootloop"],
      recommendedAction: "Mainboard software reflashing or Wi-Fi transceiver swap.",
      severity: "Low",
      visualEffect: "no-wifi",
      prefilledWhatsApp: "Hi RoyalTechLabs, my Smart TV is STUCK ON LOGO / WON'T CONNECT TO WI-FI. Please assist.",
    },
    {
      id: "hdmi-issue",
      symptom: "HDMI / No Signal Input",
      tag: "HDMI Port / Switcher IC",
      description: "Connecting gaming consoles, Apple TV, or satellite box shows 'No Signal' across all HDMI ports.",
      probableCauses: ["Physically cracked HDMI port pins", "Burnt HDMI ESD protection diodes / IC", "Resolution mismatch or handshake loss"],
      recommendedAction: "Port re-soldering or HDMI switcher chip replacement.",
      severity: "Medium",
      visualEffect: "hdmi",
      prefilledWhatsApp: "Hi RoyalTechLabs, none of my TV HDMI ports are working. Can you inspect and fix the HDMI board?",
    },
    {
      id: "color-distortion",
      symptom: "Color Distortion / Purple Tint",
      tag: "Color Filter / Gamma IC",
      description: "The entire screen appears purple, blueish, inverted (solarized/negative), or patches of color are discolored.",
      probableCauses: ["Aged blue-phosphor LED strips", "Gamma calibration IC on T-Con malfunctioning", "Color matrix logic failure"],
      recommendedAction: "Backlight strip upgrade or Gamma IC replacement.",
      severity: "Medium",
      visualEffect: "color-distortion",
      prefilledWhatsApp: "Hi RoyalTechLabs, my TV screen has a PURPLE TINT / DISTORTED COLORS. Need an expert technician.",
    },
  ] as ProblemDiagnosticItem[],

  // Service Areas
  serviceAreas: [
    {
      emirate: "Dubai",
      badge: "High Priority Coverage",
      areas: [
        "Palm Jumeirah",
        "Dubai Marina & JBR",
        "Downtown Dubai & Business Bay",
        "Jumeirah Village Circle (JVC)",
        "Arabian Ranches",
        "Damac Hills 1 & 2",
        "Al Furjan",
        "The Greens",
        "The Gardens",
        "Jumeirah Lake Towers (JLT)",
        "Dubai Hills Estate",
        "Al Barsha & Barsha Heights",
        "Motor City & Sports City",
        "Jumeirah (1, 2, 3) & Umm Suqeim",
        "Bur Dubai & Karama",
        "Deira & Al Rigga",
        "Mirdif & Al Warqa",
        "Dubai Silicon Oasis (DSO)",
        "Al Nahda (Dubai)",
        "International City",
      ],
    },
    {
      emirate: "Sharjah",
      badge: "Rapid Response Units",
      areas: [
        "Al Majaz (1, 2, 3)",
        "Al Nahda (Sharjah)",
        "Al Taawun & Al Khan",
        "Al Qasimia",
        "Muwaileh & University City",
        "Al Rolla & Butina",
        "Al Yarmook & Fayha",
        "Al Juraina & Al Noof",
        "Sharjah Industrial Areas",
        "Industrial Area 6 (Lab & Workshop)",
      ],
    },
    {
      emirate: "Ajman",
      badge: "Full Doorstep Service",
      areas: [
        "Al Nuaimiya (1, 2, 3)",
        "Al Rashidiya",
        "Al Jurf & Industrial Zone",
        "Al Rawda",
        "Ajman Corniche & Downtown",
        "Al Mowaihat",
      ],
    },
  ] as ServiceAreaGroup[],

  // Honest Sample Reviews
  testimonials: [
    {
      id: "rev-1",
      name: "Tariq Al-Mansoor",
      location: "Dubai Marina, Dubai",
      rating: 5,
      date: "Recent Customer",
      service: "65\" Samsung QLED Backlight Calibration",
      comment: "My 65\" Samsung suddenly went completely black during a football match while audio was still playing. RoyalTechLabs arrived in 45 minutes to my Marina tower with specialized testing gear, replaced the aluminum LED array on the spot, and tested 4K picture quality in my living room.",
    },
    {
      id: "rev-2",
      name: "Siddharth Raman",
      location: "Al Majaz 2, Sharjah",
      rating: 5,
      date: "Recent Customer",
      service: "55\" LG OLED Power Supply Diagnosis",
      comment: "Authorized center quoted 10 business days just to inspect the power board. The RoyalTechLabs technician measured the voltage rails at my doorstep, isolated two blown filter capacitors, and had the OLED functioning within 90 minutes. Remarkable technical precision.",
    },
    {
      id: "rev-3",
      name: "Aisha Al-Hashimi",
      location: "Al Nuaimiya, Ajman",
      rating: 5,
      date: "Recent Customer",
      service: "Sony BRAVIA Mainboard Micro-Soldering",
      comment: "Very polite, transparent, and technologically advanced service. They diagnosed a burnt HDMI controller chip rather than forcing me to buy a full motherboard. The savings were substantial and the TV works like brand new.",
    },
    {
      id: "rev-4",
      name: "Marcus Becker",
      location: "Downtown Dubai",
      rating: 5,
      date: "Recent Customer",
      service: "75\" TCL 4K Smart TV Wi-Fi Module",
      comment: "Moving a 75-inch TV is an absolute nightmare. RoyalTechLabs handled everything in my living room. Fast WhatsApp confirmation, punctual arrival, and genuine parts with a clear written warranty.",
    },
    {
      id: "rev-5",
      name: "Fatima Al-Zahra",
      location: "Al Nahda, Sharjah",
      rating: 5,
      date: "Recent Customer",
      service: "65\" Samsung Crystal UHD Bootloop Recovery",
      comment: "Our TV was stuck endlessly rebooting on the Samsung logo. The engineer arrived with an EEPROM programmer, safely updated the firmware chip on-site, and restored our TV in under an hour without losing any settings.",
    },
    {
      id: "rev-6",
      name: "David O'Connor",
      location: "Palm Jumeirah, Dubai",
      rating: 5,
      date: "Recent Customer",
      service: "77\" LG OLED C2 T-Con Micro-Bonding",
      comment: "Had severe vertical lines down the right half of the 77-inch OLED panel. RoyalTechLabs identified a loose COF gate line ribbon and performed micro-bonding calibration on the spot. Saved thousands compared to screen replacement.",
    },
  ] as ReviewItem[],

  // Frequently Asked Questions
  faqs: [
    {
      question: "Do you repair TVs at my home or do I have to transport it to a lab?",
      answer: "RoyalTechLabs brings the laboratory directly to your doorstep across Dubai, Sharjah, and Ajman. Our mobile service units carry digital oscilloscopes, multimeters, backlight testers, and replacement components. Over 98% of repairs—including LED backlights, power supplies, motherboards, and software issues—are completed inside your home without risking fragile screen transportation.",
    },
    {
      question: "Which TV brands and display types do you support?",
      answer: "We service all major brands, including Samsung, LG, Sony BRAVIA, TCL, Hisense, Philips, Panasonic, Sharp, Xiaomi / Mi, Toshiba, and Haier. We handle OLED, QLED, Neo QLED, Mini-LED, LED, and 4K/8K Smart TVs across all screen sizes from 32\" to 98\"+.",
    },
    {
      question: "How quickly can a RoyalTechLabs technician reach my home?",
      answer: "We have technician dispatch units positioned across prime residential corridors in Dubai, Sharjah, and Ajman. In central areas such as Dubai Marina, Downtown, Al Barsha, Al Majaz, Al Nahda, and Al Nuaimiya, our technicians typically arrive within 30 to 60 minutes of confirmation.",
    },
    {
      question: "My TV has sound but the screen is completely black. Can it be fixed?",
      answer: "Yes, this is one of our primary specialties. Sound without picture almost always indicates that the internal LED backlight strips have burnt out while the liquid crystal panel and main processor are intact. We carry brand-new aluminum-substrate LED strips and replace them right in your living room.",
    },
    {
      question: "Can you fix a physically shattered or cracked TV glass panel?",
      answer: "If the glass panel is physically cracked or smashed from an impact, the cost of replacing the raw glass matrix is typically 70% to 90% of a brand-new television. In such cases, RoyalTechLabs will honestly advise whether replacement is better than repair. However, if the screen is NOT physically cracked and only shows internal lines, flickering, or a black screen, it can almost always be repaired cost-effectively.",
    },
    {
      question: "Do you provide a warranty on repairs and replacement parts?",
      answer: "Yes. All replaced parts (such as aluminum LED backlight arrays, power boards, and motherboard components) come with a dedicated service warranty. Your invoice includes complete warranty details for your records.",
    },
    {
      question: "What are your operating hours? Are you open on weekends and holidays?",
      answer: "RoyalTechLabs operates 24 hours a day, 7 days a week, including Fridays, Saturdays, Sundays, and public holidays across the UAE.",
    },
    {
      question: "How is pricing determined? Are there hidden fees?",
      answer: "We provide upfront, transparent pricing. Following an on-site diagnostic check, our technician explains the exact fault and provides a fixed quotation before performing any work. There are no surprise costs.",
    },
  ] as FAQItem[],
};
