import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Languages,
  Award,
  ArrowRight,
  User,
  BookOpen,
  Target,
  Globe,
  Compass,
  Tractor,
  Utensils,
  TrendingUp,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const heroImage = "/images/IMG_8890.jpg";

const farmPhotos = [
  { src: "/images/image000000.JPG", title: "Header Harvesting", text: "Some of the machinery I worked with across large-scale grain harvesting operations." },
  { src: "/images/IMG_0407.jpg", title: "John Deere Tractor", text: "Field operations, transport and machinery support during harvest seasons." },
  { src: "/images/IMG_0975.JPG", title: "Tractor at Sunset", text: "Agricultural operations often meant long days in changing field conditions." },
  { src: "/images/IMG_1848.JPG", title: "Olive Rows", text: "Cab view during olive harvesting and production work." },
  { src: "/images/IMG_5096.jpg", title: "Tractor & Field Work", text: "Machinery support across olive production and farm operations." },
  { src: "/images/IMG_5682.JPG", title: "Cab Operations", text: "Operating machinery with GPS and in-cab monitoring systems." },
  { src: "/images/IMG_6011.JPG", title: "Loader Work", text: "General machinery operation, loading and transport support." },
  { src: "/images/IMG_7536.JPG", title: "Telehandler Operations", text: "Equipment handling and support across farm operations." },
  { src: "/images/IMG_7847.JPG", title: "Olive Harvester", text: "Seasonal olive harvesting with large-scale machinery." },
  { src: "/images/IMG_7848.JPG", title: "Harvest Setup", text: "Machinery, bin handling and production support in the field." }
];

const hospitalityPhotos = [
  { src: "/images/IMG_0082.JPG", title: "Guest Accommodation", text: "A small selection of properties I helped look after and prepare for guests." },
  { src: "/images/IMG_0113.JPG", title: "Holiday Apartment", text: "Property presentation, cleanliness and guest readiness." },
  { src: "/images/IMG_0114.JPG", title: "Premium Bedroom Setup", text: "Maintaining high accommodation standards across guest rooms." },
  { src: "/images/IMG_0166.JPG", title: "Luxury Bedroom", text: "Attention to detail, presentation and quality control." },
  { src: "/images/IMG_0167.JPG", title: "Living Space", text: "Guest-facing accommodation and property care." },
  { src: "/images/IMG_1154.JPG", title: "Coastal Living Area", text: "A small selection of accommodation spaces I helped maintain." },
  { src: "/images/IMG_1155.JPG", title: "Kitchen & Living", text: "Preparing premium homes for guest arrivals." },
  { src: "/images/IMG_1156.JPG", title: "Ocean View Property", text: "Property presentation and quality assurance." },
  { src: "/images/IMG_1204.JPG", title: "Guest Bedroom", text: "Accommodation standards and guest-ready presentation." },
  { src: "/images/IMG_2002.JPG", title: "View & Living Area", text: "Premium spaces maintained for short-stay guests." },
  { src: "/images/IMG_2008.JPG", title: "Modern Lounge", text: "Property care across different accommodation styles." },
  { src: "/images/IMG_2009.JPG", title: "Outdoor Guest Area", text: "Indoor and outdoor spaces prepared for guests." },
  { src: "/images/IMG_5614.JPG", title: "Evening Living Space", text: "A small selection of the properties I looked after." }
];

const otherJobPhotos = [
  { src: "/images/d31220ac-a436-4eea-9f96-fb33cad0c456.JPG", title: "Solar Farm", text: "Solar farm construction and panel installation work." },
  { src: "/images/IMG_8513.JPG", title: "Metal Roofing", text: "Metal roofing labouring and construction work." }
];

