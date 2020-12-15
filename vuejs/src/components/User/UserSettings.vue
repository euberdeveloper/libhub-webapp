<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header> {{ settings[0] }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-list>
              <v-list-item>
                <v-col>
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    style="height: 100%"
                  >
                    <v-row xs>
                      <v-col>
                        <v-text-field
                          v-model="update_data.name"
                          id="name"
                          label="new name"
                          :placeholder="update_data.name"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row xs>
                      <v-col>
                        <v-text-field
                          v-model="update_data.surname"
                          id="surname"
                          label="new surname"
                          :placeholder="update_data.surname"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row class="d-flex justify-center">
                      <v-btn
                        color="success"
                        class="mr-4"
                        @click="updateUserProfile"
                      >
                        Update
                      </v-btn>
                    </v-row>
                    <v-alert
                      dense
                      :type="usrType"
                      class="mt-2"
                      v-if="usrAlertMessage !== ''"
                    >
                      <strong>{{ usrAlertMessage }}</strong>
                    </v-alert>
                  </v-form>
                </v-col>
              </v-list-item>
            </v-list>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> {{ settings[1] }} </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-list>
              <v-list-item>
                <v-col>
                  <v-form
                    ref="pw_form"
                    v-model="valid"
                    lazy-validation
                    style="height: 100%"
                  >
                    <v-row>
                      <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[
                          passwordRules.required,
                          passwordRules.min,
                          passwordRules.max,
                          passwordRules.valid,
                        ]"
                        label="new Password"
                        :type="show1 ? 'text' : 'password'"
                        counter
                        hint="At least 8 characters"
                        @click:append="show1 = !show1"
                        required
                      ></v-text-field>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="confirmPassword"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[confirmPasswordRules.equal]"
                        :type="show1 ? 'text' : 'password'"
                        label="Confirm Password"
                        counter
                        hint="At least 8 characters"
                        @click:append="show1 = !show1"
                        required
                      ></v-text-field>
                    </v-row>
                    <v-row class="d-flex justify-center">
                      <v-btn
                        color="success"
                        class="mr-4"
                        @click="updateUserPassword"
                      >
                        Update
                      </v-btn>
                    </v-row>
                    <v-alert
                      dense
                      :type="pwdType"
                      class="mt-2"
                      v-if="pwdAlertMessage !== ''"
                    >
                      <strong>{{ pwdAlertMessage }}</strong>
                    </v-alert>
                  </v-form>
                </v-col>
              </v-list-item>
            </v-list>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> {{ settings[2] }} </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="form">
          <v-file-input
            :rules="resource_rules"
            :show-size="true"
            id="Avatar"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Select Avatar image"
            prepend-icon="mdi-camera"
            label="Avatar"
          >
            <template v-slot:append-outer>
              <v-btn color="succes" @click="changePic"> Change </v-btn>
            </template>
          </v-file-input>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-container class="d-flex justify-center">
      <v-btn color="warning" class="mt-4" @click="dialog = true">
        Delete Account
      </v-btn>
    </v-container>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          Are you shure to delete your account?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deleteAccount">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
//import * as PW_RECOVERY from "@/services/api/user/password_recovery";
import * as PROFILE from "@/services/api/user/profile";
import { postLogin } from "@/services/api/user/index.js";

export default {
  name: "UserSettings",
  data() {
    return {
      valid: true,
      dialog: false,
      loading: false,
      pwdAlertMessage: "",
      pwdType: "",
      usrAlerMessage: "",
      usrType: "",
      password: "",
      passwordRules: {
        required: (v) => !!v || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        max: (v) => v.length <= 23 || "Max 23 characters",
        valid: (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/.test(
            v
          ) ||
          " password must contain at least an upper case, a lower case, a number and a special character",
      },
      confirmPassword: "",
      confirmPasswordRules: {
        equal: (v) => v === this.password || "Password must match",
      },
      show1: false,
      update_data: {},
      settings: ["User profile data", "Password Update", "Edit avatar"],
      password_update: {
        password: "",
      },
      edit_avatar: {},
      emailRules: [(v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    };
  },
  methods: {
    async updateUserProfile() {
      const user = this.$store.getters.getUser;
      this.$refs.form.validate();
      if (!this.loading) {
        try {
          this.loading = true;
          await PROFILE.PatchUpdateUserProfile(
            user._id,
            {
              name: this.update_data.name,
              surname: this.update_data.surname,
            },
            localStorage.getItem("accessToken")
          );
          localStorage.setItem("user", JSON.stringify(this.update_data));
          this.$store.commit("setUser", this.update_data);
          this.usrType = "success";
          this.usrAlertMessage = "Updated user profile info";
        } catch (error) {
          this.usrAlertMessage = error.response.data.message;
          this.usrType = "error";
        } finally {
          this.loading = false;
        }
      }
    },
    async updateUserPassword() {
      this.$refs.pw_form.validate();
      if (!this.loading) {
        try {
          this.loading = true;
          let user = this.$store.getters.getUser;
          await PROFILE.PutUpdateUserPassword(
            user._id,
            { password: this.password },
            localStorage.getItem("accessToken")
          );
          user = await postLogin({
            username: user.username,
            password: this.password,
          });
          localStorage.setItem("user", JSON.stringify(user.user));
          localStorage.setItem("accessToken", user.token);
          this.$store.commit("setUser", user.user);
          this.pwdAlertMessage = "Password updated";
          this.pwdType = "success";
        } catch (error) {
          this.pwdAlertMessage = error.response.data.message;
          this.pwdType = "error";
        } finally {
          this.loading = false;
        }
      }
    },
    async changePic() {
      if (!this.loading) {
        try {
          this.loading = true;
          const formData = new FormData();
          let user = this.$store.getters.getUser;
          formData.append(
            "avatar",
            this.$refs.form.$el["Avatar"].files[0]
          );
          user.avatar =await PROFILE.PutUpdateUserAvatar(
            user._id,
            formData,
            localStorage.getItem("accessToken")
          );
          this.$store.commit("setUser", user)
          localStorage.setItem("user", JSON.stringify(user))
          console.log("ok")
        } catch (error) {
          console.log(error)
        } finally {
          this.loading = false;
        }
      }
    },
    async deleteAccount() {
      if (!this.loading) {
        try {
          this.loading = true;
          const user = this.$store.getters.getUser;
          await PROFILE.deleteAccount(
            user._id,
            localStorage.getItem("accessToken")
          );
          this.$router.push("/");
        } catch (error) {
          //
        } finally {
          this.loading = false;
        }
      }
    },
  },
  mounted: function () {
    this.update_data = this.$store.getters.getUser;
  },
};
</script>
