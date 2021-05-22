<template>
  <div class="row">
    <div class="col-xl-6 p-0">
      <form @submit.prevent="login()">
        <div v-if="errorText !== ''">
          <div class="site-alert site-alert-red">
            <p class="text">
              <i class="fa fa-times-circle"></i>
              {{ errorText }}
            </p>
          </div>
        </div>
        <div :class="{'admin-container flex-center': true, ' is-loading': isLoading}">
          <!-- 'is-loading' -->
          <div class="admin-overlay">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
          </div>
          <div class="admin-froms">
            <div class="admin-froms-head">
              <nuxt-link to="/">
                <img src="../assets/img/logo4.png" class="logo-admin" alt />
              </nuxt-link>
            </div>
            <div class="admin-froms-body">
              <div class="admin-froms-item">
                <label class="lable-input" for="app_username">اسم المستخدم أو البريد الإكتروني</label>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="اسم المستخدم أو البريد الإكتروني"
                    id="app_username"
                    v-model="forms.user_name"
                    class="form-input sm"
                  />
                  <span class="icon-form">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="admin-froms-item">
                <label class="lable-input" for="app_password">كلمة المرور</label>
                <div class="relative">
                  <input
                    type="password"
                    placeholder="كلمة المرور"
                    id="app_password"
                    v-model="forms.password"
                    class="form-input sm"
                  />
                  <span class="icon-form">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <p class="admin-froms-note">
                  <i class="fa fa-info-circle"></i> أدخل اسم المستخدم أو البريد الإكتروني
                </p>
              </div>
              <div class="admin-froms-item remember-and-forget">
                <div class="d-flex">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value id="forget_pass" />
                    <label class="form-check-label" for="forget_pass">تذكرني</label>
                  </div>
                  <span class="hr-bar"> | </span>
                  <nuxt-link to="/about" prefetch>نسيت كلمة المرور؟</nuxt-link>
                </div>
              </div>
            </div>
            <div class="admin-froms-footer">
              <button type="submit" class="btn butt-primary butt-md">تسجيل الدخول</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="col-xl-6 p-0">
      <div class="admin-background">
        <div class="overlay"></div>
        <div class="admin-background-content">
          <h1 class="title">تسجيل الدخول</h1>
          <p class="text">
            إذا كنت غير مسجل في موقع
            <nuxt-link to="/about" prefetch>شحنة</nuxt-link>يمكنك
            <nuxt-link to="/about" prefetch>التسجيل</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
//import { mapMutations } from "vuex";

import axios from "@nuxtjs/axios";
export default {
  layout: "default",
  head: {
    title: "تطبيق شحنة | تسجيل الدخول",
  },
  middleware: "guest",
  data() {
    return {
      isLoading: false,
      errOutput: "",
      errorText: "",
      msgOutput: "",
      forms: {
        user_name: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        this.isLoading = true;
        await this.$auth.loginWith("local", {
          data: {
            user_name: this.forms.user_name,
            password: this.forms.password,
          },
        });
        this.errorText = "";
        this.isLoading = false;
        this.$router.push("/dashboard");
      } catch (e) {
        this.isLoading = false;
        if (!e.response) {
          this.errorText = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
        } else {
          if (e.response.status === 422) {
            this.errorText = "يرجى ملأ جميع البيانات";
          } else if (e.response.status === 200) {
            this.errorText = "لقد تم تسجيل";
          } else if (e.response.status === 401) {
            this.errorText = e.response.data.msg;
          }
        }
      }
    },
  },

  computed: {
    counter() {
      //return this.$store.state.counter;
    },
  },
  mounted(){
      
  }
};
</script>