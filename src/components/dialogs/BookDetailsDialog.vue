<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col class="d-flex align-center">
          <v-btn icon @click="close" class="mr-2">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-container class="headline">Book Details</v-container>
          <v-container class="d-flex justify-end">
            <v-slide-x-reverse-transition mode="out-in">
              <v-icon
                :key="`icon-${editingAll}`"
                :color="editingAll ? 'success' : 'info'"
                @click="editAll"
                v-text="
                  editingAll ? 'mdi-check-outline' : 'mdi-circle-edit-outline'
                "
              ></v-icon>
            </v-slide-x-reverse-transition>
          </v-container>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation style="height: 100%">
        <v-container fill-height>
          <!-- Book ISBN -->
          <v-row align="center" xs>
            <v-col>
              <v-text-field
                v-model="book.isbn"
                :hint="
                  !isEditing.isbn
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.isbn"
                :label="`ISBN — ${isEditing.isbn ? 'Editable' : 'Readonly'}`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.isbn = false"
                @change="changed = true"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.isbn}`"
                      :color="isEditing.isbn ? 'success' : 'info'"
                      @click="isEditing.isbn = !isEditing.isbn"
                      v-text="
                        isEditing.isbn
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- Book Title -->
          <v-row align="center" xs>
            <v-col>
              <v-text-field
                v-model="book.title"
                :hint="
                  !isEditing.title
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.title"
                :label="`Title — ${isEditing.title ? 'Editable' : 'Readonly'}`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.title = false"
                @change="changed = true"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.title}`"
                      :color="isEditing.title ? 'success' : 'info'"
                      @click="isEditing.title = !isEditing.title"
                      v-text="
                        isEditing.title
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- authors: false,
               publisher: false,
               publicationYear: false,
               edition: false,
               condition: false,
               ubication: false,
               labels: false,
               notes: false, -->

          <!-- Authors WIP -->
          <v-row align="center" xs>
            <v-col>
              <v-combobox
                v-model="book.authors"
                :hint="
                  !isEditing.authors
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.authors"
                :label="`Authors — ${
                  isEditing.authors ? 'Editable' : 'Readonly'
                }`"
                chips
                clearable
                multiple
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.authors = false"
                @change="changed = true"
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="
                      isEditing.authors ? removeAuthors(item) : () => {}
                    "
                  >
                    <strong>{{ item }}</strong
                    >&nbsp;
                  </v-chip>
                </template>
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.authors}`"
                      :color="isEditing.authors ? 'success' : 'info'"
                      @click="isEditing.authors = !isEditing.authors"
                      v-text="
                        isEditing.authors
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-combobox>
            </v-col>
          </v-row>

          <!-- Publisher -->
          <v-row align="center" xs>
            <v-col>
              <v-text-field
                v-model="book.publisher"
                :hint="
                  !isEditing.publisher
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.publisher"
                :label="`Publisher — ${
                  isEditing.publisher ? 'Editable' : 'Readonly'
                }`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.publisher = false"
                @change="changed = true"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.publisher}`"
                      :color="isEditing.publisher ? 'success' : 'info'"
                      @click="isEditing.publisher = !isEditing.publisher"
                      v-text="
                        isEditing.publisher
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- Edition -->
          <v-row align="center" xs>
            <v-col>
              <v-text-field
                v-model="book.edition"
                :hint="
                  !isEditing.edition
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.edition"
                :label="`Edition — ${
                  isEditing.edition ? 'Editable' : 'Readonly'
                }`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.edition = false"
                @change="changed = true"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.edition}`"
                      :color="isEditing.edition ? 'success' : 'info'"
                      @click="isEditing.edition = !isEditing.edition"
                      v-text="
                        isEditing.edition
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- Publication Year -->
          <v-row align="center" xs>
            <v-col>
              <v-text-field
                v-model="book.publicationYear"
                :hint="
                  !isEditing.publicationYear
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.publicationYear"
                :label="`Publication Year — ${
                  isEditing.publicationYear ? 'Editable' : 'Readonly'
                }`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.publicationYear = false"
                @change="changed = true"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.publicationYear}`"
                      :color="isEditing.publicationYear ? 'success' : 'info'"
                      @click="
                        isEditing.publicationYear = !isEditing.publicationYear
                      "
                      v-text="
                        isEditing.publicationYear
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- Ubication -->
          <v-row align="center" xs>
            <v-col>
              <v-select
                :items="ubications"
                v-model="book.ubication"
                :hint="
                  !isEditing.ubication
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                menu-props="closeOnClick"
                :readonly="!isEditing.ubication"
                :label="`Ubication — ${
                  isEditing.ubication ? 'Editable' : 'Readonly'
                }`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.ubication = false"
                @change="changed = true"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.ubication}`"
                      :color="isEditing.ubication ? 'success' : 'info'"
                      @click="isEditing.ubication = !isEditing.ubication"
                      v-text="
                        isEditing.ubication
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-select>
            </v-col>
          </v-row>

          <!-- Labels -->
          <v-row align="center" xs>
            <v-col>
              <v-combobox
                v-model="computedLabels"
                :items="labels"
                :hint="
                  !isEditing.labels
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.labels"
                :label="`Labels — ${
                  isEditing.labels ? 'Editable' : 'Readonly'
                }`"
                menu-props="closeOnClick"
                chips
                clearable
                multiple
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.labels = false"
                @change="changed = true"
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="
                      isEditing.labels ? removeLabel(item) : () => {}
                    "
                  >
                    <strong>{{ item }}</strong
                    >&nbsp;
                  </v-chip>
                </template>
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.labels}`"
                      :color="isEditing.labels ? 'success' : 'info'"
                      @click="isEditing.labels = !isEditing.labels"
                      v-text="
                        isEditing.labels
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-combobox>
            </v-col>
          </v-row>

          <!-- Condition -->
          <v-row align="center" xs>
            <v-col>
              <v-text-field
                v-model="book.condition"
                :hint="
                  !isEditing.condition
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.condition"
                :label="`Condition — ${
                  isEditing.condition ? 'Editable' : 'Readonly'
                }`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.condition = false"
                @change="changed = true"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.condition}`"
                      :color="isEditing.condition ? 'success' : 'info'"
                      @click="isEditing.condition = !isEditing.condition"
                      v-text="
                        isEditing.condition
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- Notes -->
          <v-row align="center" xs>
            <v-col>
              <v-textarea
                outlined
                v-model="book.notes"
                :hint="
                  !isEditing.notes
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.notes"
                :label="`Notes — ${isEditing.notes ? 'Editable' : 'Readonly'}`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="isEditing.notes = false"
                @change="changed = true"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.notes}`"
                      :color="isEditing.notes ? 'success' : 'info'"
                      @click="isEditing.notes = !isEditing.notes"
                      v-text="
                        isEditing.notes
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-textarea>
            </v-col>
          </v-row>

          <!-- Pictures Carousel -->
          <v-row align="center" xs>
            <v-col cols="12">
              <v-file-input
                :rules="picture_rules"
                :show-size="true"
                id="PictureImage"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Select book picture"
                prepend-icon="mdi-camera"
                label="Picture"
              >
                <template v-slot:append-outer>
                  <v-btn color="succes" @click="addPicture"> Add </v-btn>
                </template>
              </v-file-input>
            </v-col>
            <v-carousel
              style="height: 300px; width: 300px"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item v-for="(pic, i) in book.pictures" :key="i">
                <v-img style="height: 300px; width: 300px" :src="pic">
                  <v-container class="d-flex justify-end">
                    <v-btn
                      color="#F83456"
                      title="Remove pic"
                      icon
                      small
                      elevation="24"
                      @click="removePic(pic)"
                    >
                      <v-icon>mdi-close-thick</v-icon>
                    </v-btn>
                  </v-container>
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-row>

          <v-row align="center">
            <v-col>
              <v-btn
                :disabled="!valid || !changed"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Save Changes
              </v-btn>
              <v-btn color="error" class="mr-4" @click="close"> Close </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { getUbications } from "@/services/api/libraries/schema/ubications/index.js";
import { patchLibrariesLidBook, postLibrariesLidBookPictures } from "@/services/api/libraries/books/index.js";

export default {
  name: "test-bookDisplay",
  props: ["lid"],
  data: () => ({
    model: null,
    valid: true,
    changed: false,
    loading: false,
    editingAll: false,
    isEditing: {
      isbn: false,
      title: false,
      authors: false,
      publisher: false,
      publicationYear: false,
      edition: false,
      condition: false,
      ubication: false,
      labels: false,
      notes: false,
    },
    ubications: [],
    labels: ["fantasy", "horror", "altro"],
    book: {},
    State: {
      FILE_SELECTING: "FILE_SELECTING",
      FILE_SELECTED: "FILE_SELECTED",
      FILE_UPLOADING: "FILE_UPLOADING",
      FILE_UPLOADED: "FILE_UPLOADED",
    },
    state: "",
    picture_rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
  }),
  methods: {
    async validate() {
      //patch(CreateUpdateBook())
      if (!this.loading) {
        try {
          this.loading = true;
          const user = this.$store.getters.getUser;
          await patchLibrariesLidBook(
            user._id,
            this.$route.params.lid,
            this.book._id,
            this.CreateUpdateBook(),
            localStorage.getItem("accessToken")
          );
          for (let book in this.$store.getters.getBooks) {
            if (this.$store.getters.getBooks[book]._id === this.book._id) {
              this.$store.getters.getBooks[book] = this.book;
            }
          }
          this.close();
        } catch (error) {
          this.$store.commit("setErrorMessage", error);
          this.$router.push("/error_page");
        } finally {
          this.loading = false;
        }
      }
    },
    close() {
      this.$store.state.bookDialog = false;
    },
    removeAuthors(item) {
      this.book.authors.splice(this.book.authors.indexOf(item), 1);
      this.book.authors = [...this.book.authors];
    },
    removeLabel(item) {
      this.book.labels.splice(this.book.labels.indexOf(item), 1);
      this.book.labels = [...this.book.labels];
    },
    editAll() {
      this.editingAll = !this.editingAll;
      for (let property in this.isEditing) {
        this.isEditing[property] = this.editingAll;
      }
    },
    CreateUpdateBook() {
      return {
        isbn: this.book.isbn,
        title: this.book.title,
        authors: this.book.authors,
        publisher: this.book.publisher,
        edition: this.book.edition,
        publicationYear: this.book.publicationYear,
        condition: this.book.condition,
        ubication: this.book.ubication,
        labels: this.book.labels,
        notes: this.book.notes,
      };
    },
    async addPicture() {
      if (this.loading === false) {
        try {
          this.loading = true;

          const formData = new FormData();
          const user = this.$store.getters.getUser;
          console.log(this.$refs.form.$el["PictureImage"].files[0]);
          formData.append(
            "picture",
            this.$refs.form.$el["PictureImage"].files[0]
          );
          await postLibrariesLidBookPictures(
            user._id,
            this.$route.params.lid,
            this.book._id,
            formData,
            localStorage.getItem("accessToken")
          );

          const img = window.URL.createObjectURL(
            this.$refs.form.$el["PictureImage"].files[0]
          );
          this.book.pictures.push(img);
        } catch (error) {
          console.log(error.response)
        } finally {
          this.loading = false;
        }
      }
    },
    async removePic(pic) {
      const i = this.book.pictures.indexOf(pic);
      if (i !== -1) this.book.pictures.splice(i, 1);
    },
  },
  computed: {
    computedLabels: {
      get() {
        return this.book.labels;
      },
      set(value) {
        this.book.labels = value.filter((f) => this.labels.includes(f));
      },
    },
  },
  async mounted() {
    const user = this.$store.getters.getUser;
    this.ubications = await getUbications(
      user._id,
      this.$route.params.lid,
      localStorage.getItem("accessToken")
    );
    this.book = this.$store.getters.getBook;
    //this.labels = await getLabels(Uid)
  },
};
</script>
