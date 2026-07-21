import type { Metadata } from "next";
import { ConfirmationView } from "./confirmation-view";

export const metadata: Metadata = {
  title: "Rendez-vous confirmé — Code Celeste",
  description: "Votre appel découverte avec Maxime est réservé.",
  robots: { index: false, follow: false },
};

export default function ConfirmationPage() {
  return <ConfirmationView />;
}
