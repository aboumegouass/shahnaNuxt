<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> إدارة الأعضاء
      </h5>
    </div>
    <input type="text" />
    <button class="btn butt-xs butt-primary" v-b-modal="'modalAdd'">
      <i class="fa fa-plus"></i> إضافة
    </button>
    <hr />
    <div :class="{'sh-data-container bg-white': true, 'is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <table class="table sh-data-table table-striped table-hover">
        <thead>
          <tr>
            <th>الاسم الكامل</th>
            <th>رقم الجوال</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in laravelData.data" :key="item.id">
            <td> {{ item.first_name }}  {{ item.last_name }} </td>
            <td> {{ item.mobile }} </td>
            <td class="btns-tools">
              <nuxt-link class="tool-btn" to="/settings/cities" prefetch>
                <i class="fa fa-edit"></i>
              </nuxt-link>
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="error-results">
        <p class="text">{{ errorsRslt }}</p>
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
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_city_name">اسم حجم الشحنة بالعربي</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        v-model="forms.name_shipping_volume_ar"
                        type="text"
                        placeholder="اسم حجم الشحنة بالعربي"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_city_name">اسم حجم الشحنة بالإنجليزي</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        v-model="forms.name_shipping_volume_en"
                        type="text"
                        placeholder="اسم حجم الشحنة بالإنجليزي"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_city_name">الطول</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        v-model="forms.lenght"
                        type="text"
                        placeholder="الطول"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_city_name">العرض</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        v-model="forms.width"
                        type="text"
                        placeholder="العرض"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_city_name">الإرتفاع</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        v-model="forms.height"
                        type="text"
                        placeholder="الإرتفاع"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_city_name">الوزن الأقصى</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        v-model="forms.max_weight"
                        type="text"
                        placeholder="الوزن الأقصى"
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
    title: "إدارة الأعضاء",
  },
  components: {
    AdvancedLaravelVuePaginate,
  },
  data() {
    return {
      forms: {
        name_shipping_volume_ar: "",
        name_shipping_volume_en: "",
        height: "",
        length: "",
        width: "",
        max_weight: "",
      },
      is_pros: false,
      errors: "",
      errorsRslt: "",
      laravelData: {},
    };
  },
  methods: {
    appp(e) {
      //console.log(window.KeyboardEvent);
    },
    showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },
    delItem(id) {
      this.$axios
        .$post("admins/" + id + "/delete")
        .then((res) => {
          this.getResults();
          this.errors = "";
        })
        .catch((e) => {
          console.log(e.response.data);
          if (e.response.status === 422) {
            this.errors = e.response.data;
          }
        });
    },
    add() {
      this.$axios
        .$post("admins/store", this.forms)
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
        .$get("admins?type=paginate&num=3&page=" + page)
        .then((response) => {
          this.is_pros = false;
          this.laravelData = response;
          console.log(response.data);
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
    this.appp();
  },
};
</script>