<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> إدارة المحتوى | سياسة الخصوصية
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
    <div :class="{'sh-data-container bg-white': true, ' is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <form action @submit.prevent="editItem()" novalidate>
        <client-only placeholder="loading...">
          <ckeditor-nuxt v-model="forms.content" :config="editorConfig" />
        </client-only>
        <div class="admin-froms-footer p-3">
          <hr/>
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
    title: "إدارة المحتوى - سياسة الخصوصية | تطبيق شحنة",
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
        content: "",
      },
      is_pros: false,
      errors: "",
      errorsRslt: "",
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
    getItem() {
      this.is_pros = true;
      this.$axios
        .$get("about_us")
        .then((res) => {
          this.is_pros = false;
          this.forms.content = res
        })
        .catch((err) => {
          this.is_pros = false;
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    editItem() {
      this.$axios
        .$post("settings/term_store", this.forms)
        .then((res) => {
          this.errors = "";
          this.success = "لقد تم إرسال الرسالة بنجاح";
          this.getItem();
        })
        .catch((e) => {
          this.success = "";
          if (e.response.status === 404 || e.response.status === 401) {
            this.errors = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
          if (e.response.status === 422) {
            this.errors = "يرجى ملأ جميع البيانات";
          }
        });
    },
  },
  mounted() {
    // Fetch initial results
    this.getItem();
  },
};
</script>