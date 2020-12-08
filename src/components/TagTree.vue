<template>
  <v-container>
    <v-btn @click="addLabel" color="success" class="mb-2">
      <v-icon>mdi-tag-plus</v-icon>
      <span>New Tag</span>
    </v-btn>
  
    <vue-tree-list
      @delete-node="deleteElement"
      :model="labels"
      default-tree-node-name="new label"
      default-leaf-node-name="new label"
    >
      <span class="icon ma-1" slot="addTreeNodeIcon"
        ><v-icon>mdi-tag-plus</v-icon></span
      >
      <span class="icon ma-1" slot="editNodeIcon"
        ><v-icon>mdi-pencil</v-icon></span
      >
      <span class="icon ma-1" slot="delNodeIcon"
        ><v-icon>mdi-delete</v-icon></span
      >
      <span class="icon ma-1" slot="addLeafNodeIcon"
        ><v-icon>mdi-plus-box</v-icon></span
      >
      <span class="icon ma-1" slot="leafNodeIcon"
        ><v-icon>mdi-tag</v-icon></span
      >
      <span class="icon ma-1" slot="treeNodeIcon"
        ><v-icon>mdi-tag-multiple</v-icon></span
      >
    </vue-tree-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";

export default Vue.extend({
  name: "TagTree",
  components: {
    VueTreeList,
  },
  data() {
    return {
      //this must be taken from the database from the user profile
      newTree: {},
      labels: new Tree([
        {
          name: "Fantasy",
          id: 1,
          pid: 0,
          //  dragDisabled: true,
          children: [
            {
              name: "Romantic Fantasy",
              id: 2,
              isLeaf: true,
              pid: 1,
            },
          ],
        },
        {
          name: "Horror",
          id: 3,
          pid: 0,
        },
        {
          name: "Crime",
          id: 4,
          pid: 0,
        },
      ]),
    };
  },
  methods: {
    addLabel: function () {
      var node = new TreeNode({ name: "New Tag", isLeaf: false });
      if (!this.labels.children) this.labels.children = [];
      this.labels.addChildren(node);
    },
    deleteElement(node) {
      node.remove();
    },
  },
});
</script>

<style>
  .icon:hover {
    cursor: pointer;
  }
</style>