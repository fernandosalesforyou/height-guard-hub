import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Services } from "@/components/site/Services";
import { ProjectVideos } from "@/components/site/VideoBlock";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ContactDialogProvider } from "@/components/site/ContactDialog";
import { Section, SectionTitle } from "@/components/site/Section";
import { CtaButton } from "@/components/site/CtaButton";
import heroBg from "@/assets/hero-bg.jpg";
import img1 from "@/assets/install-1.jpg";
import img2 from "@/assets/install-2.jpg";
import img3 from "@/assets/install-3.jpg";
import img4 from "@/assets/install-4.jpg";

const PAGE_TITLE =
  "Ancoragem Linha de Vida RS | Projeto, Instalação e Inspeção | Engenhar+";
const PAGE_DESCRIPTION =
  "Projeto, instalação e inspeção de ancoragem para linha de vida. Soluções certificadas e desenvolvidas conforme NR-35 para trabalhos em altura.";

export const Route = createFileRoute("/ancoragem-linha-de-vida")({
  component: AncoragemLandingPage,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ancoragem-linha-de-vida" },
    ],
    links: [{ rel: "canonical", href: "/ancoragem-linha-de-vida" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "O que é um ponto de ancoragem?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "É o elemento estrutural utilizado para conectar sistemas de proteção contra quedas em trabalhos realizados em altura.",
              },
            },
            {
              "@type": "Question",
              name: "Quando a ancoragem é obrigatória?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sempre que houver risco de queda e necessidade de utilização de sistemas de proteção conforme as exigências da NR-35.",
              },
            },
            {
              "@type": "Question",
              name: "Vocês realizam projeto e instalação?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim. Desenvolvemos, instalamos e inspecionamos sistemas completos de ancoragem para linha de vida.",
              },
            },
            {
              "@type": "Question",
              name: "Vocês vendem equipamentos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. Atuamos exclusivamente com projetos, inspeção e instalação.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

const SCOPE_DISCLAIMER =
  "Atuamos exclusivamente com projetos, inspeção e instalação. Não comercializamos peças, EPIs ou equipamentos avulsos.";

export function AncoragemLandingPage() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroVariant />
          <TypesVariant />
          <div className="bg-brand-gray pt-12">
            <p className="mx-auto max-w-3xl px-4 text-center text-base sm:text-lg text-muted-foreground">
              Cada sistema de ancoragem é desenvolvido considerando a estrutura
              existente, as cargas aplicadas e os riscos da atividade,
              garantindo máxima segurança operacional e conformidade normativa.
            </p>
          </div>
          <Services />
          <HowWeWorkVariant />
          <ProjectPhaseVariant />
          <InstallationVariant />
          <SpecialVariant />
          <ProjectVideos />
          <InspectionsVariant />
          <InspectionVideosVariant />
          <AnchorsVariant />
          <NR35Variant />
          <FAQVariant />
          <ContactForm />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ContactDialogProvider>
  );
}

