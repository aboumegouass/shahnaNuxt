<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> الرحلات
      </h5>
    </div>
    <button class="btn butt-xs butt-primary" v-b-modal="'modalAdd'">
      <i class="fa fa-plus"></i> إضافة
    </button>
    <hr />
    <div class="sh-data-container">
      <data-table v-on:showModalAdd="toggleBtn()" />
    </div>
    <b-modal
      id="modalAdd"
      title="إضافة جديد"
      modal-class="addFormWithoutFoorer modal-850"
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
          <form action class="was-validated" novalidate>
            <div class="admin-froms-body">
              <div class="row">
                <div class="col-md-6 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_from">تاريخ الإنطلاق</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="date"
                        placeholder="تاريخ الإنطلاق"
                        id="app_date_from"
                        name="app_date_from"
                        class="form-input form-control xs"
                      />
                      <div class="invalid-feedback">أدخل تاريخ الإنطلاق</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_to">تاريخ الوصول</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="date"
                        placeholder="تاريخ الوصول"
                        id="app_date_to"
                        name="app_date_to"
                        class="form-input form-control xs"
                      />
                      <div class="invalid-feedback">أدخل تاريخ الوصول</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_vile_from">اختر الخط المناسب للرحلة</label>
                    <div class="relative">
                      
                      <div class="invalid-feedback">أدخل اختر الخط المناسب للرحلة </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_vile_to">يوم الرحلة</label>
                    <div class="relative">
                      
                      <div class="invalid-feedback">اختر يوم الرحلة</div>
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
export default {
  layout: "withSidebar",
  head: {
    title: "الرحلات",
  },
  data() {
    return {};
  },
  methods: {},
};
</script>