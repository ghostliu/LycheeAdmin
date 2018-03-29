/***
 * products相关路由
 * 采用 restful api 风格
 */
var express = require('express');
var router = express.Router();
var indexRouter = {};
var userController = require('../../../controllers/user');
var productController = require('../../../controllers/product');

//返回product的集合
router.get('/', productController.find);

//先检查登录
router.use(userController.checkLogin);

//返回指定的product
router.get('/:id', productController.findById);

//创建product
router.post('/', productController.create);

//更新product全部信息
router.put('/:id', productController.update);

//更新product部分信息
router.patch('/:id', productController.patch);

//批量删除
router.delete('/batch/:ids', productController.deleteBatch);

//删除指定的product
router.delete('/:id', productController.delete);



indexRouter.router = router;

module.exports = indexRouter;
