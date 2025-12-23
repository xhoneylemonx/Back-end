import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity'; 

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Camping Tent - 2 Person', price: 129.99, description: 'Lightweight 2-person dome tent with waterproof rainfly.' },
    { id: 2, name: 'Sleeping Bag - 3°C', price: 79.5, description: 'Mummy-style sleeping bag rated to 3 degrees Celsius.' },
    { id: 3, name: 'Camping Stove - Portable', price: 49.0, description: 'Compact single-burner stove, easy to pack and use.' },
    { id: 4, name: 'Camping Lantern - LED', price: 24.99, description: 'Battery-powered LED lantern with adjustable brightness.' },
    { id: 5, name: 'Hiking Backpack - 40L', price: 99.0, description: 'Durable 40L backpack with raincover and multiple pockets.' },
    { id: 6, name: 'Camping Chair - Foldable', price: 34.75, description: 'Lightweight foldable chair with carrying bag.' },
    { id: 7, name: 'Camping Cookware Set', price: 39.99, description: 'Nestable pots and pans set for 2-3 people.' },
    { id: 8, name: 'Water Filter - Straw', price: 19.95, description: 'Portable water filter straw for emergency purification.' },
    { id: 9, name: 'Camping Hammock', price: 29.99, description: 'Lightweight nylon hammock with straps included.' },
    { id: 10, name: 'Camping Multi-Tool', price: 22.5, description: 'Compact multi-tool with knife, pliers, and screwdriver bits.' }
  ];

   create(createProductDto: CreateProductDto) { 

    const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1; 

     
    const newProduct: Product = { 

      id: newId, 

      ...createProductDto, // นำข้อมูลจาก DTO (name, price, description) มาใส่เลย 
      description: createProductDto.description ?? '',

    }; 

 

    this.products.push(newProduct); 

    return newProduct; 

  } 

 

  findAll() { 

    // return `This action returns all products`; 

    return this.products; 

  } 

 

  findOne(id: number) { 

    return this.products.find(product => product.id === id); 

  } 

 

  update(id: number, updateProductDto: UpdateProductDto) { 

    const productIndex = this.products.findIndex(product => product.id === id); 

    if (productIndex !== -1) { 

      const updatedProduct = { 

        ...this.products[productIndex], 

        ...updateProductDto, 

      }; 

      this.products[productIndex] = updatedProduct; 

      return updatedProduct; 

    } 

    return null; 

  } 

 

  remove(id: number) { 

    const productIndex = this.products.findIndex(product => product.id === id); 

    if (productIndex !== -1) { 

      this.products.splice(productIndex, 1); 

      return { deleted: true }; 

    } 

    return { deleted: false }; 
  } 
}
