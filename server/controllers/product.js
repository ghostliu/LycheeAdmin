/**
 * Products 控制器
 * Created by llz.
 */
const Mock = require('mockjs');
let db = require('../utils/mydbUtils');
let productController = {};
let _Products = [];

let insertOrUpdateSql = function(sql, params, callBack) {
    db.insertOrUpdateSql(sql, params, function(err, rows, fields) {
        if (err) {
            console.log('[insert] -:' + err);
            callBack(err);
            return;
        }
        callBack(err, rows);
    });
}

/**
 * 通过产品名称查询，获取产品列表
 * @param req
 * @param res
 */
productController.find = function(req, res) {
    let page = parseInt(req.query.page || 1); //页码（默认第1页）
    let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
    let name = req.query.name || ''; //产品名称
    let newFlag = req.query.newFlag || false;
    let total = 0;
    let rltProducts = [];

    //数据库查询数据
    let sql = 'SELECT productId as id, productName as name, productImage as imagePath, uploadauthor, description, inTime as uploadDate from product';
    insertOrUpdateSql(sql, null, function(err, data) {
        _Products = data;

        if (name.length > 0) {
            let products = _Products.filter(product => {
                return product.name.indexOf(name) > -1;
            });
            total = products.length; //总条数
            rltProducts = products.filter((u, index) => index < limit * page && index >= limit * (page - 1))
        } else {
            total = _Products.length; //总条数
            //是否取最新数据
            if (newFlag) {
                let newProducts = _Products.sort((p1, p2) => {
                    let p1Time = new Date(p1.uploadDate).getTime();
                    let p2Time = new Date(p2.uploadDate).getTime();
                    //按时间降序,最新放在最前面
                    if (p1Time > p2Time) {
                        return -1;
                    } else if (p1Time < p2Time) {
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
    });
};

/**
 * 通过id获取某一条产品
 * @param req
 * @param res
 */
productController.findById = function(req, res) {
    let id = _.trim(req.params.id || '');
    if (!id) {
        return res.json({ "errcode": 40002, "errmsg": "不合法的参数" });
    }
    console.log("query param id:"+id)
    let params = {productId:id}
    let sql = 'SELECT productId as id, productName as name, productImage as imagePath, uploadauthor, description, inTime as uploadDate from product where productId = ?';
    insertOrUpdateSql(sql, [id], function(err, data) {
      let product = data;
      res.json(product || null)
    });
};

/**
 * 添加一条产品信息
 * @param req
 * @param res
 */
productController.create = function(req, res) {
    let name = req.body.name;
    let uploadauthor = req.body.uploadauthor;
    let imagePath = req.body.imagePath;
    let description = req.body.description;
    let uploadDate = req.body.uploadDate;

    let insertsql = 'insert into product(productId,productName,productImage,inTime,uploadauthor,description) values ?';
    let values = [[Mock.Random.guid(),name,imagePath,uploadDate,uploadauthor,description]];
    //可以设置插入多条数据,[[id,name,sex],[id,name,sex]]

    insertOrUpdateSql(insertsql, [values], function(err, data) {
        if (err == null) {
            res.json({ "errcode": 0, "errmsg": "新增成功" });
        } else {
          res.json({ "errcode": 40009, "errmsg": "处理失败" })
        }
    });
};

/***
 * 更新一条产品记录
 * @param req
 * @param res
 */
productController.update = function(req, res) {
    let id = _.trim(req.params.id || '');
    if (!id) {
        return res.json({ "errcode": 40002, "errmsg": "不合法的参数" });
    }
    let name = req.body.name;
    let uploadauthor = req.body.uploadauthor;
    let imagePath = req.body.imagePath;
    let description = req.body.description;
    let uploadDate = req.body.uploadDate;

    let updateSql = 'update product set productName=?,productImage=?,inTime=?,uploadauthor=?,description=? where productId = ?'
    let values = [name,imagePath,uploadDate,uploadauthor,description,id]
    insertOrUpdateSql(updateSql, values, function(err, data) {
        if (err == null) {
            res.json({ "errcode": 0, "errmsg": "更新成功" })
        } else {
            res.json({ "errcode": 40009, "errmsg": "处理失败" })
        } 
    });
};

/**
 * 更新一条图书记录的部分信息
 * @param req
 * @param res
 */
productController.patch = function(req, res) {

};

/**
 * 批量删除
 * @param req
 * @param res
 */
productController.deleteBatch = function(req, res) {
    let ids = req.params.ids;
    ids = ids.split(',');
    let deleteSql = 'delete from product where '
    for (var i = 0; i < ids.length; i++) {
        console.log(i)
        deleteSql += 'productId = "' + ids[i] + '" or ';
    }
    deleteSql = deleteSql.substr(0, deleteSql.length - 3);
    console.log('[delete sql]-:'+deleteSql)
    insertOrUpdateSql(deleteSql, null,function(err, data) {
        if (err == null) {
            res.json({ "errcode": 0, "errmsg": "删除成功" })
        } else {
            res.json({ "errcode": 40009, "errmsg": "处理失败" })
        }
    });
};

/**
 * 单条删除
 * @param req
 * @param res
 */
productController.delete = function(req, res) {
    let id = _.trim(req.params.id || '');
    if (!id) {
        return res.json({ "errcode": 40002, "errmsg": "不合法的参数" });
    }

    let deleteSql = 'delete from product where productId = ?'
    insertOrUpdateSql(deleteSql, [id], function(err, data) {
        if (err == null) {
            res.json({ "errcode": 0, "errmsg": "删除成功" })
        } else {
            res.json({ "errcode": 40009, "errmsg": "处理失败" })
        }
    });
};

module.exports = productController;