<template>
    <div>
        <el-row type="flex">
            <!-- 所有产品 -->
            <el-col class="product_title">
                <h2>所有产品信息</h2>
            </el-col>
        </el-row>
        <el-row type="flex" v-for="(row, rindex) in rowCount" :key="row" style="padding-bottom: 15px">
            <el-col :span="4" v-for="(o, index) in products.slice(rindex*5,5*(rindex+1))" :key="o.id" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="o.imagePath | imagePathShow" class="product_image">
                    <div style="padding: 14px;">
                        <span>{{ o.name }}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ o.uploadDate }}</time>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="24">
                <div class="product_desc">
                    <h3>{{ msg }}</h3>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  import moment from 'moment'
  import API from '../../api/api_product';
  export default {
    data() {
        return {
            msg: '为用户提供简单、方便、安全、实用的产品和解决方案，帮助客户实现低成本、高质量的目标。',
            staticPath:'../../static/',
            rowCount: 1, //产品行显示
            //产品列表
            products: [],
        }
    },
    methods: {
        getProduct() {
          //获取产品列表数据
          let that = this;
          let params = {
            page: 1,
            limit: 30,
            name: "",
            newFlag: true,
          };

          API.findList(params).then(function (result) {
            if (result && result.products) {
              //that.total = result.total;
              that.products = result.products;
              that.rowCount = result.products.length / 5;
              for (var i = that.products.length - 1; i >= 0; i--) {
                //格式化时间格式
                that.products[i].uploadDate = moment(new Date(that.products[i].uploadDate)).format('YYYY-MM-DD');
              }
            }
          }, function (err) {
            that.$message.error({showClose: true, message: err.toString(), duration: 2000});
          }).catch(function (error) {
            console.log(error);
            that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
          });
        }
    },
    mounted() {
      //获取产品列表数据
      this.getProduct();
    },
    filters:{
        imagePathShow(path) {
          if (path.indexOf('UploadFile') > -1) {
            return path;
          } else {
            return '../../static/' + path;
          }
        }
      }
}
</script>
<style scoped>
.product_title h2 {
    font-size: 1.5em;
    color: #337ab7;
    text-align: center;
}

.product_image {
    width: 100%;
    height: 197px;
    display: block;
}

.product_desc {
    background: #0ACF66;
    padding: .5em;
    text-align: center;
}

.product_desc h3 {
    font-size: 1.5em;
    color: #fff;
    line-height: 10px;
}
</style>
