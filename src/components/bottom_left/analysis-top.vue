<template>
		<div>
				<div id="ccc" style="width: 100%;height:250px;"></div>
		</div>
</template>

<script>
import echarts from 'echarts'
export default{
    data(){
        return{
            time : [],
            data1 : [],
            data2 : [],
            realTimeInvokeOption : {
                title: {
                    text: '接口一',
                    x:'center',
                    textStyle: {
                            fontWeight: 'normal',
                            color: '#fff',
                        },
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['进流量','出流量'],
                    x:'right',
                    y:'10'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                noDataLoadingOption: {
                        text: '暂无数据',
                        effect: 'bubble',
                        effectOption: {
                            effect: {
                                n: 0
                            }
                        }
 },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                                formatter: '{value}kb'
                            },
                    axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                },
                series: [
                    {
                        name:'进流量',
                        type:'line',
                        data:[],
                        areaStyle: {},
                        symbol:'none',
                    },
                    {
                        name:'出流量',
                        type:'line',
                        data:[],
                        areaStyle: {},symbol:'none',
                    },
                ]
            },
            xAxisDate:[],
            postDate:[],
        }
    },
    methods:{
    setIntervalOfRealTime () {
            var uthis = this
            var date = 1
            clearInterval(uthis.timeerOfRealtime);
            uthis.timeerOfRealtime = setInterval(() => {
                var postData = this.formatDateToArray()[1];
                var xAxisDate = this.formatDateToArray()[0];
                fetch("http://172.16.15.193:8069/sz/json?model=zabbix_item_data&name=itemid&name2=clock&name3=value&limit=10&f_itemid=34287",{
                            method:'get'
                        }).then(function(respones){
                            return respones.json()
                        }).then(function(data){
                            data.forEach(element => {
                            uthis.data2.push(element.value)
                            });
                        })
                fetch("http://172.16.15.193:8069/sz/json?model=zabbix_item_data&name=itemid&name2=clock&name3=value&limit=10&f_itemid=34288",{
                    method:'get'
                }).then(function(respones){
                    return respones.json()
                }).then(function(data){
                    data.forEach(element => {
                        uthis.data1.push(element.value)
                        var time= new Date(element.clock*1000) + ""
                        uthis.time.push(time.substring(16,25))
                    });
                        uthis.realTimeInvokeChart.hideLoading();
                        uthis.realTimeInvokeChart.setOption({
                            xAxis: {
                                data: uthis.time.reverse()
                            },
                            series: [{
                                data: uthis.data1.reverse()
                            },{
                                data: uthis.data2.reverse()
                            }],
                        });
                        uthis.data1 = []
                        uthis.data2 = []
                        uthis.time = []
                }).catch(function(error){
                        console.log('buttom图表数据获取失败')
                        return false;
                    })
                },10000);
                
        },
    formatDateToArray () {
        var nowDate = +new Date() - 10000;
        var xAxisDate = [],
            postDate = [];

        for (var i = 0; i < 7; i++) {
            var year = new Date(nowDate).getFullYear();
            var month = new Date(nowDate).getMonth() + 1 < 10 ? '0' + (new Date(nowDate).getMonth() + 1) : new Date(nowDate).getMonth() + 1;
            var day = new Date(nowDate).getDate() < 10 ? '0' + new Date(nowDate).getDate() : new Date(nowDate).getDate();
            var hour = new Date(nowDate).getHours() < 10 ? '0' + new Date(nowDate).getHours() : new Date(nowDate).getHours();
            var minute = new Date(nowDate).getMinutes() < 10 ? '0' + new Date(nowDate).getMinutes() : new Date(nowDate).getMinutes();
            var second = new Date(nowDate).getSeconds() < 10 ? '0' + new Date(nowDate).getSeconds() : new Date(nowDate).getSeconds();

            xAxisDate.unshift(hour + ':' + minute + ':' + second);
            postDate.unshift(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
            nowDate = nowDate - 1000;
        }

        return [xAxisDate, postDate];
}
    },
    mounted(){
        this.realTimeInvokeChart = echarts.init(document.getElementById('ccc'),'blue-science');
        this.setIntervalOfRealTime()
        this.realTimeInvokeChart.setOption(this.realTimeInvokeOption)
    }
}
</script>

<style>
	#anaiysis-bottom{
		flex: 5;
		width: 1000px;
		height:400px;
		padding-left: 20px;
		padding-top: 10px;
	}
</style>