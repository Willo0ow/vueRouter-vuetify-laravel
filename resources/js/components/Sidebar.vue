<template>
<div>
    <v-navigation-drawer v-model="drawer" color="indigo darken-2" :mini-variant.sync="mini" permanent app dark width="300px">
        <v-list-item  class="px-2">
            <v-list-item-avatar>
                <v-icon>widgets</v-icon>
            </v-list-item-avatar>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="mini = !mini">
                <v-icon >chevron_left</v-icon>
            </v-btn>
        </v-list-item>
        <v-divider></v-divider>

        <template v-for="el of items">
            <v-divider v-if="['UserName','Planowanie Produkcji'].indexOf(el.title)>=0"></v-divider>
          <v-list-item :key="el.title">
            <v-list-item-icon>
              <v-img :src="el.src" v-if="['Ustawienia', 'UserName','Strona Główna'].indexOf(el.title)<0"></v-img>
              <v-icon v-else>{{el.src}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link :to="el.link">
                <v-list-item-title class="font-weight-medium" @click="mini = !mini">{{el.title}}</v-list-item-title>
              </router-link>
              <router-link :to="el.sublink" v-if="el.title=='UserName'">
                <v-list-item-subtitle>Wyloguj</v-list-item-subtitle>
              </router-link>
            </v-list-item-content>
          </v-list-item>
            
        </template>

      </v-navigation-drawer>
</div>
</template>

<script>
    export default {
        data(){
            return{
                items:[
                  { title: 'Strona Główna', src: 'home',link:'main-comp'},
                    { title: 'Planowanie Produkcji', src: '/images/plan.png',link:'planowanie'},
                    { title: 'Analiza Produkcji', src: '/images/chart.png',link:'dummy' },
                    { title: 'Sterowanie Maszyn', src:'/images/sett.png', link:'dummy' },
                    { title: 'UserName', src:'person', link:'dummy', sublink:'dummy'},
                    {title: 'Ustawienia', src: 'settings', link:'dummy' }
                ],
                drawer:true,
                mini:true
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
        
    }
</script>
<style scoped>
  a{
    text-decoration: none;
  }
  a div{
    color: white;
  }
</style>