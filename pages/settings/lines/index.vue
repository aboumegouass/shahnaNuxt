<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> الخطوط اللوجيستية
      </h5>
    </div>
    <button
      title="يمكنك الضغط على المفتاح N"
      class="btn butt-xs butt-primary"
      v-b-modal="'modalAdd'"
    >
      <i class="fa fa-plus"></i> إضافة
      <span class="key-code">N</span>
    </button>
    <hr />
    <div :class="{'sh-data-container bg-white': true, 'is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <table class="table sh-data-table table-striped table-hover">
        <thead>
          <tr>
            <th>رقم الخط</th>
            <th>مدينة الإنطلاق</th>
            <th>مدينة الوصول</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in laravelData.data" :key="item.id">
            <td>
              <NuxtLink :to="'/settings/cities/streets?id=' + item.id">{{ item.id }}</NuxtLink>
            </td>
            <td>
              <NuxtLink :to="'/settings/cities/streets?id=' + item.id">{{ item.name }}</NuxtLink>
            </td>
            <td>
              <NuxtLink :to="'/settings/cities/streets?id=' + item.id">{{ item.name }}</NuxtLink>
            </td>
            <td class="btns-tools">
              <button class="tool-btn delete-button" v-b-modal="'modalEdit' + item.id">
                <i class="fa fa-edit"></i>
              </button>
              <button class="tool-btn delete-button" @click="delItem(item.id)">
                <i class="fa fa-trash"></i>
              </button>
              <NuxtLink class="tool-btn delete-button" :to="'/settings/lines/single?id=' + item.id">
                <i class="fa fa-eye"></i>
              </NuxtLink>
            </td>
            <b-modal
              :id="'modalEdit' + item.id"
              title="تعديل المدينة"
              modal-class="addFormWithoutFoorer modal-600"
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
                  <form action @submit.prevent="edit(item.id)" novalidate>
                    <div class="admin-froms-body">
                      <div class="admin-froms-item">
                        <label class="lable-input" for="app_id_city_name">اسم المدينة</label>
                        <div class="relative">
                          <input
                            autocomplete="off"
                            required
                            v-model="formsEdit.price"
                            type="text"
                            placeholder="اسم المدينة"
                            class="form-input form-control"
                          />
                        </div>
                      </div>
                      <div class="admin-froms-item">
                        <label class="lable-input" for="app_id_city_name">اسم المدينة</label>
                        <div class="relative">
                          <input
                            autocomplete="off"
                            required
                            v-model="formsEdit.name"
                            type="text"
                            placeholder="اسم المدينة"
                            class="form-input form-control"
                          />
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
      title="إضافة خط لوجيستي"
      modal-class="addFormWithoutFoorer modal-800"
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
            <div class="row">
              <div class="col-sm-6 p-0">
                <div class="admin-froms-body">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_type_globe">نوع الخط</label>
                    <div class="relative">
                      <div class="app-radio-options">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            v-model="formDist.type"
                            type="radio"
                            id="app_go_radio"
                            value="1"
                          />
                          <label class="form-check-label" for="app_go_radio">ذهاب</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            v-model="formDist.type"
                            type="radio"
                            id="app_return_radio"
                            value="0"
                          />
                          <label class="form-check-label" for="app_return_radio">إياب</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_price">ثمن الخط</label>
                    <div class="relative">
                      <input
                        id="app_price"
                        autocomplete="off"
                        required
                        v-model="formDist.price"
                        type="text"
                        placeholder="ثمن الخط"
                        class="form-input form-control xs"
                      />
                    </div>
                  </div>
                  <div class="admin-froms-item">
                    <div class="app-addonclick">
                      <div class="custom-control custom-checkbox my-1 mr-sm-2">
                        <input
                          type="checkbox"
                          @change="add_on_click()"
                          class="custom-control-input"
                          id="add_on_click_check"
                        />
                        <label
                          class="custom-control-label"
                          :for="'add_on_click_check'"
                        >إضافة الوجهة عند الضغط على المدينة مباشرة</label>
                      </div>
                    </div>
                    <label class="lable-input" for="app_id_city_name">اسم المدينة</label>
                    <div :class="{'relative':true, ' is-searching': is_searching}">
                      <div class="search-overlay">
                        <div class="spinner-border text-warning spinner-border-sm" role="status"></div>
                      </div>
                      <input
                        ref="el"
                        autocomplete="off"
                        required
                        v-model="forms.name"
                        @keyup="getCities()"
                        type="text"
                        placeholder="اسم المدينة"
                        class="form-input form-control xs form-is-searching"
                      />
                      <input required v-model="forms.id" type="hidden" />
                      <div
                        :class="{'box-dropdown position-absolute cities-search ': true, ' is-showen': is_showen}"
                      >
                        <div class="box-content">
                          <div v-if="citiesList.length === 0">
                            <div class="site-alert">
                              <p class="text">لا توجد نتائج</p>
                            </div>
                          </div>
                          <div v-else>
                            <ul class="items-list">
                              <li v-for="(item, i) in citiesList" :key="i">
                                <a class="link-user d-flex" @click="citieSingle(i, item)">
                                  <div class="link-user-content">
                                    <h3 class="title">{{ item }}</h3>
                                  </div>
                                </a>
                              </li>
                            </ul>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cities-add-to-list">
                  <button
                    type="button"
                    @click="addCity(5, forms.name)"
                    class="btn butt-xs butt-primary2"
                  >
                    <i class="fa fa-plus-circle"></i> إضافة إلى القائمة
                  </button>
                </div>
                <rawDisplayer :value="formDist.cities" title="List" />
              </div>
              <div class="col-sm-6 p-0">
                <hr />
                <div class="distinations-box">
                  <div class="distinations-header">
                    <h3 class="title">
                      <i class="fa fa-map"></i> الوجهات
                    </h3>
                  </div>
                  <draggable
                    class="list-group"
                    tag="ul"
                    v-model="formDist.cities"
                    v-bind="dragOptions"
                    @start="drag = true"
                    @end="drag = false"
                  >
                    <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                      <li
                      
                        class="list-group-item"
                        v-for="element in formDist.cities"
                        :key="element.id"
                      >
                        <i
                          :class="element.fixed ? 'fa fa-anchor' : 'fa fa-thumbtack'"
                          @click="element.fixed = !element.fixed"
                          aria-hidden="true"
                        ></i>
                        {{ element.name }}
                        <span
                          class="remove-item"
                          @click="removeCity(element.id)"
                        >
                          <i class="fa fa-trash"></i>
                        </span>
                      </li>
                    </transition-group>
                  </draggable>
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

