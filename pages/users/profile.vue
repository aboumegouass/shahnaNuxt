<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> الخطوط اللوجيستية
      </h5>
    </div>
    <button
      title="يمكنك الضغط على المفتاح N"
      class="btn butt-xs butt-primary"
      v-b-modal="'modalAdd'"
    >
      <i class="fa fa-plus"></i> إضافة متجر لهذا المستخدم
    </button>
    <hr />
    
    <b-modal
      id="modalAdd"
      title="إضافة خط لوجيستي"
      modal-class="addFormWithoutFoorer modal-800"
      ok-title="إغلاق"
      ok-disabled
    >
      <div class="admin-container h-auto py-0">
        <!-- 'is-loading' -->
        <div class="admin-overlay">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="admin-froms">
          <form action @submit.prevent="add()" novalidate>
            <div class="row">
              <div class="col-sm-6 p-0">
                <div class="admin-froms-body">
                  
                </div>
              </div>
            </div>
            <div class="admin-froms-footer">
              <button class="btn butt-primary butt-md">
                <i class="fa fa-save"></i> حفظ البيانات
              </button>
            </div>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  layout: "withSidebar",
  head: {
    title: "الخطوط اللوجيستية",
  },
  data() {
    return {
        profile: {},
    };
  },
  methods: {
    getCities() {
      this.$axios
        .$get("voyages/create")
        .then((response) => {
          this.profile = response;
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
  },
  mounted() {},
  computed: {},
};
</script>