<template>
   <v-app-bar app dark color="orange" dareken-2 max-height="100px"> 
       <v-toolbar-title class="headline">
           <v-icon>home</v-icon>
        <span>ToDoApp</span>
       </v-toolbar-title>
   </v-app-bar>
    <!--    <v-content>
    <v-btn class="pink white--text" depressed>Click me</v-btn>
       <v-btn text color="pink">Click me</v-btn>
       <v-btn dark>lalallala</v-btn>
       <v-btn light small><v-icon small left>email</v-icon><span>Email</span></v-btn>
       <v-btn fab light small><v-icon small left style="margin:0 auto">favorite</v-icon></v-btn>
   </v-content> -->
   <!--                     <v-spacer></v-spacer>
                    <footer>
                        <ul>
                            <li><router-link to="/">Main page -ex comp</router-link></li>
                            <li><router-link to="/dummy">Dummy</router-link></li>
                        </ul>
                    </footer> -->
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
