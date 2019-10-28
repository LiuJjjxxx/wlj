<template>
	<div class="box" style="height: 500px;width: 98.3%; margin-top: 10px;padding-bottom: 10px;">
		<div class="header">xxxxxx</div>
			<v-top-two></v-top-two>
			<v-bottom-two></v-bottom-two>
		</div>
	</div>
</template>
<script>
	import analysistoptwo from 'components/bottom_right/analysis-top'
	import analysisbottomtwo from 'components/bottom_right/analysis-bottom'

	export default {
		data(){
			return{
				items:[
					{name:'127.0.0.1',cpu:'30%',neicun:'50%'},
					{name:'127.0.0.2',cpu:'35%',neicun:'40%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
					{name:'127.0.0.3',cpu:'20%',neicun:'10%'},
				],
			}
		},
				 components: {
		    'v-top-two': analysistoptwo,
		    'v-bottom-two': analysisbottomtwo,
		    
  	},
	
	}
</script>
<style scoped>
td{
	color: white;
	margin: auto;
}
table{
	margin-left: 20px;
	width: 95%;
}
thead{
	font-size: 20px;
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
	 height: 450px;
	 width: 100%;
	 
}
.king-block{
	padding-top: 10px
}
</style>