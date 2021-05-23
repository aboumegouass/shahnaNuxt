<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-edit"></i> التعديل
      </h5>
    </div>
    <div
      v-if="this.$route.query"
      :class="{'sh-data-container bg-white': true, ' is-loading': is_pros}"
    >
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
                              :checked="item.id === 3"
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
              <button type="submit" class="btn butt-primary butt-md">
                <i class="fa fa-save"></i> حفظ البيانات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else></div>
    <button class="circullar-button" @click="$router.go(-1)">
      <i class="fa fa-arrow-left"></i>
    </button>
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
        shipping_of_month: "",
        shipping_type_id: "",
        shipping_volumes: [],
        min_up: "",
        price: "",
      },
      is_pros: false,
      shipp_type_list: [],
      shipp_volumes_list: [],
    };
  },
  methods: {
    edit() {
      this.is_pros = true;
      this.$axios
        .$post("bouquets/" + this.$route.query.id + "/update", this.forms)
        .then((res) => {
          this.$swal.fire("تم التعديل !", "لقد تم التعديل بنجاح!", "success");
          this.is_pros = false;
          this.getEdit();
        })
        .catch((e) => {
          this.is_pros = false;
          if (e.response.status === 404) {
            this.$swal.fire(
              "حدث خطأ !",
              "حدث خطأ غير متوقع . يرجى إعادة المحاولة!",
              "error"
            );
          }
          if (e.response.status === 422) {
            this.$swal.fire("حدث خطأ !", "يرجى ملأ جميع البيانات!", "error");
          }
        });
    },
    getEdit() {
      this.is_pros = true;
      this.$axios
        .$get("bouquets/" + this.$route.query.id + "/edit")
        .then((response) => {
          this.forms.name = response.bouquet.name;
          this.forms.shipping_of_month = response.bouquet.shipping_of_month;
          this.forms.shipping_type_id = response.bouquet.shipping_type_id;
          //this.forms.shipping_volumes = response.bouquet.shipping_volumes;
          this.forms.min_up = response.bouquet.min_up;
          this.forms.price = response.bouquet.price;

          this.is_pros = false;
        })
        .catch((err) => {
          this.is_pros = false;
        });
    },
    getTypesAndVolumes() {
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
    isChecked(index) {
      return this.availableRoles[index].id === this.user.roles[index].id;
    },
  },
  mounted() {
    // Fetch initial results
    this.getEdit();
    this.getTypesAndVolumes();
    //console.log(this.$route);
  },
};
</script>