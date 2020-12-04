<template>
    <v-app>
    
    <NavigationDrawer/>

    <v-main>
        <v-container align-content-lg >
            {{ $route.params.id }}
        </v-container>
    </v-main>


  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue';

export default {
    name: 'Dashboard',
    components:{
        NavigationDrawer,
    },
    props: [
        'id'
    ]
}
</script>