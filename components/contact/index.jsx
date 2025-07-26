import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const { isSubmitting } = formState;

  const getErrorMessage = (message) => {
    switch (message) {
      case "TOO_MANY_REQUESTS":
        return "Trop de tentatives. Veuillez réessayer dans quelques minutes.";
      case "INVALID_PARAMETERS":
        return "Veuillez remplir tous les champs obligatoires.";
      case "EMAIL_SYNTAX_INCORRECT":
        return "L'adresse email n'est pas valide.";
      case "ERROR_WITH_RESEND":
        return "Une erreur est survenue lors de l'envoi. Veuillez réessayer.";
      case "INTERNAL_SERVER_ERROR":
        return "Une erreur interne est survenue. Veuillez réessayer plus tard.";
      default:
        return "Une erreur est survenue. Veuillez réessayer.";
    }
  };

  const onSubmitHandler = async (data) => {
    if (!isLoading) {
      setIsLoading(true);
      setStatus({ type: "", message: "" });

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          setStatus({
            type: "error",
            message: getErrorMessage(result.message),
          });
        } else {
          setStatus({
            type: "success",
            message: "Votre message a bien été envoyé, nous reviendrons vers vous au plus vite 🙂",
          });
          reset();
        }
      } catch (error) {
        setStatus({
          type: "error",
          message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full p-6 lg:w-2/4  2xl:w-1/4">
      <form className="font-poppins" name="contact" onSubmit={handleSubmit(onSubmitHandler)}>
        {status.message && (
          <p className={`p-2 mb-8 rounded-sm ${status.type === "success" ? "bg-primary-200" : "bg-secondary-200"}`}>
            {status.message}
          </p>
        )}

        <label className="block mb-6" htmlFor="name">
          <span className="text-neutrals-1000">Nom & prénom</span>
          <input
            name="name"
            type="text"
            className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
            placeholder="Votre nom et prénom"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-secondary-500 text-xs pt-1">Veuillez renseigner votre nom et / ou prénom</p>
          )}
        </label>

        <label className="block mb-6" htmlFor="email">
          <span className="text-neutrals-1000">Adresse mail</span>
          <input
            name="email"
            type="email"
            className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
            placeholder="Votre adresse mail"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "L'adresse email n'est pas valide",
              },
            })}
          />
          {errors.email && (
            <p className="text-secondary-500 text-xs pt-1">
              {errors.email.message || "Veuillez renseigner votre adresse mail"}
            </p>
          )}
        </label>

        <label className="block mb-6" htmlFor="phone">
          <span className="text-neutrals-1000">Numéro de téléphone</span>
          <input
            name="phone"
            type="text"
            className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
            placeholder="Votre numéro de téléphone"
            {...register("phone", { required: false })}
          />
        </label>

        <label className="block mb-6">
          <span className="text-neutrals-1000">Artiste à contacter</span>
          <select
            className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
            {...register("select", { required: true })}
          >
            <option value="">Sélectionnez un artiste</option>
            <option>Erico</option>
            <option>UncleHo</option>
            <option>JBMaglia</option>
            <option>JOC</option>
          </select>
          {errors.select && <p className="text-secondary-500 text-xs pt-1">Veuillez sélectionner un artiste</p>}
        </label>

        <label className="block mb-6" htmlFor="message">
          <span className="text-neutrals-1000">Votre message</span>
          <textarea
            name="message"
            className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
            rows="8"
            placeholder="Votre message"
            {...register("contenu", { required: true })}
          ></textarea>
          {errors.contenu && <p className="text-secondary-500 text-xs pt-1">Veuillez renseigner votre message</p>}
        </label>

        <Controller
          name="rgpd"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={({ field }) => (
            <label className="flex pb-4">
              <input type="checkbox" className="w-4 h-4" {...field} />
              <Link href={"/rgpd"} className="ml-2 font-light text-neutrals-1000 text-xs hover:underline">
                J'accepte les conditions générales et la politique de confidentialité
              </Link>
            </label>
          )}
        />
        {errors.rgpd && <p className="text-secondary-500 text-xs pb-4">Veuillez accepter les conditions générales</p>}

        <div className="mb-6 flex justify-center">
          <button
            type="submit"
            disabled={!formState.isValid || isSubmitting || isLoading}
            className={`flex items-center h-12 p-4 text-white bg-primary-500 rounded-lg text-neutrals-0 hover:bg-primary-600 ease-in-out duration-500 ${!formState.isValid || isSubmitting || isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isLoading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </div>
      </form>
    </div>
  );
}
