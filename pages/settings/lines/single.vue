<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> الخط اللوجيستي
      </h5>
    </div>
    <div :class="{'sh-data-container bg-transparent no-border no-shadow overflow-none': true}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="overlay">
            <div class="spinner-border" role="status"></div>
          </div>
          <div class="distinations-list">
            <ul class="timeline">
              <li>
                <h3 class="flag-wrapper">
                  <span class="flag">{{voyage.distinations[0].name}}</span>
                  <span class="time">مدينة الإنطلاق</span>
                </h3>
              </li>

              <li v-for="(item, i) in arr" :key="i">
                <h3 class="flag-wrapper">
                  <span class="flag">{{item.name}}</span>
                </h3>
              </li>

              <li>
                <h3 class="flag-wrapper">
                  <span class="flag">{{voyage.distinations[voyage.distinations.length - 1].name}}</span>
                  <span class="time">مدينة الوصول</span>
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row justify-content-center">
            <div class="col-sm-4">
              <div :class="{'site-panel ': true}">
                <div class="site-panel-header">
                  <h3 class="title">يوم الأحد</h3>
                </div>
                <div v-slimscroll="options2" dir="ltr">
                  <div class="app-days-list" dir="rtl">
                    <h3 class="app-days-title">يوم السبت</h3>
                    <div class="day-item">
                      <input type="radio" name="select" id="option-1" checked />
                      <label for="option-1" class="option option-1">
                        <span>رحلة 1</span>
                      </label>
                    </div>
                    <div class="day-item">
                      <input type="radio" name="select" id="option-2" checked />
                      <label for="option-2" class="option option-1">
                        <span>رحلة 2</span>
                      </label>
                    </div>
                    <div class="day-item">
                      <input type="radio" name="select" id="option-3" checked />
                      <label for="option-3" class="option option-1">
                        <span>رحلة 3</span>
                      </label>
                    </div>
                    <div class="day-item">
                      <input type="radio" name="select" id="option-4" checked />
                      <label for="option-4" class="option option-1">
                        <span>رحلة 4</span>
                      </label>
                    </div>
                    <h3 class="app-days-title">يوم السبت</h3>
                    <div class="day-item">
                      <input type="radio" name="select" id="option-1" checked />
                      <label for="option-1" class="option option-1">
                        <span>رحلة 1</span>
                      </label>
                    </div>
                    <div class="day-item">
                      <input type="radio" name="select" id="option-2" checked />
                      <label for="option-2" class="option option-1">
                        <span>رحلة 2</span>
                      </label>
                    </div>
                    <h3 class="app-days-title">يوم السبت</h3>
                    <div class="day-item">
                      <input type="radio" name="select" id="option-1" checked />
                      <label for="option-1" class="option option-1">
                        <span>رحلة 1</span>
                      </label>
                    </div>
                    <div class="day-item">
                      <input type="radio" name="select" id="option-2" checked />
                      <label for="option-2" class="option option-1">
                        <span>رحلة 2</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div :class="{'site-panel ': true}">
                <div class="panel-overlay">
                  <div class="spinner-border" role="status"></div>
                </div>
                <div class="site-panel-header">
                  <h3 class="title">رحلات يوم</h3>
                </div>
                <div class="site-panel-content">
                  <div class="privacy-details panel-scroll">
                    <div class="distinations-list pr-3">
                      <ul class="timeline">
                        <li>
                          <h3 class="flag-wrapper is_time_show">
                            <span class="flag">{{voyage.distinations[0].name}}</span>
                            <span class="distTime">
                              <i class="far fa-clock"></i> 15:30
                            </span>
                            <span class="time">مدينة الإنطلاق</span>
                          </h3>
                        </li>

                        <li v-for="(item, i) in arr" :key="i">
                          <h3 class="flag-wrapper is_time_show">
                            <span class="flag">{{item.name}}</span>
                            <span class="distTime">
                              <i class="far fa-clock"></i> 15:30
                            </span>
                          </h3>
                        </li>

                        <li>
                          <h3 class="flag-wrapper is_time_show">
                            <span
                              class="flag"
                            >{{voyage.distinations[voyage.distinations.length - 1].name}}</span>
                            <span class="distTime">
                              <i class="far fa-clock"></i> 15:30
                            </span>
                            <span class="time">مدينة الوصول</span>
                          </h3>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "withSidebar",
  head: {
    title: "الخطوط اللوجيستية",
  },
  data() {
    return {
      arr: [],
      arr2: [],
      forms: {
        name: "",
      },
      formsEdit: {
        name: "",
      },
      is_pros: false,
      errorsRslt: "",
      options: {
        height: "400px",
        size: 5,
        position: "left",
      },
      options2: {
        height: "400px",
        size: 5,
        position: "left",
      },
      laravelData: {},
      voyage: {
        id: 1,
        price: 120.5,
        type: "0",
        distinations: [
          {
            name: "الجلفة",
            pivot: {
              voyage_id: 1,
              city_id: 2,
              position: 2,
            },
          },
          {
            name: "الجزائر العاصمة",
            pivot: {
              voyage_id: 1,
              city_id: 3,
              position: 0,
            },
          },
          {
            name: "تيارت",
            pivot: {
              voyage_id: 1,
              city_id: 3,
              position: 0,
            },
          },
          {
            name: "غيليزان",
            pivot: {
              voyage_id: 1,
              city_id: 3,
              position: 0,
            },
          },
          {
            name: "سطيف",
            pivot: {
              voyage_id: 1,
              city_id: 4,
              position: 1,
            },
          },
          {
            name: "مستغانم",
            pivot: {
              voyage_id: 1,
              city_id: 4,
              position: 1,
            },
          },
          {
            name: "غرداية",
            pivot: {
              voyage_id: 1,
              city_id: 4,
              position: 1,
            },
          },
          {
            name: "بشار",
            pivot: {
              voyage_id: 1,
              city_id: 4,
              position: 1,
            },
          },
          {
            name: "قالمة",
            pivot: {
              voyage_id: 1,
              city_id: 4,
              position: 1,
            },
          },
          {
            name: "تيبازة",
            pivot: {
              voyage_id: 1,
              city_id: 4,
              position: 1,
            },
          },
          {
            name: "عنابة",
            pivot: {
              voyage_id: 1,
              city_id: 4,
              position: 1,
            },
          },
        ],
      },
      days: [
        {
          id: 1,
          day: "3",
          name: "اﻹثنين",
          voyage_id: 3,
          times: [
            {
              id: 20,
              name: "الجلفة",
              pivot: {
                day_id: 4,
                city_id: 2,
                time: "11:40",
              },
            },
            {
              id: 22,
              name: "تلمسان",
              pivot: {
                day_id: 4,
                city_id: 2,
                time: "21:00",
              },
            },
            {
              id: 23,
              name: "وهران",
              pivot: {
                day_id: 4,
                city_id: 2,
                time: "05:30",
              },
            },
          ],
        },
        {
          id: 2,
          day: "4",
          name: "اﻷربعاء",
          voyage_id: 3,
          times: [
            {
              id: 20,
              name: "الجلفة",
              pivot: {
                day_id: 4,
                city_id: 2,
                time: "11:40",
              },
            },
            {
              id: 22,
              name: "تلمسان",
              pivot: {
                day_id: 4,
                city_id: 2,
                time: "21:00",
              },
            },
            {
              id: 23,
              name: "وهران",
              pivot: {
                day_id: 4,
                city_id: 2,
                time: "05:30",
              },
            },
          ],
        },
        {
          id: 3,
          day: "2",
          name: "اﻷحد",
          voyage_id: 3,
          times: [
            {
              id: 20,
              name: "الجلفة",
              pivot: {
                day_id: 4,
                city_id: 2,
                time: "11:40",
              },
            },
            {
              id: 22,
              name: "تلمسان",
              pivot: {
                day_id: 4,
                city_id: 2,
                time: "21:00",
              },
            },
            {
              id: 23,
              name: "وهران",
              pivot: {
                day_id: 4,
                city_id: 2,
                time: "05:30",
              },
            },
          ],
        },
      ],
      cities: [
        {
          id: 17,
          name: "الجلفة",
        },
        {
          id: 3,
          name: "الأغواط",
        },
        {
          id: 47,
          name: "غرداية",
        },
        {
          id: 11,
          name: "تمنراست",
        },
      ],
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
        .$post("cities/store", this.forms)
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
        .$get("cities?type=paginate&num=3&page=" + page)
        .then((response) => {
          this.is_pros = false;
          this.laravelData = response;
        })
        .catch((err) => {
          this.is_pros = false;
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    getLineList() {
      /* var myobj = {};
      var output = this.cities.map(function (obj, index) {
        myobj[this.times[index]] = {
          time: obj.name,
        };
      });
      console.log(myobj); */
    },

    gene() {
      this.arr = this.voyage.distinations.slice(1, -1);
      // this.arr2 =this.arr.pop()
    },
  },
  mounted() {
    // Fetch initial results
    this.getResults();
    this.getLineList();
    this.gene();
  },
};
</script>