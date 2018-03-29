<template>
  <div style="overflow-y: hidden;">
    <el-row type="flex">
      <!-- Carousel 走马灯 -->
      <el-col :span="24">
        <div>
          <el-carousel :interval="5000" arrow="always" :autoplay="false">
            <el-carousel-item v-for="item in indexPageImage" :key="item">
              <img :src="staticPath + item" alt="产品说明">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="24">
        <div class="product_desc">
          <h3>为用户提供简单、方便、安全、实用的产品和解决方案，帮助客户实现低成本、高质量的目标。</h3>
        </div>
      </el-col>
    </el-row>  
    <el-row type="flex">
      <!-- 最新产品 -->
      <el-col class="product_title" >
        <h2>最新产品</h2>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col class="product_list" :span="4" v-for="(o, index) in products.slice(0,5)" :key="o.productId" :offset="index > 0 ? 1 : 0">
         <el-card :body-style="{ padding: '0px' }">
            <img :src="o.productImage" class="image">
            <div style="padding: 14px;">
              <span>{{ o.productName }}</span>
              <div class="bottom clearfix">
                <time class="time">{{ o.uploadTime }}</time>
              </div>
            </div>
          </el-card>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col class="product_list" :span="4" v-for="(o, index) in products.slice(5,10)" :key="o.productId" :offset="index > 0 ? 1 : 0">
         <el-card :body-style="{ padding: '0px' }">
            <img :src="o.productImage" class="image">
            <div style="padding: 14px;">
              <span>{{ o.productName }}</span>
              <div class="bottom clearfix">
                <time class="time">{{ o.uploadTime }}</time>
              </div>
            </div>
          </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" style="padding-top: 15px;">
      <!-- 产品原材料说明 -->
      <el-col :span="8" :offset="4">
          <el-card>
             <img :src="staticPath + 'material.jpg'" class="image" alt="原材料"/>
          </el-card>
      </el-col>
      <el-col :span="8">
         <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>原材料</span>
            </div>
            <div class="text item">
              铝型材镀钛金工艺，属于镀膜技术它是在常规镀钛工艺基础上增加预镀和电镀工艺步骤，铝型材工艺是将活化后的镀件置于食盐和盐酸的水溶液中进行化学处理；电镀工艺的镀液成分包括硫酸镍、氯化镍、硼酸、十二烷基硫酸钠、糖精、光亮剂，本工艺具有简单、实用、效果佳等优点，本工艺制得的钛金铝型材其膜层硬度HV≈1500、同等条件下比镀22K金耐磨150倍，可加工成各种形态的金色、彩色，黑色等光亮的多种系列铝型材产品。
            </div>
          </el-card>
      </el-col>
    </el-row>
    <el-row type="flex">
      <!-- 公司设备 -->
      <el-col class="product_title">
        <h2>公司设备</h2>
      </el-col>
    </el-row>
    <el-row type="flex">
      <!-- 公司设备 -->
       <el-col :span="8" class="product_list" v-for="(o, index) in companyDevice" :key="o.deviceId" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" >
          <img :src="o.deviceImage" class="image">
          <div style="padding: 14px;">
            <span>{{o.deviceName}}</span>
            <div class="bottom clearfix">
              <!-- <time class="time">{{ currentDate }}</time> -->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex">
      <!-- 公司产房 -->
      <el-col class="product_list" :span="24">
        <el-card>
             <img :src="staticPath + 'panorama.jpg'" class="image" alt="公司产房" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: '为用户提供简单、方便、安全、实用的产品和解决方案，帮助客户实现低成本、高质量的目标。',
        staticPath:'../../static/',
        indexPageImage:["photovoltaic1.jpg","photovoltaic2.jpg","photovoltaic3.jpg"],
        //产品列表
        products:[{
          productName:'好吃的汉堡',
          productImage:'../../static/images/forest.png',
          productId:'123',
          uploadTime:'2018-03-28 16:58'
        },{
          productName:'好吃的汉堡2',
          productImage:'../../static/images/forest.png',
          productId:'124',
          uploadTime:'2018-03-28 17:58'
        },{
          productName:'好吃的汉堡3',
          productImage:'../../static/images/forest.png',
          productId:'125',
          uploadTime:'2018-03-28 17:58'
        },{
          productName:'好吃的汉堡4',
          productImage:'../../static/images/forest.png',
          productId:'126',
          uploadTime:'2018-03-28 17:58'
        },{
          productName:'好吃的汉堡5',
          productImage:'../../static/images/forest.png',
          productId:'127',
          uploadTime:'2018-03-28 17:58'
        },{
          productName:'好吃的汉堡6',
          productImage:'../../static/images/forest.png',
          productId:'128',
          uploadTime:'2018-03-28 17:58'
        },{
          productName:'好吃的汉堡7',
          productImage:'../../static/images/forest.png',
          productId:'129',
          uploadTime:'2018-03-28 17:58'
        },{
          productName:'好吃的汉堡8',
          productImage:'../../static/images/forest.png',
          productId:'130',
          uploadTime:'2018-03-28 17:58'
        },{
          productName:'好吃的汉堡9',
          productImage:'../../static/images/forest.png',
          productId:'131',
          uploadTime:'2018-03-28 17:58'
        },{
          productName:'好吃的汉堡9',
          productImage:'../../static/images/forest.png',
          productId:'132',
          uploadTime:'2018-03-28 17:58'
        }],
        //公司设备
        companyDevice:[{
          deviceName:'机械设备',
          deviceImage:'../../static/equipment1.jpg',
          deviceId:'100',
          uploadTime:'2015-03-28 16:58'
        },
        {
          deviceName:'机械设备',
          deviceImage:'../../static/equipment2.jpg',
          deviceId:'101',
          uploadTime:'2015-03-28 16:58'
        },
        {
          deviceName:'机械设备',
          deviceImage:'../../static/equipment3.jpg',
          deviceId:'102',
          uploadTime:'2015-03-28 16:58'
        }]
      }
    }
  }
</script>

<style scoped>
.el-carousel__container {
    height: 450px !important;
}

.product_desc {
    background: #0ACF66;
    padding: 1em;
    text-align: center;
 }

.product_desc h3 {
    font-size: 1.5em;
    color: #fff;
    line-height: 0px;
}

.product_title h2{
  font-size: 1.5em;
  color: #337ab7;
  text-align: center;
}

.product_list {
  margin: 5px 15px;
}
  
/* .el-carousel__item:nth-child(1) {
    background:url(../../assets/images/photovoltaic1.jpg)no-repeat 0px 0px;
}
  
.el-carousel__item:nth-child(2) {
    background:url(../../assets/images/photovoltaic2.jpg)no-repeat 0px 0px;
} */

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
 .text {
    font-size: 18px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>