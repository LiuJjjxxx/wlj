<template>
		<div class="animation-line"></div>
</template>

<script>
</script>

<style>
	.animation-line{
	position: absolute;
	top: 0px;
 	left: 31%;
 	width: 38%;
 	height: 100%;
 	display: block;
 	box-sizing: border-box;
	}
.animation-line:before{
	content: '';
  position: absolute;
  width:100%;
  height: 2px;
  background: #049ae3;
  animation: animate 4s linear infinite  ;
  animation-direction:alternate
}
.animation-line
{
  transform:rotate(180deg);
}
@keyframes animate {
  0% {
  transform:scaleX(0);
  transform-origin: left;
  }
  50%
  {
    transform:scaleX(1);
  transform-origin: left;
  }
  50.1%
  {
    transform:scaleX(1);
  transform-origin: right;
    
  }
  100%
  {
    transform:scaleX(0);
  transform-origin: right;    
  }  
} 
</style>