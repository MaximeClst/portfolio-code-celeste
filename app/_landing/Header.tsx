import { CustomIcon } from "@/components/icons/CustomIcon";

export const Header = () => {
  return (
    <header className="w-full max-w-4xl mx-auto p-8">
      <div className="flex items-center justify-center gap-8 bg-accent/90 backdrop-blur-sm border border-primary-200 rounded-3xl p-6 shadow-lg">
        {/* Logo */}
        <div className="flex flex-col justify-start">
          <CustomIcon name="codeceleste" size={80} />
        </div>

        {/* Texte principal */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-2">
            Bienvenue sur
          </h1>
          <h1 className="text-4xl font-bold text-primary-900 mb-3">
            Code Celeste
          </h1>
          <p className="text-muted-foreground flex justify-end italic">
            by Maxime
          </p>
        </div>
      </div>
    </header>
  );
};
