<template>
	<div class="alarm-flex box">
		<div class="alarm-left">
			<div class="header" style="text-align: left;">设备统计</div>
			<!-- <v-left></v-left> -->
			<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="fa fa-desktop fa-3x trantion" style="color:#2bd891">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</span>
                            <div class=" font">服务器</div>
                            <div class="font-count">22台</div>
                            <div class="font-warn">告警:41次</div>    
                        </a> </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="fa fa-wifi fa-3x" style="color:#14bffe"></span>
                            <div class=" font">AC</div>
                            <div class="font-count">11台</div>
                            <div class="font-warn">告警:31次</div>    
                        </a> </li>
		          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="fa fa-briefcase fa-3x" style="color:#bf1cfb"></span>
                            <div class="font">安全设备</div>
                            <div class="font-count">5台</div>
                            <div class="font-warn">告警:11次</div>    
                        </a> </li><li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="fa fa-arrow-circle-up fa-3x" style="color:#5f46ff"></span>
                            <div class="  font">网络设备</div>
                            <div class="font-count">11台</div>
                            <div class="font-warn">告警:11次</div>    
                        </a> </li>
		        </ul> 
		</div>
		<div class="alarm-chart">
                <alarm-bottom></alarm-bottom>
		</div>
		
	</div>
</template>

<script>
	import alarm_left from 'components/alarm/alarm-left'
	import alarm_right from 'components/alarm/alarm-right'
	import alarm_bottom from 'components/alarm/alarm-bottom'

	export default {
				 components: {
		    'v-left': alarm_left,
		    'v-right':alarm_right,
            'alarm-bottom':alarm_bottom,
  	},
	
	}
</script>

<style scoped>
.alarm-flex{
	width: 100%;
	height: 430px;
}
.alarm-chart{
    display: flex;

}
.chart-left{
    flex: 5;
    width: 100%;
    height: 230px;
}
.chart-right{
    flex: 5;
   width: 100%;
    height: 230px;
}
.mui-grid-view.mui-grid-9{
    width: 95%;
    background: transparent;
    border: 0px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0px
}
.mui-grid-view.mui-grid-9 .mui-media{
    color: white;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    color: white;
}
.font{
    padding-top:10px; 
    font-size: 25px;
    font-weight: normal;
}
.font-count{
    padding-top: 10px;
    font-size: 20px
}
.font-warn{
    padding-top: 10px;
    font-size:10px
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    padding: 10px 10px 0px 10px
}
</style>