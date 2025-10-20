import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Palette, Rocket, Search, Settings } from "lucide-react";
import { ReactNode } from "react";
import { Code } from "./Hero";

export default function Feature() {
  return (
    <section className="py-8 md:py-18" id="feature">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ce que je propose
          </h2>
          <p className="mt-4">
            Je vous propose des solutions <Code>innovantes</Code> et
            performantes pour répondre à vos besoins.
          </p>
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 gap-4 *:text-center md:mt-16 md:grid-cols-4">
          <Card className="group border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Search className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Audit & Analyse</h3>
            </CardHeader>

            <CardContent>
              <p className="text-xs">
                Échange pour comprendre vos besoins et objectifs. L'audit
                définit les fonctionnalités essentielles avant le développement.
              </p>
            </CardContent>
          </Card>

          <Card className="group border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Palette className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Design</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-xs">
                Design moderne et ergonomique adapté à votre marque. Expérience
                fluide dès la première interaction.
              </p>
            </CardContent>
          </Card>

          <Card className="group border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Développement</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-xs">
                Développement avec les technologies récentes. Tests garantissant
                performance, sécurité et stabilité.
              </p>
            </CardContent>
          </Card>
          <Card className="group border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Rocket className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Déploiement & Suivi</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-xs">
                Mise en ligne sur les stores (App Store & Google Play).
                Accompagnement post-livraison pour une prise en main fluide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-24 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:16px_16px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-8 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
