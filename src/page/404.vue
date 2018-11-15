<template>
    <div class="bedRequest">
        <img @click="goLogin" src="../assets/404.jpg" alt="">
    </div>

</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        goLogin(){
            this.$router.push('/login');
        }
    }
}
</script>

<style>
    .bedRequest{
        width: 100%;
    }
    .bedRequest img {
      width: 100%;
    }
</style>
