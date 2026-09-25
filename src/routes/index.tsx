import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import logoVertical from "@/assets/logo-vertical.png.asset.json";
import simbolo from "@/assets/simbolo.png.asset.json";

const WHATSAPP_URL = "https://wa.me/5549984385949";
const EMAIL = "mauricio@ranzanadv.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mauricio Ranzan | Advocacia Especializada" },
      {
        name: "description",
        content:
          "Advocacia especializada em Direito Ambiental, Agro e Fundiário. Atendimento direto, técnico e personalizado.",
      },
      { property: "og:title", content: "Mauricio Ranzan | Advocacia Especializada" },
      {
        property: "og:description",
        content:
          "Advocacia especializada em Direito Ambiental, Agro e Fundiário. Atendimento direto, técnico e personalizado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

const contours = [
  "M-250 90 C-80 20 90 65 155 185 C225 315 115 405 240 495 C340 565 470 440 530 570 C580 675 470 815 550 990",
  "M-225 125 C-60 55 65 105 125 215 C185 325 90 410 210 510 C305 590 430 475 490 590 C535 680 430 830 515 1000",
  "M-200 165 C-50 95 45 145 95 240 C150 345 65 425 175 530 C265 615 395 510 450 610 C495 700 390 840 480 1005",
  "M-180 210 C-45 145 25 185 65 270 C115 370 40 445 140 555 C235 650 355 545 415 635 C450 720 350 865 450 1020",
  "M-150 255 C-35 190 10 225 40 305 C80 395 10 475 105 580 C205 685 320 585 380 660 C420 745 315 885 415 1040",
  "M-120 300 C-30 245 -10 270 10 335 C45 420 -20 500 70 610 C165 715 285 625 345 690 C375 765 280 910 380 1050",
  "M910 -160 C965 -35 1140 -40 1240 65 C1360 190 1250 305 1365 415 C1485 530 1595 425 1690 520",
  "M875 -135 C930 0 1100 -5 1205 95 C1320 210 1215 320 1330 435 C1445 550 1555 455 1660 550",
  "M840 -105 C895 30 1065 30 1170 125 C1285 240 1180 345 1295 460 C1410 575 1520 485 1630 580",
  "M805 -75 C860 65 1030 60 1135 155 C1250 270 1145 370 1260 485 C1375 600 1485 520 1600 615",
  "M770 -45 C825 95 995 95 1100 185 C1215 295 1110 395 1225 515 C1340 630 1450 550 1570 645",
  "M735 -15 C790 125 960 125 1065 215 C1180 325 1075 425 1190 545 C1305 660 1415 585 1540 675",
];

function ContourField() {
  return (
    <div className="contour-field" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="contour-tone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--contour-neutral)" />
            <stop offset="45%" stopColor="var(--contour-olive)" />
            <stop offset="100%" stopColor="var(--contour-orange)" />
          </linearGradient>
        </defs>
        {contours.map((path) => (
          <path key={path} d={path} stroke="url(#contour-tone)" strokeWidth="1.35" />
        ))}
      </svg>
    </div>
  );
}

function Index() {
  const ref = useReveal();

  return (
    <main ref={ref} className="relative min-h-screen bg-background text-foreground">
      <ContourField />
      {/* Hero */}
      <section className="relative z-10 flex min-h-[82svh] flex-col items-center justify-center px-6 py-20 text-center">
        <img
          src={logoVertical.url}
          alt="Mauricio Ranzan — Advocacia Especializada"
          className="hero-in w-64 max-w-full sm:w-80"
          loading="eager"
        />
        <h1 className="hero-in d1 mt-10 flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 font-display text-2xl font-light uppercase leading-relaxed tracking-[0.18em] sm:text-3xl">
          <span className="text-primary">Ambiental</span>
          <span className="text-muted-foreground/60">·</span>
          <span className="text-primary">Agro</span>
          <span className="text-muted-foreground/60">·</span>
          <span className="text-primary">Fundiário</span>
        </h1>
        <p className="hero-in d2 mt-6 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
          Atendimento direto, técnico e personalizado com foco na solução
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hero-in d3 mt-10 inline-flex items-center gap-3 rounded-full bg-forest px-8 py-3.5 text-sm font-normal tracking-wide text-cream transition-all hover:bg-primary"
        >
          Falar com o advogado
        </a>
      </section>

      {/* Áreas de atuação */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-28 pt-8 sm:pb-36">
        <p className="reveal font-display text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Áreas de atuação
        </p>
        <div className="mt-10">
          {[
            {
              n: "01",
              t: "Direito Ambiental",
              d: "Licenciamento ambiental complexo, regularização e defesa em questões ambientais.",
            },
            {
              n: "02",
              t: "Direito do Agro",
              d: "Assessoria jurídica para o agro, do campo à comercialização.",
            },
            {
              n: "03",
              t: "Direito Fundiário",
              d: "Titulação, posse e segurança jurídica da terra.",
            },
          ].map((area) => (
            <div
              key={area.n}
              className="reveal flex flex-col gap-2 border-t border-border py-8 sm:flex-row sm:items-baseline sm:gap-10"
            >
              <span className="font-display text-sm tracking-widest text-primary">{area.n}</span>
              <h2 className="font-display text-2xl font-light uppercase tracking-[0.08em] sm:w-1/2 sm:text-3xl">
                {area.t}
              </h2>
              <p className="text-sm font-light leading-relaxed text-muted-foreground sm:flex-1">
                {area.d}
              </p>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      {/* Declaração */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-28 sm:pb-36">
        <blockquote className="reveal text-center">
          <p className="font-display text-2xl font-light leading-snug sm:text-3xl">
            Inteligência ambiental e territorial. Assessoria que protege o que é seu{" "}
            <span className="text-primary">e permite que floresça.</span>
          </p>
        </blockquote>
      </section>

      {/* Contato — escuro */}
      <section className="relative z-10 bg-forest text-cream">
        <div className="reveal mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-28">
          <img src={simbolo.url} alt="" className="w-20 opacity-90" loading="lazy" />
          <h2 className="mt-8 font-display text-3xl font-light uppercase tracking-[0.14em] sm:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-cream/70">
            Me conte a sua situação e receba um direcionamento claro.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center rounded-full border border-cream/30 px-8 py-3.5 text-sm font-light tracking-wide transition-colors hover:bg-cream/10"
            >
              {EMAIL}
            </a>
          </div>
        </div>
        <footer className="border-t border-cream/10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-1 px-6 py-8 text-center">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-cream/60">
              Mauricio Ranzan — Advocacia Especializada
            </p>
            <p className="text-[11px] font-light tracking-wide text-cream/40">
              © {new Date().getFullYear()} · ranzanadv.com
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
