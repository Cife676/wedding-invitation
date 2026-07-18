import { event } from "@/constants/event";
import { motion } from "framer-motion";
import { LuMapPin, LuCalendarDays, LuClock3 } from "react-icons/lu";
import { useTranslations } from "@/i18n/useTranslations";

export default function WeddingInfo() {
  const { t } = useTranslations();
  
  return (
    <section className="bg-[var(--surface)] flex justify-center w-full">

      <div 
        className="w-full max-w-screen-2xl section-container"
        style={{ paddingTop: "40px", paddingBottom: "80px" }}
      >

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl text-center"
          style={{ fontFamily: "var(--font-heading)", marginBottom: "40px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {t.weddingInfo.title}
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-4xl mx-auto">

          <motion.div
            whileHover={{ y: -5 }}
            className="flex-1 rounded-3xl bg-white shadow-lg text-center flex flex-col items-center justify-center min-h-[220px]"
            style={{ padding: "24px" }}
          >

            <LuCalendarDays className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary)]" />

            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold">
              {t.weddingInfo.date}
            </h3>

            <p className="mt-4 text-lg text-gray-600">
              {event.ceremony.date}
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="flex-1 rounded-3xl bg-white shadow-lg text-center flex flex-col items-center justify-center min-h-[220px]"
            style={{ padding: "24px" }}
          >

            <LuClock3 className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary)]"/>

            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold">
              {t.weddingInfo.time}
            </h3>

            <p className="mt-4 text-lg text-gray-600">
              18:00 - 20:30 WIB
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
