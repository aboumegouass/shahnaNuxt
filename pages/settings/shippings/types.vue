<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> الباقات
      </h5>
    </div>
    <button title="يمكنك الضغط على المفتاح N" class="btn butt-xs butt-primary" v-b-modal="'modalAdd'">
      <i class="fa fa-plus"></i> إضافة <span class="key-code">N</span>
    </button>
    <hr />
    <div :class="{'sh-data-container bg-white': true, 'is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <table class="table sh-data-table table-striped table-hover">
        <thead>
          <tr>
            <th>نوع الشحن</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in laravelData.data" :key="item.id">
            <td>{{ item.name }}</td>
            <td class="btns-tools">
              <nuxt-link class="tool-btn" :to="'/settings/shippings/type_edit?id=' + item.id" prefetch>
                <i class="fa fa-edit"></i>
              </nuxt-link>
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="errorsRslt">
        <div class="error-results">
          <p class="text">{{ errorsRslt }}</p>
        </div>
      </div>
      <advanced-laravel-vue-paginate
        previousText="السابق"
        nextText="التالي"
        :data="laravelData"
        @paginateTo="getResults"
      />
    </div>
    <b-modal
      id="modalAdd"
      title="إضافة مدينة"
      modal-class="addFormWithoutFoorer modal-700"
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
            <div class="admin-froms-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_type_name">أدخل نوع الشحن</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        v-model="forms.name"
                        id="app_type_name"
                        type="text"
                        placeholder="نوع الشحن"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
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
import AdvancedLaravelVuePaginate from "advanced-laravel-vue-paginate";
import "advanced-laravel-vue-paginate/dist/advanced-laravel-vue-paginate.css";

export default {
  layout: "withSidebar",
  head: {
    title: "أنواع الشحن",
  },
  components: {
    AdvancedLaravelVuePaginate,
  },
  middleware: "auth",
  data() {
    return {
      forms: {
        name: "",
      },
      shipp_type_list: {},
      is_pros: false,
      errors: "",
      errorsRslt: "",
      laravelData: {},
    };
  },
  methods: {
    delItem(id) {
      this.$swal
        .fire({
          title: "هل أنت متأكد؟",
          text: "هل تريد حقا حذف هذا العنصر؟",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "نعم, متأكد!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$axios
              .$post("shipping_types/" + id + "/delete")
              .then((res) => {
                this.getResults();
                this.errors = "";
              })
              .catch((e) => {
                //console.log(e.response);
              });
              this.$swal.fire("تم الحذف!", "لقد تم حذف العنصر بنجاح!", "success");
              this.getResults();
          }
        });

    },
    add() {
      this.$axios
        .$post("shipping_types/store", this.forms)
        .then((res) => {
          //console.log(res);
          this.$bvModal.hide("modalAdd");
          this.forms.name = "";
          this.getResults();
          this.errors = {};
        })
        .catch((e) => {
          if (e.response.status === 404) {
            this.errors = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
          if (e.response.status === 422) {
            this.errors = e.response.data;
          }
        });
    },
    getResults(page = 1) {
      this.is_pros = true;
      this.$axios
        .$get("shipping_types?type=paginate&num=3&page=" + page)
        .then((response) => {
          this.is_pros = false;
          this.laravelData = response;
        })
        .catch((err) => {
          this.is_pros = false;
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },

  },
  mounted() {
    // Fetch initial results
    this.getResults();
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 78) {
        this.$bvModal.show("modalAdd");
      }
    });
  },
};
</script>