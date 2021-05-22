<template>
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
    <div class="site-header-admin">
      <h2 class="title">
        <i class="fa fa-edit"></i> تعديل الحساب
      </h2>
    </div>
    <div class="admin-overlay">
      <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
    </div>
    <form @submit.prevent="editProfile()">
      <div class="row">
        <div class="col-md-6">
          <div class="admin-profile-info">
            <p class="info-text">الاسم الأول</p>
            <div class="relative">
              <input
                type="text"
                placeholder="الاسم الأول"
                v-model="forms.first_name"
                class="form-input xs"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="admin-profile-info">
            <p class="info-text">الاسم الأخير</p>
            <div class="relative">
              <input
                type="text"
                placeholder="الاسم الأخير"
                v-model="forms.last_name"
                class="form-input xs"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="admin-profile-info">
            <p class="info-text">رقم الهاتف</p>
            <div class="relative">
              <input
                type="text"
                placeholder="رقم الهاتف"
                v-model="forms.mobile"
                class="form-input xs"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="admin-profile-info">
            <p class="info-text">الجنسية</p>
            <div class="relative">
              <select class="form-input form-control xs" id>
                <option v-for="(item, i) in nationalities" :key="i" :value="item.id">{{ item.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="admin-profile-footer">
        <button type="submit" class="btn butt-primary butt-sm">حفظ التغييرات</button>
      </div>
    </form>
    <hr />
    <div :class="{'is-loading-change-email ': true, 'is-loading-email': isLoadingChangeEmail}">
      <div class="loading-email-overlay">
        <div class="spinner-border" style="width: 2rem; height: 2rem;" role="status"></div>
      </div>
      <div class="site-header-admin sm">
        <h2 class="title">
          <i class="fa fa-envelope"></i> تغيير البريد الإلكتروني
        </h2>
      </div>
      <form @submit.prevent="updateEmail()">
        <div class="row">
          <div class="col-md-5 p-0">
            <div class="admin-profile-info pr-3 pl-3">
              <div class="relative">
                <input
                  type="text"
                  placeholder="البريد الإلكتروني"
                  v-model="formsUpdate.email"
                  class="form-input xs"
                />
              </div>
            </div>
          </div>
          <div class="col-md-5 p-0">
            <div class="admin-profile-info pr-3 pl-3">
              <div class="relative">
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  v-model="formsUpdate.password"
                  class="form-input xs"
                />
              </div>
            </div>
          </div>
          <div class="col-md-2 p-0">
            <div class="pt-2">
              <button type="submit" class="btn butt-primary2 butt-xs pr-4 pl-4">تغيير</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  layout: "default",
  middleware: "auth",
  data() {
    return {
      isLoading: false,
      btnLoading: false,
      isLoadingChangeEmail: false,
      is_verified: true,
      userDetails: {},
      nationalities: {},
      forms: {
        first_name: "",
        last_name: "",
        mobile: "",
      },
      formsUpdate: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    updateEmail() {
      this.isLoadingChangeEmail = true;
      this.$axios
        .$post("verify/resend", this.formsUpdate)
        .then((res) => {
          //this.$bvModal.hide("modalAdd");
          console.log(res);
          this.$swal.fire(
            "تم التغيير!",
            "لقد تم تغيير البريد الإلكتروني بنجاح!",
            "success"
          );
          this.isLoadingChangeEmail = false;
          this.getResults();
        })
        .catch((e) => {
          this.isLoadingChangeEmail = false;
          if (
            e.response.status === 404 ||
            e.response.status === 422 ||
            e.response.status === 403
          ) {
            this.isLoadingChangeEmail = false;
            this.$swal.fire(
              "حدث خطأ !",
              "للأسف لم يتم تغيير البريد الإلكتروني!",
              "warning"
            );
          }
        });
    },
    editProfile() {
      this.isLoading = true;
      this.$axios
        .$post("profile/update", this.forms)
        .then((res) => {
          this.success = "لقد تم إرسال الرسالة بنجاح";
          this.isLoading = false;
        })
        .catch((e) => {
          this.isLoading = false;
          this.success = "";
          if (e.response.status === 404 || e.response.status === 401) {
            this.errors = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
          if (e.response.status === 422) {
            this.$swal.fire("حدث خطأ !", "يرجى ملأ جميع البيانات", "warning");
          }
        });
    },
    getResults() {
      this.isLoading = true;
      this.$axios
        .$get("profile")
        .then((response) => {
          console.log(response);
          this.isLoading = false;
          this.userDetails = response;
          this.is_verified = response.email_verified;

          this.forms.first_name = response.first_name;
          this.forms.mobile = response.mobile;
          this.forms.last_name = response.last_name;

          this.formsCode.email = response.email;
          this.formsUpdate.email = response.email;
        })
        .catch((err) => {
          this.isLoading = false;
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    getNation() {
      this.$axios
        .$get("nationalities")
        .then((response) => {
          console.log(response);
          this.nationalities = response;
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
  },
  mounted() {
    this.getResults();
    this.getNation();
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>