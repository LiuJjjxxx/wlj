<template>
	<div class="box" style="height: 500px;width: 100%; margin-top: 10px;padding-bottom: 10px;">
		<div class="header">总流量进出口趋势图</div>
		<v-top></v-top>
		<v-bottom></v-bottom>
	</div>
</template>
<script>
	import analysistop from 'components/bottom_left/analysis-top'
	import analysisbottom from 'components/bottom_left/analysis-bottom'

	export default {
		data(){
			return{
			}
		},
		
		components: {
			'v-top': analysistop,
			'v-bottom': analysisbottom,
						
  	},
	
	}
</script>

<style scoped>
</style>