import { CodeXml, Coffee, Heart, Shield, Smile, TabletSmartphone, Type, Zap } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
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
                description: '',
                link:"/servicios/mantenimiento-mecanico-electrico/"
            },
            {
                icon: Shield,
                title: 'Mantenimiento a sistemas neumáticos e hidráulicos',
                description: '',
                link:"/servicios/mantenimiento-neumaticos/"
            },
            {
                icon: TabletSmartphone,
                title: 'Fabricación de estructuras metálicas',
                description: '',
                link:"/servicios/fabricacion-estructuras-metalicas/"
            },
            {
                icon: Smile,
                title: 'Maestranza',
                description: '',
                link:"/servicios/maestranza/"
            },
            {
                icon: Smile,
                title: 'Accesorios industriales y formatería corporativa',
                description: '',
                link:"/servicios/venta-accesorios/"
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail',
                link:""
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements',
                link:""
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use',
                link:""
            }
        ]
    }
};
