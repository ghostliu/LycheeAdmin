<template>
    <div>
        <el-row type="flex">
            <!-- 所有产品 -->
            <el-col class="product_title">
                <h2>所有产品信息</h2>
            </el-col>
        </el-row>
        <el-row type="flex" v-for="(row, rindex) in rowCount" :key="row" style="padding-bottom: 15px">
            <el-col :span="4" v-for="(o, index) in products.slice(rindex*5,5*(rindex+1))" :key="o.productId" :offset="index > 0 ? 1 : 0">
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
            <el-col :span="24">
                <div class="product_desc">
                    <h3>{{ msg }}</h3>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: '为用户提供简单、方便、安全、实用的产品和解决方案，帮助客户实现低成本、高质量的目标。',
            rowCount: 1,//产品行显示
            //产品列表
            products: [{
                productName: '好吃的汉堡',
                productImage: '../../static/images/forest.png',
                productId: '123',
                uploadTime: '2018-03-28 16:58'
            }, {
                productName: '好吃的汉堡2',
                productImage: '../../static/images/forest.png',
                productId: '124',
                uploadTime: '2018-03-28 17:58'
            }, {
                productName: '好吃的汉堡3',
                productImage: '../../static/images/forest.png',
                productId: '125',
                uploadTime: '2018-03-28 17:58'
            }, {
                productName: '好吃的汉堡4',
                productImage: '../../static/images/forest.png',
                productId: '126',
                uploadTime: '2018-03-28 17:58'
            }, {
                productName: '好吃的汉堡5',
                productImage: '../../static/images/forest.png',
                productId: '127',
                uploadTime: '2018-03-28 17:58'
            }, {
                productName: '好吃的汉堡6',
                productImage: '../../static/images/forest.png',
                productId: '128',
                uploadTime: '2018-03-28 17:58'
            }, {
                productName: '好吃的汉堡7',
                productImage: '../../static/images/forest.png',
                productId: '129',
                uploadTime: '2018-03-28 17:58'
            }, {
                productName: '好吃的汉堡8',
                productImage: '../../static/images/forest.png',
                productId: '130',
                uploadTime: '2018-03-28 17:58'
            }, {
                productName: '好吃的汉堡9',
                productImage: '../../static/images/forest.png',
                productId: '131',
                uploadTime: '2018-03-28 17:58'
            }, {
                productName: '好吃的汉堡9',
                productImage: '../../static/images/forest.png',
                productId: '132',
                uploadTime: '2018-03-28 17:58'
            }],
        }
    },
    methods: {
      getProduct(){
        //获取产品列表数据
        this.rowCount = this.products.length / 5;
        ;
      }
    },
    mounted() {
      this.getProduct();
    }
}
</script>
<style scoped>
.product_title h2 {
    font-size: 1.5em;
    color: #337ab7;
    text-align: center;
}

.image {
    width: 100%;
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