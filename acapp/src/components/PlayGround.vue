<template>
    <div class="playground">
        <GameMap></GameMap>
    </div>
</template>

<script>
import GameMap from "@/components/GameMap.vue"
export default{
    components :{
        GameMap
    }
}
</script>


<style scoped>
div.playground{
    width: 60vw;
    height: 70vh;
    /* background: rgb(100,100,100); */
    margin: 40px auto;
}
</style>









