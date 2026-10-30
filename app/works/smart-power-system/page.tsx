import { pageMetadata } from "@/lib/seo";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../_landing/Footer";
import { Header } from "../../_landing/Header";

export const metadata = pageMetadata("Site Smart Power System | Réalisation Code Céleste", "Site vitrine réalisé par Code Céleste pour Smart Power System, une équipe de coachs sportifs spécialisés en force athlétique et coaching en ligne.", "/works/smart-power-system");

export default function SmartPowerSystemPage() {
  return (
    <main className="h-full relative">
      {/* Background avec grille et gradient */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-br from-slate-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_3px,transparent_3px),linear-gradient(rgba(255,255,255,0.02)_3px,transparent_3px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Contenu par-dessus le background */}
      <div className="relative z-10">
        <Header />

        <section className="container mx-auto px-4 py-24">
          <div className="mb-8">
            <Link href="/works" className={buttonVariants({ variant: "ghost", size: "sm" }) + " gap-2"}>
              <ArrowLeft className="size-4" />
              Retour aux projets
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-6">
                <Image
                  src="/SPS LOGO - BASELINE CLAIR.png"
                  alt="Smart Power System"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">Smart Power System</h1>
              <div className="flex justify-center gap-4">
                <Link href="https://smart-power-system.fr" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline" }) + " gap-2"}>
                  <ExternalLink className="size-4" />
                  smart-power-system.fr
                </Link>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <Card className="p-6">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/screen-SPS.png"
                      alt="Capture d'écran du site Smart Power System"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </Card>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Contexte</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Smart Power System réunit une équipe de coachs sportifs
                    spécialisés en force athlétique et en coaching en ligne.
                    Le projet : présenter les coachs et leurs accompagnements,
                    et faciliter la prise de contact des futurs athlètes.
                  </p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    J'ai réalisé un site vitrine qui présente l'équipe,
                    les formules de suivi personnalisé et les témoignages
                    d'athlètes. Les visiteurs peuvent découvrir les services
                    proposés et contacter Smart Power System.
                  </p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Résultats</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    D'après le témoignage d'Alexandre Eydieux publié sur notre
                    site, la mise en ligne a généré une quinzaine de demandes,
                    dont 4 à 5 se sont concrétisées.
                  </p>
                </Card>
              </div>
            </div>

            <div className="mt-12">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Technologies utilisées
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Hostinger Website Builder",
                    "Responsive Design",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
