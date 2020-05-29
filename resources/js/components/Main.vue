<template>
   <v-content>
<v-btn class="pink white--text" depressed>Click me</v-btn>
       <v-btn text color="pink">Click me</v-btn>
       <v-btn dark>lalallala</v-btn>
       <v-btn light small><v-icon small left>email</v-icon><span>Email</span></v-btn>
       <v-btn fab light small><v-icon small left style="margin:0 auto">favorite</v-icon></v-btn>
   </v-content>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
