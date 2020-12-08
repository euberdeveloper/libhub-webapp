<template>
  <v-container>
    <vue-tree-list
      :model="tags"
      default-tree-node-name="new parent_tag"
      default-leaf-node-name="new child_tag"
    >
      <span class="icon" slot="addTreeNodeIcon">📂</span>
      <span class="icon" slot="editNodeIcon">📃</span>
      <span class="icon" slot="delNodeIcon">❌</span>
      <span class="icon" slot="addLeafNodeIcon">➕</span>
      <span class="icon" slot="leafNodeIcon">🏷️</span>
      <span class="icon" slot="treeNodeIcon">📂</span>
    </vue-tree-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { VueTreeList, Tree } from "vue-tree-list";

export default Vue.extend({
  name: "TagTree",
  components: {
    VueTreeList,
  },
  data() {
    return {
      //this must be taken from the database from the user profile
      tags: new Tree([
        {
          name: "Tag 1",
          id: 1,
          pid: 0,
          //  dragDisabled: true,
          children: [
            {
              name: "Tag 1-2",
              id: 2,
              isLeaf: true,
              pid: 1,
            },
          ],
        },
        {
          name: "Tag 2",
          id: 3,
          pid: 0,
        },
        {
          name: "Tag 3",
          id: 4,
          pid: 0,
        },
      ]),
    };
  },
});
</script>
