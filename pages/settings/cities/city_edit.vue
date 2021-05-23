<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-edit"></i> التعديل
      </h5>
    </div>
    <div v-if="this.$route.query" :class="{'sh-data-container bg-white': true, 'is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <div class="admin-container is-form-single h-auto py-0">
        <!-- 'is-loading' -->
        <div class="admin-overlay">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="admin-froms">
          <form action @submit.prevent="edit()" novalidate>
            <div class="admin-froms-body">
              <div class="row">
                <div class="col-md-12 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_account_number">اسم اسم المدينة</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="اسم اسم المدينة"
                        id="app_account_number"
                        v-model="forms.name"
                        class="form-input form-control sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="admin-froms-footer">
              <button type="submit" class="btn butt-primary butt-md">
                <i class="fa fa-save"></i> حفظ البيانات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else>
      
    </div>
    <button class="circullar-button" @click="$router.go(-1)"><i class="fa fa-arrow-left"></i></button>
  </div>
</template>
<script>
export default {
  layout: "withSidebar",
  middleware: "auth",
  head: {
    title: "التعديل",
  },
  data() {
    return {
      forms: {
        name: "",
      },
      is_pros: false,
    };
  },
  methods: {
    edit() {
      this.$axios
        .$post("cities/" + this.$route.query.id + "/update", this.forms)
        .then((res) => {
          this.$swal.fire("تم التعديل !", "لقد تم التعديل بنجاح!", "success");
          this.getEdit()
        })
        .catch((e) => {
          if (e.response.status === 404) {
            this.$swal.fire("حدث خطأ !", "حدث خطأ غير متوقع . يرجى إعادة المحاولة!", "error");
          }
          if (e.response.status === 422) {
            this.$swal.fire("حدث خطأ !", "يرجى ملأ جميع البيانات!", "error");
          }
        });
    },
    getEdit() {
      this.is_pros = true;
      this.$axios
        .$get("cities/" + this.$route.query.id + "/edit")
        .then((response) => {
          this.forms.name = response.name;
          this.forms.number_account = response.number_account;
          this.forms.number_iban = response.number_iban;
          this.is_pros = false;
        })
        .catch((err) => {
          this.is_pros = false;
        });
    },
  },
  mounted() {
    // Fetch initial results
    this.getEdit();
    //console.log(this.$route);
  },
};
</script>