// src/data/menu.ts

export const headerMenu = [
    { name: 'Inicio', link: '/#inicio' },
    { name: 'Nosotros', link: '/#nosotros' },
    { name: 'Servicios', link: '/#servicios', showArrow: true,
        children: [
            { name: 'Mantenimiento mecanico y eléctrico', link: '/servicios/mantenimiento-mecanico-electrico/' },
            { name: 'Mantenimiento a sistemas neumáticos e hidráulicos', link: '/servicios/mantenimiento-neumaticos/' },
            { name: 'Maestranza', link: '/servicios/maestranza/' },
            { name: 'Fabricación de estructuras metálicas', link: '/servicios/fabricacion-estructuras-metalicas/' },
            { name: 'Accesorios industriales y formatería corporativa', link: '/servicios/venta-accesorios/' }
        ] }
];


