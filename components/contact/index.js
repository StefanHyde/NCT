export default function Contact() {
    return (
        <div className="w-full p-6 lg:w-2/4  2xl:w-1/4">
            <form
                className="my-6"
                name="contact"
                method="post"
            >
                <input type="hidden" name="form-name" value="contact"/>
                <label className="block mb-6">
                    <span className="text-neutrals-1000">Nom et prénom</span>
                    <input
                        type="text"
                        name="nom"
                        className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
                        placeholder="Votre nom et prénom"
                        required
                    />
                </label>
                <label className="block mb-6">
                    <span className="text-neutrals-1000">Adresse mail</span>
                    <input
                        type="email"
                        name="email"
                        className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
                        placeholder="Votre adresse mail"
                        required
                    />
                </label>
                <label className="block mb-6">
                    <span className="text-neutrals-1000">Numéro de téléphone</span>
                    <input
                        type="phone"
                        name="phone"
                        className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
                        placeholder="Votre numéro de téléphone"
                        required
                    />
                </label>

                <label className="block mb-6">
        <span className="text-neutrals-1000"
        >Artiste à contacter</span
        >
                    <select className="block w-full mt-1 p-2">
                        <option disabled value="">Choisissez</option>
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
                        className="block w-full h-28 mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
                        rows="3"
                        placeholder="Votre message"
                    ></textarea>
                </label>
                <div className="mb-6 flex justify-center md:justify-start">
                    <button
                        type="submit"
                        className="flex items-center h-12 p-4 text-white bg-darkPurple-500 rounded-lg hover:shadow-lg hover:shadow-darkPurple-400/40 hover:bg-darkPurple-400 ease-in-out duration-500"
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    )
}