<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> إدارة المستودعات
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
          <form action class="needs-validation" novalidate>
            <div class="admin-froms-body">
              <div class="row">
                <div class="col-sm-12 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_user_store">الرقم التسلسلي لصاحب المستودع</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="الرقم التسلسلي لصاحب المستودع"
                        id="app_id_user_store"
                        name="app_id_user_store"
                        class="form-input form-control sm"
                      />
                      <div class="invalid-feedback">أدخل اسم المستخدم أو البريد الإكتروني</div>
                      <div
                        class="spinner-border"
                        style="width: 1.2rem; height: 1.2rem; border-width: 2px;"
                        role="status"
                      >
                      </div>
                      <div class="box-search">
                        <div class="box-search-users">
                          <div class="box-search-item d-flex">
                            <div class="item-head">
                              <img src="../../assets/img/a1.jpg" alt />
                            </div>
                            <div class="item-content">
                              <h3 class="title">عبد الحميد بومقواس</h3>
                              <p class="meta">25354 | @aboumegouass</p>
                            </div>
                          </div>
                          <div class="box-search-item d-flex">
                            <div class="item-head">
                              <img src="../../assets/img/a1.jpg" alt />
                            </div>
                            <div class="item-content">
                              <h3 class="title">عبد الحميد بومقواس</h3>
                              <p class="meta">25354 | @aboumegouass</p>
                            </div>
                          </div>
                          <div class="box-search-item d-flex">
                            <div class="item-head">
                              <img src="../../assets/img/a1.jpg" alt />
                            </div>
                            <div class="item-content">
                              <h3 class="title">عبد الحميد بومقواس</h3>
                              <p class="meta">25354 | @aboumegouass</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="admin-froms-note">
                      <i class="fa fa-info-circle"></i> أدخل اسم المستخدم أو البريد الإكتروني
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_user_store">مدة تجهيز الطلب</label>
                    <div class="relative">
                      <input
                        required
                        type="text"
                        placeholder="مدة تجهيز الطلب"
                        id="app_id_user_store"
                        name="app_id_user_store"
                        class="form-input form-control sm"
                      />
                      <div class="invalid-feedback">أدخل مدة تجهيز الطلب</div>
                    </div>
                    <p class="admin-froms-note">
                      <i class="fa fa-info-circle"></i> أدخل اسم المستخدم أو البريد الإكتروني
                    </p>
                  </div>
                </div>
                <div class="col-sm-6 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_user_store">عنوان المستودع</label>
                    <div class="relative">
                      <input
                        required
                        type="text"
                        placeholder="عنوان المستودع"
                        id="app_id_user_store"
                        name="app_id_user_store"
                        class="form-input form-control sm"
                      />
                      <div class="invalid-feedback">أدخل عنوان المستودع</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_user_store">عنوان Google Maps</label>
                    <div class="relative">
                      <input
                        required
                        type="text"
                        placeholder="عنوان Google Maps"
                        id="app_id_user_store"
                        name="app_id_user_store"
                        class="form-input form-control sm"
                      />
                      <div class="invalid-feedback">أدخل النشاط التجاري</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_id_user_store">ملاحظات عامة</label>
                    <div class="relative">
                      <textarea required placeholder="ملاحظات عامة" name="app_id_user_store" id="app_id_user_store" cols="30" class="form-input form-control sm" rows="10"></textarea>
                      <div class="invalid-feedback">أدخل ملاحظات عامة</div>
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
    title: "إدارة المستودعات",
  },
  data() {
    return {};
  },
  methods: {},
};
</script>