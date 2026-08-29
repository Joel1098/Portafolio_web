import Link from "next/link";

export function Navbar() {
    const links = [

        {name: "Inicio", href: "#inicio"},
        {name: "Resumen", href: "#sobre-mi"},
        {name: "Educación", href: "#educacion"},
        {name: "Habilidades", href: "#habilidades"},
        {name: "Experiencia", href: "#experiencia"},
        {name: "Proyectos", href: "#proyectos"},
        {name: "Contacto", href: "#contacto"},

    ];
    return (
        <nav className="bg-white/90 backdrop-blur-md top-0 fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex space-x-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}