const experienceGroups = {
  farm: {
    title: "Agriculture & Farm Operations",
    icon: <Tractor />,
    intro: "Hands-on experience in large-scale agriculture and machinery operations.",
    photos: farmPhotos,
    jobs: [
      {
        role: "Supervisor",
        company: "Boundary Bend Olives",
        date: "Seasonal | 2023–2026",
        text: "Coordinated large-scale harvesting operations at Australia’s largest olive farm, directed teams and machinery workflows, solved operational issues, and ensured safe and efficient production."
      },
      {
        role: "Header Operator",
        company: "Viridis",
        date: "Oct 2023 — Feb 2024",
        text: "Operated John Deere harvesting machinery, monitored performance, maintained equipment, and contributed to large-scale harvesting operations."
      },
      {
        role: "Chaser Bin Driver",
        company: "Viridis",
        date: "2021 — 2023 seasonal",
        text: "Supported multiple headers, transported grain between headers and trucks, performed machinery greasing, maintenance, and general labour tasks."
      },
      {
        role: "Harvester Driver",
        company: "Boundary Bend Olives",
        date: "2021 — 2022 seasonal",
        text: "Operated Colossus XL olive harvester and other machinery, adjusted equipment for performance, reported malfunctions, and cared for machinery."
      }
    ],
    references: [
      { name: "Viridis AG", contact: "James Lyall", phone: "+61 428 960 488" },
      { name: "Corian Park Earthmoving", contact: "Drew Chislett", phone: "+61 401 186 155" },
      { name: "Cobram Estate", contact: "Rachel Walker", phone: "+61 418 281 481" }
    ],
    referenceLetters: [
      { title: "Download Viridis reference letter", href: "/references/Viridis%20reference%20letter.pdf" },
      { title: "Download Corian Park reference letter", href: "/references/Employment%20reference%20Corian%20park%20.pdf" }
    ]
  },
  hospitality: {
    title: "Hospitality",
    icon: <Utensils />,
    intro: "Guest-facing experience in premium accommodation, restaurants, weddings and events.",
    photos: hospitalityPhotos,
    jobs: [
      {
        role: "Housekeeping & Property Management",
        company: "Beacon Point Villas / Otway Retreats / Janus Co",
        date: "2+ years",
        text: "Managed luxury villas, guest arrivals, bookings, cleaning standards, property care, public facilities, and presentation of premium accommodation spaces."
      },
      {
        role: "Bartender / Waiter",
        company: "Noosa Boathouse",
        date: "Jul 2022 — Oct 2022",
        text: "Delivered fast-paced guest service, prepared cocktails, wines and beverages, worked weddings and large functions, and maintained high hospitality standards."
      },
      {
        role: "Event Team Lead",
        company: "International Exhibitions, Germany",
        date: "Germany",
        text: "Led hospitality teams at major exhibitions including DMEXCO and Gamescom, supporting front-of-house operations, customer service, and team coordination."
      }
    ],
    references: [
      { name: "Beacon Point Villas", contact: "Natasha Sikand", phone: "+61 409 944 878" },
      { name: "Janus Co Pty Ltd", contact: "Philip Amos", phone: "+61 418 645 666" }
    ]
  },
  business: {
    title: "Business & Strategy",
    icon: <TrendingUp />,
    intro: "Academic, analytical and business experience across research, teaching and startup settings.",
    photos: [],
    jobs: [
      {
        role: "Student Business Consultant",
        company: "Consulting Projects",
        date: "University period",
        text: "Conducted market research and business analysis for small businesses, helping identify opportunities, trends, customer needs, and strategic insights."
      },
      {
        role: "University Tutor",
        company: "University of Siegen",
        date: "2 years",
        text: "Taught finance and economics, supported students academically, and developed strong communication, analytical, presentation, and mentoring skills."
      },
      {
        role: "Startup Office Experience",
        company: "Startup Environment",
        date: "Early career",
        text: "Worked in a startup office environment, gaining exposure to fast-moving business operations, teamwork, customer communication, and entrepreneurial thinking."
      }
    ]
  },
  other: {
    title: "Other Jobs",
    icon: <Award />,
    intro: "Additional hands-on experience across construction, roofing and renewable energy projects.",
    photos: otherJobPhotos,
    jobs: [
      {
        role: "Solar Farm Trade Assistant",
        company: "Chandler Macleod",
        date: "Feb 2022 — Apr 2022",
        text: "Supported solar farm construction through panel installation and tracking-system installation."
      },
      {
        role: "Roofing Labourer",
        company: "Roofsmart",
        date: "Mar 2020 — Jun 2020",
        text: "Worked on metal roofing projects, including cutting felt, metal sheets and flashing, removing old roofing materials, keeping worksites clean and organised, and screwing off roof surfaces."
      }
    ]
  }
};

