import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "@/i18n/useTranslations";

type FormData = {
  name: string;
  phone: string;
  guests: number;
  arrivalDate: string;
  arrivalTime: string;
  arrivalLocation: string;
  specialRequest: string;
};

type SubmitStatus = "idle" | "success" | "error";

export default function RSVPForm() {
  const { t } = useTranslations();

  const [selectedGuests, setSelectedGuests] = useState(1);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      guests: 1,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      if (!scriptUrl) {
        console.warn("VITE_GOOGLE_SCRIPT_URL is not configured");
        setSubmitStatus("error");
        return;
      }

      // Google Apps Script requires no-cors + URLSearchParams to avoid CORS errors.
      // The response will be opaque (status 0), so we treat a resolved fetch as success.
      const params = new URLSearchParams();
      params.append("name", data.name);
      params.append("phone", data.phone);
      params.append("guests", String(data.guests));
      params.append("arrivalDate", data.arrivalDate || "");
      params.append("arrivalTime", data.arrivalTime || "");
      params.append("arrivalLocation", data.arrivalLocation || "");
      params.append("specialRequest", data.specialRequest || "");

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });

      setSubmitStatus("success");
      reset();
      setSelectedGuests(1);
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section className="bg-[var(--background)] flex justify-center w-full">
      <div 
        className="mx-auto w-full max-w-3xl section-container"
        style={{ paddingTop: "40px", paddingBottom: "80px" }}
      >

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.rsvp.title}
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            {t.rsvp.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
          style={{ marginTop: "40px" }}
        >

          {/* Guest Information */}
          <div 
            className="rounded-3xl bg-white border border-neutral-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{ padding: "24px" }}
          >
            <h3 className="mb-8 text-xl font-semibold text-[var(--text)] tracking-tight">
              {t.rsvp.guest.title}
            </h3>

            <div className="flex flex-col gap-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t.rsvp.guest.name}
                </label>

                <input
                  {...register("name", {
                    required: t.rsvp.validation.requiredName,
                  })}
                  placeholder={t.rsvp.guest.namePlaceholder}
                  className="w-full rounded-xl border border-neutral-200 p-4 text-[var(--text)] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-200"
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t.rsvp.guest.phone}
                </label>

                <input
                  {...register("phone", {
                    required: t.rsvp.validation.requiredPhone,
                  })}
                  placeholder={t.rsvp.guest.phonePlaceholder}
                  className="w-full rounded-xl border border-neutral-200 p-4 text-[var(--text)] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-200"
                />

                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500 font-medium">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Guests */}
          <div 
            className="rounded-3xl bg-white border border-neutral-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{ padding: "24px" }}
          >
            <h3 className="mb-8 text-xl font-semibold text-[var(--text)] tracking-tight">
              {t.rsvp.guest.guests}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedGuests(1);
                  setValue("guests", 1);
                }}
                className={`rounded-2xl border p-4 font-medium transition-all duration-300 hover:scale-[1.02] ${
                  selectedGuests === 1
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20"
                    : "border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50"
                }`}
              >
                {t.rsvp.guest.options.one}
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedGuests(2);
                  setValue("guests", 2);
                }}
                className={`rounded-2xl border p-4 font-medium transition-all duration-300 hover:scale-[1.02] ${
                  selectedGuests === 2
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20"
                    : "border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50"
                }`}
              >
                {t.rsvp.guest.options.two}
              </button>
            </div>
          </div>

          {/* Travel */}
          <div 
            className="rounded-3xl bg-white border border-neutral-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{ padding: "24px" }}
          >
            <h3 className="mb-3 text-xl font-semibold text-[var(--text)] tracking-tight">
              {t.rsvp.travel.title}
            </h3>

            <p className="mb-8 text-sm text-neutral-500 leading-relaxed">
              {t.rsvp.travel.arrival.description}
            </p>

            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t.rsvp.travel.arrival.date}
                </label>

                <input
                  type="date"
                  {...register("arrivalDate")}
                  className="w-full rounded-xl border border-neutral-200 p-4 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t.rsvp.travel.arrival.time}
                </label>

                <input
                  type="time"
                  {...register("arrivalTime")}
                  className="w-full rounded-xl border border-neutral-200 p-4 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-200"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t.rsvp.travel.arrival.location}
                </label>

                <input
                  type="text"
                  {...register("arrivalLocation")}
                  placeholder={t.rsvp.travel.arrival.locationPlaceholder}
                  className="w-full rounded-xl border border-neutral-200 p-4 text-[var(--text)] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Special Request */}
          <div 
            className="rounded-3xl bg-white border border-neutral-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{ padding: "24px" }}
          >
            <h3 className="mb-6 text-xl font-semibold text-[var(--text)] tracking-tight">
              {t.rsvp.special.title}
            </h3>

            <textarea
              rows={4}
              {...register("specialRequest")}
              placeholder={t.rsvp.special.placeholder}
              className="w-full rounded-xl border border-neutral-200 p-4 text-[var(--text)] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-[var(--primary)] py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[var(--text)] hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 shadow-md shadow-[var(--primary)]/20"
          >
            {isSubmitting
              ? t.rsvp.buttons.submitting
              : t.rsvp.buttons.submit}
          </button>

          {/* Success Banner */}
          {submitStatus === "success" && (
            <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-6 py-4 text-green-700 shadow-sm">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-semibold">{t.rsvp.dialog.successDescription}</p>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {submitStatus === "error" && (
            <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-red-700 shadow-sm">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold">{t.rsvp.dialog.failedDescription}</p>
              </div>
            </div>
          )}

        </form>


      </div>
    </section>
  );
}
