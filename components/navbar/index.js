import Link from "next/link";
import {Navbar} from "flowbite-react";
import {Button} from "flowbite-react";

const menuList = [
    {text: "Le shop", href: "/"},
    {text: "Les artistes", href: "/artistes"},
    {text: "Nos actualités", href: "/actualites"},
]

export default function Nav () {
    return (
        <Navbar
            fluid={true}
            rounded={false}
            className='fixed top-0  w-full bg-neutrals-0 -z-50'
        >
            <div className="flex md:order-2">
                <Button>
                    Get started
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Le Shop
                </Navbar.Link>
                <Navbar.Link href="/">
                    Les Artistes
                </Navbar.Link>
                <Navbar.Link href="/">
                    Nos Actutalités
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}