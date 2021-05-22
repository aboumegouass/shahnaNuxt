<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> الباقات
      </h5>
    </div>
    <button title="يمكنك الضغط على المفتاح N" class="btn butt-xs butt-primary" v-b-modal="'modalAdd'">
      <i class="fa fa-plus"></i> إضافة (N)
    </button>
    <hr />
    <div :class="{'sh-data-container bg-white': true, 'is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <table class="table sh-data-table table-striped table-hover">
        <thead>
          <tr>
            <th>اسم الباقة</th>
            <th>سعر الباقة</th>
            <th>نوع الشحن</th>
            <th>الحد الأدنى للتحميل</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in laravelData.data" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.shipping_type_id }}</td>
            <td>{{ item.min_up }}</td>
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
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_name">اسم الباقة</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        v-model="forms.name"
                        id="app_id_name"
                        type="text"
                        placeholder="اسم الباقة"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_price">سعر الباقة</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        v-model="forms.price"
                        type="text"
                        id="app_id_price"
                        placeholder="سعر الباقة"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_shipping_type_id">نوع الشحن</label>
                    <div class="relative">
                      <select
                        class="form-input sm form-select form-control"
                        v-model="forms.shipping_type_id"
                        id="app_shipping_type_id"
                      >
                        <option v-for="(item, i) in shipp_type_list" :key="i" :value="i">{{ item }}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_min_up">الحد الأقصى للتحميل</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        id="app_min_up"
                        v-model="forms.min_up"
                        type="text"
                        placeholder="الحد الأقصى للتحميل"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_shipping_of_month">الشحنات الشهرية</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        id="app_shipping_of_month"
                        v-model="forms.shipping_of_month"
                        type="text"
                        placeholder="الشحنات الشهرية"
                        class="form-input sm form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_shipping_types">اختر حجم الشحن</label>
                    <div class="relative">
                      <div class="row">
                        <div class="col-sm-4" v-for="(item, i) in shipp_volumes_list" :key="i">

                          <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                              v-model="forms.shipping_volumes"
                              type="checkbox"
                              :value="i"
                              class="custom-control-input"
                              :id="'actived-' + item"
                            />
                            <label class="custom-control-label" :for="'actived-' + item">{{ item }}</label>
                          </div>
                        </div>
                      </div>
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
    title: "الباقات ",
  },
  middleware: "auth",
  components: {
    AdvancedLaravelVuePaginate,
  },
  data() {
    return {
      forms: {
        name: "",
        shipping_of_month: "",
        shipping_type_id: "",
        shipping_volumes: [],
        min_up: "",
        price: "",
      },
      shipp_type_list: {},
      shipp_volumes_list: {},
      is_pros: false,
      errors: "",
      errorsRslt: "",
      laravelData: {},
    };
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },
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
              .$post("bouquets/" + id + "/delete")
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
        .$post("bouquets/store", this.forms)
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
        .$get("bouquets?type=paginate&num=3&page=" + page)
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
    getTypes() {
      this.$axios
        .$get("bouquets/create")
        .then((response) => {
          this.shipp_type_list = response.shipping_types;
          this.shipp_volumes_list = response.shipping_volumes;
        })
        .catch((err) => {
          //console.log(err.response);
        });
    },
  },
  mounted() {
    // Fetch initial results
    this.getResults();
    this.getTypes();
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 78) {
        this.$bvModal.show("modalAdd");
      }
    });
  },
};
</script>