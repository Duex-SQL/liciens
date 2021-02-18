<template>
    <div class=" container">
        INDEX PAGE
    </div>
</template>

<script>
    import { onMounted } from 'vue'
    import { useStore } from 'vuex'
    import getData from '@/services/index.js'
    export default{
        name:'IndexPage',
        setup(){
            const store = useStore()
            onMounted(()=>{
                getData(store);
            })
        }
    }
</script>

<style>
    
</style>