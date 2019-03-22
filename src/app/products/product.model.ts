export class Product {
  name: string;
  prix: number;
  category: string;
  imagePath: string;

  constructor(name, prix, imagePath, category) {
    this.name = name;
    this.prix = prix;
    this.category = category;
    this.imagePath = imagePath;
  }

}
