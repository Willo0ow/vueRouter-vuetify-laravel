<template>
<div>
    <v-app-bar raised app dark color="orange" max-height="100px">
        <v-toolbar-title>
            <v-icon @click="$root.drawer = !$root.drawer">menu</v-icon>
            <span class="font-weight-light">ToDo</span>
            <span class="text-uppercase font-weight-medium">App</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text>Sign Out</v-btn>
            <v-icon>exit_to_app</v-icon>
        </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer app v-model="$root.drawer" dark class="yellow darken-4">
        <p></p>
        <p class="text-right"><v-icon @click="$root.drawer = !$root.drawer" left="true">highlight_off</v-icon></p>
        <p>some text</p>
    </v-navigation-drawer>
</div>
</template>

<script>
    export default {
        data(){
            return{
                drawer:false
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
