<template>
    <div>
        {{$route.params.id}} orderset
    </div>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
