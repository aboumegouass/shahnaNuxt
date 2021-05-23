<template>
  <div class="container">
    <div :class="{'app-add-store': true, ' is-loading': is_pros}">
      <div class="overlay">
        <div class="spinner-border" role="status"></div>
      </div>
      <div class="admin-from-header">
        <h2 class="title">
            <i class="fa fa-plus-circle"></i>  إضافة متجر لهذا المستخدم <span class="user-badge">عبد الحميد بومقواس</span>
        </h2>
      </div>
      <div class="admin-froms">
        <form action novalidate>
          <div class="admin-froms-body">
            <div class="row">
              <div class="col-md-6">
                <div class="admin-froms-item">
                  <label class="lable-input" for="app_store_name">اسم المتجر</label>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      required
                      id="app_store_name"
                      type="text"
                      placeholder="اسم المتجر"
                      class="form-input xs form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="admin-froms-item">
                  <label class="lable-input" for="app_store_activity">النشاط</label>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      required
                      type="text"
                      id="app_store_activity"
                      placeholder="النشاط"
                      class="form-input xs form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="admin-froms-item">
                  <label class="lable-input" for="app_shipping_type_id">الباقة</label>
                  <div class="relative">
                    <select
                      class="form-input xs form-control"
                      id="app_shipping_type_id"
                    >
                      <option>اختر من الباقات</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="admin-froms-item">
                  <label class="lable-input" for="app_register_number">رقم السجل التجاري</label>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      required
                      id="app_register_number"
                      type="text"
                      placeholder="رقم السجل التجاري"
                      class="form-input xs form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="admin-froms-item">
                  <label class="lable-input" for="app_store_maarof_account">حساب معروف</label>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      required
                      id="app_store_maarof_account"
                      type="text"
                      placeholder="حساب معروف"
                      class="form-input xs form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="admin-froms-item">
                  <label class="lable-input" for="app_store_website">
                       الموقع الرسمي
                      <div class="form-icon-info">
                          <span class="hover-icon" @mouseenter="onTooltipShowen()" @mouseleave="onTooltipHidden()">
                              <i class="fa fa-info-circle"></i>
                          </span>
                          <span :class="{'hover-content ':true, ' is-showing': is_tooltip_showen}">
                              <p class="text">يمكنك إضافة موقع رسمي لمتجرك</p>
                          </span>
                      </div>
                  </label>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      required
                      id="app_store_website"
                      type="text"
                      placeholder="الموقع الرسمي"
                      class="form-input xs form-control"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div class="admin-froms-footer">
            <button class="btn butt-primary2 butt-xs">
              <i class="fa fa-save"></i> حفظ البيانات
            </button>
          </div>
        </form>
        <hr/>
        <div class="smart-alert default">
            <div class="d-flex">
                <div class="smart-alert-img">
                    <div class="icon-featured">
                        <i class="fa fa-info-circle"></i>
                    </div>
                </div>
                <div class="smart-alert-content">
                    <h3 class="title">تنبيه</h3>
                    <p class="text">
هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر
                    </p>
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
    title: "إضافة متجر لهذا المستخدم ",
  },
  middleware: "auth",
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
      is_tooltip_showen: false,
    };
  },
  methods: {
      onTooltipShowen() {
          this.is_tooltip_showen = true
      },
      onTooltipHidden() {
          this.is_tooltip_showen = false
      },
  },
  mounted() {},
};
</script>