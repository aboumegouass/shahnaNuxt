<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> نظام الأدوار والصلاحيات
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
            <th style="width: 300px">اسم الدور</th>
            <th>الصلاحيات</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in laravelData.data" :key="item.id">
            <td style="width: 300px"> {{ item.name }} {{ item.id }} </td>
            <td class="apps-permissions">
               <span v-for="(per, i) in item.permissions" :key="i" :class="`permissions-item per-${per.id}`" >
                 {{ per.name }}
               </span>
            </td>
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
      title="إضافة دور"
      modal-class="addFormWithoutFoorer modal-750"
      ok-title="إغلاق"
      ok-disabled
    >
      <div class="admin-container h-auto">
        <!-- 'is-loading' -->
        <div class="admin-overlay">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
        </div>
        <div class="admin-froms">
          <form action @submit.prevent="add()" novalidate>
            <div class="admin-froms-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_role_arname"> اسم الدور بالعربية </label>
                    <div class="relative">
                      <input
                      v-model="forms.name"
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="اسم الدور"
                        id="app_role_arname"
                        name="app_role_arname"
                        class="form-input form-control sm"
                      />
                      <div class="invalid-feedback">أدخل اسم المستخدم أو البريد الإكتروني</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_role_enname">اسم الدور بالإنجليزية</label>
                    <div class="relative">
                      <input
                      v-model="forms.role"
                        required
                        type="text"
                        placeholder="اسم الدور بالإنجليزية"
                        id="app_role_enname"
                        name="app_role_enname"
                        class="form-input form-control sm"
                      />
                      <div class="invalid-feedback">أدخل اسم المستخدم أو البريد الإكتروني</div>
                    </div>
                  </div>
                </div>
              </div>
                <div class="col-md-12">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_shipping_types">اختر الصلاحيات التي تريد إسنادها لهذا الدور:</label>
                    <div class="relative">
                      <div class="row">
                        <div class="col-sm-4" v-for="(item, i) in list1" :key="i">

                          <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                              v-model="forms.permissions"
                              type="checkbox"
                              :value="i"
                              class="custom-control-input"
                              :id="'actived-' + item.id"
                            />
                            <label class="custom-control-label" :for="'actived-' + item.id">{{ item.name }}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="admin-froms-footer">
              <button type="submit" class="btn butt-primary butt-sm">
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
    title: "نظام الأدوار والصلاحيات",
  },
  middleware: "auth",
  components: {
    AdvancedLaravelVuePaginate,
  },
  data() {
    return {
      forms: {
        role:'',
        name:'',
        permissions: [],
      },
      is_pros: false,
      errors: "",
      list1: {},
      errorsRslt: "",
      laravelData: {},
    };
  },
  methods: {
    delItem(id) {
      this.$axios
        .$post("permissions/" + id + "/delete")
        .then((res) => {
          this.getResults();
          this.errors = "";
        })
        .catch((e) => {
          //console.log(e.response.data);
          if (e.response.status === 422) {
            this.errors = e.response.data;
          }
        });
    },
    add() {
      this.$axios
        .$post("roles/store", this.forms)
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
        .$get("roles?type=paginate&num=3&page=" + page)
        .then((response) => {
          this.is_pros = false;
          this.laravelData = response;
          //console.log(response.data);
        })
        .catch((err) => {
          this.is_pros = false;
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    getPer() {
      this.is_pros = true;
      this.$axios
        .$get("roles/create")
        .then((response) => {
          this.is_pros = false;
          this.list1 = response;
          console.log(response);
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
    this.getPer();    
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 78) {
        this.$bvModal.show("modalAdd");
        this.$refs.el.focus()
      }
    });
  },
};
</script>