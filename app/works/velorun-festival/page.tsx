import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../_landing/Footer";
import { Header } from "../../_landing/Header";

export default function VeloRunFestivalPage() {
  return (
    <main className="h-full relative">
      {/* Background avec grille et gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_3px,transparent_3px),linear-gradient(rgba(255,255,255,0.02)_3px,transparent_3px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Contenu par-dessus le background */}
      <div className="relative z-10">
        <Header />

        <section className="container mx-auto px-4 py-24">
          {/* Navigation retour */}
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/works">
                <ArrowLeft className="size-4" />
                Retour aux projets
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Header du projet */}
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-6">
                <Image
                  src="/VeloRunFest.png"
                  alt="VELORUN Festival"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">VELORUN Festival</h1>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="https://velorunfestival.re" target="_blank">
                    <ExternalLink className="size-4" />
                    velorunfestival.re
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contenu principal */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image du site */}
              <div className="order-2 lg:order-1">
                <Card className="p-6">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/VeloRunFest.png"
                      alt="Capture d'écran du site VELORUN Festival"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </Card>
              </div>

              {/* Contenu textuel */}
              <div className="order-1 lg:order-2 space-y-8">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Contexte</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Le VELORUN Festival est un événement majeur du cyclisme à La
                    Réunion qui avait besoin d'une plateforme moderne pour
                    centraliser toutes les informations et faciliter les
                    inscriptions.
                  </p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Création d'une plateforme événementielle complète avec
                    système d'inscription, présentation des parcours, programme
                    détaillé et galerie photos. Le site est optimisé pour mobile
                    et offre une expérience utilisateur fluide.
                  </p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Résultats</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Le site a permis de simplifier la gestion des inscriptions
                    et d'améliorer la communication autour de l'événement,
                    contribuant au succès de l'édition avec une participation
                    record.
                  </p>
                </Card>
              </div>
            </div>

            {/* Technologies utilisées */}
            <div className="mt-12">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Technologies utilisées
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Responsive Design",
                    "API Integration",
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
