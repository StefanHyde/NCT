import Link from "next/link";
import {Navbar} from "flowbite-react";
import {Button} from "flowbite-react";

const navLinks = [
    {text: "Le shop", href: "/#shop"},
    {text: "Les artistes", href: "/#artists"},
    {text: "Nos actualités", href: "/actualites"},
]

export default function Nav() {
    return (
        <Navbar
            fluid={true}
            rounded={false}
            className='fixed top-0 w-full h-auto px-0 md:px-8 py-2 bg-neutrals-0 z-50'
        >
            <div className="flex order-2 justify-center md:justify-between w-full md:w-auto text-neutrals-1000">
                <Button
                    className="hidden md:flex bg-secondary-500 text-neutrals-0 rounded-md border-0 hover:bg-secondary-600 ease-in-out duration-500"
                    href="/">
                    Nous contacter
                </Button>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                {navLinks.map((link, index) => {
                        return (
                            <Navbar.Link key={navLinks.id}
                                         href={link.href}
                                         active={true}
                                         className="flex justify-center py-6 text-neutrals-1000 hover:text-secondary-500 ease-in-out duration-300"
                            >
                                {link.text}
                            </Navbar.Link>
                        )
                    }
                )
                }
                <Button
                    className="md:hidden my-4 bg-secondary-500 text-neutrals-0 rounded-none border-none hover:bg-secondary-600 ease-in-out duration-500"
                    href="/">
                    Nous contacter
                </Button>

            </Navbar.Collapse>
        </Navbar>
    )
}