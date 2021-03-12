export interface IProductoForm {
    name: string;
    price: {
      unit: number;
      discount:number;
    };
    description: string;
    status: boolean;

  }
  