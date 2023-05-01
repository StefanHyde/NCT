import {useForm} from "react-hook-form";
import {useState} from "react";

export default function Contact() {
    const {register, handleSubmit,reset, formState: {errors},} = useForm()

    const [isLoading, setIsLoading] = useState(false);
    const [isSended, setIsSended] = useState(false);
    const onSubmitHandler = async (data) => {
       if(!isLoading) {
           setIsLoading(true);
           const response = await fetch("/api/contact", {
               method: 'POST',
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify(data),
           });

           const result = await response.json();

           setIsLoading(false);

           if (!response.ok) {
               console.log("error");
           } else {
               console.log("ok");
               reset();
               setIsSended(true);
           }
       }
    }
    return (
        <div className="w-full p-6 lg:w-2/4  2xl:w-1/4">
            <form
                className="font-poppins"
                name="contact"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                {isSended && <p className="p-2 mb-8 bg-primary-200 rounded-sm">Votre message a bien été envoyé, nous reviendrons vers vous au plus vite 🙂</p>}

                <label className="block mb-6" htmlFor="name">
                    <span className="text-neutrals-1000">Nom & prénom</span>
                    <input
                        name="name"
                        type="text"
                        className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
                        placeholder="Votre nom et prénom"
                        {...register('name', {required: true})}
                    />
                    {errors.name && <p className="text-secondary-500 text-xs pt-1">Veuillez renseigner votre nom et / ou prénom</p>}
                </label>

                <label className="block mb-6" htmlFor="email">
                    <span className="text-neutrals-1000">Adresse mail</span>
                    <input
                        name="email"
                        type="text"
                        className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
                        placeholder="Votre adresse mail"
                        {...register('email', {required: true})}
                    />
                    {errors.email && <p className="text-secondary-500 text-xs pt-1">Veuillez renseigner votre adresse mail</p>}
                </label>
                <label className="block mb-6" htmlFor="phone">
                    <span className="text-neutrals-1000">Numéro de téléphone</span>
                    <input
                        name="phone"
                        type="text"
                        className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
                        placeholder="Votre numéro de téléphone"
                        {...register('phone', {required: false})}
                    />
                </label>

                <label className="block mb-6">
        <span className="text-neutrals-1000"
        >Artiste à contacter</span
        >
                    <select
                        className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
                        {...register('select', {required: true})}>
                        <option>Erico</option>
                        <option>UncleHo</option>
                        <option>JBMaglia</option>
                        <option>Vert de Gris</option>
                    </select>
                    {errors.select && <p className="text-secondary-500 text-xs pt-1">Veuillez sélectionner un artiste</p>}
                </label>


                <label className="block mb-6" htmlFor="message">
                    <span className="text-neutrals-1000">Votre message</span>
                    <textarea
                        name="message"
                        className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
                        rows="3"
                        placeholder="Votre message"
                        {...register('contenu', {required: true})}
                    ></textarea>
                    {errors.message && <p className="text-secondary-500 text-xs pt-1">Veuillez renseigner votre message</p>}
                </label>
                <div className="mb-6 flex justify-center">
                    {!isLoading && <button
                        type="submit"
                        className="flex items-center h-12 p-4 text-white bg-primary-500 rounded-lg text-neutrals-0  hover:bg-primary-600 ease-in-out duration-500"
                    >
                        Envoyer
                    </button>}
                </div>
            </form>
        </div>
    )
}