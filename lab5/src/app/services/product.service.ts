import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 1,
      name: 'Samsung Galaxy A15',
      description: 'Смартфон среднего уровня с 6.5-дюймовым дисплеем и аккумулятором на 5000 мАч.',
      price: 175000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h13/84979481149470.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a15-116091154/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Apple iPhone 15',
      description: 'Флагманский смартфон Apple с мощным чипом A17 Pro и улучшенной камерой.',
      price: 389219,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-113137790/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13',
      description: 'Бюджетный смартфон с хорошей камерой и большим экраном 6.67 дюйма.',
      price: 129999,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h60/84594597199902.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-112334627/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 4,
      name: 'OnePlus 12',
      description: 'Мощный смартфон с процессором Snapdragon 8 Gen 3 и быстрой зарядкой 100W.',
      price: 299999,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hac/h87/84894527946782.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/oneplus-12-115987654/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 5,
      name: 'OPPO A58',
      description: 'Стильный смартфон с 6.72-дюймовым экраном и батареей 5000 мАч.',
      price: 149999,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h78/h42/84112334567890.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/oppo-a58-114567890/',
      categoryId: 1,
      likes: 0
    },
    // Laptops (categoryId: 2)
    {
      id: 6,
      name: 'MacBook Air M2',
      description: 'Ультратонкий ноутбук Apple с чипом M2, 8GB ОЗУ и 256GB SSD.',
      price: 589999,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h47/84334567890123.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-115234567/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'ASUS VivoBook 15',
      description: 'Ноутбук с процессором Intel Core i5, 8GB ОЗУ и IPS дисплеем.',
      price: 279999,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h78/84567890123456.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-114234567/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'Lenovo ThinkPad E15',
      description: 'Надежный деловой ноутбук с быстрым процессором и хорошей батареей.',
      price: 349999,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/h78/84678901234567.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-e15-114345678/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'HP Pavilion 15',
      description: 'Универсальный ноутбук для работы и развлечений с Ryzen 5 и SSD.',
      price: 309999,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/h89/84789012345678.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-114456789/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'Dell Inspiron 14',
      description: 'Компактный ноутбук с процессором Intel и экраном Full HD 14 дюймов.',
      price: 289999,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h90/84890123456789.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dell-inspiron-14-114567890/',
      categoryId: 2,
      likes: 0
    },
    // Headphones (categoryId: 3)
    {
      id: 11,
      name: 'Sony WH-CH720N',
      description: 'Беспроводные наушники с активным шумоподавлением и 35-часовой батареей.',
      price: 44899,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/heb/84717301956638.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sony-wh-ch720n-113456789/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Apple AirPods Pro',
      description: 'Премиум беспроводные наушники с шумоподавлением и пространственным звуком.',
      price: 99999,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h78/84901234567890.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-114678901/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'JBL Tune 770NC',
      description: 'Легкие беспроводные наушники с активным шумоподавлением и комфортной посадкой.',
      price: 37999,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h89/84012345678901.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/jbl-tune-770nc-114789012/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'Soundcore Space A40',
      description: 'Компактные наушники с LDAC кодеком и активным шумоподавлением.',
      price: 34999,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h78/h90/84123456789012.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/soundcore-space-a40-114890123/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 15,
      name: 'Beats Studio Pro',
      description: 'Профессиональные наушники с прозрачным режимом и долгой батареей.',
      price: 129999,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h01/84234567890123.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/beats-studio-pro-114901234/',
      categoryId: 3,
      likes: 0
    },
    // Tablets (categoryId: 4)
    {
      id: 16,
      name: 'Apple iPad Pro 12.9',
      description: 'Мощный планшет с чипом M2, экраном Liquid Retina XDR и поддержкой Apple Pencil.',
      price: 549999,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/h12/84345678901234.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-115012345/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9',
      description: 'Флагманский планшет с экраном AMOLED, процессором Snapdragon 8 Gen 2.',
      price: 349999,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha1/h23/84456789012345.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-114123456/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Lenovo Tab P12',
      description: 'Бюджетный планшет с 12-дюймовым экраном и хорошей производительностью.',
      price: 159999,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h34/84567890123456.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-114234567/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'Xiaomi Pad 6',
      description: 'Планшет с 11-дюймовым дисплеем, Snapdragon 870 и батареей 10100 мАч.',
      price: 179999,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc3/h45/84678901234567.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-114345678/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 20,
      name: 'iPad 10th Generation',
      description: 'Доступный планшет Apple с процессором A14 и 10.9-дюймовым дисплеем.',
      price: 249999,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h56/84789012345678.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-114456789/',
      categoryId: 4,
      likes: 0
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }
}
