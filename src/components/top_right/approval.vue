<template>
	<div class="box" style="height: 210px;width: 100%; margin-top: 10px;padding-bottom: 10px;">
		<div class="header">磁盘大小排行榜 Top 15</div>
		<div class="col-md-4">
                        <div class="king-block king-block-themed bk-ranger-box mb10" id="disk_sum">
                            <div class="ranger-wrapper">
                                <table class="mb0 pr15 ranger-header-box color">
                                    <thead class="font1">
										<td style="height:20px">排名</td>
										<td	>设备名称
										</td>
										<td>磁盘大小
											<span  :class="{'on_click_true': !original }" @click="orderFn('disk_usage', false)">↑</span>
											<span  :class="{'on_click_true': original }" @click="orderFn('disk_usage', true)">↓</span>
										</td>
                                    </thead>
									<tbody id="">
                                        <tr v-for="(item,key) in list" :key="key" v-if='key<15'>
                                            <td style="height:30px">{{key+1}}</td>
											<td>{{item.name}}</td>
											<td>{{item.disk_usage | diskfilte}}</td>
                                        </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
	</div>
</template>
<script>
	import analysistop from 'components/bottom_left/analysis-top'
	import analysisbottom from 'components/bottom_left/analysis-bottom'

	export default {
		data(){
			return{
				goodsList:[],
				letter:'disk_usage',       //默认不排序 // 排序字段
            	original:true,   //默认从小到大排列
			}
		},
		methods:{
            orderFn(letter,original){
                this.letter = letter; //排序字段
                this.original = original; //排序方式
			}
		},
		mounted(){
			var _this = this
			fetch('http://172.16.15.193:8069/sz/json?model=zabbix_host&name=disk_usage&name2=name',{
				method:'get'
			}).then(rs=>{
				return rs.json()
			}).then(data=>{
				_this.goodsList = []
				_this.goodsList = data
			})

		},
		filters:{
			diskfilte:value=>{
				if(value === false)
					value = '0'
				else
					value = value.slice(0,5) +'%'
				return value
			}
		},
		  computed:{
            list: function() {
                var _this = this;
                // 筛选
                var arrGoods = [];
                for (var i = 0;i < this.goodsList.length; i++)
                {
                    // 如果匹配成功, 向空数组添加数据
                    if (this.goodsList[i].name.search(this.searchVal) != -1) {
                        arrGoods.push(this.goodsList[i]);
                    }
                }

                // 升序降序排列
                // false:升序  true:降序
                if (this.letter != '') {
                    arrGoods.sort(function(a,b){
                        if(_this.original){
                            return b[_this.letter] - a[_this.letter];
                        }else{
                            return a[_this.letter] - b[_this.letter];
                        }
                    });
                }
                _this.total = 0;
                for (var i = 0;i < arrGoods.length; i++){
                    _this.total += arrGoods[i].price;
                }
                return arrGoods;
            },
        },
	
	}
</script>

<style>
td{
	color: white;
	margin: auto;
}
table{
	margin-left: 20px;
	width: 95%;
}
thead{
	font-size: 10px;
	text-align: center;
	box-shadow: inset 0px 0px 8px 10px #0e254e;
    width: 100%;
	max-width: 100%;
    border-top-left-radius: 13%;
    border-top-right-radius: 13%;
}
tbody{
	text-align: center;
	font-family: 'Audiowide';
    color: rgb(188,188,255);
    text-shadow: 0 0 10px blue;
}
.font1{
	font-family: 'Audiowide';
    text-align: center;
    color: rgb(188,188,255);
    text-shadow: 0 0 10px blue;
}
.ranger-wrapper{
	 overflow: scroll;
	 height: 160px;
	 width: 100%;
	 
}
.king-block{
	padding-top: 10px
}
tr:hover{
	            box-shadow:inset 1px 3px 20px 0px rgba(10,10,255,.3);

}
.on_click_true{
    text-shadow: 0 0 10px red;
	color: red;
}
</style>