<template>
  <div class="row">
    <div class="col-xl-6 p-0">
      <div v-if="this.$nuxt.$route.query.edit">
        <div v-if="this.$nuxt.$route.query.edit == 'true'">
          <edit-profile />
        </div>
        <div v-else>
          <div class="page-not-found">
            <img class="not-found-icon" src="../../assets/img/times.png" alt />
            <h1 class="title">هذه الصفحة غير موجودة</h1>
            <p class="text">
              يمكنك العودة إلى
              <nuxt-link to="/">الرئيسية</nuxt-link>أو العودة إلى
              <nuxt-link to="/admins/profile">الصفحة الشخصية</nuxt-link>
            </p>
          </div>
        </div>
      </div>
      <div v-else>
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
              <i class="fa fa-user"></i> الصفحة الشخصية
            </h2>
          </div>
          <div class="admin-overlay">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="admin-profile-info">
                <p class="info-text">الاسم الأول</p>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="الاسم الأول"
                    disabled
                    :value="userDetails.first_name"
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
                    disabled
                    :value="userDetails.last_name"
                    class="form-input xs"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="admin-profile-info">
                <p class="info-text">البريد الإلكتروني</p>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="البريد الإلكتروني"
                    disabled
                    :value="userDetails.email"
                    :class="{'form-input xs ': true, ' form-danger': userDetails.email_verified === '0'}"
                  />
                  <span v-if="userDetails.email_verified === '0'" class="is-verified">
                    <button
                      class="btn butt-primary butt-xs2"
                      v-b-modal="'modalAdd'"
                    >تأكيد البريد الإلكتروني</button>
                  </span>
                  <span v-else class="is-verified">
                    <span class="verified-icon">
                      <i class="fa fa-check"></i>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="admin-profile-info">
                <p class="info-text">رقم الهاتف</p>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="رقم الهاتف"
                    disabled
                    :value="loggedInUser.mobile"
                    class="form-input xs"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="admin-profile-info">
                <p class="info-text">الجنسية</p>
                <div class="relative">
                  <select class="form-input xs" disabled id>
                    <option value="2">سعودي</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="form-header">
            <h3 class="title">({{ loggedInUser.role.name }}) الصلاحيات</h3>
          </div>
          <div class="form-list">
            <ul class="list-items row">
              <li
                v-for="(item, index) in loggedInUser.role.permissions"
                :key="index"
                class="col-sm-4"
              >{{ item.name }}</li>
            </ul>
          </div>
        </div>
      </div>

      <b-modal
        id="modalAdd"
        title="تأكيد البريد الإلكتروني"
        modal-class="email-config-modal addFormWithoutFoorer modal-400"
        ok-title="إغلاق"
        ok-disabled
      >
        <div class="admin-container h-auto py-0">
          <!-- 'is-loading' -->
          <div class="admin-overlay">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
          </div>
          <div class="admin-froms">
            <form action @submit.prevent="verify()" novalidate>
              <div class="admin-froms-body">
                <div class="admin-froms-item">
                  <label class="lable-input" for="app_code_verify">أدخل كود التفعيل</label>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      required
                      type="text"
                      v-model="formsVerify.code"
                      id="app_code_verify"
                      placeholder="كود التفعيل"
                      class="form-input form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="admin-froms-footer">
                <button type="submit" class="btn butt-primary butt-sm">
                  <i class="fa fa-save"></i> تأكيد
                </button>
                <button
                  type="button"
                  @click="resendCode()"
                  :class="{'btn butt-white butt-sm ': true, ' butt-loading': btnLoading}"
                >
                  <i class="fa fa-redo"></i> إعادة إرسال كود التفعيل
                </button>
              </div>
            </form>
          </div>
        </div>
      </b-modal>
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
          <h1
            class="user-title"
            v-if="userDetails"
          >{{ userDetails.first_name + " " + userDetails.last_name }}</h1>
          <h1 class="user-title-placeholder" v-else>
            <span class="title-first_name"></span>
            <span class="title-first_name"></span>
          </h1>
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
import editProfile from './editProfile.vue';

export default {
  components: { editProfile },
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
      formsVerify: {
        code: "",
      },
      formsCode: {
        email: "",
      },
    };
  },
  methods: {
    resendCode() {
      this.btnLoading = true;
      this.$axios
        .$post("verify/resend", this.formsCode)
        .then((res) => {
          //this.$bvModal.hide("modalAdd");
          console.log(res);
          this.$swal.fire(
            "تم الإرسال!",
            "لقد تم إرسال كود التفعيل إلى بريدك الإلكتروني!",
            "success"
          );
          this.btnLoading = false;
        })
        .catch((e) => {
          this.btnLoading = false;
          if (e.response.status === 404) {
            this.btnLoading = false;
            this.$swal.fire(
              "حدث خطأ !",
              "للأسف لم يتم إرسال كود التفعيل!",
              "warning"
            );
          }
          if (e.response.status === 422) {
            this.btnLoading = false;
            this.$swal.fire(
              "حدث خطأ !",
              "للأسف لم يتم إرسال كود التفعيل!",
              "warning"
            );
          }
        });
    },
    verify() {
      if (this.formsVerify.code == "") {
        this.$swal.fire(
          "حدث خطأ !",
          "يرجى ملأ جميع البيانات",
          "warning"
        );
      } else {
        this.$axios
          .$post("verify", this.formsVerify)
          .then((res) => {
            this.$bvModal.hide("modalAdd");
            this.getResults();
          })
          .catch((e) => {
            if (e.response.status === 404) {
              this.$swal.fire(
                "حدث خطأ !",
                "حدث خطأ غير متوقع . يرجى إعادة المحاولة",
                "warning"
              );
            }
            if (e.response.status === 422) {
              this.$swal.fire(
                "حدث خطأ !",
                "يرجى ملأ جميع البيانات",
                "warning"
              );
            }
          });
      }
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