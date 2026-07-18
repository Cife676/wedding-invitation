import { motion } from "framer-motion";
import { event } from "@/constants/event";
import { useTranslations } from "@/i18n/useTranslations";

export default function Timeline() {
  const { t } = useTranslations();

  return (
    <section className="py-20 sm:py-28 bg-[var(--background)] flex justify-center">
      <div className="w-full max-w-screen-2xl mx-auto px-8">

        <motion.h2
          className="text-5xl text-center mb-20"
          style={{ fontFamily: "var(--font-heading)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t.timeline.title}
        </motion.h2>

        <div className="relative max-w-2xl mx-auto border-l-2 border-[var(--primary)]">

          {event.timeline.map((item, index) => (

            <motion.div
              key={index}
              className="relative pl-10 pb-14"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15
              }}
            >

              <div className="absolute w-5 h-5 rounded-full bg-[var(--primary)] -left-[11px] top-2" />

              <p className="text-sm uppercase tracking-widest text-gray-500">
                {item.time}
              </p>

              <h3 className="text-2xl mt-2">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
