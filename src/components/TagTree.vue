<template>
  <v-container fluid>
    <v-btn @click="addLabel" color="success" class="mb-2">
      <v-icon>mdi-tag-plus</v-icon>
      <span>New Tag</span>
    </v-btn>

    <vue-tree-list
      @delete-node="deleteElement"
      @add-node="onAddNode"
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
      <template v-slot:treeNodeIcon="slotProps">
        <span class="icon ma-1" slot="treeNodeIcon">
          <v-menu offset-y :close-on-content-click="false">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" :style="getColorStyle(slotProps)"
                >mdi-tag-multiple
              </v-icon>
            </template>
            <v-card>
              <v-row>
                <v-color-picker
                  persistent
                  v-model="picker"
                  elevation="15"
                  @update:color="changeColor(slotProps)"
                  hide-canvas
                  hide-mode-switch
                ></v-color-picker>
              </v-row>
            </v-card>
          </v-menu>
        </span>
      </template>
    </vue-tree-list>
  </v-container>
</template>

<script >
import { 
  getLabelsLid
   } from "@/services/api/libraries/index.js";
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
      picker: null,
      labels_get: [],
      labels: new Tree([]),
    };
  },
  methods: {
    onAddNode(params) {
      params.addLeafNodeDisabled = true;
      params.color = "green";
    },
    changeColor(prop) {
      prop.model.color = this.picker.hex;
    },
    getColorStyle(color) {
      color = color.model.color || "red";
      return { color };
    },
    addLabel: function () {
      var node = new TreeNode({
        name: "New Tag",
        isLeaf: false,
        addLeafNodeDisabled: true,
        color: "green",
      });
      if (!this.labels.children) this.labels.children = [];
      this.labels.addChildren(node);
    },
    deleteElement(node) {
      node.remove();
    },

    createNode(node){
      let parent;
      if(node.parent === null){
        parent = "0";
      }else{
        parent = node.parent
      }
      return{
          name: node.name,
          id: node._id,
          pid: parent,
          color : node.color,
          addLeafNodeDisabled: true,
          children:node.children}
    },
    listToTree(list) {
        let map = {},
            node,
            roots = [],
            i;

      for (i = 0; i < list.length; i += 1) {
        map[list[i]._id] = i; // initialize the map
        list[i].children = [];
      }

      for (i = 0; i < list.length; i += 1) {
        
        node = this.createNode(list[i]);
        if (node.pid !== "0") {
          list[map[node.pid]].children.push(node);
        } else {
          roots.push(node);
        }
      }
      return roots
    },
  },
  async mounted() {
    const user = this.$store.getters.getUser;
    try {
      this.labels_get = await getLabelsLid(user._id, this.$route.params.lid, localStorage.getItem("accessToken"))
    }catch{
      this.labels_get = []
    }finally{
      this.labels = this.labels_get.length > 0 ? new Tree(this.listToTree(this.labels_get)) : new Tree([]);
    }
  },
});
</script>
<style>
.icon:hover {
  cursor: pointer;
}
</style>