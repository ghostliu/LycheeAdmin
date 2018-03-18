/***
 * products相关路由
 * 采用 restful api 风格
 */
var express = require('express');
var router = express.Router();
var indexRouter = {};
var userController = require('../../../controllers/user');
var productController = require('../../../controllers/product');

//先检查登录
router.use(userController.checkLogin);

//返回book的集合
router.get('/', productController.find);

//返回指定的book
router.get('/:id', productController.findById);

//创建book
router.post('/', productController.create);

//更新book全部信息
router.put('/:id', productController.update);

//更新book部分信息
router.patch('/:id', productController.patch);

//批量删除
router.delete('/batch/:ids', productController.deleteBatch);

//删除指定的book
router.delete('/:id', productController.delete);



indexRouter.router = router;

module.exports = indexRouter;
