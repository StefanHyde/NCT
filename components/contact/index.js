export default function Contact() {
    return (
        <div className="w-full p-6 lg:w-2/4  2xl:w-1/4">
            <form
                className="font-poppins"
                name="contact"
                method="post"
            >
                <input type="hidden" name="form-name" value="contact"/>
                <label className="block mb-6">
                    <span className="text-neutrals-1000">Nom & prénom</span>
                    <input
                        type="text"
                        name="nom"
                        className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
                        placeholder="Votre nom et prénom"
                        required
                    />
                </label>
                <label className="block mb-6">
                    <span className="text-neutrals-1000">Adresse mail</span>
                    <input
                        type="email"
                        name="email"
                        className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
                        placeholder="Votre adresse mail"
                        required
                    />
                </label>
                <label className="block mb-6">
                    <span className="text-neutrals-1000">Numéro de téléphone</span>
                    <input
                        type="phone"
                        name="phone"
                        className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
                        placeholder="Votre numéro de téléphone"
                        required
                    />
                </label>

                <label className="block mb-6">
        <span className="text-neutrals-1000"
        >Artiste à contacter</span
        >
                    <select className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light">
                        <option selected disabled>Choisissez</option>
                        <option>Bertrand</option>
                        <option>Eric</option>
                        <option>Jean Baptiste</option>
                        <option>Richard</option>
                    </select>

                </label>


                <label className="block mb-6">
                    <span className="text-neutrals-1000">Votre message</span>
                    <textarea
                        name="message"
                        className="block w-full mt-1 p-2 border border-neutrals-300 rounded-sm focus:border-neutrals-500 placeholder:text-sm font-light"
                        rows="3"
                        placeholder="Votre message"
                    ></textarea>
                </label>
                <div className="mb-6 flex justify-center">
                    <button
                        type="submit"
                        className="flex items-center h-12 p-4 text-white bg-primary-500 rounded-lg text-neutrals-0  hover:bg-primary-600 ease-in-out duration-500"
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    )
}