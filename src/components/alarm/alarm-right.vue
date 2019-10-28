<!-- 饼图 -->

<template lang="html">
	<div >
		<div id="right1"style="width: 100%;height:230px;"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
import echartsGL from 'echarts-gl'
export default {
	methods:{

		chart_bottom(){
			var myChart1 = echarts.init(document.getElementById('right1'),'purple-passion');
        // 指定图表的配置项和数据
        var option = {
                    backgroundColor:'', //设置无背景色
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    grid: {
	    		top:'10%',
	        left: '3%',
	        right: '5%',
	        bottom:'20%',
	        containLabel: true
	    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    },{
        data: [720, 1032, 201, 934, 1590, 330, 820],
        type: 'line',
        smooth: true
    }]
};

        // 使用刚指定的配置项和数据显示图表。
         myChart1.setOption(option);
		}
	},
	mounted(){	 
		this.chart_bottom()
	}	
}


</script>

<style lang="stylus">
	.my-color{
		color: red;
	}
</style>
