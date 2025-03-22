import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import ceyca from '../assets/images/logos/cayca.png';
import geofusion from '../assets/images/logos/geofusion.jpg';
import lazanja from '../assets/images/logos/lazanja.jpg';
import logo_sysmrl from '../assets/images/logos/logo_sysmrl.png';
import maquirent from '../assets/images/logos/maquirent.png';
import newmont from '../assets/images/logos/newmont.png';

export interface Logo {
    src: ImageMetadata;
    alt: string;
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            
            {
                src: logo_sysmrl,
                alt: 'SyMiSRL',
            },
            {
                src: geofusion,
                alt: 'Geofusion',
            },
            {
                src: newmont,
                alt: 'Newmont',
            },
            {
                src: maquirent,
                alt: 'Maquirent',
            },
            {
                src: ceyca,
                alt: 'Ceyca',
            },
            {
                src: lazanja,
                alt: 'La Zanja',
            }
        ]
    }
};
