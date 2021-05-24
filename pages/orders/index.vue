<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> الباقات
      </h5>
    </div>
    <div :class="{'sh-data-container bg-white': true, 'is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <div class="sh-data-toolbar">
        <div class="d-flex">
          <ul class="nav ml-auto">
            <li>
              <select class="form-input xs form-control" id="app_shipping_type_id">
                <option id="1">اختر المتجر</option>
              </select>
            </li>
            <li>
              <select class="form-input xs form-control" id="app_shipping_type_id">
                <option id="1">حالة الطلب</option>
              </select>
            </li>
            <li class="sh-search">
              <input type="text" placeholder="البحث في الطلبات" class="form-input xs form-control" />
              <span class="icon">
                <i class="fa fa-search"></i>
              </span>
            </li>
          </ul>
          <ul class="nav right-nav me-auto">
            <li>
              <nuxt-link :to="'/orders/add_order'" class="btn butt-xs butt-primary">
                <i class="fa fa-plus-circle"></i> إضافة طلب جديد
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <table class="table sh-data-table table-striped table-hover">
        <thead>
          <tr>
            <th>كود الطلب</th>
            <th>اسم المتجر</th>
            <th>الاسم الكامل</th>
            <th>طريقة الدفع</th>
            <th>حالة الطلب</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <nuxt-link :to="'/orders/single'">IJK-965-6522</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="'/stores/single'">قصابة غيث</nuxt-link>
            </td>
            <td>بومقواس عبد الحميد</td>
            <td>مدفوع</td>
            <td>
              <span class="badge badge-danger">غير مؤكد</span>
            </td>
            <td class="btns-tools">
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link :to="'/orders/single'">IJK-965-6522</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="'/stores/single'">مخبزة شوشو</nuxt-link>
            </td>
            <td>الهادي عبد الله</td>
            <td>مدفوع</td>
            <td>
              <span class="badge badge-secondary">توزيع</span>
            </td>
            <td class="btns-tools">
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link :to="'/orders/single'">IJK-965-6522</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="'/stores/single'">جواهر</nuxt-link>
            </td>
            <td>طارق عروي</td>
            <td>مدفوع</td>
            <td>
              <span class="badge badge-warning">معلق</span>
            </td>
            <td class="btns-tools">
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link :to="'/orders/single'">IJK-965-6522</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="'/stores/single'">بحيرة</nuxt-link>
            </td>
            <td>فلان بن شكراري</td>
            <td>مدفوع</td>
            <td>
              <span class="badge badge-info">مؤكد</span>
            </td>
            <td class="btns-tools">
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link :to="'/orders/single'">IJK-965-6522</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="'/stores/single'">قصابة غيث</nuxt-link>
            </td>
            <td>بومقواس عبد الحميد</td>
            <td>مدفوع</td>
            <td>
              <span class="badge badge-danger">غير مؤكد</span>
            </td>
            <td class="btns-tools">
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link :to="'/orders/single'">IJK-965-6522</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="'/stores/single'">مخبزة شوشو</nuxt-link>
            </td>
            <td>الهادي عبد الله</td>
            <td>مدفوع</td>
            <td>
              <span class="badge badge-secondary">توزيع</span>
            </td>
            <td class="btns-tools">
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link :to="'/orders/single'">IJK-965-6522</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="'/stores/single'">جواهر</nuxt-link>
            </td>
            <td>طارق عروي</td>
            <td>مدفوع</td>
            <td>
              <span class="badge badge-warning">معلق</span>
            </td>
            <td class="btns-tools">
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link :to="'/orders/single'">IJK-965-6522</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="'/stores/single'">بحيرة</nuxt-link>
            </td>
            <td>فلان بن شكراري</td>
            <td>مدفوع</td>
            <td>
              <span class="badge badge-info">مؤكد</span>
            </td>
            <td class="btns-tools">
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
  </div>
</template>
<script>
import AdvancedLaravelVuePaginate from "advanced-laravel-vue-paginate";
import "advanced-laravel-vue-paginate/dist/advanced-laravel-vue-paginate.css";

export default {
  layout: "withSidebar",
  head: {
    title: "إدارة الطلبات",
  },
  middleware: "auth",
  components: {
    AdvancedLaravelVuePaginate,
  },
  data() {
    return {
      is_pros: false,
      laravelData: {},
      errorsRslt: '',
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
  },
  mounted() {
    // Fetch initial results
    this.getResults();
  },
};
</script>