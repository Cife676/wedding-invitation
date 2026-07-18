export interface Translation {
  common: {
    loading: string;
    close: string;
    optional: string;
    required: string;

    buttons: {
      open: string;
      submit: string;
      cancel: string;
    };
  };

  hero: {
    subtitle: string;
    date: string;
  };

  weddingInfo: {
    title: string;

    ceremony: {
      title: string;
    };

    reception: {
      title: string;
    };

    date: string;
    time: string;
    venue: string;
  };

  countdown: {
    title: string;

    labels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };

    finished: string;
  };

  timeline: {
    title: string;

    ceremony: string;
    reception: string;
  };

  venue: {
    title: string;

    address: string;

    buttons: {
      maps: string;
      copy: string;
    };
  };

  rsvp: {
    title: string;

    subtitle: string;

    guest: {
      title: string;

      name: string;
      namePlaceholder: string;

      phone: string;
      phonePlaceholder: string;

      guests: string;

      options: {
        one: string;
        two: string;
      };
    };

    travel: {
      title: string;

      arrival: {
        title: string;
        description: string;

        date: string;
        time: string;

        location: string;
        locationPlaceholder: string;
      };
    };

    special: {
      title: string;
      placeholder: string;
    };

    buttons: {
      submit: string;
      submitting: string;
    };

    dialog: {
      successTitle: string;
      successDescription: string;

      failedTitle: string;
      failedDescription: string;
    };

    validation: {
      requiredName: string;
      requiredPhone: string;
    };
  };
}
