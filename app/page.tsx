import { CustomIcon } from "@/components/icons/CustomIcon";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Logo et animation */}
        <div className="flex justify-center">
          <div className="relative">
            <CustomIcon
              name="codeceleste"
              size={120}
              className="animate-pulse"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-ping"></div>
          </div>
        </div>

        {/* Titre principal */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Code Celeste
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Message de construction */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Site en construction
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Nous travaillons dur pour vous offrir une expérience exceptionnelle.
            Revenez bientôt pour découvrir quelque chose d'extraordinaire !
          </p>
        </div>

        {/* Barre de progression animée */}
        <div className="space-y-3">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-progress"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Chargement en cours...
          </p>
        </div>

        {/* Icônes décoratives */}
        <div className="flex justify-center space-x-8 pt-8">
          <CustomIcon
            name="store"
            size={32}
            className="text-muted-foreground/50 hover:text-primary transition-colors duration-300"
          />
          <CustomIcon
            name="mobile"
            size={32}
            className="text-muted-foreground/50 hover:text-accent transition-colors duration-300"
          />
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-border/50">
          <p className="text-sm text-muted-foreground">© 2024 Code Celeste</p>
        </div>
      </div>

      {/* Particules flottantes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/30 rounded-full animate-float"></div>
      </div>
    </main>
  );
}
