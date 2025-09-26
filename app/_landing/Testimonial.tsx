import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";

type Testimonial = {
  name: string;
  site: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alexandre Eydieux",
    site: "Smart Power System",
    image: "/pp-AlexEydieux.jpg",
    quote:
      "Nous avons sollicité Maxime pour la création de notre site Internet et nous sommes pleinement satisfaits du résultat. Son investissement dans le projet et le rapport qualité/prix proposé ont été particulièrement appréciés.\n\nDepuis la mise en ligne, le site nous a permis de générer une quinzaine de demandes, dont 4 à 5 se sont concrétisées.\n\nJe recommande ses services!",
  },
  {
    name: "Grégory Maillot",
    site: "VELORUN Festival",
    image: "/pp-AlexEydieux.jpg",
    quote:
      "Maxime a créé un site web exceptionnel pour notre évènement. Son professionnalisme et sa réactivité ont fait toute la différence. Le site a permis d'augmenter nos inscriptions de 40% cette année.\n\nJe recommande vivement ses services!",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export const Testimonial = () => {
  return (
    <Section className="max-w-6xl">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Wall of Love ❤️</h2>
          <p className="mt-6 text-muted-foreground">
            Voici ce que disent les gens qui ont utilisé mes services.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:grid-cols-2 lg:grid-cols-2">
          {testimonialChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="space-y-3">
              {chunk.map(({ name, quote, image, site }, index) => (
                <Card key={index}>
                  <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                    <Avatar className="size-9">
                      <AvatarImage
                        alt={name}
                        src={image}
                        loading="lazy"
                        width="120"
                        height="120"
                      />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="font-medium">{name}</h3>

                      <span className="text-muted-foreground block text-sm tracking-wide">
                        {site}
                      </span>

                      <blockquote className="mt-3">
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                          {quote}
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
