import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import WeddingInfo from "@/components/WeddingInfo";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import RSVPForm from "@/components/RSVP/RSVPForm";
import InvitationCover from "@/components/InvitationCover";
import LoadingScreen from "@/components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!opened) {
    return (
      <InvitationCover
        onOpen={() => setOpened(true)}
      />
    );
  }

  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <WeddingInfo />
        <Countdown />
        <Venue />
        <RSVPForm />
      </div>
    </>
  );
}
