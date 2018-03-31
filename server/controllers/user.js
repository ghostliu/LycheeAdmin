/**
 * users 控制器
 *
 * Created by llz.
 */
let crypto = require('crypto')
let db = require('../utils/mydbUtils')
let userController = {};
let _Users = [];

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
 * 检查用户的登录状态
 * @param req
 * @param res
 * @param next
 */
userController.checkLogin = function (req, res, next) {
  //用户已经登录
  if (req.session.userId) {
    next();
  }
  else {
    res.json({"errcode": 40001, "errmsg": "您还没有登录"});
  }
};

/**
 * 登录
 * @param req
 * @param res
 */
userController.login = function (req, res) {
  let username = _.trim(req.query.username || req.body.username || '');
  let pwd = req.body.pwd;
  if (!username || !pwd) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let checkUserSql = 'select userId as id,username, password, nickname, email from user where userName = ?'
  insertOrUpdateSql(checkUserSql, [username], function(err, data) {
    if (err == null) {
      // 通过用户名获取到用户信息
      let user = data[0];
      console.log('---_Users----');
      if (!user) {
        return res.json({"errcode": 40003, "errmsg": "用户不存在"});
      }
      // 加密后的密码与库中密码对比
      // 单纯md5对比不可靠，可适当在原有基础上添加相应额外字符
      let md5 = crypto.createHash('md5')
      let cryptoPwd = md5.update(pwd).digest('hex').toUpperCase();
      
      if (user.password === cryptoPwd) {
        //设置session
        req.session.userId = user.id;
        return res.json({
          id: user.id,
          username: user.username,
          nickname: user.nickname,
          email: user.email
        });
      } else {
        return res.json({"errcode": 40004, "errmsg": "密码错误"});
      }
    } else {
        return res.json({ "errcode": 40009, "errmsg": "处理失败" });
    }
  });

};

/**
 * 退出登录
 * @param req
 * @param res
 */
userController.logout = function (req, res) {
  req.session.destroy();
  res.json({"errcode": 0, "errmsg": "退出完成"});
};

/**
 * 修改个人部分信息
 * @param req
 * @param res
 */
userController.profile = function (req, res) {
  let userid = req.session.userId || '';
  let nickname = req.body.nickname;
  let email = req.body.email;
  // let name  = req.body.name;
  
  if (!userid) {
    return res.json({"errcode":4002,"errmsg":"不合法的参数"})
  }
  let updateUser = 'update user set nickName = ?, email = ? where userId = ?'
  insertOrUpdateSql(updateUser, [nickname,email,userid], function(err, data) {
    if (err == null) {
      res.json({"errcode": 0, "errmsg": "修改成功"});
    } else {
      res.json({"errcode": 40009, "errmsg": "处理失败"});
    }
  });

};

/**
 * 修改密码
 * @param req
 * @param res
 */
userController.changepwd = function (req, res) {
  let userid = req.session.userId;
  let oldPwd = req.body.oldPwd;
  let newPwd = req.body.newPwd;
  let confirmPwd = req.body.confirmPwd;

  let checkUserSql = 'select password from user where userId = ?'
  insertOrUpdateSql(checkUserSql, [userid], function(err, data) {
    let user = data[0]
    if (err == null) {
      if (user) {
        let md5 = crypto.createHash('md5')
        let cryptoOldPwd = md5.update(oldPwd).digest('hex').toUpperCase();
        if (user.password == cryptoOldPwd) {
          if (newPwd == confirmPwd) {
            let md5 = crypto.createHash('md5')
            let cryptoNewPwd = md5.update(newPwd).digest('hex').toUpperCase();
            let updateUser = 'update user set password = ? where userId = ?'
            insertOrUpdateSql(updateUser, [cryptoNewPwd,userid], function(err, data) {
              if (err == null) {
                res.json({"errcode": 0, "errmsg": "修改成功"});
              } else {
                res.json({"errcode": 40009, "errmsg": "处理失败"});
              }
            }); 
          } else {
            res.json({"errcode":40007,"errmsg":"两次输入的密码不一致"});
          }
        } else {
          res.json({"errcode":40008,"errmsg":"输入的旧密码不正确"});
        }
      } else {
        res.json({"errcode":40009,"errmsg":"用户不存在"});
      }
    } else {
      res.json({"errcode": 40009, "errmsg": "处理失败"});
    }
  });

};

/**
 * 通过用户名查询，获取用户列表
 * @param req
 * @param res
 */
userController.find = function (req, res) {
  let page = parseInt(req.query.page || 1); //页码（默认第1页）
  let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
  let name = req.query.name || '';
  let total = 0;
  let rltUsers = [];

  let querySql = 'select userId,username, password, nickname, sex, email from user';
  insertOrUpdateSql(querySql, null, function(err, data) {
    _Users = data;
    if (name.length > 0) {
      let searchUsers = _Users.filter(user => {
        return (user.username.indexOf(name) > -1 || user.nickname.indexOf(name) > -1)
      });
      total = searchUsers.length; //总条数             
      rltUsers = searchUsers.filter((u, index) => index < limit * page && index >= limit * (page - 1))
    } else {
      total = _Users.length; //总条数
      rltUsers = _Users.filter((u, index) => index < limit * page && index >= limit * (page - 1))
    }
    res.json({
      total: total,
      limit: limit,
      users: rltUsers
    });
  });

};

module.exports = userController;
