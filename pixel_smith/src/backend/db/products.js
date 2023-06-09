import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "LG UltraWide 29 inch IPS FHD Monitor",
    price: 18799,
    seller:"PixelSmith",
    company:"LG",
    img: "https://m.media-amazon.com/images/I/71gfGhGGHQL._SL1500_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:true,
    discountPrice:17900,
    category: "29 inch ultrawide",
    rating: "4.3",
    table:true,
    wallMount:true,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:false,
    color:"silver",
    warranty:"3 year warranty",
    features:["100Hz","7W x 2 Inbuilt Speaker", "Usb-C"],
  },
  {
    _id: uuid(),
    title: "Acer XZ306CX 29 Inch Ultrawide LCD Monitor",
    price: 21990,
    seller:"PixelSmith",
    company:"ACER",
    img: "https://m.media-amazon.com/images/I/71sBDiA+O3L._SL1500_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:false,
    discountPrice:0,
    category: "29 inch ultrawide",
    rating: "4.0",
    table:true,
    wallMount:true,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:true,
    color:"white",
    warranty:"2 year warranty",
    features:["200Hz","1ms latency", "AMD Free Sync"],
  },
  {
    _id: uuid(),
    title: "LG 87 cm (34 Inches) UltraWide Full HD Gaming Monitor",
    price: 24999,
    seller:"PixelSmith",
    company:"LG",
    img: "https://m.media-amazon.com/images/I/71gelZiq-oL._SX522_.jpg",
    outOfStock:true,
    fastDelivery:false,
    discountProduct:true,
    discountPrice:23000,
    category: "34 inch ultrawide",
    rating: "4.5",
    table:true,
    wallMount:false,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:false,
    color:"black",
    warranty:"3 year warranty",
    features:["75Hz","5ms latency", "Anti Glare Screen"],
  },
  {
    _id: uuid(),
    title: "Samsung 34-inch(86.4cm) LED 2K WQHD Curved Ultrawide Monitor",
    price: 64499,
    seller:"PixelSmith",
    company:"SAMSUNG",
    img: "https://m.media-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:true,
    discountPrice:60000,
    category: "34 inch ultrawide",
    rating: "4.5",
    table:true,
    wallMount:false,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:false,
    color:"white",
    warranty:"3 year warranty",
    features:["100Hz","Quantum Dot Color", "PIP,PBP"],
  },
  {
    _id: uuid(),
    title: "ZEBRONICS AC32FHD LED Curved FHD Monitor",
    price: 12999,
    seller:"PixelSmith",
    company:"ZEBRONICS",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    outOfStock:false,
    fastDelivery:false,
    discountProduct:true,
    discountPrice:12000,
    category: "32 inch",
    rating: "3.7",
    table:true,
    wallMount:true,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:false,
    color:"silver",
    warranty:"2 year warranty",
    features:["75Hz","Built-in Speaker", "1500R curvature screen"],
  },
  {
    _id: uuid(),
    title: "Samsung 32-Inch LED M5 FHD Smart Monitor",
    price: 19699,
    seller:"PixelSmith",
    company:"SAMSUNG",
    img: "https://m.media-amazon.com/images/I/819il1jGUGL._SL1500_.jpg",
    outOfStock:false,
    fastDelivery:false,
    discountProduct:false,
    discountPrice:0,
    category: "32 inch",
    rating: "4.2",
    table:true,
    wallMount:false,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:true,
    color:"black",
    warranty:"4 year warranty",
    features:["60Hz","Built-in Speaker", "Smart TV Experience"],
  },
  {
    _id: uuid(),
    title: "BenQ EW3270U 32 inch LED Premium HDR 4K Bezel-Less Monitor",
    price: 27990,
    seller:"PixelSmith",
    company:"BENQ",
    img: "https://m.media-amazon.com/images/I/212Jl9+PswL.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:false,
    discountPrice:0,
    category: "32 inch",
    rating: "4.0",
    table:true,
    wallMount:true,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:true,
    color:"black",
    warranty:"3.5 year warranty",
    features:["60Hz","4K monitor", "AMD Freesync"],
  },
  {
    _id: uuid(),
    title: "LG Ultragear 32Gn650 Qhd 32 Inch Gaming LCD Monitor",
    price: 24499,
    seller:"PixelSmith",
    company:"LG",
    img: "https://m.media-amazon.com/images/I/71EstOZXAlL._SL1500_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:false,
    discountPrice:0,
    category: "32 inch",
    rating: "4.0",
    table:true,
    wallMount:false,
    tilt:true,
    verticalRotation:true,
    heightAdjustable:true,
    color:"black",
    warranty:"3 year warranty",
    features:["165Hz","1ms latency", "Nvidia G-Sync Compatible"],
  },
  {
    _id: uuid(),
    title: "Acer Nitro VG280K 29 Inch UHD 4K IPS Gaming LCD Monitor",
    price: 23349,
    seller:"PixelSmith",
    company:"ACER",
    img: "https://m.media-amazon.com/images/I/71Ny6IrYQdL._SL1400_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:true,
    discountPrice:21900,
    category: "29 inch",
    rating: "4.1",
    table:true,
    wallMount:false,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:true,
    color:"black",
    warranty:"3 year warranty",
    features:["166Hz","4ms latency", "Stereo Speakers"],
  },
  {
    _id: uuid(),
    title: "LG Ultragear 29 Inch IPS FHDGaming LCD Monitor",
    price: 17499,
    seller:"PixelSmith",
    company:"LG",
    img: "https://m.media-amazon.com/images/I/61w47VtVOLL._SL1500_.jpg",
    outOfStock:true,
    fastDelivery:false,
    discountProduct:true,
    discountPrice:15000,
    category: "29 inch",
    rating: "4.4",
    table:true,
    wallMount:false,
    tilt:true,
    verticalRotation:true,
    heightAdjustable:true,
    color:"black",
    warranty:"3 year warranty",
    features:["144Hz","2ms latency", "G-Sync Compatible"],
  },
  {
    _id: uuid(),
    title: "BenQ GW2780 27 inch IPS Full HD Ultra-Slim Bezel Monitor",
    price: 12989,
    seller:"PixelSmith",
    company:"BENQ",
    img: "https://m.media-amazon.com/images/I/61+Qi5egWnL._SL1400_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:false,
    discountPrice:0,
    category: "27 inch",
    rating: "3.9",
    table:true,
    wallMount:true,
    tilt:false,
    verticalRotation:false,
    heightAdjustable:false,
    color:"black",
    warranty:"2 year warranty",
    features:["70Hz","Speakers", "Brightness Intelligence"],
  },
  {
    _id: uuid(),
    title: "ZEBRONICS 27inch Widescreen Monitor",
    price: 9999,
    seller:"PixelSmith",
    company:"ZEBRONICS",
    img: "https://m.media-amazon.com/images/I/61VdlGdSwuL._SL1280_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:true,
    discountPrice:8999,
    category: "27 inch",
    rating: "3.5",
    table:true,
    wallMount:true,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:false,
    color:"white",
    warranty:"3 year warranty",
    features:["75Hz","Built-in Speakers", "Wide Screen"],
  },
  {
    _id: uuid(),
    title: "BenQ GW2480 24 inch IPS Full HD Ultra-Slim Bezel Monitor",
    price: 8399,
    seller:"PixelSmith",
    company:"BENQ",
    img: "https://m.media-amazon.com/images/I/71AecexVWZL._SL1400_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:false,
    discountPrice:0,
    category: "24 inch",
    rating: "4.0",
    table:true,
    wallMount:true,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:false,
    color:"Black",
    warranty:"2 year warranty",
    features:["60Hz","Anti Glare", "Eye Care"],
  },
  {
    _id: uuid(),
    title: "Samsung 24-inch (60.46cm) 1920 X 1080 Pixels FHD Monitor",
    price: 8999,
    seller:"PixelSmith",
    company:"SAMSUNG",
    img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:true,
    discountPrice:8499,
    category: "24 inch",
    rating: "4.5",
    table:true,
    wallMount:true,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:true,
    color:"Black",
    warranty:"3 year warranty",
    features:["75Hz","AMD Freesync", "Filcker Free"],
  },
  {
    _id: uuid(),
    title: "ZEBRONICS 24 Inch (60.4 Cm) Widescreen 1920 X 1080 Pixels LED Monitor",
    price: 7999,
    seller:"PixelSmith",
    company:"ZEBRONICS",
    img: "https://m.media-amazon.com/images/I/61VdlGdSwuL._SL1280_.jpg",
    outOfStock:false,
    fastDelivery:true,
    discountProduct:true,
    discountPrice:7000,
    category: "24 inch",
    rating: "3.7",
    table:true,
    wallMount:true,
    tilt:true,
    verticalRotation:false,
    heightAdjustable:false,
    color:"Black",
    warranty:"2 year warranty",
    features:["75Hz","Built-in Speaker", "14ms latency"],
  },
];
