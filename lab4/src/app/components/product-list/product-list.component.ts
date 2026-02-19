import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy A15',
      description: 'Смартфон среднего уровня с 6.5-дюймовым дисплеем и аккумулятором на 5000 мАч. Обеспечивает хорошую производительность для повседневных задач и фотографирования.',
      price: 175000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h13/84979481149470.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/h13/84979481149470.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h58/84979481346078.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/ha2/84979481215006.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a15-8-gb-256-gb-temno-sinii-116091154/?c=750000000'
    },
    {
      id: 2,
      name: 'Apple iPhone 15',
      description: 'Флагманский смартфон Apple с мощным чипом A17 Pro и улучшенной камерой. Поддерживает быструю зарядку и имеет прочное защитное стекло Ceramic Shield.',
      price: 389219,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 3,
      name: 'Sony WH-CH720N',
      description: 'Беспроводные наушники с активным шумоподавлением и временем работы до 35 часов. Компактный дизайн и удобное управление сенсорными элементами управления.',
      price: 44899,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/heb/84717301956638.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h43/heb/84717301956638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h54/84717302022174.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h43/84717302087710.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-ch720n-chernyi-110128274/?c=750000000'
    },
    {
      id: 4,
      name: 'Samsung 65" QLED TV',
      description: 'Телевизор с квантовыми точками QLED обеспечивающий яркость и насыщенность цветов. Поддерживает технологии 4K HDR и Smart TV с встроенным браузером.',
      price: 498590,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p51/62898898.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p51/62898898.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pe3/p50/62898899.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcc/p06/62898900.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-qe65q7faauxce-165-sm-chernyi-145236490/?c=750000000'
    },
    {
      id: 5,
      name: 'Dell XPS 13 Laptop',
      description: 'Ультрабук с процессором Intel Core i7 и SSD емкостью 512 ГБ. Весит менее 1.3 кг, идеален для работы в дороге с отличной производительностью и долгой автономностью.',
      price: 1267317,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p2c/43905749.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p2c/43905749.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p15/p77/43905750.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/p7a/43905751.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-13-9345-13-4-16-gb-ssd-512-gb-win-11-210-bmtr-140113298/?c=750000000'
    },
    {
      id: 6,
      name: 'Xiaomi Mi Band 8',
      description: 'Фитнес-браслет с AMOLED дисплеем и мониторингом сердечного ритма. Водостойкий, поддерживает 150+ спортивных режимов и имеет время работы до 21 дня.',
      price: 19900,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/hd8/87189486895134.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hd8/87189486895134.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/he8/80568911462430.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/ha8/87189486960670.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-8-chinese-version-chernyi-110147161/?c=750000000'
    },
    {
      id: 7,
      name: 'Canon EOS R5',
      description: 'Профессиональная полнокадровая зеркальная камера с разрешением 45 МП. Поддерживает запись видео 8K и имеет быструю автофокусировку с 1053 точками фокусировки.',
      price: 1818565,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h36/86754719498270.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h36/86754719498270.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/h8c/86754719563806.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/hd6/86754719694878.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/canon-eos-r5-mark-ii-body-122265923/?c=750000000'
    },
    {
      id: 8,
      name: 'GoPro HERO 12',
      description: 'Экшн-камера для съемки видео в экстремальных условиях с разрешением 5.3K. Водонепроницаема до 33 метров и имеет встроенный стабилизатор изображения.',
      price: 191798,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/hde/83574235496478.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/hde/83574235496478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h6e/83574234841118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/he8/83574399991838.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-12-113156475/?c=750000000'
    },
    {
      id: 9,
      name: 'DJI Air 3S',
      description: 'Компактный дрон с двумя камерами и разрешением съемки до 4K. Имеет время полета 46 минут и может летать на расстояние до 15 км с использованием передачи OcuSync 3+.',
      price: 825628,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p2c/5497945.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/p2c/5497945.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p03/p2c/5497947.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcb/p2b/5497949.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dji-air-3s-fly-more-combo-rc-2-seryi-129158116/?c=750000000'
    },
    {
      id: 10,
      name: 'PlayStation 5',
      description: 'Консоль нового поколения с мощным процессором AMD Ryzen и быстрым SSD. Поддерживает игры в разрешении до 4K с частотой 120 кадров в секунду.',
      price: 303568,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    }
  ];
}
