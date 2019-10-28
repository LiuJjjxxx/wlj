<!-- 饼图 -->

<template lang="html">
	<div >
		<div id="right"style="width: 100%;height:230px;"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
export default {
	methods:{
		chart_left(){
			var myChart1 = echarts.init(document.getElementById('right'),'purple-passion');
        // 指定图表的配置项和数据
        var option = {
                    backgroundColor:'', //设置无背景色
    grid: {
            top:'10%',
	        left: '3%',
	        right: '5%',
	        bottom:'20%',
	        containLabel: true
        },
        legend: {
        data:['进流量','出流量']
    },
     tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name:'进流量',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    },{
        name:'出流量',
        data: [50, 900, 701, 634, 1090, 330, 720],
        type: 'line',
        smooth: true
    }]
};

        // 使用刚指定的配置项和数据显示图表。
         myChart1.setOption(option);
		}
	},
	mounted(){	 
		// this.chart_top()
		this.chart_left()
	}	
}


</script>

<style lang="stylus">
	.my-color{
		color: red;
	}
</style>
