import { createFileRoute } from "@tanstack/react-router";
import { AncoragemLandingPage } from "./ancoragem-linha-de-vida";

const PAGE_TITLE =
  "Ancoragem Linha de Vida RS | Projeto, Instalação e Inspeção | Engenhar+";
const PAGE_DESCRIPTION =
  "Projeto, instalação e inspeção de ancoragem para linha de vida. Soluções certificadas e desenvolvidas conforme NR-35 para trabalhos em altura.";

export const Route = createFileRoute("/")({
  component: AncoragemLandingPage,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});
