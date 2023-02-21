import Link from "next/link";
import {Navbar} from "flowbite-react";
import {Button} from "flowbite-react";

const navLinks = [
    {text: "Le shop", href: "/"},
    {text: "Les artistes", href: "/artistes"},
    {text: "Nos actualités", href: "/actualites"},
]

export default function Nav() {
    return (
        <Navbar
            fluid={true}
            rounded={false}
            className='fixed top-0 w-full h-16 md:px-8 py-2 bg-neutrals-0 z-50'
        >
            <div className="flex order-2 text-neutrals-1000">
            TODO: change btn link
                <Button className="bg-secondary-500 text-neutrals-0 rounded-md border-0">
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
                            className="text-neutrals-1000 hover:text-secondary-500"
                        >
                            {link.text}
                        </Navbar.Link>
                    )
                    }
                )
                }

            </Navbar.Collapse>
        </Navbar>
    )
}