"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Lock, X } from "lucide-react";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CalEmbed } from "./CalComEmbed";

type ProjectType =
  | "site-artisan"
  | "app-mobile"
  | "mvp"
  | "refonte";

type HasSite = "oui" | "non";

type Goal =
  | "clients"
  | "google"
  | "pro"
  | "test-idee"
  | "moderniser";

type Pain =
  | "visibilite"
  | "vieux"
  | "trop-cher"
  | "commencer";

type Contact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  currentSite: string;
};

type FormState = {
  projectType: ProjectType | null;
  hasSite: HasSite | null;
  goal: Goal | null;
  pain: Pain | null;
  contact: Contact;
};

type Ctx = {
  open: (preset?: Partial<FormState>) => void;
  close: () => void;
};

const QuoteModalContext = createContext<Ctx | null>(null);

const initialContact: Contact = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  currentSite: "",
};

const initialForm: FormState = {
  projectType: null,
  hasSite: null,
  goal: null,
  pain: null,
  contact: initialContact,
};

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return ctx;
}

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);

  const open = useCallback((preset?: Partial<FormState>) => {
    setForm((prev) => ({ ...initialForm, ...preset, contact: prev.contact.firstName ? prev.contact : initialContact }));
    setStep(1);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const value = useMemo<Ctx>(() => ({ open, close }), [open, close]);

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <QuoteModal
            step={step}
            setStep={setStep}
            form={form}
            setForm={setForm}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </QuoteModalContext.Provider>
  );
}

const TOTAL_STEPS = 6;

