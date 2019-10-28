<template>
  <div class="box">
	<div class="header">告警通知</div>
	<div class="notice">
		<ul>
			<li v-for="(item, index) in items" v-if="index < 4">
				<span>{{item.recive_user[1]}}</span>
				<a>{{item.types}}</a>
				{{item.event_id[1] | filterFun}}
				<span class="date">{{item.time | filterTime('-') }}</span>
			</li>
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
            filterFun: function (value) {
                if(value&& value.length > 9) {
                    value= value.substring(0,9)+'...';
                    }
                return value;
                },
            filterTime:function (time,seprator) {
                    time=new Date(time*1000)  //看情况加
                       //3.写处理逻辑
                    let m = (time.getMonth() + 1).toString().padStart(2,'0')
                    let d = time.getDate().toString().padStart(2,'0')
                    let h = time.getHours().toString().padStart(2,'0')
                    let mm = time.getMinutes().toString().padStart(2,'0')
                    // 4 这个处理函数比如return 一个数据
                    return  m + seprator + d + ' ' + h + ':' + mm
                    }
        },
		mounted(){
			var uthis = this
			fetch("http://172.16.15.193:8069/sz/json?model=alarm.event&name=types&name2=recive_user&name3=event_id&limit=4",{
				method:'get'
			}).then(function(rs){
				return rs.json()
			}).then(function(data){
				uthis.items = data
			})
		}
      }
</script>

<style>
.notice>ul>li{
	padding-top: 20px;
	padding-left: 25px;
	text-align: left;
	color: #029de7;
}
.notice>ul>li>span{
	color: white;
}
.notice>ul>li>a{
	padding-right: 10px;
	font-size: 1px;
}
.date{
	padding-right: 20px;
	float: right;
}
</style>
