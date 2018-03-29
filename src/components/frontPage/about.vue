<template>
    <div>
        <el-row type="flex">
            <!-- 关于我们 -->
            <el-col class="product_title">
                <h2>关于我们</h2>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="6" :offset="4">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../../assets/images/glasswall.jpg" class="image">
                </el-card>
            </el-col>
            <el-col :span="10" :offset="2">
                <div>
                    <h4 style="color: #337ab7;">江阴天通铝业科技有限公司(www.tiantong-alu.com)</h4>
                    <p style="font-size:15px;">　　江阴天通铝业科技有限公司位于扬子江畔，坐落于交通便利、经济发达、环境优美的江南小镇—江阴周庄镇。公司占地面积18,000平方米，拥有现代化的先进生产设备和信息化办公环境。</p>
                    <p style="font-size:15px;">　　公司专业生产、销售各工业型材、民用型材、门窗系列铝型材；产品质量可靠、规格齐全、造型美观、性能优越， 深受国内外客户好评，具有良好的市场美誉度。公司拥有一支优秀的技术人员与熟练技工队伍，拥有强大的设计和研发能力、精良的生产和检验设备，全球的服务网络和完善的售后服务。</p>
                    <p style="font-size:15px;">　　“创新，将新技术转化为生产力”是天通铝业的核心竞争力。凭借行业的深刻理解，天通铝业将领先业界的产品理念和丰富的产品开发经验相结合，为用户提供简单、方便、安全、实用的产品和解决方案，帮助客户实现低成本、高质量的目标。我们坚信，只要以市场为导向，以创新为动力，以质量求生存，以发展求壮大，我们就一定会赢得更好的明天。</p>
                </div>
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
            msg: '为用户提供简单、方便、安全、实用的产品和解决方案，帮助客户实现低成本、高质量的目标。'
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