<template>
   <v-content>
       <v-container fluid>
           <v-row>
               <v-col>

                    <v-card min-height="300px" raised>
                        <v-card-title>Dummy
                        </v-card-title>
                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo similique amet illo tempore, libero ut dolorem iure odio fuga soluta, nesciunt recusandae natus maxime quae cupiditate porro omnis aliquid.</v-card-text>
                        <div d-flex align-justify-center>
                            <v-btn @click="alert('Button clicked')" d-flex>See more</v-btn>
                        </div>
                    </v-card>
                </v-col>
                <v-col>

                    <v-card min-height="300px" raised>
                        <v-card-title>Dummy
                        </v-card-title>
                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo similique amet illo tempore, libero ut dolorem iure odio fuga soluta, nesciunt recusandae natus maxime quae cupiditate porro omnis aliquid.</v-card-text>
                        <v-btn @click="alert('Button clicked')">See more</v-btn>
                    </v-card>
                </v-col>
           </v-row>

    <v-row>
               <v-col>

                    <v-card min-height="300px" raised>
                        <v-card-title>Dummy
                        </v-card-title>
                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo similique amet illo tempore, libero ut dolorem iure odio fuga soluta, nesciunt recusandae natus maxime quae cupiditate porro omnis aliquid.</v-card-text>
                        <v-btn @click="alert('Button clicked')">See more</v-btn>
                    </v-card>
                </v-col>
                <v-col>

                    <v-card min-height="300px" raised>
                        <v-card-title>Title 4</v-card-title>
                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo similique amet illo tempore, libero ut dolorem iure odio fuga soluta, nesciunt recusandae natus maxime quae cupiditate porro omnis aliquid.</v-card-text>
                        <v-btn @click="alert('Button clicked')">See more</v-btn>
                    </v-card>
                </v-col>
           </v-row>
    <v-row>
               <v-col>

                    <v-card min-height="300px" raised>
                        <v-card-title>Title 5</v-card-title>
                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo similique amet illo tempore, libero ut dolorem iure odio fuga soluta, nesciunt recusandae natus maxime quae cupiditate porro omnis aliquid.</v-card-text>
                        <v-btn @click="alert('Button clicked')">See more</v-btn>
                    </v-card>
                </v-col>
                <v-col>

                    <v-card min-height="300px" raised>
                        <v-card-title>Title 6</v-card-title>
                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo similique amet illo tempore, libero ut dolorem iure odio fuga soluta, nesciunt recusandae natus maxime quae cupiditate porro omnis aliquid.</v-card-text>
                        <v-btn @click="alert('Button clicked')">See more</v-btn>
                    </v-card>
                </v-col>
           </v-row>
       </v-container>
   </v-content>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
