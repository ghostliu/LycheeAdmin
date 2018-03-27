<template>
    <el-row class="warp">
        <el-col :span="24" class="warp-main">
            <div class="abouts">
                <div class="container">
                    <h3>关于我们</h3>
                    <div class="about-main">
                        <div class="about-top">
                            <div class="col-md-5 about-top-left">
                                <img src="${pageContext.request.contextPath}/image/glasswall.jpg" class="img-responsive" alt="关于我们" title="关于我们" />
                            </div>
                            <div class="col-md-7 about-top-right">
                                <h4>江阴天通铝业科技有限公司(www.tiantong-alu.com)</h4>
                                <p style="font-size:15px;">　　江阴天通铝业科技有限公司位于扬子江畔，坐落于交通便利、经济发达、环境优美的江南小镇—江阴周庄镇。公司占地面积18,000平方米，拥有现代化的先进生产设备和信息化办公环境。</p>
                                <p style="font-size:15px;">　　公司专业生产、销售各工业型材、民用型材、门窗系列铝型材；产品质量可靠、规格齐全、造型美观、性能优越， 深受国内外客户好评，具有良好的市场美誉度。公司拥有一支优秀的技术人员与熟练技工队伍，拥有强大的设计和研发能力、精良的生产和检验设备，全球的服务网络和完善的售后服务。</p>
                                <p style="font-size:15px;">　　“创新，将新技术转化为生产力”是天通铝业的核心竞争力。凭借行业的深刻理解，天通铝业将领先业界的产品理念和丰富的产品开发经验相结合，为用户提供简单、方便、安全、实用的产品和解决方案，帮助客户实现低成本、高质量的目标。我们坚信，只要以市场为导向，以创新为动力，以质量求生存，以发展求壮大，我们就一定会赢得更好的明天。</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div class="who_are">
                    <div class="container">
                        <h4>江阴天通铝业科技有限公司</h4>
                        <div class="about-list">
                            <ul>
                                <li><a href="javascript:void(0)" style="font-size:15px;">联系地址：江苏省无锡市江阴市周庄镇</a></li>
                                <li><a href="javascript:void(0)" style="font-size:15px;">邮政编码：214400</a></li>
                                <li><a href="javascript:void(0)" style="font-size:15px;">电话传真：0510-80690589</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-bottom-strip">
                <div class="container">
                    <p>为用户提供简单、方便、安全、实用的产品和解决方案，帮助客户实现低成本、高质量的目标。</p>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {
            msg: 'hello vue'
        }
    }
}
</script>