import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import logo from "./assets/logo-paizao.jpg";
import hero from "./assets/burguer-hero.jpg";
import burger1 from "./assets/burguer1.jpg";
import burger2 from "./assets/burguer2.jpg";
import burger3 from "./assets/burguer3.jpg";

const LINKS = {
  instagram: "https://www.instagram.com/artesanalpaizao/",
  yooga: "https://delivery.yooga.app/artesanalpaizao",
  whatsapp: "https://wa.me/",
  maps: "https://www.google.com/maps",
};

/* =========================
   ÍCONES SVG
========================= */

function InstagramIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MessageIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}

function MapIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ArrowIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function FlameIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22c4.4 0 8-3.2 8-7.7 0-2.7-1.3-5.2-3.7-7.6.1 2.4-1 4-2.6 5.1.1-4-2.4-7.6-5.1-9.8.3 3-1.5 5.2-3.1 7.2C4 11 4 13 4 14.3 4 18.8 7.6 22 12 22Z" />
      <path d="M9.5 17.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1-.7-2-2.5-3.7-1.8 1.7-2.5 2.7-2.5 3.7Z" />
    </svg>
  );
}

function MenuIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

/* =========================
   DADOS
========================= */

const burgers = [
  {
    name: "Paizão Especial",
    description:
      "Carne artesanal, queijo derretido e uma combinação feita para chegar com presença.",
    image: burger1,
    badge: "DESTAQUE",
  },
  {
    name: "Brabo do Paizão",
    description:
      "Mais carne, mais queijo e uma experiência criada para quem realmente vem com fome.",
    image: burger2,
    badge: "BRABO",
  },
  {
    name: "Fresh do Paizão",
    description:
      "Ingredientes frescos combinados com carne artesanal e muito sabor.",
    image: burger3,
    badge: "ARTESANAL",
  },
];

/* =========================
   REVEAL
========================= */

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================
   NAVBAR
========================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#080503]/85 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <motion.img
            whileHover={{
              scale: 1.06,
              rotate: -3,
            }}
            src={logo}
            alt="Artesanal do Paizão"
            className="h-14 w-14 rounded-full border border-white/10 object-cover shadow-xl"
          />

          <div className="hidden sm:block">
            <p className="text-[10px] font-black tracking-[0.26em] text-[#cc7440]">
              HAMBURGUERIA
            </p>

            <p className="font-black tracking-tight text-[#f5eadc]">
              ARTESANAL DO PAIZÃO
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          <a href="#inicio" className="nav-link">
            Início
          </a>

          <a href="#destaques" className="nav-link">
            Destaques
          </a>

          <a href="#sobre" className="nav-link">
            Sobre
          </a>

          <a href="#localizacao" className="nav-link">
            Localização
          </a>

          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="nav-link flex items-center gap-2"
          >
            <InstagramIcon size={17} />
            Instagram
          </a>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="nav-link flex items-center gap-2"
          >
            <MessageIcon size={17} />
            WhatsApp
          </a>

          <motion.a
            href={LINKS.yooga}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="paizao-button"
          >
            PEDIR AGORA
            <ArrowIcon size={17} />
          </motion.a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="border-t border-white/5 bg-[#080503]/95 px-5 py-5 backdrop-blur-2xl lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-4">
            <a
              href="#inicio"
              onClick={closeMenu}
              className="mobile-link"
            >
              Início
            </a>

            <a
              href="#destaques"
              onClick={closeMenu}
              className="mobile-link"
            >
              Destaques
            </a>

            <a
              href="#sobre"
              onClick={closeMenu}
              className="mobile-link"
            >
              Sobre
            </a>

            <a
              href="#localizacao"
              onClick={closeMenu}
              className="mobile-link"
            >
              Localização
            </a>

            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="mobile-link flex items-center gap-2"
            >
              <InstagramIcon size={18} />
              Instagram
            </a>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mobile-link flex items-center gap-2"
            >
              <MessageIcon size={18} />
              WhatsApp
            </a>

            <a
              href={LINKS.yooga}
              target="_blank"
              rel="noreferrer"
              className="paizao-button mt-3"
            >
              PEDIR AGORA
              <ArrowIcon size={18} />
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

