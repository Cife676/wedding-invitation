import { event } from "@/constants/event";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/useTranslations";

export default function Hero() {
  const { t } = useTranslations();

  return (
    <section className="relative h-screen overflow-hidden">

      <img
        src="/images/hero.jpg"
        alt="Wedding"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >

        <p className="uppercase tracking-[0.4em] text-sm">
          {t.hero.subtitle}
        </p>

        <h1
          className="mt-8 text-7xl md:text-9xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {event.groom}
        </h1>

        <p className="my-5 text-4xl">
          &amp;
        </p>

        <h1
          className="text-7xl md:text-9xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {event.bride}
        </h1>

        <p className="mt-10 text-xl">
          {event.ceremony.date}
        </p>

      </motion.div>

    </section>
  );
}
