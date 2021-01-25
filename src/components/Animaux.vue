<template>
    
            <div class="Meuble block m-0 m-auto mb-6 w-4/5 md:w-3/4 lg:w-3/5 ">

                <input class="checkbox-tools" type="radio" name="Animaux1" id="Animaux1"  >
                <label @click="Viager=true" class="for-checkbox-tools" for="Animaux1">
                Oui
                </label>
                <input class="checkbox-tools" type="radio" name="Animaux1" id="Animaux2"  >
                <label @click="Viager=false" class="for-checkbox-tools" for="Animaux2">
                Non
				</label>
            </div>


</template>

<script>

export default {
 name: 'Animaux',
  props: {
  },
  data() {
      return {
		Viager:true,
		nmbr:Number,
		ages:[],
		message:"",
		flag:false,
      }

	},
	mounted () {
      const timer = setInterval(() =>{
        if (this.ifUp) {
          this.percent = this.percent + 10
          this.percent == 100 ? this.ifUp = false : this.ifUp = true
        } else {
          this.percent = this.percent - 10
          this.percent == 10 ? this.ifUp = true : this.ifUp = false
        }
      }, 1000);
      this.$once('hook:beforeDestroy', () => clearInterval(timer));
    },




}
</script>

<style  scoped lang="scss">
@import "../scss/main.scss";

.warning{

	background-color: #fc5c65;
	border-radius: 7px;
	padding-left: 12px;
	padding-top: 12px;
	p{
		font-family: $gr;
		color:white;
		font-size: 0.92rem;
	}

}

////////////////// First radio form ////////////
[type="radio"]:checked,
[type="radio"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label{
	position: relative;
	display: inline-block;
    font-family: $gsb;
    padding-top: 22px;
    height: 3.7rem;
	width: 3.7rem;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	margin-left: 5px;
	margin-right: 5px;
	margin-bottom: 10px;
	text-align: center;
	border-radius: 4px;
	overflow: hidden;
	cursor: pointer;
	color: #F3F4F8;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}
.checkbox-tools:not(:checked) + label{
	background-color: #8AC4FA;
}
.checkbox-tools:checked + label{
	background-color: $main;
}
.checkbox-tools:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before{
	position: absolute; 
	content: '';
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 4px;
	background-image: linear-gradient(298deg, var(--red), var(--yellow));
	z-index: -1;
}
.checkbox-tools:checked + label .uil,
.checkbox-tools:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
}

@media (min-width: 768px) { 
    .Meuble{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Meuble{
        margin-left:23%
    }

}
</style>