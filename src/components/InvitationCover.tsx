import { event } from "@/constants/event";
import { motion } from "framer-motion";

interface Props {
  onOpen: () => void;
}

export default function InvitationCover({
  onOpen,
}: Props) {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-(--background)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-xl px-8">

        <h1
          className="mt-6 text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {event.groom}
        </h1>

        <p className="text-3xl my-4">&amp;</p>

        <h1
          className="text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {event.bride}
        </h1>

        <p className="mt-10 text-lg leading-8 text-neutral-600">
          Together with our beloved family,
          <br />
          we warmly invite you to our
          <br />
          marriage after party
        </p>

        <button
          onClick={onOpen}
          className="
            mt-12
            inline-flex
            items-center
            justify-center
            min-w-[160px]
            h-12
            rounded-full
            bg-[var(--primary)]
            text-lg
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Open Invitation
        </button>

      </div>
    </motion.section>
  );
}
