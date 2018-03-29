/**
 * 初始化产品(product)模拟数据
 *
 * Created by llz.
 */
const Mock = require('mockjs');

// product: id,name,

const Products = [];
for (let i = 0; i < 100; i++) {
  Products.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.ctitle(2, 12),
    uploadauthor: Mock.Random.cname(),
    imagePath:"/images/forest.png",
    description: Mock.Random.csentence(180, 500),
    uploadDate: Mock.Random.date()
  }))
}

module.exports = Products;
