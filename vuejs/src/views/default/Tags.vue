<template>
    <v-container fluid class="ma-2">
        <tag-tree/>
    </v-container>
</template>

<script>
import TagTree from '@/components/TagTree.vue'

export default {
    name:"Tags",
    components:{
        TagTree
    }
}
</script>