<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> إدارة المحتوى | حول الموقع
      </h5>
    </div>
    <nav class="apps-nav">
      <div class="d-flex">
        <nuxt-link to="/settings/cms" class="app-link">حول الموقع</nuxt-link>
        <nuxt-link to="/settings/cms/privacy" class="app-link">سياسة الخصوصية</nuxt-link>
        <nuxt-link to="/settings/cms/terms" class="app-link">شروط الإستخدام</nuxt-link>
        <nuxt-link to="/settings/cms/features" class="app-link">ميزات التطبيق</nuxt-link>
        <nuxt-link to="/settings/cms/general_sett" class="app-link">الهيدر العلوي</nuxt-link>
      </div>
    </nav>
    <div :class="{'sh-data-container bg-white': true, 'is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <form class="mr-5 ml-5" action @submit.prevent="editHeader()" novalidate>
        <div v-if="msgSucc !== ''">
          <div class="site-alert site-alert-green">
            <p class="text">{{ msgSucc }}</p>
          </div>
        </div>        
        <div v-if="errorText !== ''">
          <div class="site-alert site-alert-red">
            <p class="text">{{ errorText }}</p>
          </div>
        </div>
        <div class="admin-froms-body">
          <div class="admin-froms-item p-2">
            <label class="lable-input" for="app_title">العنوان</label>
            <input type="text" id="app_title" v-model="forms.title" class="form-input sm" />
          </div>
          <div class="admin-froms-item p-2">
            <label class="lable-input" for="app_content">المحتوى</label>
            <textarea
              id="app_content"
              style="width: 100%"
              v-model="forms.description"

              class="form-input sm"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div class="admin-froms-footer p-3">
          <hr />
          <button class="btn butt-primary butt-md">
            <i class="fa fa-save"></i> حفظ البيانات
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: "withSidebar",
  head: {
    title: "إدارة المحتوى | إعدادات عامة",
  },
  middleware: "auth",
  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
  },
  data() {
    return {
      forms: {
        title: "",
        description: "",
      },
      is_pros: false,
      msgSucc: "",
      errorText: "",
      laravelData: {},
      editorConfig: {
        simpleUpload: {
          uploadUrl: "path_to_image_controller",
          headers: {
            Authorization: "optional_token",
          },
        },
      },
      contentHolder: "",
    };
  },
  methods: {
    getTopheader() {
      this.is_pros = true
      this.$axios
        .$get("top_header")
        .then((response) => {
          this.is_pros = false
          if (response) {
            //console.log(response);
            this.forms.title = response.title;
            this.forms.description = response.description;
          }
        })
        .catch((err) => {
          this.is_pros = false
          if (err.response.status === 404) {
            this.errorText = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    editHeader() {
      this.is_pros = true
      this.$axios
        .$post("settings/top_header_store", this.forms)
        .then((response) => {
          this.errorText = ""
          this.is_pros = false
          this.msgSucc = response.message
          this.getTopheader();

        })

        .catch((e) => {
          this.is_pros = false
          this.msgSucc = ""
          if (!e.response) {
            this.errorText = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          } else {
            if (e.response.status === 422) {
              this.errorText = "يرجى ملأ جميع البيانات";
            }
        }
        });
    },
  },
  mounted() {
    // Fetch initial results
    this.getTopheader();
  },
};
</script>