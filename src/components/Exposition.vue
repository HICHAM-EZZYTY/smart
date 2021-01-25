<template>

                <div class="exposition block m-0 m-auto mb-4 w-4/5 md:w-3/4 lg:w-3/5">  
                      <div   class="confirmcuisine grid  grid-cols-2 mt-6 gap-0 w-4/5 md:w-3/5 md:grid-cols-5 md:gap-12 md:m-0 md:mt-6 lg:gap-8 xl:gap-0">             
                            <input class="checkbox-viager" type="checkbox"  id="Nord"  >
                            <label class="for-checkbox-tools" for="Nord">
                            Nord
                            </label>

                            <input class="checkbox-viager" type="checkbox"  id="Sud"  >
                            <label class="for-checkbox-tools" for="Sud">
                            Sud
                            </label>

                            <input class="checkbox-viager" type="checkbox"   id="Est">
                            <label class="for-checkbox-tools" for="Est">
                            Est
                            </label>

                            <input class="checkbox-viager" type="checkbox"   id="Ouest">
                            <label class="for-checkbox-tools" for="Ouest">
                            Ouest
                            </label>
                            
                           
                         </div>
                    </div>              
  
</template>

<script>
export default {
  name: 'Espace',
  props: {
  },
  data() {
      return {

      }

    },
    methods: {

    }

}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

/////////// Start of the second radioo form

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.checkbox-viager:checked + label,
.checkbox-viager:not(:checked) + label{
	position: relative;
	display: inline-block;
    font-family: $gr;
    padding-top: 30px;
    // height: 5rem;
    // width: 8rem;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
	font-size: 15px;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	margin-left: 0px;
	margin-right: 5px;
	margin-bottom: 10px;
	text-align: center;
	overflow: hidden;
	cursor: pointer;
	color: #F3F4F8;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}
.checkbox-viager:not(:checked) + label{
    border: 1px solid $main;
    background-color: transparent;
    color: $main;
}
.checkbox-viager:checked + label{
    background-color: $main;
    color: white;
}
.checkbox-viager:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
}
.checkbox-viager:checked + label::before,
.checkbox-viager:not(:checked) + label::before{
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
.checkbox-viager:checked + label .uil,
.checkbox-viager:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
}

////////// End of the second radio form

@media (min-width: 400px) { 
    .confirmcuisine {
        grid-template-columns:repeat(3, minmax(0, 1fr));
        gap:8px
    }

}

@media (min-width: 500px) { 
    .confirmcuisine {
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 94px;
    }

}


@media (min-width: 768px) { 
    .exposition{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .exposition{
        margin-left:23%
    }

}
</style>