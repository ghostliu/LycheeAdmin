/**
 * Created by llz.
 * 产品相关api
 */
import * as API from './'

export default {

  //查询获取product列表(通过page分页)
  findList: params => {
    return API.GET('/api/v1/products', params)
  },

  //查询获取一条product信息
  findById: id => {
    return API.GET(`/api/v1/products/${id}`)
  },

  add: params => {
    return API.POST(`/api/v1/products`, params)
  },
  update: (id, params) => {
    return API.PUT(`/api/v1/products/${id}`, params)
  },

  //单个删除product
  remove: id => {
    return API.DELETE(`/api/v1/products/${id}`)
  },

  //批量删除，传ids数组
  removeBatch: (ids) => {
    return API.DELETE(`/api/v1/products/batch/${ids}`)
  }

}
