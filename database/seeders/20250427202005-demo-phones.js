'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const phones = [
      { brand: "Samsung", model: "Galaxy S24", price: 899, description: "Samsung Galaxy S24 de última generación", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Samsung", model: "Galaxy A54", price: 449, description: "Gama media alta de Samsung", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Apple", model: "iPhone 15", price: 999, description: "Apple iPhone 15 estándar", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Apple", model: "iPhone 14 Pro", price: 1099, description: "Apple iPhone 14 versión Pro", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Xiaomi", model: "Redmi Note 13", price: 299, description: "Calidad-precio de Xiaomi", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Xiaomi", model: "Poco X6 Pro", price: 389, description: "Gama media premium", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Motorola", model: "Edge 40", price: 699, description: "Motorola Edge gama alta", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Motorola", model: "Moto G84", price: 399, description: "Gama media de Motorola", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Huawei", model: "P60 Pro", price: 799, description: "Huawei P60 Pro con excelentes cámaras", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Huawei", model: "Nova 12", price: 529, description: "Huawei Nova serie joven", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Google", model: "Pixel 8", price: 899, description: "Google Pixel con Android puro", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Google", model: "Pixel 7a", price: 499, description: "Versión económica de Pixel", createdAt: new Date(), updatedAt: new Date() },
      { brand: "OnePlus", model: "12R", price: 649, description: "OnePlus 12R potente y asequible", createdAt: new Date(), updatedAt: new Date() },
      { brand: "OnePlus", model: "Nord CE 3", price: 349, description: "Gama media de OnePlus", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Sony", model: "Xperia 1 V", price: 1299, description: "Sony Xperia para profesionales", createdAt: new Date(), updatedAt: new Date() },
      { brand: "Sony", model: "Xperia 10 V", price: 549, description: "Sony Xperia gama media", createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert('Phones', phones, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Phones', null, {});
  }
};
