<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> إدارة المحتوى | شروط الإستخدام
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
    title: "إدارة المحتوى - شروط الإستخدام",
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
        .$get("terms")
        .then((res) => {
          this.is_pros = false;
          this.forms.content = res
        })
        .catch((err) => {
          this.is_pros = false;
          if (err.response.status === 404) {
            this.$swal.fire("خطأ", "حدث خطأ غير متوقع . يرجى إعادة المحاولة", "error");
          }
        });
    },
    editItem() {
      this.$axios
        .$post("settings/term_store", this.forms)
        .then((res) => {
          this.getItem();
          this.$swal.fire({
            title: '<strong>تم التعديل</strong>',
            icon: 'success',
            html: 'لقد تم التعديل بنجاح',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: 'موافق',
          })
        })
        .catch((e) => {
          this.success = "";
          if (e.response.status === 404 || e.response.status === 401) {
            this.$swal.fire({
              title: '<strong>خطأ</strong>',
              icon: 'error',
              html: "حدث خطأ غير متوقع . يرجى إعادة المحاولة",
              showCloseButton: true,
              showCancelButton: false,
              focusConfirm: false,
              confirmButtonText: 'موافق',
            })
          }
          if (e.response.status === 422) {
            this.$swal.fire("خطأ", "يرجى ملأ جميع البيانات", "error");
            this.$swal.fire({
              title: '<strong>خطأ</strong>',
              icon: 'error',
              html: "يرجى ملأ جميع البيانات",
              showCloseButton: true,
              showCancelButton: false,
              focusConfirm: false,
              confirmButtonText: 'موافق',
            })
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