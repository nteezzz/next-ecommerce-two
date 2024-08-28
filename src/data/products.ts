export const products = [
  {
    id: 1001,
    type: "Table",
    name: "Stylish Cafe Table",
    price: "$40",
    originalPrice: "$50",
    promotion: "20% Off",
    ratings: 4.5,
    shortDescription: "A stylish and modern cafe table.",
    variants: ["Standard", "Premium"],
    colors: ["#000000", "#FFFFFF", "#FFD700"],
    images: [
      "/assets/image 1.png",
      "/assets/image 2.png",
      "/assets/image 3.png",
      "/assets/image 4.png",
      "/assets/image 5.png",
    ],
    longDescription: `
      This stylish cafe table is perfect for both small and large spaces. Its sleek and modern design 
      fits well with any decor. The table is made from high-quality materials, ensuring durability 
      and a premium feel. The smooth surface makes it easy to clean, and its sturdy construction 
      supports a variety of uses, whether for dining, working, or socializing. Ideal for cafes, 
      kitchens, or even outdoor settings.
    `,
    additionalInfo: [
      { key: "Dimensions", value: "60x60x75 cm" },
      { key: "Weight", value: "7 kg" },
      { key: "Material", value: "Wood, Metal" },
      { key: "Color", value: "Gold" },
      { key: "Assembly Required", value: "Yes" },
      { key: "Warranty", value: "1 Year" },
      { key: "Country of Manufacture", value: "Germany" },
      { key: "Max Weight Capacity", value: "100 kg" },
      { key: "Finish Type", value: "Matte" },
      { key: "Care Instructions", value: "Wipe clean with a dry cloth" },
      { key: "Seating Capacity", value: "2 People" },
      { key: "Package Includes", value: "1 Table, Assembly Tools, Manual" },
    ],
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        review:
          "This table is exactly what I was looking for! The quality is fantastic, and it fits perfectly in my kitchen.",
      },
      {
        user: "Jane Smith",
        rating: 4,
        review:
          "Beautiful table, very sturdy and easy to assemble. The matte finish looks great in my cafe.",
      },
      {
        user: "Sam Wilson",
        rating: 4,
        review:
          "I’m happy with this purchase. The table is stylish and functional, though assembly took a bit longer than expected.",
      },
    ],
    relatedProducts: [1002, 1003, 1004],
    sku: "TB123456",
    countryOfManufacture: "Germany",
    dimensions: "60x60x75 cm",
  },
  {
    id: 1002,
    type: "Chair",
    name: "Stylish Cafe Chair",
    price: "$80",
    originalPrice: "$100",
    promotion: "20% Off",
    ratings: 4.3,
    shortDescription: "A stylish and comfortable cafe chair.",
    variants: ["Standard", "Premium"],
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    images: [
      "/assets/image 2.png",
      "/assets/image 3.png",
      "/assets/image 4.png",
      "/assets/image 5.png",
      "/assets/image 6.png",
    ],
    longDescription: `
      This stylish cafe chair is designed to offer both comfort and elegance. Made with high-quality materials, 
      it’s perfect for any modern living room, office, or cafe. The ergonomic design provides excellent 
      support for prolonged sitting, making it ideal for working or relaxing. The sleek, contemporary look 
      complements any decor, while the durable construction ensures that it will last for years. Whether 
      you're reading a book, enjoying a cup of coffee, or having a conversation with friends, this chair 
      will provide the perfect seating experience.
    `,
    additionalInfo: [
      { key: "Dimensions", value: "50x50x90 cm" },
      { key: "Weight", value: "6 kg" },
      { key: "Material", value: "Wood, Fabric" },
      { key: "Color", value: "Red" },
      { key: "Assembly Required", value: "Yes" },
      { key: "Warranty", value: "1 Year" },
      { key: "Country of Manufacture", value: "Italy" },
      { key: "Max Weight Capacity", value: "120 kg" },
      { key: "Finish Type", value: "Glossy" },
      { key: "Care Instructions", value: "Wipe clean with a dry cloth" },
      { key: "Seating Capacity", value: "1 Person" },
      { key: "Package Includes", value: "1 Chair, Assembly Tools, Manual" },
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review:
          "Comfortable and stylish. Perfect for my cafe! The quality is top-notch.",
      },
      {
        user: "Bob Brown",
        rating: 4,
        review:
          "Great chair, though it was a bit tricky to assemble. Still, I'm very happy with the purchase.",
      },
    ],
    relatedProducts: [1001, 1003, 1004],
    sku: "CH123457",
    countryOfManufacture: "Italy",
    dimensions: "50x50x90 cm",
  },
  {
    id: 1003,
    type: "Sofa",
    name: "Elegant Dining Sofa",
    price: "$120",
    originalPrice: "$150",
    promotion: "20% Off",
    ratings: 4.7,
    shortDescription: "An elegant and comfortable dining sofa.",
    variants: ["Standard", "Luxury"],
    colors: ["#808080", "#FFFFFF", "#000000"],
    images: [
      "/assets/image 3.png",
      "/assets/image 4.png",
      "/assets/image 5.png",
      "/assets/image 6.png",
      "/assets/image 7.png",
    ],
    longDescription: `
      This elegant dining sofa brings a touch of sophistication to your dining area. With its plush cushions 
      and sturdy frame, it offers both comfort and style. The sofa is perfect for family gatherings, 
      dinner parties, or simply enjoying a quiet meal. Its neutral color palette allows it to blend seamlessly 
      with any decor, while the high-quality materials ensure it will withstand years of use.
    `,
    additionalInfo: [
      { key: "Dimensions", value: "180x90x75 cm" },
      { key: "Weight", value: "25 kg" },
      { key: "Material", value: "Wood, Fabric" },
      { key: "Color", value: "Gray" },
      { key: "Assembly Required", value: "Yes" },
      { key: "Warranty", value: "2 Years" },
      { key: "Country of Manufacture", value: "France" },
      { key: "Max Weight Capacity", value: "300 kg" },
      { key: "Finish Type", value: "Matte" },
      { key: "Care Instructions", value: "Wipe clean with a dry cloth" },
      { key: "Seating Capacity", value: "3 People" },
      { key: "Package Includes", value: "1 Sofa, Assembly Tools, Manual" },
    ],
    reviews: [
      {
        user: "Catherine Lee",
        rating: 5,
        review:
          "This sofa is both elegant and comfortable. It's perfect for our dining room!",
      },
      {
        user: "David Harris",
        rating: 4,
        review:
          "Very comfortable and stylish. Assembly was a bit of a challenge, but the result is worth it.",
      },
    ],
    relatedProducts: [1002, 1004, 1005],
    sku: "SF123458",
    countryOfManufacture: "France",
    dimensions: "180x90x75 cm",
  },
  {
    id: 1004,
    type: "Sofa",
    name: "Comfortable Lounge Sofa",
    price: "$70",
    originalPrice: "$90",
    promotion: "22% Off",
    ratings: 4.4,
    shortDescription: "A comfortable and versatile lounge sofa.",
    variants: ["Standard", "Luxury"],
    colors: ["#FF5733", "#C70039", "#900C3F"],
    images: [
      "/assets/image 4.png",
      "/assets/image 5.png",
      "/assets/image 6.png",
      "/assets/image 7.png",
      "/assets/image 8.png",
    ],
    longDescription: `
      Relax in style with this comfortable lounge sofa. Its soft cushions and spacious design make it perfect 
      for lounging, watching TV, or reading a book. The sofa's versatile design allows it to complement any 
      living room or lounge area. Whether you're entertaining guests or just unwinding after a long day, 
      this sofa provides the perfect spot to relax.
    `,
    additionalInfo: [
      { key: "Dimensions", value: "200x100x85 cm" },
      { key: "Weight", value: "30 kg" },
      { key: "Material", value: "Fabric, Foam" },
      { key: "Color", value: "Orange" },
      { key: "Assembly Required", value: "No" },
      { key: "Warranty", value: "1 Year" },
      { key: "Country of Manufacture", value: "Spain" },
      { key: "Max Weight Capacity", value: "350 kg" },
      { key: "Finish Type", value: "Soft" },
      { key: "Care Instructions", value: "Vacuum regularly; spot clean as needed" },
      { key: "Seating Capacity", value: "4 People" },
      { key: "Package Includes", value: "1 Sofa" },
    ],
    reviews: [
      {
        user: "Emma Davis",
        rating: 5,
        review:
          "This sofa is incredibly comfortable and stylish. It's perfect for lounging and looks great in my living room.",
      },
      {
        user: "James Martinez",
        rating: 4,
        review:
          "The sofa is very comfortable and the quality is good. However, it took longer to arrive than expected.",
      },
    ],
    relatedProducts: [1001, 1002, 1005],
    sku: "LS123459",
    countryOfManufacture: "Spain",
    dimensions: "200x100x85 cm",
  },
  {
    id: 1005,
    type: "Lamp",
    name: "Tall lamp",
    price: "$60",
    originalPrice: "$75",
    promotion: "20% Off",
    ratings: 4.6,
    shortDescription: "A classic and elegant coffee table.",
    variants: ["Standard", "Deluxe"],
    colors: ["#C0C0C0", "#FFD700", "#00008B"],
    images: [
      "/assets/image 5.png",
      "/assets/image 6.png",
      "/assets/image 7.png",
      "/assets/image 8.png",
      "/assets/image 1.png",
    ],
    longDescription: `
      Add a touch of classic elegance to your living space with this beautifully crafted coffee table. 
      Its timeless design and quality materials make it a perfect centerpiece for any living room. 
      The table is sturdy and easy to maintain, offering both style and practicality. Ideal for holding 
      coffee cups, books, or decorative items.
    `,
    additionalInfo: [
      { key: "Dimensions", value: "100x50x45 cm" },
      { key: "Weight", value: "12 kg" },
      { key: "Material", value: "Glass, Metal" },
      { key: "Color", value: "Silver" },
      { key: "Assembly Required", value: "Yes" },
      { key: "Warranty", value: "1 Year" },
      { key: "Country of Manufacture", value: "China" },
      { key: "Max Weight Capacity", value: "50 kg" },
      { key: "Finish Type", value: "Glossy" },
      { key: "Care Instructions", value: "Clean with glass cleaner" },
      { key: "Package Includes", value: "1 Table, Assembly Tools, Manual" },
    ],
    reviews: [
      {
        user: "Olivia Wilson",
        rating: 5,
        review:
          "This coffee table is exactly what I wanted. It’s elegant and goes well with my decor.",
      },
      {
        user: "Liam Johnson",
        rating: 4,
        review:
          "Very nice table, but the assembly instructions could be clearer. Overall, it looks great.",
      },
    ],
    relatedProducts: [1001, 1002, 1003],
    sku: "CT123460",
    countryOfManufacture: "China",
    dimensions: "100x50x45 cm",
  },
  {
    id: 1006,
    type: "Sofa",
    name: "Modern Sofa",
    price: "$90",
    originalPrice: "$110",
    promotion: "18% Off",
    ratings: 4.8,
    shortDescription: "A sleek and functional bookshelf for modern interiors.",
    variants: ["Standard", "Premium"],
    colors: ["#8B4513", "#D3D3D3", "#2F4F4F"],
    images: [
      "/assets/image 6.png",
      "/assets/image 7.png",
      "/assets/image 8.png",
      "/assets/image 1.png",
      "/assets/image 2.png",
    ],
    longDescription: `
      This modern bookshelf is designed to complement any contemporary space. 
      With a clean and minimalistic design, it provides ample storage for books, 
      decorative items, or plants. The sturdy construction and high-quality materials 
      ensure that this bookshelf will be a lasting addition to your home. Its versatile design 
      fits seamlessly into any room, whether it’s your living room, office, or study.
    `,
    additionalInfo: [
      { key: "Dimensions", value: "80x30x180 cm" },
      { key: "Weight", value: "20 kg" },
      { key: "Material", value: "Wood, Metal" },
      { key: "Color", value: "Brown" },
      { key: "Assembly Required", value: "Yes" },
      { key: "Warranty", value: "1 Year" },
      { key: "Country of Manufacture", value: "USA" },
      { key: "Max Weight Capacity", value: "50 kg per shelf" },
      { key: "Finish Type", value: "Matte" },
      { key: "Care Instructions", value: "Wipe clean with a dry cloth" },
      { key: "Package Includes", value: "1 Bookshelf, Assembly Tools, Manual" },
    ],
    reviews: [
      {
        user: "Sophia Brown",
        rating: 5,
        review:
          "Absolutely love this bookshelf. It's sturdy and fits perfectly in my office.",
      },
      {
        user: "Liam Turner",
        rating: 4,
        review:
          "Great bookshelf. Assembly was a bit tricky, but the final product looks fantastic.",
      },
    ],
    relatedProducts: [1007, 1008],
    sku: "BS123461",
    countryOfManufacture: "USA",
    dimensions: "80x30x180 cm",
  },
  {
    id: 1007,
    type: "Sofa",
    name: "Contemporary Sofa",
    price: "$75",
    originalPrice: "$95",
    promotion: "21% Off",
    ratings: 4.4,
    shortDescription: "A modern floor lamp with an adjustable arm.",
    variants: ["Standard", "Deluxe"],
    colors: ["#FFFFFF", "#000000", "#FFD700"],
    images: [
      "/assets/image 7.png",
      "/assets/image 8.png",
      "/assets/image 1.png",
      "/assets/image 2.png",
      "/assets/image 3.png",
    ],
    longDescription: `
      Illuminate your space with this contemporary floor lamp. Featuring an adjustable arm and sleek design, 
      it provides targeted lighting for reading or working. The modern aesthetics and high-quality materials 
      make it a stylish and practical addition to any room. The lamp is easy to assemble and fits well in 
      various settings, from living rooms to home offices.
    `,
    additionalInfo: [
      { key: "Dimensions", value: "160x30 cm" },
      { key: "Weight", value: "5 kg" },
      { key: "Material", value: "Metal, Fabric" },
      { key: "Color", value: "Black" },
      { key: "Assembly Required", value: "Yes" },
      { key: "Warranty", value: "1 Year" },
      { key: "Country of Manufacture", value: "Netherlands" },
      { key: "Max Weight Capacity", value: "N/A" },
      { key: "Finish Type", value: "Glossy" },
      { key: "Care Instructions", value: "Wipe clean with a damp cloth" },
      { key: "Package Includes", value: "1 Lamp, Assembly Tools, Manual" },
    ],
    reviews: [
      {
        user: "Daniel White",
        rating: 5,
        review:
          "This lamp is both stylish and functional. It adds a modern touch to my living room.",
      },
      {
        user: "Emma Harris",
        rating: 4,
        review:
          "Very nice lamp. It was a bit difficult to put together, but looks great once assembled.",
      },
    ],
    relatedProducts: [1006, 1008],
    sku: "FL123462",
    countryOfManufacture: "Netherlands",
    dimensions: "160x30 cm",
  },
  {
    id: 1008,
    type: "Sofa",
    name: "Luxurious Sofa",
    price: "$150",
    originalPrice: "$200",
    promotion: "25% Off",
    ratings: 4.9,
    shortDescription: "A plush and elegant rug to enhance your living space.",
    variants: ["Small", "Medium", "Large"],
    colors: ["#B22222", "#FFD700", "#ADFF2F"],
    images: [
      "/assets/image 8.png",
      "/assets/image 1.png",
      "/assets/image 2.png",
      "/assets/image 3.png",
      "/assets/image 4.png",
    ],
    longDescription: `
      Add a touch of luxury to your home with this elegant rug. Made from high-quality materials, it offers 
      a plush feel underfoot and a stylish design that enhances any room. The rug is available in various sizes, 
      making it suitable for living rooms, bedrooms, or dining areas. Its durable construction ensures long-lasting 
      use, while the easy-to-clean material makes maintenance simple.
    `,
    additionalInfo: [
      { key: "Dimensions", value: "200x300 cm" },
      { key: "Weight", value: "10 kg" },
      { key: "Material", value: "Wool, Polyester" },
      { key: "Color", value: "Beige" },
      { key: "Assembly Required", value: "No" },
      { key: "Warranty", value: "2 Years" },
      { key: "Country of Manufacture", value: "India" },
      { key: "Max Weight Capacity", value: "N/A" },
      { key: "Finish Type", value: "Plush" },
      { key: "Care Instructions", value: "Vacuum regularly; spot clean as needed" },
      { key: "Package Includes", value: "1 Rug" },
    ],
    reviews: [
      {
        user: "Sophia Davis",
        rating: 5,
        review:
          "This rug is absolutely gorgeous and feels luxurious. It's the perfect addition to my living room.",
      },
      {
        user: "Michael Brown",
        rating: 5,
        review:
          "Excellent quality and very comfortable. The rug adds a lot of character to our home.",
      },
    ],
    relatedProducts: [1006, 1007],
    sku: "RG123463",
    countryOfManufacture: "India",
    dimensions: "200x300 cm",
  },
];