const skills = [
  "Heavy machinery operation",
  "Team leadership",
  "Safety & compliance",
  "Hospitality service",
  "Housekeeping standards",
  "Maintenance & troubleshooting",
  "Market research",
  "Finance & economics tutoring",
  "Adaptability"
];

const certs = ["White Card", "Fire fighting certificate", "Asbestos removal certificate", "Barista Certificate", "RSA Queensland"];
const tickets = ["Telehandler", "Skid-Steer", "Front End Loader", "Roller"];

const highlights = [
  {
    icon: <BookOpen />,
    title: "Curiosity",
    text: "I enjoy learning new things, exploring new environments and continuously developing new skills, both professionally and personally."
  },
  {
    icon: <Target />,
    title: "Growth",
    text: "Moving across countries, industries and different roles has taught me that real growth often happens outside your comfort zone."
  },
  {
    icon: <User />,
    title: "Connection",
    text: "Meeting new people, building relationships and learning from different perspectives has been one of the most rewarding parts of my journey."
  },
  {
    icon: <Globe />,
    title: "Reliability",
    text: "Whether operating machinery, managing properties, working with customers or leading teams, I believe in being dependable and delivering quality work."
  },
  {
    icon: <Compass />,
    title: "Adventure",
    text: "What started as a short trip to Australia became a life-changing experience. Embracing new opportunities continues to shape who I am today."
  }
];

