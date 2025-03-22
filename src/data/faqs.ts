export interface FaqItem {
    question: string;
    answer: string | string[];
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Misión",
                answer: "Brindar soluciones fiables a nuestros clientes mediante servicios de mantenimiento mecánico de equipos de sistema de bombeo y componentes de engrase y herramientas a nivel nacional, basados en la eficiencia, seguridad y personal altamente calificado y motivado."
            },
            {
                question: "Vision",
                answer: "Ser reconocidos como la mejor opción por la excelencia de nuestros servicios (2024-2026)."
            },
            {
                question: "Valores",
                answer: [
                    "Cumplimiento colaborativo",
                    "Responsabilidad",
                    "Integridad"
                ]
            },            
            {
                question:"Objetivos",
                answer:"La preferencia de nuestros clientes ha posibilitado nuestro rápido posicionamiento en el mercado regional, es en este sentido que nuestro principal objetivo se centra en seguir brindado servicios de calidad, mantener la mejora continua de nuestros procesos y promover así el desarrollo de  oportunidades en nuestra región."
            }
        ]
    }
};
