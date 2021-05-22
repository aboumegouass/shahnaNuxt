<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> الشكاوى والإعتراضات
      </h5>
    </div>
    <div :class="{'sh-data-container bg-white': true, ' is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <table class="table sh-data-table table-striped table-hover">
        <thead>
          <tr>
            <th>عنوان الرسالة</th>
            <th>البريد الإلكتروني</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in laravelData[0]" :key="item.id">
            <td> {{ item.title }} {{ item.id }} </td>
            <td> {{ item.email }} </td>
            <td class="btns-tools">
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="error-results" v-if="errorsRslt">
        <p class="text">{{ errorsRslt }}</p>
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
    title: "الشكاوي والإعتراضات",
  },
  components: {
    AdvancedLaravelVuePaginate,
    'ckeditor-nuxt': () => { 
        if (process.client) { 
            return import('@blowstack/ckeditor-nuxt') 
        } 
    },
  },
  data() {
    return {
      is_pros: false,
      errors: "",
      errorsRslt: "",
      laravelData: {},
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          headers: {
            'Authorization': 'optional_token'
          }
        }
      },
      contentHolder: ""
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
              .$post("settings/" + id + "/contact_delete")
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
        .$get("settings/contacts?type=paginate&num=3&page=" + page)
        .then((response) => {
          this.is_pros = false;
          this.laravelData = response;
          console.log(response[0]);
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