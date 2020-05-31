<template>
<div>
    <v-navigation-drawer v-model="drawer" color="indigo darken-2" :mini-variant.sync="mini" permanent app dark width="300px">
        <v-list-item  class="px-2">
            <v-list-item-avatar>
                <v-icon>widgets</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <router-link to='main-comp'><v-list-item-title class="font-weight-bold">Strona Główna</v-list-item-title></router-link>
            </v-list-item-content>
            <v-btn icon @click.stop="mini = !mini">
                <v-icon >chevron_left</v-icon>
            </v-btn>
        </v-list-item>
        <v-divider></v-divider>
          <v-list-item  class="px-2">
            <v-list-item-avatar>
              <v-icon >person</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">UserName</v-list-item-title>
              <v-list-item-subtitle>Wyloguj</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
        <template v-for="el of items">
            <v-divider v-if="el.title=='Ustawienia'"></v-divider>
          <v-list-item :key="el.title">
            <v-list-item-icon>
              <v-img :src="el.src" v-if="el.title!='Ustawienia'"></v-img>
              <v-icon v-else>settings</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link :to="el.link"><v-list-item-title class="font-weight-medium" @click="mini = !mini">{{el.title}}</v-list-item-title></router-link>
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
                    { title: 'Planowanie Produkcji', src: '/images/plan.png',link:'dummy'},
                    { title: 'Analiza Produkcji', src: '/images/chart.png' },
                    { title: 'Sterowanie Maszyn', src:'/images/sett.png' },
                    {title: 'Ustawienia', src: '/images/sett.png' }
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
