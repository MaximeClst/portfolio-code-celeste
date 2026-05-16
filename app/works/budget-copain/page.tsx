import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../_landing/Footer";
import { Header } from "../../_landing/Header";

export default function BudgetCopainPage() {
  return (
    <main className="h-full relative">
      {/* Background avec grille et gradient */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-br from-slate-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_3px,transparent_3px),linear-gradient(rgba(255,255,255,0.02)_3px,transparent_3px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10">
        <Header />

        <section className="container mx-auto px-4 py-24">
          <div className="mb-8">
            <Link
              href="/works"
              className={
                buttonVariants({ variant: "ghost", size: "sm" }) + " gap-2"
              }
            >
              <ArrowLeft className="size-4" />
              Retour aux projets
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-6">
                <Image
                  src="/budget-copain-icon.png"
                  alt="Budget Copain"
                  width={120}
                  height={120}
                  className="object-contain rounded-2xl"
                />
              </div>
              <div className="flex justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1.5">
                  <Smartphone className="size-3.5" />
                  Application Mobile
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Budget Copain</h1>
              <div className="flex justify-center gap-4">
                <Link
                  href="https://www.budgetcopain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline" }) + " gap-2"}
                >
                  <ExternalLink className="size-4" />
                  budgetcopain.com
                </Link>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <Card className="p-6">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/adaptive-icon.png"
                      alt="Capture d'écran de Budget Copain"
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
                    Gérer son budget au quotidien est un casse-tête pour
                    beaucoup de monde. Les applis existantes sont soit trop
                    complexes, soit pas adaptées aux réalités locales. L'idée :
                    une app simple, intuitive, qui aide vraiment à suivre ses
                    dépenses sans prise de tête.
                  </p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Une application mobile React Native / Expo avec une base
                    Supabase. Catégorisation automatique des transactions, suivi
                    budgétaire mensuel, visualisation des dépenses, et
                    onboarding personnalisé. Gratuite à l'utilisation avec un
                    plan premium en option.
                  </p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Résultats</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Lancée avec une première base d'utilisateurs, l'app continue
                    d'évoluer avec les retours terrain. Les fonctionnalités clés
                    (catégorisation automatique, vues mensuelles) sont déjà en
                    place et utilisées quotidiennement.
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
                    "React Native",
                    "Expo",
                    "TypeScript",
                    "Supabase",
                    "Tailwind CSS / NativeWind",
                    "Gluestack UI",
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
