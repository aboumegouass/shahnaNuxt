<template>
  <div class="row">
    <div class="col-xl-6 p-0">
      <div :class="{'admin-container': true, ' is-loading': isLoading}">
        <nav class="navbar navbar navbar-expand-lg navbar-light admin-header">
          <div class="container-fluid">
            <nuxt-link to="/" class="navbar-brand">
              <img class="logo-img" src="../../assets/img/favicon.png" alt />
            </nuxt-link>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item notify-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="far fa-bell"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div v-if="errorText !== ''">
          <div class="site-alert site-alert-red">
            <p class="text">
              <i class="fa fa-times-circle"></i>
              {{ errorText }}
            </p>
          </div>
        </div>
        <div class="site-header-admin">
          <h2 class="title">
            <i class="fa fa-lock"></i> تغيير كلمة المرور
          </h2>
        </div>
        <div class="admin-overlay">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
        </div>
        <form @submit.prevent="changePass()" novalidate>
          <div class="row">
            <div class="col-md-12">
              <div class="admin-profile-info">
                <p class="info-text">كلمة المرور القديمة</p>
                <div class="relative">
                  <input
                    type="password"
                    placeholder="كلمة المرور القديمة"
                    v-model="forms.old_password"
                    class="form-input sm"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="admin-profile-info">
                <p class="info-text">كلمة المرور الجديد</p>
                <div class="relative">
                  <input
                    type="password"
                    placeholder="كلمة المرور الجديد"
                    v-model="forms.password"
                    class="form-input sm"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="admin-profile-info">
                <label class="lable-input" for="app_password">إعادة كلمة المرور القديمة</label>
                <div class="relative">
                  <input
                    type="password"
                    placeholder="إعادة كلمة المرور القديمة"
                    v-model="forms.password_confirmation"
                    class="form-input sm"
                  />
                </div>
              </div>
            </div>
          </div>
        <div class="admin-profile-footer">
          <button type="submit" class="btn butt-primary butt-md">حفظ التغييرات</button>
        </div>
        </form>
        <hr />
      </div>
    </div>
    <div class="col-xl-6 p-0">
      <div class="admin-background profile-background">
        <div class="overlay"></div>
        <div class="admin-background-content admin-profile-content">
          <div v-if="userDetails.avatar == 'avatar.png'">
            <nuxt-link to="/admins/profile" class="profile-avatar">
              <img class="profile-img" src="../../assets/img/ava.png" alt />
            </nuxt-link>
          </div>
          <h1 class="user-title" v-if="userDetails">{{ userDetails.first_name + " " + userDetails.last_name }}</h1>

          <p class="text">
            <nuxt-link to="/admins/changePassword" prefetch>تغيير كلمة المرور</nuxt-link>|
            <nuxt-link to="/about" prefetch>تسجيل الخروج</nuxt-link>
          </p>
          <div class="buttons-tool pt-3">
            <nuxt-link to="/admins/profile?edit=true" class="btn butt-sm butt-white">
              <i class="fa fa-edit"></i> تعديل الحساب
            </nuxt-link>
            <nuxt-link to="/" class="btn butt-sm butt-primary2">
              <i class="fa fa-arrow-left"></i> الرئيسية
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  layout: "default",
  head: {
    title: "تغيير كلمة المرور",
  },
  middleware: "auth",
  data() {
    return {
      isLoading: false,
      is_verified: false,
      errorText: "",
      userDetails: {},
      forms: {
        old_password: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    getResults() {
      this.isLoading = true;
      this.$axios
        .$get("profile")
        .then((response) => {
          this.isLoading = false;
          this.userDetails = response;
        })
        .catch((err) => {
          this.isLoading = false;
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    changePass() {
      if (
        this.forms.config_new_pass == "" ||
        this.forms.new_pass == "" ||
        this.forms.old_pass == ""
      ) {
        this.errorText = "يرجى تعبئة البيانات";

      }else {
                if (this.forms.new_pass !== this.forms.config_new_pass) {
          this.errorText = "كلمتا المرور غير متطابقتين";
        } else {
          this.$axios
            .$post("profile/updatePassword", this.forms)
            .then((res) => {
              this.$swal.fire({
                title: "<strong>تم التعديل</strong>",
                icon: "success",
                html: "لقد تم التعديل بنجاح",
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "موافق",
              });
            })
            .catch((e) => {
              this.success = "";
              if (e.response.status === 404 || e.response.status === 401) {
                this.$swal.fire({
                  title: "<strong>خطأ</strong>",
                  icon: "error",
                  html: "حدث خطأ غير متوقع . يرجى إعادة المحاولة",
                  showCloseButton: true,
                  showCancelButton: false,
                  focusConfirm: false,
                  confirmButtonText: "موافق",
                });
              }
              if (e.response.status === 422) {
                this.$swal.fire("خطأ", "يرجى ملأ جميع البيانات", "error");
                this.$swal.fire({
                  title: "<strong>خطأ</strong>",
                  icon: "error",
                  html: "يرجى ملأ جميع البيانات",
                  showCloseButton: true,
                  showCancelButton: false,
                  focusConfirm: false,
                  confirmButtonText: "موافق",
                });
              }
              if (e.response.status === 403) {
                this.$swal.fire("خطأ", "كلمة المرور القديمة التي أدخلتها خاطئة", "error");
                this.$swal.fire({
                  title: "<strong>خطأ</strong>",
                  icon: "error",
                  html: "كلمة المرور القديمة التي أدخلتها خاطئة",
                  showCloseButton: true,
                  showCancelButton: false,
                  focusConfirm: false,
                  confirmButtonText: "موافق",
                });
              }
            });
        }

      }
    },
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  mounted() {
    this.getResults();
  }
};
</script>