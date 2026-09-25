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

function Index() {
  const ref = useReveal();

  return (
    <main ref={ref} className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <img
          src={logoVertical.url}
          alt="Mauricio Ranzan — Advocacia Especializada"
          className="hero-in w-64 max-w-full sm:w-80"
          loading="eager"
        />
        <h1 className="hero-in d1 mt-10 font-display text-2xl font-light uppercase leading-relaxed tracking-[0.18em] sm:text-3xl">
          Direito <span className="text-primary">Ambiental</span>
          <span className="mx-3 text-muted-foreground/60">·</span>
          <span className="text-primary">Agro</span>
          <span className="mx-3 text-muted-foreground/60">·</span>
          <span className="text-primary">Fundiário</span>
        </h1>
        <p className="hero-in d2 mt-6 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
          Atendimento direto, técnico e personalizado para o seu campo de atuação.
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
      <section className="mx-auto max-w-3xl px-6 pb-28 pt-8 sm:pb-36">
        <p className="reveal font-display text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Áreas de atuação
        </p>
        <div className="mt-10">
          {[
            {
              n: "01",
              t: "Direito Ambiental",
              d: "Licenciamento, regularização e defesa em questões ambientais.",
            },
            {
              n: "02",
              t: "Direito do Agro",
              d: "Assessoria jurídica ao agronegócio, do campo à comercialização.",
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
      <section className="mx-auto max-w-3xl px-6 pb-28 sm:pb-36">
        <blockquote className="reveal text-center">
          <p className="font-display text-2xl font-light leading-snug sm:text-3xl">
            “A assessoria jurídica que mantém o que é seu —{" "}
            <span className="text-primary">e permite que floresça.”</span>
          </p>
        </blockquote>
      </section>

      {/* Contato — escuro */}
      <section className="bg-forest text-cream">
        <div className="reveal mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-28">
          <img src={simbolo.url} alt="" className="w-20 opacity-90" loading="lazy" />
          <h2 className="mt-8 font-display text-3xl font-light uppercase tracking-[0.14em] sm:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-cream/70">
            Conte a sua situação e receba um direcionamento claro.
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
