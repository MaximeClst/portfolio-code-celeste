import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { ReactNode } from "react";
import { Section } from "./Section";

type SideProject = {
  title: string;
  description: string;
  stack: string[];
  icon: ReactNode;
};

const projects: SideProject[] = [
  {
    title: "Budget Copain",
    description:
      "App mobile de gestion de budget familial pour suivre les dépenses partagées simplement.",
    stack: ["React Native", "Expo", "Supabase"],
    icon: <Wallet className="size-5" aria-hidden />,
  },
];

export const SideProjects = () => {
  return (
    <Section id="side-projects" className="max-w-5xl">
      <div className="text-center">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
          Side Projects
        </h2>
        <p className="text-muted-foreground mt-4">
          Des projets persos que je construis pour le plaisir et pour apprendre.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex size-9 items-center justify-center rounded-md border bg-accent/20 text-foreground">
                  {p.icon}
                </div>
                <h3 className="text-base font-medium">{p.title}</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-[11px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
