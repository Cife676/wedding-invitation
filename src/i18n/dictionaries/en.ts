import type { Translation } from "@/i18n/schema";

const en: Translation = {
  common: {
    loading: "Loading...",
    close: "Close",
    optional: "Optional",
    required: "Required",

    buttons: {
      open: "Open",
      submit: "Submit",
      cancel: "Cancel",
    },
  },

  hero: {
    subtitle: "Marriage After Party",
    date: "July 26th, 2026",
  },

  weddingInfo: {
    title: "Wedding Information",

    ceremony: {
      title: "Holy Matrimony",
    },

    reception: {
      title: "Wedding Reception",
    },

    date: "Date",
    time: "Time",
    venue: "Venue",
  },

  countdown: {
    title: "Counting Down",

    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },

    finished: "The Wedding Day Has Arrived",
  },

  timeline: {
    title: "Wedding Schedule",

    ceremony: "Holy Matrimony",

    reception: "Wedding Reception",
  },

  venue: {
    title: "Venue",

    address: "Address",

    buttons: {
      maps: "Open in Google Maps",
      copy: "Copy Address",
    },
  },

  rsvp: {
    title: "RSVP",

    subtitle:
      "We would be delighted to celebrate this special occasion with you.",

    guest: {
      title: "Guest Information",

      name: "Full Name",

      namePlaceholder: "Please enter your full name",

      phone: "WhatsApp Number",

      phonePlaceholder: "+62 812 3456 7890",

      guests: "Number of Guests",

      options: {
        one: "1 Guest",
        two: "2 Guests",
      },
    },

    travel: {
      title: "Travel Information",

      arrival: {
        location: "Arrival Location",

        locationPlaceholder: "E.g. Pasar Turi Train Station",
        title: "",

        description:
          "If you are traveling from outside Surabaya, please let us know your estimated arrival date and time at surabaya. Transport & accommodation will be provided.",

        date: "Arrival Date",

        time: "Arrival Time",
      },
    },

    special: {
      title: "Special Requests",

      placeholder:
        "Dietary requirements, or any other requests...",
    },

    buttons: {
      submit: "Submit RSVP",

      submitting: "Submitting...",
    },

    dialog: {
      successTitle: "Thank You!",

      successDescription:
        "Your RSVP has been submitted successfully.",

      failedTitle: "Submission Failed",

      failedDescription:
        "Something went wrong. Please try again.",
    },

    validation: {
      requiredName:
        "Please enter your full name.",

      requiredPhone:
        "Please enter your WhatsApp number.",
    },
  },
};

export default en;
