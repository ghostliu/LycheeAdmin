/**
 * Products 控制器
 * Created by llz.
 */
const Mock = require('mockjs');
const Products = require('../data/product');
let productController = {};
let _Products = Products;

/**
 * 通过产品名称查询，获取产品列表
 * @param req
 * @param res
 */
productController.find = function (req, res) {
  let page = parseInt(req.query.page || 1); //页码（默认第1页）
  let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
  let name = req.query.name || ''; //产品名称
  let newFlag = req.query.newFlag || false;
  let total = 0;
  let rltProducts = [];
  if (name.length > 0) {
    let mockProducts = _Products.filter(product => {
      return product.name.indexOf(name) > -1;
    });
    total = mockProducts.length; //总条数
    rltProducts = mockProducts.filter((u, index) => index < limit * page && index >= limit * (page - 1))
  } else {
    total = _Products.length; //总条数
    //是否取最新数据
    if (newFlag) {
      let newProducts = _Products.sort((p1,p2) => {
        let p1Time = new Date(p1.uploadDate).getTime();
        let p2Time = new Date(p2.uploadDate).getTime();
        //按时间降序,最新放在最前面
        if (p1Time > p2Time) {
          return -1;
        } else if (p1Time < p2Time){
          return 1;
        } else {
          return 0;
        }
      });
      rltProducts = newProducts.filter((u, index) => index < limit * page && index >= limit * (page - 1))  
    } else {
      rltProducts = _Products.filter((u, index) => index < limit * page && index >= limit * (page - 1))  
    }
    
  }
  res.json({
    total: total,
    limit: limit,
    products: rltProducts
  })
};

/**
 * 通过id获取某一条产品
 * @param req
 * @param res
 */
productController.findById = function (req, res) {
  let id = _.trim(req.params.id || '');
  if (!id) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let book = _.find(_Products, function (b) {
    return b.id === id;
  });
  res.json(book || null)
};

/**
 * 添加一条产品信息
 * @param req
 * @param res
 */
productController.create = function (req, res) {
  let name = req.body.name;
  let uploadauthor = req.body.uploadauthor;
  let imagePath = req.body.imagePath;
  let description = req.body.description;
  let uploadDate = req.body.uploadDate;
  _Products.push({
    id: Mock.Random.guid(),
    name: name,
    uploadauthor: uploadauthor,
    imagePath: imagePath,
    description: description,
    uploadDate: uploadDate
  });
  res.json({"errcode": 0, "errmsg": "新增成功"})
};

/***
 * 更新一条产品记录
 * @param req
 * @param res
 */
productController.update = function (req, res) {
  let id = _.trim(req.params.id || '');
  if (!id) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let name = req.body.name;
  let uploadauthor = req.body.uploadauthor;
  let imagePath = req.body.imagePath;
  let description = req.body.description;
  let uploadDate = req.body.uploadDate;

  let i = _.findIndex(_Products, function (u) {
    return u.id === id
  })
  if (i > -1) {
    _Products[i].name = name;
    _Products[i].uploadauthor = uploadauthor;
    _Products[i].imagePath = imagePath;
    _Products[i].description = description;
    _Products[i].uploadDate = uploadDate;
    res.json({"errcode": 0, "errmsg": "修改成功"});
  } else {
    res.json({"errcode": 40009, "errmsg": "处理失败"});
  }
};

/**
 * 更新一条图书记录的部分信息
 * @param req
 * @param res
 */
productController.patch = function (req, res) {

};

/**
 * 批量删除
 * @param req
 * @param res
 */
productController.deleteBatch = function (req, res) {
  let ids = req.params.ids;
  ids = ids.split(',');
  _Products = _Products.filter(b => !ids.includes(b.id))
  res.json({"errcode": 0, "errmsg": "删除成功"});
};

/**
 * 单条删除
 * @param req
 * @param res
 */
productController.delete = function (req, res) {
  let id = _.trim(req.params.id || '');
  if (!id) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let i = _.findIndex(_Products, function (u) {
    return u.id === id
  })
  if (i > -1) {
    _Products.splice(i, 1);
    res.json({"errcode": 0, "errmsg": "删除成功"});
  } else {
    res.json({"errcode": 40009, "errmsg": "处理失败"});
  }
};

module.exports = productController;
