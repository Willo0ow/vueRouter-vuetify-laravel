<template>
<v-container fluid class='fill-height'>
   <v-row justify="center">

    <v-date-picker
    color="indigo"
    header-color="orange"
      v-model="$root.data"
      landscape
      reactive
      show-current
      :event-color="eventColors()"
      type="date"
      :events="functionEvents()"
      width="500px"
      locale="pl"
      first-day-of-week="1"
    >
    <router-link :to="link" v-slot><v-btn>Click me</v-btn></router-link>
    </v-date-picker>
  </v-row>

</v-container>
</template>

<script>
import format from 'date-fns/format'
    export default {
    data () {
      return {
          // :title-date-format="dateFormat(date)"
        date: new Date().toISOString().substr(0, 10),
        paczki: [
            {data:'2020-05-13', orderset:''}, 
            {data:'2020-05-14', orderset:'sth'}, 
            {data:'2020-05-19', orderset:''}, 
            {data:'2020-05-20', orderset:'sth'}, 
            {data:'2020-05-21', orderset:''}, 
            {data:'2020-05-27', orderset:'sth'},]
      }
    },

    computed: {
        link(){
            let rec = this.$root.ordersets.find((el)=>el.date==this.$root.data)
            if (rec == undefined){return '/orderset'}
            return "/orderset/" + (rec.id).toString()
        },
        events(){
            return this.$root.ordersets.map((el)=>el.date)
        }
    },

    methods: {
        dummy(){return alert('event on date', this.$root.data)},
      functionEvents () {
        return this.$root.ordersets.map((el)=>el.date)
      },
      eventColors(){
          let d =  new Date().toISOString().substr(0, 10)
        return this.events.reduce((res,val)=>{
            res[val.data] = (d.getDate()<=val.data.getDate()? 'green': 'orange')
            return res
        }, {})
      }
    },
  }

</script>
<style scoped>
.theme--light.v-picker__body{
    background: none!important;
}
.theme--light.v-card{
    background-color: rgba(250,250,250,0.6);
}
</style>
