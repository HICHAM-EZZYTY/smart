<template>  

    <div class="textarea m-0 m-auto  mb-6 w-4/5 sm:ml-0 md:ml-32  gl:ml-32 xl:ml-64  md:w-3/4 lg:w-3/5">

        <textarea class="w-full h-40">

        </textarea>
        
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

// .textarea{
//     position: relative;
//     left: 2rem;
// }
textarea {
  resize: none;
  background-color: transparent;
  border : 1px solid #D4D6DC;
  border-radius: 4px;
}
textarea:focus{
    outline: none;
	border: 1px solid $main;
	color:$main;
}

@media (min-width: 768px) { 
    .textarea{
        margin-left:20%;
        text-align: left;
	}

}
@media (min-width: 1024px) { 
    .textarea{
        margin-left:23%
    }

}

</style>