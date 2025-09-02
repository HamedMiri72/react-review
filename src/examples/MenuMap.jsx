import React from 'react'

export default function MenuMap() {

    const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Contact", href: "/contact" },
    ];

  return (
    <nav>

        <ul>
            {links.map((link) => (
                <li key={link.id}>
                    <a href={link.href}>{link.name}</a>
                </li>
            ))}
        </ul>

    </nav>
  )
}
