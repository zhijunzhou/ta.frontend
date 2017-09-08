<template>
	<div class="inde">        
        <Row>
            <Col span="24">
                <Row class="pd">
                    <Col span="2">&nbsp;</Col>
                    <Col span="4" v-for="(crd,index) in list" v-bind:key="index">
                        <Row type="flex" justify="center" class="code-row-bg" v-if="index < maxItem">
                            <Col span="24">
                                <div :class="{chosed: chooseIndex === index}">
                                    <div class="tick">
                                        <Icon type="checkmark-circled" v-if="chooseIndex === index"></Icon>
                                    </div>
                                    <div class="icon-img">
                            	        <profile-photo :photoPath='photoPath' :choose="choose" :index='index' :isActive="chooseIndex === index"></profile-photo>                                    
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="2"></Col>
                </Row>
                <Row class="pd" v-if="isShow">
                    <Col span="2">&nbsp;</Col>
                    <Col span="4" v-for="(crd,index) in list" v-bind:key="index">
                        <Row type="flex" justify="center" class="pd code-row-bg" v-if="index >= maxItem">
                            <Col span="24">
                            	<div :class="{chosed: chooseIndex === index}">
                                    <div class="tick">
                                        <Icon type="checkmark-circled" v-if="chooseIndex === index"></Icon>
                                    </div>
                                    <div class="icon-img">
                            	        <profile-photo :photoPath='photoPath' :choose="choose" :index='index' :isActive="chooseIndex === index"></profile-photo>                                    
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="2"></Col>
                </Row>
            </Col>            
        </Row>
        <Row span="24" v-if="isOverflow">
            <Col span="24" class="col-center pd" v-if="isShow" >
                <div @click="toogle">
                    <span class="h3">折叠</span>
                    <Icon type="chevron-up"  style="font-size: 0.24rem; color: #acacac"></Icon>
                </div>

            </Col>
            <Col span="24" class="col-center pd" v-else @click="toogle">
                <div @click="toogle">
                         <span class="h3">展开</span>
                    <Icon type="chevron-down" style="font-size: 0.24rem; color: #acacac"></Icon>
                </div>
               
            </Col>
        </Row>
    </div>
</template>
<script>
	import ProfilePhoto from '../components/profile-photo';

	export default{
		name:'ProfilePhotoList',
		data () {
            return {
                isShow: false,
                maxItem: 5,
                photoPath:"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7a8ee34f30fa828bc52e95b19c762a51/060828381f30e9247e29fb7b4f086e061c95f7ef.jpg"
                //photoPath:"mcfly.jpg"
            }
        },
		props: ['index','choose','chooseIndex','list'],
		components:{
			ProfilePhoto
		},
		computed:{
			isOverflow: function(){
				if (this.list.length > this.maxItem) {
					return true;
				}
				return false;
			}
		},
		methods: {
            toogle () {
                this.isShow? this.isShow = false: this.isShow = true;
            }
        }
	}
</script>
<style scoped>
.chosed {
    opacity: 1;   
}
.tick {
    position: absolute;
    right: 35%;
    top: 70%;
}
.tick .ivu-icon-checkmark-circled {
    color: #0066ff;
}
.arrow {
    position: absolute;
    right: 40%;
    top: 80%;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
}
.rarrow {
    transform: rotate(-330deg);
    -webkit-transform: rotate(-330deg);
}
.inde{background-color: white;border-radius: 5px; }
.pd{padding: 0.05rem 0 0.05rem 0;}
.h1{font-size: 0.32rem; color: #3f3f3f}
.h2{font-size: 0.30rem; color: #5e5e5e}
/*说明信息*/
.h3{font-size: 0.24rem; color: #acacac}
.bt{border-top: 1px solid #ddd}
.icon-img{width: .77rem;height: .77rem;border-radius: 100%;overflow: hidden}
.icon-img img{width: 100%;}
.col-center{text-align: center;}
</style>