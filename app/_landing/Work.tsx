import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";

export const Work = () => {
  return (
    <Section>
      <h2 className="text-3xl lg:text-4xl font-bold ">My Work</h2>
      <div className="grid grid-cols-2 mt-4 lg:mt-6 gap-4 lg:gap-4">
        <div className="bg-accent/20 border border-accent rounded-lg p-4 flex justify-center items-center">
          <Link href="https://smart-power-system.fr" target="_blank">
            <Image
              src="/SPS LOGO - BASELINE CLAIR.png"
              alt="SPS"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="bg-accent/20 border border-accent rounded-lg p-4 flex justify-center items-center">
          <Link href="https://velorunfestival.re" target="_blank">
            <Image
              src="/VeloRunFest.png"
              alt="SPS"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </Section>
  );
};
