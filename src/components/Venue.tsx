import { motion } from "framer-motion";
import { LuMapPin, LuCar } from "react-icons/lu";
import { event } from "@/constants/event";
import { useTranslations } from "@/i18n/useTranslations";

export default function Venue() {
  const { t } = useTranslations();

  return (
    <section className="bg-[var(--surface)] flex justify-center w-full">
      <div 
        className="w-full max-w-4xl section-container"
        style={{ paddingTop: "40px", paddingBottom: "80px" }}
      >

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl text-center"
          style={{ fontFamily: "var(--font-heading)", marginBottom: "40px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t.venue.title}
        </motion.h2>

        <div className="flex flex-col gap-8">
          
          <motion.div 
            className="rounded-3xl bg-white shadow-xl flex flex-col items-center text-center border border-neutral-100"
            style={{ padding: "24px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6">
              <LuMapPin size={28} className="text-[var(--primary)]" />
            </div>
            
            <h3 className="text-3xl font-semibold leading-tight text-[var(--text)]">
              {event.venue.name}
            </h3>
            
            <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
              {event.venue.address}
            </p>



            <div className="mt-8 pt-8 border-t border-gray-100 w-full flex justify-center">
              <div className="flex gap-3 items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <LuCar size={20} className="text-gray-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xs text-gray-400 uppercase tracking-wider">
                    Parking Info
                  </h4>
                  <p className="text-[var(--text)] text-sm font-medium">
                    {event.venue.parking ? "Parking Area Available" : "No Parking Available"}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Google Maps Embed */}
          <motion.div 
            className="rounded-3xl bg-white shadow-xl p-3 border border-neutral-100 h-[300px] sm:h-[400px] overflow-hidden flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7915509930777!2d112.6750553!3d-7.6367848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d94fd6467f11%3A0xdd7d92e1b69e114a!2sGrand%20Mulia%20Sakinah!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="rounded-2xl w-full h-full flex-grow shadow-inner"
            ></iframe>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
