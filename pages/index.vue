<template>
  <div class>
    <nav id="navbar-example2" class="navbar home-navbar navbar-light bg-light m-0 px-3">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/logo4.png" alt />
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item active">
          <a class="nav-link" href="#">الرئيسية</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#features">مميزات التطبيق</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">حول التطبيق</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">اتصل بنا</a>
        </li>
      </ul>
    </nav>
    <div
      data-bs-spy="scroll"
      style="outline: none;"
      data-bs-target="#navbar-example2"
      data-bs-offset="0"
      tabindex="0"
    >
      <div id="fat" class="bg-white">
        <div class="px-4 pt-5 text-center site-header">
          <div class="col-lg-10 mx-auto">
            <div class="content-header is-loading">
              <h1 class="display-4 fw-bold title">{{ topheader.title }}</h1>
              <p class="lead mb-4">{{ topheader.description }}</p>
              <div class="loading-header">
                <div class="spinner-border" role="status"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-hidden image-header-app">
          <img src="../assets/img/bg3.png" alt />
        </div>
      </div>
      <div id="features" class="features-app py-5">
        <div class="container">
          <div class="site-heading">
            <h2 class="title">
              <i class="fa fa-envelope"></i> مميزات التطبيق
            </h2>
            <div class="row py-5">
              <div class="col-md-4 col-xs-6 d-flex align-items-start feature-item">
                <img
                  class="bi text-muted flex-shrink-0 me-3 feat-img"
                  src="../assets/img/icon4.png"
                />
                <div>
                  <h4 class="fw-bold mb-0 title">العنوان الأول</h4>
                  <p
                    class="text"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                </div>
              </div>
              <div class="col-md-4 col-xs-6 d-flex align-items-start feature-item">
                <img
                  class="bi text-muted flex-shrink-0 me-3 feat-img"
                  src="../assets/img/icon2.png"
                />
                <div>
                  <h4 class="fw-bold mb-0 title">العنوان الأول</h4>
                  <p
                    class="text"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                </div>
              </div>
              <div class="col-sm-4 col-xs-6 d-flex align-items-start feature-item">
                <img
                  class="bi text-muted flex-shrink-0 me-3 feat-img"
                  src="../assets/img/icon1.png"
                />
                <div>
                  <h4 class="fw-bold mb-0 title">العنوان الأول</h4>
                  <p
                    class="text"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                </div>
              </div>
              <div class="col-sm-4 col-xs-6 d-flex align-items-start feature-item">
                <img
                  class="bi text-muted flex-shrink-0 me-3 feat-img"
                  src="../assets/img/icon5.png"
                />
                <div>
                  <h4 class="fw-bold mb-0 title">العنوان الأول</h4>
                  <p
                    class="text"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                </div>
              </div>
              <div class="col-sm-4 col-xs-6 d-flex align-items-start feature-item">
                <img
                  class="bi text-muted flex-shrink-0 me-3 feat-img"
                  src="../assets/img/icon6.png"
                />
                <div>
                  <h4 class="fw-bold mb-0 title">العنوان الأول</h4>
                  <p
                    class="text"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                </div>
              </div>
              <div class="col-sm-4 col-xs-6 d-flex align-items-start feature-item">
                <img
                  class="bi text-muted flex-shrink-0 me-3 feat-img"
                  src="../assets/img/icon3.png"
                />
                <div>
                  <h4 class="fw-bold mb-0 title">العنوان الأول</h4>
                  <p
                    class="text"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" class="terms-container-app">
        <div class="container my-5">
          <div class="site-heading">
            <h2 class="title">
              <i class="fa fa-envelope"></i> حول التطبيق
            </h2>
          </div>
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 bg-white align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <p class="lead" d v-text="aboutContent"></p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <nuxt-link to="/login" class="btn butt-primary butt-md">Primary</nuxt-link>
                <nuxt-link to="/login" class="btn butt-primary-out mr-2 butt-md">Default</nuxt-link>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
              <div class="position-lg-absolute top-0 left-0 overflow-hidden">
                <img class="d-block rounded-lg-3" src="../assets/img/e9901a14410c1cf70144aed1d40233a3.png" alt width="720" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div id="contact">
        <div class="contact-form-content">
          <div class="container">
            <div class="site-heading">
              <h2 class="title">
                <i class="fa fa-envelope"></i> اتصل بنا
              </h2>
            </div>
            <div v-if="errors !== ''">
              <div class="site-alert site-alert-red">
                <p class="text">
                  <i class="fa fa-times-circle"></i>
                  {{ errors }}
                </p>
              </div>
            </div>
            <div v-if="success !== ''">
              <div class="site-alert site-alert-green">
                <p class="text">
                  <i class="fa fa-check-circle"></i>
                  {{ success }}
                </p>
              </div>
            </div>
            <div :class="{'admin-container contact-container': true, ' is-loading': isLoading}">
              <!-- 'is-loading' -->
              <div class="admin-overlay">
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
              </div>
              <form @submit.prevent="add()">
                <div class="admin-froms">
                  <div class="admin-froms-body">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="admin-froms-item">
                          <label class="lable-input" for="app_contact_type">نوع الرسالة</label>
                          <div class="relative">
                            <select
                              placeholder="الاسم الكامل"
                              id="app_contact_type"
                              class="form-input form-control sm"
                              style="height: 48px"
                              v-model="forms.type_message"
                            >
                              <option value="0" selected="selected">رسالة عادية</option>
                              <option value="1">شكوى واعتراض</option>
                            </select>
                          </div>
                        </div>
                        <div class="admin-froms-item">
                          <label class="lable-input" for="app_fullname">الاسم الكامل</label>
                          <div class="relative">
                            <input
                              type="text"
                              placeholder="الاسم الكامل"
                              id="app_fullname"
                              v-model="forms.fullname"
                              class="form-input sm"
                            />
                          </div>
                        </div>
                        <div class="admin-froms-item">
                          <label class="lable-input" for="app_email">البريد الإلكتروني</label>
                          <div class="relative">
                            <input
                              type="text"
                              placeholder="البريد الإلكتروني"
                              id="app_email"
                              v-model="forms.email"
                              class="form-input sm"
                            />
                          </div>
                        </div>
                        <div class="admin-froms-item">
                          <label class="lable-input" for="app_title">العنوان</label>
                          <div class="relative">
                            <input
                              type="text"
                              placeholder="العنوان"
                              id="app_title"
                              class="form-input sm"
                              v-model="forms.title"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="admin-froms-item">
                          <label class="lable-input" for="app_contact_message">نص الرسالة</label>
                          <div class="relative">
                            <textarea
                              placeholder="نص الرسالة"
                              id="app_contact_message"
                              class="form-input sm"
                              v-model="forms.message"
                              rows="15"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="admin-froms-footer">
                    <button type="submit" class="btn butt-primary butt-md">إرسال</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="app-footer py-3">
      <div class="container">
        <div class="d-flex">
          <div class="ml-auto">
            <p class="m-0 text-copyright">&copy; جميع الحقوق محفوظة لدى <nuxt-link to="/">تطبيق شحنة</nuxt-link> </p>
          </div>
          <ul class="nav me-auto m-0  ">
            <li class="nav-item"><a href="/" class="nav-link"><i class="fab fa-twitter"></i></a></li>
            <li class="nav-item"><a href="/" class="nav-link"><i class="fab fa-pinterest"></i></a></li>
            <li class="nav-item"><a href="/" class="nav-link"><i class="fab fa-whatsapp"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  layout: "default",
  head: {
    title: "تطبيق شحنة | الرئيسية",
  },
  data() {
    return {
      isLoading: false,
      errors: "",
      success: "",
      aboutContent: "",
      topheader: "",
      forms: {
        title: "",
        fullname: "",
        email: "",
        message: "",
        type_message: "",
      },
    };
  },
  methods: {
    getAbout() {
      this.is_pros = true;
      this.$axios
        .$get("about_us")
        .then((res) => {
          this.is_pros = false;
          this.aboutContent = res
        })
        .catch((err) => {
          this.is_pros = false;
          if (err.response.status === 404) {
            this.errorsRslt = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    getTopheader() {
      this.$axios
        .$get("top_header")
        .then((response) => {
          if (response) {
            //console.log(response);
            this.topheader = response;
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.errorText = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
        });
    },
    add() {
      this.isLoading = true
      this.$axios
        .$post("contact_store", this.forms)
        .then((res) => {
          //console.log(res);
          this.forms.fullname = "";
          this.forms.email = "";
          this.forms.message = "";
          this.forms.title = "";
          this.errors = "";
          this.success = "لقد تم إرسال الرسالة بنجاح";
          this.isLoading = false
        })
        .catch((e) => {
          this.isLoading = false
          this.success = "";
          if (e.response.status === 404 || e.response.status === 401) {
            this.errors = "حدث خطأ غير متوقع . يرجى إعادة المحاولة";
          }
          if (e.response.status === 422) {
            this.errors = "يرجى ملأ جميع البيانات";
          }
        });
    },
  },
  mounted() {
    // Fetch initial results
    this.getAbout();
    this.getTopheader();
  },
};
</script>
