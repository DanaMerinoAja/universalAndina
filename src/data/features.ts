import { Bolt, Construction, Drill, Shield, Zap } from 'lucide-astro';
import estructuras_metalicas from 'src/content/blog/images/estructuras_metalicas.jpg';
import mantenimiento from 'src/content/blog/images/mantenimiento_mec_electrico.png';
import maestranza from 'src/content/blog/images/maestranza.jpg';
import sistemas from 'src/content/blog/images/sistemas_neumaticos_hidraulicos.jpg';
import accesorios from 'src/content/blog/images/formateria_corporativa.jpeg';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    image: ImageMetadata;
    link: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                title: 'Mantenimiento mecánico y eléctrico',
                image: mantenimiento,
                link:"/servicios/mantenimiento-mecanico-electrico/"
            },
            {
                icon: Shield,
                title: 'Mantenimiento a sistemas neumáticos e hidráulicos',
                image: sistemas,
                link:"/servicios/mantenimiento-neumaticos/"
            },
            {
                icon: Drill,
                title: 'Fabricación de estructuras metálicas',
                image: estructuras_metalicas,
                link:"/servicios/fabricacion-estructuras-metalicas/"
            },
            {
                icon: Bolt,
                title: 'Maestranza',
                image: maestranza,
                link:"/servicios/maestranza/"
            },
            {
                icon: Construction,
                title: 'Accesorios industriales y formatería corporativa',
                image: accesorios,
                link:"/servicios/venta-accesorios/"
            }
        ]
    }
};
