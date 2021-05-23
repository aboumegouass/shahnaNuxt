<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-cog"></i>
        أحياء مدينة {{ parentData.name }}
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
            <th>اسم المدينة</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in laravelData" :key="i">
            <td>{{ item.name }}</td>
            <td class="btns-tools">
              <nuxt-link class="tool-btn" :to="'/settings/cities/streets/street_edit?id=' + item.id" prefetch>
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
                <div class="col-md-6 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_street_name">اسم الحي</label>
                    <div class="relative">
                      <input
                        required
                        type="text"
                        placeholder="اسم الحي"
                        id="app_id_street_name"
                        v-model="forms.name"
                        class="form-input form-control sm"
                      />

                      <div class="is-invalid" v-if="errors.name">
                        <span>{{ errors.name[0] }}</span>
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
    </b-modal>
  </div>
</template>
<script>
import AdvancedLaravelVuePaginate from "advanced-laravel-vue-paginate";
import "advanced-laravel-vue-paginate/dist/advanced-laravel-vue-paginate.css";

export default {
  layout: "withSidebar",
  middleware: "auth",
  head: {
    title: "الأحياء",
  },
  components: {
    AdvancedLaravelVuePaginate,
  },
  data() {
    return {
      forms: {
        name: "",
        city_id: this.$nuxt.$route.query.id,
      },
      is_pros: false,
      errors: {},
      laravelData: [],
      errorsRslt: "",
      parentData: {},
    };
  },
  methods: {
    add() {
      this.$axios
        .$post("states/store", this.forms)
        .then((res) => {
          //console.log(res);
          this.$bvModal.hide("modalAdd");
          this.forms.name = "";
          this.getResults();
          this.errors = {};
        })
        .catch((e) => {
          if (e.response.status === 422) {
            this.errors = e.response.data;
          }
        });
    },
    getResults(page = 1) {
      this.is_pros = true;
      try {
        this.$axios
          .$get("cities/" + this.$route.query.id + "/edit/?type=paginate&num=3&page=" + page)
          .then((response) => {
            this.is_pros = false;
            console.log(response);

            if (response.states.length == 0) {
              this.$swal.fire("حدث خطأ!", "لا توجد بيانات لعرضها!", "error");
            } else {
              this.laravelData = response.states;
              this.parentData = response;
            }
          })
          .catch((err) => {
            if (err.response.status === 404) {
              this.$swal.fire("حدث خطأ!", "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى!", "error");
              this.is_pros = false;
            }
            if (err.response) {
              this.$swal.fire("حدث خطأ!", "لم يتم عرض البيانات يرجى المحاولة مرة أخرى!", "error");
              this.is_pros = false;
            }
          });
      } catch (e) {
        //console.log(e.response);
      }
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
              .$post("states/" + id + "/delete")
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