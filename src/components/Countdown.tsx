import { event } from "@/constants/event";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { useTranslations } from "@/i18n/useTranslations";

export default function Countdown() {
  const { t } = useTranslations();

  const { days, hours, minutes, seconds } = useCountdown(
     new Date(`${event.date}T18:00:00+07:00`)
  );

  const items = [
    { label: t.countdown.labels.days, value: days },
    { label: t.countdown.labels.hours, value: hours },
    { label: t.countdown.labels.minutes, value: minutes },
    { label: t.countdown.labels.seconds, value: seconds },
  ];

  return (
    <section className="bg-[var(--background)] flex justify-center w-full">
      <div 
        className="w-full max-w-screen-2xl section-container"
        style={{ paddingTop: "40px", paddingBottom: "80px" }}
      >

        <motion.h2
          className="text-4xl sm:text-6xl text-center"
          style={{ fontFamily: "var(--font-heading)", marginBottom: "40px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {t.countdown.title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          {items.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-white shadow-md text-center"
              style={{ padding: "16px" }}
            >
              <h3 className="text-4xl sm:text-5xl font-bold">
                {String(item.value).padStart(2, "0")}
              </h3>

              <p className="mt-4 uppercase tracking-wider sm:tracking-widest text-xs sm:text-sm text-gray-500">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