function QuoteModal({
  step,
  setStep,
  form,
  setForm,
  onClose,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  form: FormState;
  setForm: Dispatch<SetStateAction<FormState>>;
  onClose: () => void;
}) {
  const percent = Math.round(((step - 1) / TOTAL_STEPS) * 100);

  const next = useCallback(
    () => setStep((s) => Math.min(s + 1, TOTAL_STEPS)),
    [setStep]
  );
  const back = useCallback(() => setStep((s) => Math.max(s - 1, 1)), [setStep]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-br from-[#13092c] via-[#0d0820] to-[#0a0a0a] p-6 sm:p-8 shadow-2xl shadow-brand/10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--brand)/0.18),transparent_60%)]"
        />

        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-muted-foreground">
              Étape {step} / {TOTAL_STEPS}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-brand">
                {percent}%
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={false}
              animate={{ width: `${Math.max(percent, 4)}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-brand to-brand-secondary"
            />
          </div>

          <div className="mt-8 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {step === 1 && (
                  <StepProjectType
                    value={form.projectType}
                    onSelect={(v) => {
                      setForm((f) => ({ ...f, projectType: v }));
                      next();
                    }}
                  />
                )}
                {step === 2 && (
                  <StepHasSite
                    projectType={form.projectType}
                    value={form.hasSite}
                    onSelect={(v) => {
                      setForm((f) => ({ ...f, hasSite: v }));
                      next();
                    }}
                  />
                )}
                {step === 3 && (
                  <StepGoal
                    value={form.goal}
                    onSelect={(v) => {
                      setForm((f) => ({ ...f, goal: v }));
                      next();
                    }}
                  />
                )}
                {step === 4 && (
                  <StepPain
                    value={form.pain}
                    onSelect={(v) => {
                      setForm((f) => ({ ...f, pain: v }));
                      next();
                    }}
                  />
                )}
                {step === 5 && (
                  <StepContact
                    contact={form.contact}
                    onChange={(contact) => setForm((f) => ({ ...f, contact }))}
                    onSubmit={next}
                  />
                )}
                {step === 6 && <StepBooking onConfirm={onClose} />}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={back}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                ← Retour
              </button>
            )}
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="size-3" /> Données confidentielles. Zéro spam.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StepHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h2
        id="quote-modal-title"
        className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function OptionButton({
  selected,
  children,
  onClick,
}: {
  selected?: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex w-full items-center justify-between rounded-xl border bg-white/[0.02] px-5 py-4 text-left text-base transition-all",
        "hover:border-brand/60 hover:bg-brand/10",
        selected
          ? "border-brand bg-brand/10 text-foreground"
          : "border-border/60 text-foreground/90"
      )}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
    </button>
  );
}

function StepProjectType({
  value,
  onSelect,
}: {
  value: ProjectType | null;
  onSelect: (v: ProjectType) => void;
}) {
  const options: { id: ProjectType; label: string }[] = [
    { id: "site-artisan", label: "Site web pour artisan" },
    { id: "app-mobile", label: "Application mobile (iOS / Android)" },
    { id: "mvp", label: "MVP / Prototype rapide" },
    { id: "refonte", label: "Refonte d'un site existant" },
  ];
  return (
    <div className="space-y-6">
      <StepHeading title="Quel type de projet ?" />
      <div className="space-y-3">
        {options.map((o) => (
          <OptionButton
            key={o.id}
            selected={value === o.id}
            onClick={() => onSelect(o.id)}
          >
            {o.label}
          </OptionButton>
        ))}
      </div>
    </div>
  );
}

function StepHasSite({
  projectType,
  value,
  onSelect,
}: {
  projectType: ProjectType | null;
  value: HasSite | null;
  onSelect: (v: HasSite) => void;
}) {
  const isApp = projectType === "app-mobile";
  const title = isApp
    ? "Avez-vous déjà une application ?"
    : "Avez-vous déjà un site internet ?";
  const yesLabel = isApp ? "Oui, mais je veux mieux" : "Oui, mais je veux mieux";
  const noLabel = isApp ? "Non, j'en veux une" : "Non, j'en veux un";
  return (
    <div className="space-y-6">
      <StepHeading title={title} />
      <div className="space-y-3">
        <OptionButton selected={value === "oui"} onClick={() => onSelect("oui")}>
          {yesLabel}
        </OptionButton>
        <OptionButton selected={value === "non"} onClick={() => onSelect("non")}>
          {noLabel}
        </OptionButton>
      </div>
    </div>
  );
}

function StepGoal({
  value,
  onSelect,
}: {
  value: Goal | null;
  onSelect: (v: Goal) => void;
}) {
  const options: { id: Goal; label: string }[] = [
    { id: "clients", label: "Avoir plus de clients" },
    { id: "google", label: "Être visible sur Google" },
    { id: "pro", label: "Avoir un site / une app pro" },
    { id: "test-idee", label: "Tester mon idée rapidement" },
    { id: "moderniser", label: "Moderniser mon image" },
  ];
  return (
    <div className="space-y-6">
      <StepHeading title="Quel est votre objectif principal ?" />
      <div className="space-y-3">
        {options.map((o) => (
          <OptionButton
            key={o.id}
            selected={value === o.id}
            onClick={() => onSelect(o.id)}
          >
            {o.label}
          </OptionButton>
        ))}
      </div>
    </div>
  );
}

function StepPain({
  value,
  onSelect,
}: {
  value: Pain | null;
  onSelect: (v: Pain) => void;
}) {
  const options: { id: Pain; label: string }[] = [
    { id: "visibilite", label: "Pas assez de visibilité" },
    { id: "vieux", label: "Mon site / mon app est trop vieux" },
    { id: "trop-cher", label: "Trop cher ailleurs" },
    { id: "commencer", label: "Je ne sais pas par où commencer" },
  ];
  return (
    <div className="space-y-6">
      <StepHeading title="Quelle est votre problématique actuelle ?" />
      <div className="space-y-3">
        {options.map((o) => (
          <OptionButton
            key={o.id}
            selected={value === o.id}
            onClick={() => onSelect(o.id)}
          >
            {o.label}
          </OptionButton>
        ))}
      </div>
    </div>
  );
}

function StepContact({
  contact,
  onChange,
  onSubmit,
}: {
  contact: Contact;
  onChange: (c: Contact) => void;
  onSubmit: () => void;
}) {
  const isValid =
    contact.firstName.trim() &&
    contact.lastName.trim() &&
    contact.email.trim() &&
    contact.phone.trim() &&
    contact.company.trim();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isValid) onSubmit();
      }}
      className="space-y-5"
    >
      <StepHeading title="Vos coordonnées" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          id="firstName"
          label="Prénom"
          required
          value={contact.firstName}
          onChange={(v) => onChange({ ...contact, firstName: v })}
          placeholder="Jean-Pierre"
        />
        <Field
          id="lastName"
          label="Nom"
          required
          value={contact.lastName}
          onChange={(v) => onChange({ ...contact, lastName: v })}
          placeholder="Dupont"
        />
        <Field
          id="email"
          label="Email"
          required
          type="email"
          value={contact.email}
          onChange={(v) => onChange({ ...contact, email: v })}
          placeholder="vous@exemple.com"
        />
        <Field
          id="phone"
          label="Téléphone"
          required
          type="tel"
          value={contact.phone}
          onChange={(v) => onChange({ ...contact, phone: v })}
          placeholder="0692 XX XX XX"
        />
        <Field
          id="company"
          label="Entreprise / Projet"
          required
          value={contact.company}
          onChange={(v) => onChange({ ...contact, company: v })}
          placeholder="Couverture Dupont"
          className="sm:col-span-2"
        />
        <Field
          id="currentSite"
          label="Site actuel (optionnel)"
          value={contact.currentSite}
          onChange={(v) => onChange({ ...contact, currentSite: v })}
          placeholder="www.monsite.re"
          className="sm:col-span-2"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={!isValid}
        className="h-12 w-full text-base"
      >
        Continuer
        <ArrowRight className="ml-1 size-4" />
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  type,
  value,
  onChange,
  placeholder,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
      >
        {label} {required && <span className="text-brand">*</span>}
      </Label>
      <Input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 bg-white/[0.03] text-base"
      />
    </div>
  );
}

function StepBooking({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div className="space-y-5">
      <StepHeading
        title="Choisissez votre créneau"
        subtitle="Appel découverte gratuit avec Maxime"
      />
      <div className="overflow-hidden rounded-xl border border-dashed border-brand/40 bg-white/[0.02]">
        <div className="h-[460px] w-full">
          <CalEmbed />
        </div>
      </div>
      <Button
        type="button"
        size="lg"
        onClick={onConfirm}
        className="h-12 w-full text-base"
      >
        Confirmer mon RDV
        <ArrowRight className="ml-1 size-4" />
      </Button>
    </div>
  );
}