/* =========================
   HERO
========================= */

function Hero() {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 800], [0, 100]);
  const imageScale = useTransform(scrollY, [0, 700], [1, 0.93]);
  const textY = useTransform(scrollY, [0, 700], [0, 45]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#080503] pt-28"
    >
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />

      <div className="hero-glow hero-glow-two" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
        <motion.div
          style={{ y: textY }}
          className="relative z-20"
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c85b1a]/30 bg-[#c85b1a]/10 px-4 py-2 text-xs font-black tracking-[0.16em] text-[#e7955c]"
          >
            <FlameIcon size={17} />
            HAMBÚRGUER ARTESANAL
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[4rem] font-black uppercase leading-[0.85] tracking-[-0.065em] sm:text-[5.4rem] lg:text-[7rem]"
          >
            Artesanal

            <span className="hero-title-gradient block">
              do Paizão
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-8 max-w-xl text-base leading-8 text-white/50 sm:text-lg"
          >
            Hambúrguer artesanal com personalidade, sabor marcante e aquele
            visual que faz a fome bater antes da primeira mordida.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <motion.a
              href={LINKS.yooga}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="paizao-button paizao-button-large"
            >
              <FlameIcon size={20} />
              PEDIR AGORA
              <ArrowIcon size={20} />
            </motion.a>

            <a
              href="#destaques"
              className="secondary-button"
            >
              VER DESTAQUES
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
          }}
          className="relative z-10"
        >
          <div className="absolute inset-[8%] rounded-full bg-[#c85b1a]/20 blur-[100px]" />

          <motion.div
            animate={{
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <motion.img
              src={hero}
              alt="Hambúrguer Artesanal do Paizão"
              fetchPriority="high"
              animate={{
                y: [0, -13, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mx-auto max-h-[650px] w-full rounded-[32px] object-cover shadow-[0_45px_100px_rgba(0,0,0,0.65)]"
            />

            <div className="pointer-events-none absolute inset-0 z-20 rounded-[32px] bg-gradient-to-t from-black/40 via-transparent to-white/[0.03]" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -right-2 top-1/4 h-3 w-3 rounded-full bg-[#f07a32] shadow-[0_0_30px_10px_rgba(240,122,50,0.25)]"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080503] to-transparent" />
    </section>
  );
}

/* =========================
   MARQUEE
========================= */

function Marquee() {
  const text =
    "ARTESANAL ✦ PAIZÃO ✦ SABOR DE VERDADE ✦ DELIVERY ✦ FEITO NA BRASA ✦ ";

  return (
    <div className="overflow-hidden border-y border-white/5 bg-[#0d0704] py-5">
      <div className="marquee-track">
        <span className="whitespace-nowrap text-xs font-black tracking-[0.24em] text-[#c07143] sm:text-sm">
          {text}
          {text}
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}

/* =========================
   CARD
========================= */

function BurgerCard({ burger, index }) {
  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Reveal delay={index * 0.1}>
      <motion.article
        onMouseMove={handleMouseMove}
        whileHover={{
          y: -12,
        }}
        transition={{
          duration: 0.35,
        }}
        className="burger-card spotlight-card group"
      >
        <div className="relative h-[320px] overflow-hidden">
          <img
            src={burger.image}
            alt={burger.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#100906] via-transparent to-transparent" />

          <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[10px] font-black tracking-[0.18em] text-[#e4955d] backdrop-blur-xl">
            {burger.badge}
          </span>
        </div>

        <div className="relative z-10 p-7">
          <h3 className="text-2xl font-black tracking-tight text-[#f4e8d9]">
            {burger.name}
          </h3>

          <p className="mt-3 min-h-[72px] leading-6 text-white/45">
            {burger.description}
          </p>

          <a
            href={LINKS.yooga}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-black text-[#d98950] transition-all duration-300 hover:gap-3 hover:text-[#f0af82]"
          >
            Ver no cardápio
            <ArrowIcon size={17} />
          </a>
        </div>

        <div className="burger-card-glow" />
      </motion.article>
    </Reveal>
  );
}

/* =========================
   DESTAQUES
========================= */

function Destaques() {
  return (
    <section
      id="destaques"
      className="section scroll-mt-24"
    >
      <Reveal>
        <span className="section-eyebrow">
          ESCOLHA O SEU
        </span>

        <h2 className="section-title">
          Os brabos <span>do Paizão.</span>
        </h2>

        <p className="section-description">
          Hambúrguer artesanal, combinações marcantes e uma identidade criada
          para quem gosta de comer bem.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {burgers.map((burger, index) => (
          <BurgerCard
            key={burger.name}
            burger={burger}
            index={index}
          />
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 flex justify-center">
          <motion.a
            href={LINKS.yooga}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="paizao-button paizao-button-large"
          >
            VER CARDÁPIO COMPLETO
            <ArrowIcon size={19} />
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}

/* =========================
   SOBRE
========================= */

function About() {
  return (
    <section
      id="sobre"
      className="section scroll-mt-24"
    >
      <div className="about-panel">
        <Reveal>
          <span className="section-eyebrow">
            NOSSA IDENTIDADE
          </span>

          <h2 className="section-title">
            Não é só <span>um hambúrguer.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <p className="text-lg leading-8 text-white/55">
              O Artesanal do Paizão une personalidade, presença e sabor em uma
              experiência que começa antes da primeira mordida.
            </p>

            <p className="mt-5 leading-7 text-white/40">
              Uma identidade forte, hambúrguer artesanal e uma proposta feita
              para transformar cada pedido em uma experiência.
            </p>

            <motion.a
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -3,
              }}
              className="secondary-button mt-8"
            >
              <InstagramIcon size={19} />
              CONHECER O INSTAGRAM
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================
   CTA / LOCALIZAÇÃO
========================= */

function Location() {
  return (
    <section
      id="localizacao"
      className="section scroll-mt-24"
    >
      <Reveal>
        <div className="cta-panel">
          <div>
            <span className="section-eyebrow">
              BATEU A FOME?
            </span>

            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              Seu próximo hambúrguer{" "}
              <span className="text-[#d1773c]">
                está aqui.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/45">
              Acesse o cardápio, escolha seu pedido e deixe o Paizão cuidar do
              resto.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href={LINKS.maps}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -3,
              }}
              className="secondary-button"
            >
              <MapIcon size={19} />
              LOCALIZAÇÃO
            </motion.a>

            <motion.a
              href={LINKS.yooga}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="paizao-button paizao-button-large"
            >
              PEDIR AGORA
              <ArrowIcon size={19} />
            </motion.a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* =========================
   FOOTER
========================= */

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050302]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Artesanal do Paizão"
            className="h-14 w-14 rounded-full border border-white/10 object-cover"
          />

          <div>
            <p className="font-black tracking-tight text-[#f4e8d9]">
              ARTESANAL DO PAIZÃO
            </p>

            <p className="mt-1 text-sm text-white/30">
              Hambúrguer artesanal.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="footer-icon"
          >
            <InstagramIcon size={19} />
          </a>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="footer-icon"
          >
            <MessageIcon size={19} />
          </a>

          <a
            href={LINKS.maps}
            target="_blank"
            rel="noreferrer"
            aria-label="Localização"
            className="footer-icon"
          >
            <MapIcon size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   WHATSAPP FLUTUANTE
========================= */

function WhatsAppFloating() {
  return (
    <motion.a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 1,
        duration: 0.45,
      }}
      whileHover={{
        scale: 1.1,
        y: -4,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="whatsapp-floating"
    >
      <span className="whatsapp-pulse" />

      <span className="relative z-10">
        <MessageIcon size={27} />
      </span>
    </motion.a>
  );
}

/* =========================
   APP
========================= */

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080503] text-[#f5eadc]">
      <Navbar />

      <Hero />

      <Marquee />

      <Destaques />

      <About />

      <Location />

      <Footer />

      <WhatsAppFloating />
    </main>
  );
}