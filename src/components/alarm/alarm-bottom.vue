<template>
		<div>
				<div id="alarm-bottom" style="width: 1000px;height:250px;"></div>
		</div>
</template>

<script>
import echarts from 'echarts'
export default {
	methods:{	
	alarm_line(){
		var alarm_buttom = echarts.init(document.getElementById('alarm-bottom'),'blue-science');
		
		var option = {
        	backgroundColor:'', //设置无背景色
			
    legend: {},
    tooltip: {},
    grid: {
	    		top:'15%',
	        left: '5%',
	        right: '0%',
	        bottom:'15%',
	        containLabel: true
	    },
    dataset: {
		dimensions: ['product', '未分类', '信息', '平均','告警'],
        source: [
            {product: '10-17', '未分类': 43.3, '信息': 85.8, '平均': 93.7,'告警':80},
            {product: '10-18', '未分类': 83.1, '信息': 73.4, '平均': 55.1,'告警':40},
            {product: '10-19', '未分类': 86.4, '信息': 65.2, '平均': 82.5,'告警':20},
            {product: '10-20', '未分类': 72.4, '信息': 53.9, '平均': 39.1,'告警':10}
        ]
    },
	xAxis: {
		type: 'category',
		},
    yAxis: {
		axisLine: {
                   lineStyle: {
                       color: '#fff'
                   }
               },
	},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
		{type: 'bar'},
		{type: 'bar'},
    ]
};

        alarm_buttom.setOption(option);
	
		}
	},
	
	mounted(){
		 this.alarm_line()
	}	
}


</script>

<style>
	#anaiysis-bottom-two{
		flex: 5;
		width: 800px;
		height:400px;
		padding-left: 20px;
		padding-top: 10px;
	}
</style>