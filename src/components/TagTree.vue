<template>
  <v-container>
    <vue-tree-list
      @click="onClick"
      @delete-node="deleteElement"
      :model="labels"
      default-tree-node-name="new label"
      default-leaf-node-name="new child_label"
    >
      <span class="icon" slot="addTreeNodeIcon">📂</span>
      <span class="icon" slot="editNodeIcon">📃</span>
      <span class="icon" slot="delNodeIcon">❌</span>
      <span class="icon" slot="addLeafNodeIcon">➕</span>
      <span class="icon" slot="leafNodeIcon">🏷️</span>
      <span class="icon" slot="treeNodeIcon">🏷️</span>
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
      labels: new Tree([
        {
          name: "Node 1",
          id: 1,
          pid: 0,
          //  dragDisabled: true,
          children: [
            {
              name: "Node 1-2",
              id: 2,
              isLeaf: true,
              pid: 1,
            },
          ],
        },
        {
          name: "Node 2",
          id: 3,
          pid: 0,
        },
        {
          name: "Node 3",
          id: 4,
          pid: 0,
        },
      ]),
    };
  },
  methods: {
    addLabelChild: function () {
      var node = new TreeNode({ name: "new node", isLeaf: false });
      if (!this.data.children) this.data.children = [];
      this.data.addChildren(node);
    },
    deleteElement(node) {
      node.remove();
    },
  },
});
</script>
