<template>
    
            <div class="Typedemaison grid gap-2 grid-cols-1  block m-0 m-auto mb-8 w-4/5 md:w-3/4 lg:w-3/5">

                    <div   class="confirmcuisine grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-24 xl:gap-2">
                    
                        <div class="inptt flex w-full">
                            <input class="checkbox-viager" type="radio" name="typedechauffage" id="Plain" checked>
                            <label class="for-checkbox-tools" for="Plain">
                            Plain pied
                            </label>
                        </div>

                        <div class="inptt flex w-full">
                            <input class="checkbox-viager" type="radio" name="typedechauffage" id="À Étage">
                            <label class="for-checkbox-tools" for="À Étage">
                            À Étage
                            </label>
                        </div>

                        <div class="inptt flex w-full">
                            <input class="checkbox-viager" type="radio" name="typedechauffage" id="Contemporaine">
                            <label class="for-checkbox-tools" for="Contemporaine">
                            Contemporaine
                            </label>
                        </div>
                        
                    </div>

            </div>

</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

// .Typedemaison{
//     position: relative;
//     left: 2rem;
// }
.inptt3{
    width: 50%;
}
.naturedechauffage{
    label{
        font-family: $gr;
        color: #929395;
    }
}

input:focus{
  outline:none;
}

// 

.checkbox-viager:checked,
.checkbox-viager:not(:checked){
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
    height: 5rem;
	width: 9rem;
	font-size: 12.3px;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	margin-left: 0px;
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
.checkbox-viager:not(:checked) + label{
    border: 1px solid #D4D6DC;
    background-color: transparent;
    color: rgba(49, 49, 50, 0.5);
}
.checkbox-viager:checked + label{
    background-color: #E9F0F8;
    color:$main;
    border: 1px solid $main;
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


@media (min-width: 768px) { 
    .Typedemaison{
        margin-left:20%;
	}
	

}
@media (min-width: 1024px) { 
    .Typedemaison{
        margin-left:23%
    }

}

</style>