/* ----------------- HERO ----------------- */
function HeroVariant() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/90">
            Engenhar+ Soluções
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Ancoragem Linha de Vida
          </h1>
          <p className="mt-3 text-2xl sm:text-3xl font-semibold text-accent">
            Projetos Seguros e Certificados
          </p>
          <p className="mt-5 text-lg text-primary-foreground/85 max-w-2xl">
            Garanta a estabilidade com nossos sistemas de ancoragem e proteção
            contra quedas.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Evite multas e interdições por irregularidades",
              "Reduza riscos de acidentes e responsabilidades legais",
              "Atenda totalmente às exigências da NR-35",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-primary-foreground/95"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <CtaButton size="lg" />
          </div>

          <div className="mt-6 max-w-2xl rounded-lg border-l-4 border-accent bg-primary-foreground/10 px-5 py-4">
            <p className="text-sm sm:text-base font-semibold text-primary-foreground">
              {SCOPE_DISCLAIMER}
            </p>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/70">
            Referência no RS • Atendimento nacional • Projetos personalizados
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------- TIPOS ----------------- */
function TypesVariant() {
  const items = [
    {
      title: "Pontos de Ancoragem",
      text: "Sistemas de ancoragem desenvolvidos para suportar cargas de segurança em trabalhos em altura, garantindo estabilidade, resistência estrutural e conformidade com a NR-35.",
    },
    {
      title: "Linha de Vida Flexível Horizontal",
      text: "Sistema com cabo de aço aplicado em telhados e estruturas horizontais. Permite mobilidade contínua com segurança durante deslocamentos em altura — ideal para manutenções e inspeções frequentes.",
    },
    {
      title: "Linha de Vida Horizontal (Overhead)",
      text: "Instalada acima da cabeça, em cabo de aço ou trilho rígido. Indicada para operações industriais como carga, descarga e manutenção, com uso de trava-quedas retrátil.",
    },
    {
      title: "Linha de Vida Vertical",
      text: "Cabo de aço vertical e trava-quedas deslizante, aplicado em escadas tipo marinheiro. Garante segurança no acesso vertical e deslocamento contínuo.",
    },
  ];
  return (
    <Section id="projeto" tone="white">
      <SectionTitle
        eyebrow="Tipos de Linha de Vida"
        title="Projetos de Ancoragem para Linha de Vida"
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg text-muted-foreground">
        Somos especialistas em projetos, instalação e inspeção de ancoragem
        para linha de vida, desenvolvendo sistemas seguros para diferentes
        tipos de estruturas e operações em altura.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="group relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              0{i + 1}
            </div>
            <h3 className="text-lg font-semibold text-primary">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {it.text}
            </p>
            <div className="mt-4 h-1 w-10 rounded bg-accent group-hover:w-20 transition-all" />
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

/* ----------------- COMO A ENGENHAR+ TRABALHA ----------------- */
function HowWeWorkVariant() {
  const pillars = [
    {
      title: "Excelência garantida",
      text: "Serviços com alto padrão técnico e certificações.",
    },
    {
      title: "Soluções que transformam",
      text: "Projetos personalizados e eficazes.",
    },
    {
      title: "Atendimento que conecta",
      text: "Relacionamento próximo, transparente e confiável.",
    },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Como a Engenhar+ trabalha"
        title="Como desenvolvemos cada projeto"
        subtitle="Cada projeto é único. Analisamos o ambiente em detalhes, ouvimos todas as partes envolvidas e desenvolvemos soluções técnicas alinhadas à realidade do cliente, com foco em segurança, eficiência e o melhor custo-benefício."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground">
        Nossa metodologia permite desenvolver sistemas de ancoragem
        personalizados para cada estrutura, reduzindo riscos e garantindo
        proteção eficiente para trabalhos em altura.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className="rounded-xl bg-primary p-8 text-primary-foreground shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-5xl font-bold text-accent">0{i + 1}</div>
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------- FASE DE PROJETO ----------------- */
function ProjectPhaseVariant() {
  const steps = [
    {
      title: "Análise de risco detalhada",
      text: "Avaliamos o local, identificamos riscos e definimos as melhores soluções técnicas.",
    },
    {
      title: "Croqui inicial do sistema",
      text: "Esboço com o posicionamento dos pontos e linhas para validação prévia.",
    },
    {
      title: "Aprovação do cliente",
      text: "Alinhamento técnico e comercial antes de avançar para o executivo.",
    },
    {
      title: "Projeto executivo",
      text: "Detalhamento completo com memorial, ART e desenhos 2D/3D.",
    },
    {
      title: "Entrega do databook técnico",
      text: "Documentação completa para uso, inspeção e manutenção do sistema.",
    },
  ];
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Fase de projeto"
        title="Etapas do desenvolvimento técnico"
        subtitle="Antes da execução, estruturamos todo o projeto para garantir precisão, segurança e eficiência."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground">
        Todo projeto de ancoragem passa por análise estrutural e avaliação
        técnica para garantir que os pontos de fixação atendam às exigências
        de segurança e desempenho.
      </p>
      <ol className="relative mt-14 mx-auto max-w-3xl">
        <span
          aria-hidden
          className="absolute left-5 top-2 bottom-2 w-px bg-accent/40 sm:left-1/2 sm:-translate-x-1/2"
        />
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="relative pl-16 pb-10 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 last:pb-0"
          >
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold shadow-md sm:left-1/2 sm:-translate-x-1/2">
              {i + 1}
            </span>
            <div
              className={`${i % 2 === 0 ? "sm:col-start-1 sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"}`}
            >
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ----------------- INSTALAÇÃO ----------------- */
function InstallationVariant() {
  const slides = [img1, img2, img3, img4];
  const responsibilities = [
    {
      title: "Expertise técnica",
      text: "Equipe qualificada e preparada para projetos complexos.",
    },
    {
      title: "Agilidade na instalação",
      text: "Execução organizada, sem atrasos.",
    },
    {
      title: "Redução de impactos",
      text: "Minimizamos interferências na sua operação.",
    },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Implementação / Instalação"
        title="Execução segura e eficiente"
        subtitle="Realizamos a instalação com alto padrão técnico, garantindo segurança, rapidez e mínimo impacto na operação do cliente."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground">
        Nossa equipe realiza a instalação de ancoragem para linha de vida
        seguindo critérios rigorosos de engenharia, assegurando resistência,
        durabilidade e confiabilidade do sistema.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-border bg-card">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((s, idx) => (
              <img
                key={idx}
                src={s}
                alt={`Instalação de ancoragem ${idx + 1}`}
                className="w-full shrink-0 aspect-[4/3] object-cover"
              />
            ))}
          </div>
          <button
            aria-label="Anterior"
            onClick={() =>
              setI((v) => (v - 1 + slides.length) % slides.length)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
          >
            ‹
          </button>
          <button
            aria-label="Próximo"
            onClick={() => setI((v) => (v + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-accent" : "w-2 bg-primary-foreground/60"}`}
              />
            ))}
          </div>
        </div>
        <ul className="space-y-5">
          {responsibilities.map((r) => (
            <li
              key={r.title}
              className="rounded-xl border-l-4 border-accent bg-secondary p-5"
            >
              <h3 className="font-semibold text-primary">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

/* ----------------- SOLUÇÕES ESPECIAIS ----------------- */
function SpecialVariant() {
  const diff = [
    "Projetos personalizados",
    "Foco em custo-benefício",
    "Soluções técnicas completas",
  ];
  const segments = [
    "Indústria",
    "Construção Civil",
    "Agronegócio",
    "Centros logísticos",
    "Condomínios",
    "Empresas com NR-35",
  ];
  return (
    <Section tone="primary">
      <SectionTitle
        eyebrow="Soluções especiais"
        title="Projetos para diferentes segmentos"
        subtitle="Desenvolvemos sistemas de ancoragem para linha de vida em diversos segmentos, sempre considerando segurança, viabilidade técnica e melhor custo-benefício."
        light
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-2 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
          <h3 className="text-lg font-semibold text-accent">Diferenciais</h3>
          <ul className="mt-4 space-y-3">
            {diff.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 text-primary-foreground/90"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-lg font-semibold text-accent">
            Segmentos atendidos
          </h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {segments.map((s) => (
              <div
                key={s}
                className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ----------------- INSPEÇÕES ----------------- */
function InspectionsVariant() {
  const cards = [
    {
      title: "Inspeções técnicas especializadas",
      text: "Reconhecemos a importância crucial desses sistemas na proteção de trabalhadores em altura. Nossa equipe certificada e qualificada utiliza práticas de inspeção rigorosas e detalhadas para garantir que todos os sistemas estejam em conformidade e plenamente funcionais.",
    },
    {
      title: "Atendimento às normas vigentes",
      text: "Seguimos rigorosamente as normas e regulamentos em vigor, assegurando que os sistemas de proteção contra quedas (linhas de vida) e sistemas de ancoragem estejam em total conformidade com as exigências de segurança e proteção.",
    },
    {
      title: "Compromisso com a segurança",
      text: "Executamos inspeções técnicas detalhadas para garantir a segurança e a conformidade em sistemas de proteção contra quedas (linhas de vida) e pontos de ancoragem, reforçando nosso compromisso com você.",
    },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Inspeções Linha de Vida"
        title="Inspeções de Ancoragem e Sistemas de Proteção Contra Quedas"
        subtitle="Realizamos inspeções completas para garantir que os sistemas estejam seguros, funcionando corretamente e em conformidade com as normas vigentes."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground">
        Realizamos inspeções periódicas dos pontos de ancoragem para verificar
        integridade estrutural, conformidade normativa e condições de uso.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-primary leading-snug">
              {c.title}
            </h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {c.text}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-10 mx-auto max-w-3xl text-center text-base text-foreground">
        Executamos inspeções técnicas detalhadas em{" "}
        <strong>Sistemas de Proteção Contra Quedas (linhas de vida)</strong> e{" "}
        <strong>Pontos de Ancoragem</strong>.
      </p>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

/* ----------------- CASOS DE INSPEÇÃO (vídeos) ----------------- */
function InspectionVideosVariant() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Casos de inspeção"
        title="Casos de Inspeção em Sistemas de Ancoragem"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <YT id="S0WAqhzKOAY" title="Inspeção em Coberturas" />
        <YT id="0ZdujswYjzA" title="Inspeção em Escadas" />
      </div>
      <p className="mt-8 text-center text-muted-foreground">
        Após a inspeção, entregamos toda a documentação técnica exigida,
        garantindo conformidade total.
      </p>
    </Section>
  );
}

function YT({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-primary">{title}</p>
      </div>
    </div>
  );
}

/* ----------------- PROJETO E INSTALAÇÃO PONTOS DE ANCORAGEM ----------------- */
function AnchorsVariant() {
  const cards = [
    {
      t: "Projeto Estrutural",
      d: "Desenvolvimento técnico dos pontos de ancoragem conforme a estrutura e necessidade operacional.",
    },
    {
      t: "Instalação Especializada",
      d: "Execução realizada por equipe capacitada seguindo rigorosamente as normas técnicas.",
    },
    {
      t: "Inspeção Periódica",
      d: "Avaliação da integridade dos sistemas para garantir segurança contínua.",
    },
  ];
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Pontos de ancoragem"
        title="Projetos de Ancoragem para Linha de Vida"
        subtitle="Projetamos, instalamos e inspecionamos sistemas de ancoragem para linha de vida, garantindo estabilidade estrutural, proteção dos colaboradores e conformidade com as exigências da NR-35."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.t}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-primary">{c.t}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {c.d}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

/* ----------------- NR-35 ----------------- */
function NR35Variant() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="NR-35"
        title="Sua empresa está adequada à NR-35?"
        subtitle="Toda atividade acima de 2 metros exige sistema de proteção contra quedas."
      />
      <div className="mt-12 mx-auto max-w-4xl rounded-2xl border-l-4 border-accent bg-secondary p-10 shadow-md">
        <h3 className="text-2xl font-semibold text-primary">
          Principais exigências
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Sistema adequado ao risco",
            "Projeto por profissional habilitado",
            "Resistência certificada",
            "Inspeções periódicas obrigatórias",
          ].map((e) => (
            <li key={e} className="flex gap-3 text-base text-foreground">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                ✓
              </span>
              {e}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base text-muted-foreground">
          A falta de adequação pode gerar multas, interdições e riscos graves à
          sua operação.
        </p>
        <p className="mt-4 text-base text-muted-foreground">
          Os pontos de ancoragem são componentes fundamentais dos sistemas de
          proteção contra quedas e devem ser projetados por profissionais
          habilitados, garantindo resistência adequada em situações de
          emergência.
        </p>
        <p className="mt-6 text-base font-semibold text-primary">
          Solicite uma avaliação técnica e descubra qual sistema de ancoragem
          para linha de vida é mais adequado para sua empresa.
        </p>
        <div className="mt-8 text-center">
          <CtaButton size="lg" />
        </div>
      </div>
    </Section>
  );
}

/* ----------------- FAQ ----------------- */
function FAQVariant() {
  const faqs = [
    {
      q: "O que é um ponto de ancoragem?",
      a: "É o elemento estrutural utilizado para conectar sistemas de proteção contra quedas em trabalhos realizados em altura.",
    },
    {
      q: "Quando a ancoragem é obrigatória?",
      a: "Sempre que houver risco de queda e necessidade de utilização de sistemas de proteção conforme as exigências da NR-35.",
    },
    {
      q: "Vocês realizam projeto e instalação?",
      a: "Sim. Desenvolvemos, instalamos e inspecionamos sistemas completos de ancoragem para linha de vida.",
    },
    {
      q: "Vocês vendem equipamentos?",
      a: "Não. Atuamos exclusivamente com projetos, inspeção e instalação.",
    },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="FAQ"
        title="Perguntas Frequentes sobre Ancoragem para Linha de Vida"
      />
      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-border bg-card p-6 shadow-sm open:shadow-md transition-shadow"
          >
            <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-lg font-semibold text-primary [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-base font-bold transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
