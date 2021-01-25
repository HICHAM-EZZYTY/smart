<template>
    
            <div class="Typedelogement grid grid-cols-1  block m-0 m-auto mb-8 w-4/5 md:w-3/4 ">

                    <div   class="confirmcuisine grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  xl:gap-6">
                    
                        <div class="inptt col-span-1" >
                            <input class="checkbox-viager" type="radio" name="typedeTypedelogement" id="Appartement" checked>
                            <label id="immédiat" class="for-checkbox-tools" for="Appartement">
                            Appartement
                            </label>
                        </div>

                        <div class="inptt col-span-1">
                            <input class="checkbox-viager" type="radio" name="typedeTypedelogement" id="Maison">
                            <label class="for-checkbox-tools" for="Maison">
                            Maison
                            </label>
                        </div>

                        <div class="inptt col-span-1">
                            <input class="checkbox-viager" type="radio" name="typedeTypedelogement" id="Loft">
                            <label class="for-checkbox-tools" for="Loft">
                            Loft
                            </label>
                        </div>

                        <div class="inptt col-span-1">
                            <input class="checkbox-viager" type="radio" name="typedeTypedelogement" id="Autre">
                            <label class="for-checkbox-tools" for="Autre">
                            Autre
                            </label>
                        </div>

                                                
                    </div>

            </div>

</template>

<script>
export default {
    name: 'Typedelogement'
}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";


.naturedeTypedelogement{
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
	width: 10rem;
	font-size: 15px;
    left: 0rem;
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
#immédiat{
    width: 10rem;

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

@media (min-width: 640px) { 
 .checkbox-viager:checked + label,
.checkbox-viager:not(:checked) + label{

    width: 10rem;

}
}

@media (min-width: 768px){

.confirmcuisine{
    margin-left: 20%;
}

}


@media (min-width: 1024px) { 
    .Typedelogement{
        width: 66%;
    }
    .confirmcuisine{
    margin-left: 9%;
}
 .checkbox-viager:checked + label,
.checkbox-viager:not(:checked) + label{
    width: 9rem;
}
#immédiat{
    width: 10rem;
}

}
@media (min-width: 1280px){
    .confirmcuisine{
        grid-gap: 1.5rem;
        gap: 0rem;
    }

}


</style>