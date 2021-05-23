<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-edit"></i> التعديل
      </h5>
    </div>
    <div v-if="this.$route.query" :class="{'sh-data-container bg-white': true, ' is-loading': is_pros}">
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
        name_shipping_volume_ar: "",
        name_shipping_volume_en: "",
        height: "",
        lenght: "",
        width: "",
        max_weight: "",
      },
      is_pros: false,
    };
  },
  methods: {
    edit() {
        this.is_pros = true;
      this.$axios
        .$post("shipping_volumes/" + this.$route.query.id + "/update", this.forms)
        .then((res) => {

          this.$swal.fire("تم التعديل !", "لقد تم التعديل بنجاح!", "success");
          this.is_pros = false;
          this.getEdit()
        })
        .catch((e) => {
          this.is_pros = false;
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
        .$get("shipping_volumes/" + this.$route.query.id + "/edit")
        .then((response) => {
          this.forms.name_shipping_volume_ar = response.name_shipping_volume_ar;
          this.forms.name_shipping_volume_en = response.name_shipping_volume_en;
          this.forms.height = response.height;
          this.forms.lenght = response.length;
          this.forms.width = response.width;
          this.forms.max_weight = response.max_weight;
          this.is_pros = false;
          console.log(response);
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