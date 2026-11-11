import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { CONTACT_EMAIL, WEB3FORMS_ACCESS_KEY } from "../config";

const interestOptions = ["Ver una demostración", "Seguir el avance del proyecto", "Colaborar o invertir", "Otro"];

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-[#d8eee5] bg-white px-4 py-3 text-[#0b1f15] placeholder:text-[#7ba38e] transition-colors focus:border-[#0b7a4f] focus:outline-none focus:ring-2 focus:ring-[#0b7a4f]/20";

export function InterestForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Croak: ${data.interes}`,
          from_name: "Landing Croak",
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center text-[#0b1f15] shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[#16a36c]" aria-hidden="true" />
        <p className="mt-4 text-xl font-bold">Mensaje enviado</p>
        <p className="mt-2 text-sm text-[#436856]">Gracias por tu interés. El equipo te responderá por correo.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl bg-white p-6 text-left text-[#0b1f15] shadow-[0_8px_40px_rgba(0,0,0,0.15)] sm:grid-cols-2 sm:p-8"
    >
      {/* Honeypot anti-spam de Web3Forms */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="grid gap-1.5 text-sm font-semibold">
        Nombre
        <input name="nombre" required autoComplete="name" className={fieldClass} placeholder="Tu nombre" />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Correo
        <input name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="tu@correo.com" />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
        Me interesa
        <select name="interes" required defaultValue={interestOptions[0]} className={fieldClass}>
          {interestOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
        Mensaje <span className="font-normal text-[#7ba38e]">(opcional)</span>
        <textarea name="mensaje" rows={3} className={`${fieldClass} resize-none`} placeholder="Cuéntanos un poco más" />
      </label>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#7ba38e]" role="status">
          {status === "error" ? (
            <span className="text-[#dc2626]">
              No se pudo enviar. Intenta de nuevo o escríbenos a {CONTACT_EMAIL}.
            </span>
          ) : (
            "Solo usaremos tu correo para responderte."
          )}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#0b7a4f] px-6 py-4 font-bold text-white shadow-[0_4px_16px_rgba(11,122,79,0.25)] transition-[transform,box-shadow,background-color] duration-200 hover:bg-[#096941] active:scale-[0.97] disabled:cursor-wait disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
        >
          {status === "sending" ? (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          ) : (
            <>
              Quiero saber más
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