import draggable from "vuedraggable";

export default {
  name: "transition-example-2",
  display: "Transitions",
  order: 7,
  layout: "withSidebar",
  head: {
    title: "الخطوط اللوجيستية",
  },
  components: {
    AdvancedLaravelVuePaginate,
    draggable,
  },
  data() {
    return {
      forms: {
        name: "",
        id: "",
      },
      drag: false,
      formsEdit: {
        name: "",
      },
      formDist: {
        cities: [],
        dists: [],
        price: "",
        type: "",
      },
      is_pros: false,
      is_add_on_click: false,
      errors: "",
      is_searching: false,
      citiesArr: [],
      errorsRslt: "",
      laravelData: {},
      citiesList: {},
      is_showen: false,
      notIn: '&notIn[0]=0',
    };
  },
  methods: {
    add_on_click() {
      this.is_add_on_click = !this.is_add_on_click;
    },
    citieSingle(index, name) {
      this.forms.name = name;
      this.forms.id = index;
      this.is_showen = false;
      this.is_searching = false;
      if (this.is_add_on_click == true) {
        this.addCity(this.forms.id, this.forms.name);
      }
    },
    addCity: function (index, name) {
      if (this.forms.id == "" || this.forms.name == "") {
        this.$swal.fire("حدث خطأ", "يرجى تعبئة البيانات!", "error");
      } else {
        this.formDist.cities.push({ id: this.forms.id, name: this.forms.name });
        this.citiesArr = this.formDist.cities.map((v, i) => {
          this.notIn += '&notIn['+i+']='+ v.id;
          return v.id;
        });
        this.forms.id = "";
        this.forms.name = "";
      }
      
    },
    removeCity: function (id) {
      this.formDist.cities = this.formDist.cities.filter(item => item.id !== id)
        this.citiesArr = this.formDist.cities.map((v, i) => {
          this.notIn += '&notIn['+i+']='+ v.id;
          return v.id;
        });
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
              .$post("cities/" + id + "/delete")
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
        .$post("voyages/store", this.formDist)
        .then((res) => {
          this.$bvModal.hide("modalAdd");
          this.getResults();
          console.log(res);
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
    edit(id) {
      this.$axios
        .$post("cities/" + id + "/update", this.formsEdit)
        .then((res) => {
          //console.log(res);
          this.$bvModal.hide("modalEdit");
          this.getResults();
          this.errorsEdit = {};
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
        .$get("voyages?type=paginate&num=3&page=" + page)
        .then((response) => {
          this.is_pros = false;
          this.laravelData = response.voyages;
          console.log(response.voyages);
        })
        .catch((err) => {
          this.is_pros = false;
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    getCities() {
      if (this.forms.name == "") {
        this.is_showen = false;
        this.is_searching = false;
      } else {
        this.is_showen = true;
        this.is_searching = true;
        this.citiesList = [];
        this.$axios
          .$get("voyages/create?q=" + this.forms.name + this.notIn)
          .then((response) => {
            this.citiesList = response;
            this.is_searching = false;
          })
          .catch((err) => {
            this.is_searching = false;
            if (err.response.status === 404) {
              this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
            }
          });
      }
    },
    sort() {
      this.cities = this.cities.sort((a, b) => a.order - b.order);
    },
  },
  mounted() {
    // Fetch initial results
    this.getResults();
    
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 78) {
        this.$bvModal.show("modalAdd");
        this.$refs.el.focus();
      }
    });
    const arr1 = ["1", "3", "9", "41", "52", "68"];
    const arr2 = [
      {
        name: "Vue.js",
        language: "JavaScript",
      },
      {
        name: "Adonis",
        language: "JavaScript",
      },
      {
        name: "Rails",
        language: "Ruby",
      },
      {
        name: "Laravel",
        language: "PHP",
      },
      {
        name: "Sinatra",
        language: "Ruby",
      },
      {
        name: "Phoenix",
        language: "Elixir",
      },
    ];
    var myobj = {};
    var output = arr2.map(function (obj, index) {
      myobj[arr1[index]] = {
        time: obj.name,
      };
    });
    console.log(myobj);
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
};
</script>