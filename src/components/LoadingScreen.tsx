import { event } from "@/constants/event";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">

        <motion.h1
          className="text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-heading)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {event.groom}
        </motion.h1>

        <motion.p
          className="my-4 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
        >
          &amp;
        </motion.p>

        <motion.h1
          className="text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-heading)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
        >
          {event.bride}
        </motion.h1>

        <motion.p
          className="mt-8 uppercase tracking-[0.35em] text-sm text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .9 }}
        >
          Wedding Invitation
        </motion.p>

      </div>
    </motion.div>
  );
}
