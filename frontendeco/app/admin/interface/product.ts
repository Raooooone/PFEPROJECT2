export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    // Vous pouvez ajouter une propriété image si vous souhaitez l’afficher (par exemple en base64)
    image?: string;
}