export default function DominikPortfolio() {
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [activePage, setActivePage] = useState(null);

  const scrollToSection = (id) => {
    setActivePage(null);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 20);
  };

  if (activePage) {
    return <CategoryPage groupKey={activePage} onBack={() => setActivePage(null)} onContact={() => setShowContact(true)} onChangeCategory={setActivePage} showContact={showContact} setShowContact={setShowContact} />;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#070807] text-white selection:bg-[#d6a94a]/60">
      <section id="top" className="relative min-h-screen overflow-hidden">
        <img src={heroImage} alt="Dominik Paes outdoors in the mountains" className="absolute inset-y-0 left-0 h-full w-[105%] max-w-none translate-x-[2%] object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070807] via-transparent to-black/20" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10 lg:px-16">
          <button type="button" onClick={() => scrollToSection("top")} className="font-serif text-4xl font-black tracking-[-0.12em] text-[#d6a94a]">DP</button>
          <div className="hidden items-center gap-9 text-sm font-medium uppercase tracking-[0.12em] md:flex">
            <button type="button" onClick={() => scrollToSection("top")} className="text-[#d6a94a] underline decoration-[#d6a94a] underline-offset-8">Home</button>
            <button type="button" onClick={() => scrollToSection("about")} className="text-white/80 transition hover:text-[#d6a94a]">About</button>
            <button type="button" onClick={() => scrollToSection("work")} className="text-white/80 transition hover:text-[#d6a94a]">Experience</button>
            <button type="button" onClick={() => scrollToSection("skills")} className="text-white/80 transition hover:text-[#d6a94a]">Skills</button>
            <button type="button" onClick={() => setShowContact(true)} className="text-white/80 transition hover:text-[#d6a94a]">Contact</button>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 pb-20 md:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl pt-10">
            <p className="mb-2 font-serif text-6xl italic leading-none tracking-[-0.07em] text-[#d6a94a] md:text-8xl">Hi, I’m</p>
            <h1 className="text-[17vw] font-black uppercase leading-[0.78] tracking-[-0.06em] text-white md:text-[8rem] lg:text-[9.5rem]">
              Dominik<br /><span className="text-[#d6a94a]">Paes</span>
            </h1>
            <div className="mt-8 flex items-center gap-5">
              <span className="h-px w-16 bg-[#d6a94a]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">Adaptable · Driven · People & Results Focused</p>
            </div>
            <p className="mt-10 max-w-lg text-lg leading-8 text-white/80">
              I bring a diverse background in agriculture, hospitality and business, with a passion for solving problems, leading teams and creating value.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button type="button" onClick={() => scrollToSection("about")} className="group flex items-center gap-3 bg-[#d6a94a] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:bg-white">
                Learn more <ChevronDown className="h-4 w-4 transition group-hover:translate-y-1" />
              </button>
              <button type="button" onClick={() => setShowResume(true)} className="border border-[#d6a94a] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#d6a94a] hover:text-black">
                Download resume
              </button>
              <button type="button" onClick={() => setShowContact(true)} className="border border-[#d6a94a] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#d6a94a] hover:text-black">
                Contact me
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative border-y border-white/10 bg-[#101211] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.35fr_.65fr] lg:items-start">
          <div>
            <SectionTitle label="About me" title="More about me." />
            <div className="mt-10 max-w-4xl space-y-8 text-xl font-medium leading-[1.9] text-white/65 md:text-2xl">
              <p>After completing my Bachelor degree in Business, I moved to Australia in 2020. What was originally meant to be a short getaway quickly turned into a much longer journey.</p>
              <p>Over the years, I have lived and worked across different regions, industries and communities, exploring new jobs, new environments and different ways of life. It has been an experience that has shaped me significantly, both professionally and personally.</p>
              <p>Before moving abroad, I worked as a student business consultant and university tutor while completing my studies. Through these roles, I developed strong analytical, communication and problem-solving skills while gaining experience in market research, finance and economics.</p>
              <p>Since arriving in Australia, I have taken opportunities across agriculture, machinery operation, hospitality, property management and team leadership. Each role has taught me something different and helped me develop a diverse skill set that combines practical hands-on experience with a strong business background.</p>
              <p>I genuinely enjoy learning new things, meeting new people and challenging myself in unfamiliar environments. Whether I am leading a team, operating machinery, working with customers or taking on a completely new challenge, I bring curiosity, adaptability and a strong work ethic to everything I do.</p>
              <p>The journey is still ongoing, and I look forward to continuing to learn, grow and take on new opportunities wherever they may lead.</p>
            </div>
          </div>
          <div className="space-y-7 border-l border-white/10 pl-7 lg:pl-10">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.34em] text-[#d6a94a]">What drives me</p>
            {highlights.map((item) => <Highlight key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#080908] px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-10 lg:grid-cols-[.65fr_1fr]">
            <SectionTitle label="Experience" title="What I’ve done." />
            <div className="hidden justify-end lg:flex">
              <button type="button" onClick={() => setActivePage("farm")} className="group flex h-fit items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-[#d6a94a]">
                View full experience <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(experienceGroups).map(([key, group]) => (
              <CategoryCard key={key} groupKey={key} group={group} onExplore={() => {
                setActivePage(key);
                window.scrollTo({ top: 0, behavior: "instant" });
              }} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-[#101211] px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Skills" title="Skills & tickets." />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.34em] text-[#d6a94a]">Strengths</h3>
              <div className="mb-7 h-px w-12 bg-[#d6a94a]" />
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/75">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#d6a94a]/35 bg-[#d6a94a]/10 p-8 md:p-10">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.34em] text-[#d6a94a]">Certifications</h3>
              <div className="mb-7 h-px w-12 bg-[#d6a94a]" />
              <p className="text-lg leading-9 text-white/75">{certs.join(" · ")}</p>
            </div>

            <div className="rounded-xl border border-[#d6a94a]/35 bg-[#d6a94a]/10 p-8 md:p-10">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.34em] text-[#d6a94a]">Machinery Tickets</h3>
              <div className="mb-7 h-px w-12 bg-[#d6a94a]" />
              <p className="text-lg leading-9 text-white/75">{tickets.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer onContact={() => setShowContact(true)} />
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </main>
  );
}

function CategoryCard({ groupKey, group, onExplore }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 shadow-2xl">
      <div className="mb-7 text-[#d6a94a] [&_svg]:h-11 [&_svg]:w-11">{group.icon}</div>
      <h3 className="min-h-[3.5rem] text-2xl font-bold uppercase leading-tight">{group.title}</h3>
      <p className="mt-5 text-sm leading-7 text-white/60">{group.intro}</p>
      <ul className="mt-6 space-y-3 text-sm text-white/80">
        {group.jobs.slice(0, 4).map((job) => (
          <li key={job.role} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6a94a]" />{job.role} — {job.company}</li>
        ))}
      </ul>
      <button type="button" onClick={onExplore} className="mt-8 flex items-center gap-3 border border-[#d6a94a] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#d6a94a] transition hover:bg-[#d6a94a] hover:text-black">
        Explore more <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

function CategoryPage({ groupKey, onBack, onContact, onChangeCategory, showContact, setShowContact }) {
  const group = experienceGroups[groupKey];
  const [slide, setSlide] = useState(0);
  const hasPhotos = group.photos.length > 0;
  const currentPhoto = hasPhotos ? group.photos[slide] : null;
  const next = () => setSlide((slide + 1) % group.photos.length);
  const prev = () => setSlide((slide - 1 + group.photos.length) % group.photos.length);

  return (
    <main className="min-h-screen bg-[#070807] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10 lg:px-16">
        <button type="button" onClick={onBack} className="font-serif text-4xl font-black tracking-[-0.12em] text-[#d6a94a]">DP</button>
        <button type="button" onClick={onBack} className="text-sm font-bold uppercase tracking-[0.14em] text-white/70 hover:text-[#d6a94a]">Back to home</button>
      </nav>

      <div className="mx-auto max-w-7xl px-6 pb-8 md:px-10 lg:px-16">
        <div className="inline-flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/[0.04] p-2">
          {Object.entries(experienceGroups).map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                onChangeCategory(key);
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className={`rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition ${
                groupKey === key
                  ? "bg-[#d6a94a] text-black"
                  : "text-white/65 hover:bg-white/10 hover:text-[#d6a94a]"
              }`}
            >
              {item.title.replace("Agriculture & Farm Operations", "Agriculture").replace("Business & Strategy", "Business")}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-8 md:px-10 lg:grid-cols-[.75fr_1.25fr] lg:px-16">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#d6a94a]">Experience category</p>
          <div className="mb-6 h-px w-12 bg-[#d6a94a]" />
          <h1 className="text-5xl font-black uppercase leading-none tracking-[-0.08em] md:text-7xl">{group.title}</h1>
          <p className="mt-7 text-lg leading-8 text-white/65">{group.intro}</p>
          <button type="button" onClick={onContact} className="mt-8 border border-[#d6a94a] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#d6a94a] transition hover:bg-[#d6a94a] hover:text-black">Contact me</button>
        </div>

        {hasPhotos ? (
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-5">
            <div className="relative h-[430px] overflow-hidden rounded-lg bg-black">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className={`h-full w-full ${
                  groupKey === "other" ? "object-contain bg-black" : "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm uppercase tracking-[0.3em] text-[#d6a94a]">
                  {groupKey === "farm"
                    ? "Machinery & Operations"
                    : groupKey === "hospitality"
                      ? "Properties & Guest Spaces"
                      : "Other Jobs"}
                </p>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-white/75">
                  {groupKey === "farm"
                    ? "Some of the machinery I have operated across various workplaces."
                    : groupKey === "hospitality"
                      ? "A selection of the properties and guest spaces I looked after."
                      : "A selection of hands-on work across roofing and renewable energy projects."}
                </p>
              </div>
              <button type="button" onClick={prev} className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white hover:bg-[#d6a94a] hover:text-black"><ChevronLeft /></button>
              <button type="button" onClick={next} className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white hover:bg-[#d6a94a] hover:text-black"><ChevronRight /></button>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d6a94a]">Business focus</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.07em]">Practical business thinking without the corporate fluff.</h2>
            <p className="mt-6 leading-8 text-white/65">This section focuses on the skills and lessons developed through consulting projects, teaching finance and economics, and working in a startup environment.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Market Research", "Finance & Economics", "Presentation Skills", "Startup Operations", "Analytical Thinking", "Mentoring"].map((skill) => (
                <div key={skill} className="rounded-lg border border-white/10 p-4 text-white/75">{skill}</div>
              ))}
            </div>
          </div>
        )}
      </section>

      {hasPhotos && (
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16">
          <p className="max-w-3xl text-lg leading-8 text-white/65">
            {groupKey === "farm"
              ? "A selection of machinery, equipment and agricultural operations I have worked with across harvesting, olive production, grain handling, transport and general farm operations."
              : groupKey === "hospitality"
                ? "A small selection of properties I looked after and helped prepare for guests. Responsibilities included presentation standards, guest readiness, quality checks and maintaining premium accommodation spaces."
                : "A selection of hands-on work from roofing and solar farm projects, including metal roofing, panel installation and tracking-system installation."}
          </p>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-16">
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#d6a94a]">Roles & responsibilities</p>
          <div className="h-px w-12 bg-[#d6a94a]" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {group.jobs.map((job) => (
            <article key={job.role + job.company} className="rounded-xl border border-white/10 bg-white/[0.04] p-7">
              <p className="mb-6 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">{job.date}</p>
              <h2 className="text-3xl font-black uppercase leading-none tracking-[-0.06em]">{job.role}</h2>
              <p className="mt-3 font-semibold text-[#d6a94a]">{job.company}</p>
              <p className="mt-6 leading-8 text-white/65">{job.text}</p>
            </article>
          ))}
        </div>
      </section>

      {(group.references || group.referenceLetters) && (
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-16">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#d6a94a]">References</p>
            <div className="h-px w-12 bg-[#d6a94a]" />
          </div>

          {group.references && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.references.map((reference) => (
                <article key={reference.name} className="rounded-xl border border-white/10 bg-white/[0.04] p-7">
                  <h2 className="text-2xl font-black uppercase leading-none tracking-[-0.05em]">{reference.name}</h2>
                  <p className="mt-3 font-semibold text-[#d6a94a]">{reference.contact}</p>
                  <a href={`tel:${reference.phone.replaceAll(" ", "")}`} className="mt-5 inline-flex items-center gap-3 text-white/70 transition hover:text-[#d6a94a]">
                    <Phone className="h-5 w-5 text-[#d6a94a]" /> {reference.phone}
                  </a>
                </article>
              ))}
            </div>
          )}

          {group.referenceLetters && (
            <div className="mt-8 flex flex-wrap gap-4">
              {group.referenceLetters.map((letter) => (
                <a
                  key={letter.href}
                  href={letter.href}
                  download
                  className="border border-[#d6a94a] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#d6a94a] transition hover:bg-[#d6a94a] hover:text-black"
                >
                  {letter.title}
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      <Footer onContact={onContact} />
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </main>
  );
}

function SectionTitle({ label, title }) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#d6a94a]">{label}</p>
      <div className="mb-6 h-px w-12 bg-[#d6a94a]" />
      <h2 className="text-5xl font-black tracking-[-0.06em]">{title}</h2>
    </div>
  );
}

function Highlight({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6a94a]/15 text-[#d6a94a] [&_svg]:h-5 [&_svg]:w-5">{icon}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-white/60">{text}</p>
      </div>
    </div>
  );
}

function InfoBox({ title, text }) {
  return (
    <div className="rounded-xl border border-[#d6a94a]/25 bg-[#d6a94a]/10 p-7">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#d6a94a]">{title}</h3>
      <p className="leading-8 text-white/75">{text}</p>
    </div>
  );
}

function Footer({ onContact }) {
  return (
    <footer id="contact" className="bg-[#080908] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-12 md:grid-cols-4">
        <div>
          <p className="font-serif text-5xl font-black tracking-[-0.12em] text-[#d6a94a]">DP</p>
          <h3 className="mt-4 text-xl font-semibold uppercase tracking-[0.22em]">Dominik Paes</h3>
          <div className="my-4 h-px w-28 bg-[#d6a94a]" />
          <p className="text-sm uppercase tracking-[0.16em] text-white/55">Adaptable. Driven. People & results focused.</p>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#d6a94a]">Quick links</h3>
          <div className="space-y-2 text-white/65">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block hover:text-[#d6a94a]">Home</button>
            <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-[#d6a94a]">About</button>
            <button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-[#d6a94a]">Experience</button>
            <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-[#d6a94a]">Skills</button>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#d6a94a]">Contact</h3>
          <div className="space-y-4 text-white/65">
            <a className="flex items-center gap-3 hover:text-[#d6a94a]" href="tel:+64273039161"><Phone className="h-5 w-5 text-[#d6a94a]" /> +64 273039161</a>
            <a className="flex items-center gap-3 hover:text-[#d6a94a]" href="mailto:dominik.paes@gmail.com"><Mail className="h-5 w-5 text-[#d6a94a]" /> dominik.paes@gmail.com</a>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#d6a94a]" /> Queenstown, New Zealand</p>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#d6a94a]">Let’s connect</h3>
          <p className="mb-6 leading-7 text-white/65">Always open to new opportunities, collaborations and interesting conversations.</p>
          <button type="button" onClick={onContact} className="border border-[#d6a94a] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#d6a94a] hover:bg-[#d6a94a] hover:text-black">Contact me</button>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/40">© 2026 Dominik Paes. All rights reserved.</p>
    </footer>
  );
}


function ResumeModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.25 }} className="w-full max-w-md rounded-xl border border-[#d6a94a]/30 bg-[#101211] p-8 text-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d6a94a]/15 text-[#d6a94a]"><BookOpen /></div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6a94a]">Download resume</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.06em]">Choose a resume</h3>
          </div>
          <button type="button" onClick={onClose} className="text-white/70 hover:text-white"><X /></button>
        </div>
        <div className="space-y-4 text-base">
          <a className="block rounded-xl border border-white/10 p-5 text-white/75 transition hover:border-[#d6a94a] hover:text-[#d6a94a]" href="/resumes/Dominik-Hospitality-Resume.pdf" download>
            <span className="block font-bold uppercase tracking-[0.12em]">Hospitality resume</span>
            <span className="mt-2 block text-sm text-white/50">Housekeeping, bartending, guest service and events.</span>
          </a>
          <a className="block rounded-xl border border-white/10 p-5 text-white/75 transition hover:border-[#d6a94a] hover:text-[#d6a94a]" href="/resumes/Dominik-Labouring-Resume.pdf" download>
            <span className="block font-bold uppercase tracking-[0.12em]">Agriculture & labouring resume</span>
            <span className="mt-2 block text-sm text-white/50">Machinery, farm operations, construction and labouring.</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.25 }} className="w-full max-w-md rounded-xl border border-[#d6a94a]/30 bg-[#101211] p-8 text-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d6a94a]/15 text-[#d6a94a]"><Mail /></div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6a94a]">Contact me</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.06em]">Get in touch</h3>
          </div>
          <button type="button" onClick={onClose} className="text-white/70 hover:text-white"><X /></button>
        </div>
        <div className="space-y-4 text-base">
          <a className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-white/75 transition hover:border-[#d6a94a] hover:text-[#d6a94a]" href="tel:+64273039161"><Phone className="h-5 w-5" /> +64 273039161</a>
          <a className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-white/75 transition hover:border-[#d6a94a] hover:text-[#d6a94a]" href="mailto:dominik.paes@gmail.com"><Mail className="h-5 w-5" /> dominik.paes@gmail.com</a>
        </div>
      </motion.div>
    </div>
  );
}
