<template>  

    <div class="visitehwatsapp m-0 m-auto  mb-6 w-4/5 sm:ml-0 md:ml-32 md:w-3/4 lg:w-3/5">

    
        <div class="ps h-32 p-2 flex-col sm:flex-row sm:pt-4 md:h-16 flex w-full mt-6">

            <div class="emoji mr-2 mt-4 sm:mt-0">
                <img class="w-8" src="../assets/Pics/Annoncewhatsappemoji.svg">
            </div>

            <h6>Acceptez-vous des visites sur whatsapp ?</h6>



        </div>

        <div class="consomation  flex mt-6  md:block md:flex md:gap-0 mb-6 w-4/5 md:w-3/4 lg:w-3/5">
               <div>
                    <input class="checkbox-tools" type="radio" name="Consomationenergetique" id="Aconsomation">
                    <label class="A for-checkbox-tools" for="Aconsomation">
                        Oui
                    </label>
                </div>

                <div>
                    <input class="checkbox-tools" type="radio" name="Consomationenergetique" id="Bconsomation">
                    <label  class="B for-checkbox-tools" for="Bconsomation" id="B">
                    Non
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

/////////////// First radio form ////////////


// .visitehwatsapp{
//     position: relative;
//     left: 2rem;
// }

::placeholder{
    color:#000000;
}


.fltr{
    height: 3.5rem;
}

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
    height: 3.5rem;
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
// .checkbox-tools:not(:checked) + label{
// 	background-color: #8AC4FA;
// }

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


.A{
    background-color: #0DDB9D;
}
.B{
    background-color: #FF7675;
}


.ps{
    background-color: #D4D7DF;
    padding-left: 1rem;
    border-radius: 10px;
}
h6{
    font-family: $gm;
    color:#8C92A4;
    font-size: 1rem;
}

@media (min-width: 768px) { 
    .visitehwatsapp{
        margin-left:20%;
        text-align: left;
	}


}
@media (min-width: 1024px) { 
    .visitehwatsapp{
        margin-left:23%
    }

}
</style>