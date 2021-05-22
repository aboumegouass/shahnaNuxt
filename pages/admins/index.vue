<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> المديرون والمشرفون
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
            <th>الاسم الكامل</th>
            <th>البريد الإكتروني</th>
            <th>الدور</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in laravelData.data" :key="item.id">
            <td> {{ item.first_name + ' ' + item.last_name }} </td>
            <td>{{ item.email }}</td>
            <td>{{ item.role.name }}</td>
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
      title="إضافة مشرف"
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
                    <label class="lable-input" for="app_first_name"> الاسم الأول</label>
                    <div class="relative">
                      <input
                        v-model="forms.first_name"
                        required
                        type="text"
                        ref="el"
                        placeholder="الاسم الأول"
                        id="app_first_name"
                        class="form-input form-control sm"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_last_name"> الاسم الأخير</label>
                    <div class="relative">
                      <input
                        v-model="forms.last_name"
                        required
                        type="text"
                        placeholder="الاسم الأخير"
                        id="app_last_name"
                        class="form-input form-control sm"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_email"> البريد الإلكتروني</label>
                    <div class="relative">
                      <input
                        v-model="forms.email"
                        required
                        type="text"
                        placeholder="البريد الإلكتروني"
                        id="app_email"
                        class="form-input form-control sm"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_password"> كلمة المرور</label>
                    <div class="relative">
                      <input
                        v-model="forms.password"
                        required
                        type="password"
                        placeholder="كلمة المرور"
                        id="app_password"
                        class="form-input form-control sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
                <div class="col-md-12">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_role_id">اختر الدور:</label>
                    <div class="relative">
                      <select
                        v-model="forms.role_id"
                        required
                        style="padding: 7px;height: 40px"
                        id="app_role_id"
                        class="form-input form-control sm"
                      >
                        <option value="">اختر الدور</option>
                        <option v-for="(item, i) in rolesList" :key="i" :value="item.id">{{ item.name }}</option>
                      </select>
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
    title: "المديرون والمشرفون",
  },
  middleware: "auth",
  components: {
    AdvancedLaravelVuePaginate,
  },
  data() {
    return {
      forms: {
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        role_id: 3,
      },
      rolesList: {},
      is_pros: false,
      errors: "",
      list1: {},
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
              .$post("admins/" + id + "/delete")
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
        .$post("admins/store", this.forms)
        .then((res) => {
          console.log(res);
          this.$bvModal.hide("modalAdd");
          this.forms.name = "";
          this.getResults();
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
          //console.log(response.data);
        })
        .catch((err) => {
          this.is_pros = false;
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    getRoles() {
      this.$axios
        .$get("admins/create")
        .then((response) => {
          this.rolesList = response;
          console.log(response);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
  },
  mounted() {
    // Fetch initial results
    this.getResults();
    this.getRoles();
      document.addEventListener("keydown", (e) => {
      if (e.keyCode == 78) {
        this.$bvModal.show("modalAdd");
        this.$refs.el.focus()
      }
    });
  },
};
</script>