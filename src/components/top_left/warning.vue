<template>
  <div class="box">
	<div class="header">告警事件</div>
	<div>
		<ul>
			<li v-for="(item, index) in items" v-if="index < 4"><span>【{{item.priority | levle}}】</span>{{item.descrtiption | filterFun}}<span class="date">{{item.last_change |filterTime("-")}}</span></li>
		</ul>
	</div>
	
  </div>
</template>

<script>

export default {
	data(){
		return{
			items:[],
		}	
	},
		filters: {

			filterTime:function (time,seprator) {
                    time=new Date(time*1000)  //看情况加
                       //3.写处理逻辑
                    let m = (time.getMonth() + 1).toString().padStart(2,'0')
                    let d = time.getDate().toString().padStart(2,'0')
                    let h = time.getHours().toString().padStart(2,'0')
                    let mm = time.getMinutes().toString().padStart(2,'0')
                    // 4 这个处理函数比如return 一个数据
                    return  m + seprator + d + ' ' + h + ':' + mm
                    },
            filterFun: function (value) {
                if(value&& value.length > 13) {
                    value= value.substring(0,23)+'..';
                    }
                return value;
				},
			levle: function (value) {
				console.log(value)
				switch(value){
					case "0":
						value = "未分类"
						break;
					case "1":
						value = "信息"
						break;
					case "2":
						value = "告警"
						break;
					case "3":
						value = "平均"
						break;
					case "4":
						value = "高"
						break;
					default:
						value = "灾难"
				}
                return value;
                }
		},
		mounted() {
			var sthis = this
			fetch("http://172.16.15.193:8069/sz/json?model=zabbix.trigger&name=descrtiption&name2=priority&name3=last_change&limit=4",{
				method:'get'}).then(function(data){
					return data.json();
				}).then(function(data){
					if (data == 0){
							sthis.items = [{priority:'1',descrtiption:'暂无数据',last_change:new Date()}]
						}else {
							sthis.items = data
							}
				}).catch(function(erro){
					console.log('告警事件接口获取失败')
				});
		},

}
</script>

<style>
ul>li{
	padding-top: 20px;
	padding-left: 10px;
	text-align: left;
	color: white;
}
ul>li>span{
	color: #049ae3;
}
.date{
	padding-right: 20px;
	float: right;
}
</style>
