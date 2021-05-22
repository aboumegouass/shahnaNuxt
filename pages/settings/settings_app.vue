<template>
  <div class="container">
    <div class="page-heading">
      <h5 class="title">
        <i class="fa fa-file"></i> إعدادات متغيرة للتطبيق
      </h5>
    </div>
    <div class="sh-data-container bg-white">
      <div class="admin-container h-auto py-0">
        <!-- 'is-loading' -->
        <div class="admin-overlay">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="admin-froms">
          <form action class="" novalidate>
            <div class="admin-froms-body p-5">
              <div class="row">
                <div class="col-md-4 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_from">مبلغ التوصيل لمندوب التوزيع</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="مبلغ التوصيل لمندوب التوزيع"
                        id="app_date_from"
                        name="app_date_from"
                        class="form-input form-control sm"
                      />
                      <div class="invalid-feedback">أدخل مبلغ التوصيل لمندوب التوزيع</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_to">رسوم توجيه الطلبات</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="رسوم توجيه الطلبات"
                        id="app_date_to"
                        name="app_date_to"
                        class="form-input form-control sm"
                      />
                      <div class="invalid-feedback">أدخل رسوم توجيه الطلبات</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_to">عدد الطلبات المستلمة</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="عدد الطلبات المستلمة"
                        id="app_date_to"
                        name="app_date_to"
                        class="form-input form-control sm"
                      />
                      <p class="admin-froms-note sm"><i class="fa fa-info-circle"></i> عدد الطلبات المستلمة لمندوب التوزيع</p>
                      <div class="invalid-feedback">أدخل عدد الطلبات المستلمة</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_from">قيمة طلبات الدفع عند الإستلام</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="قيمة طلبات الدفع عند الإستلام"
                        id="app_date_from"
                        name="app_date_from"
                        class="form-input form-control sm"
                      />
                      <p class="admin-froms-note sm"><i class="fa fa-info-circle"></i> إجمالي قيمة طلبات الدفع الإستلام المستلمة لمندوب التوزيع لاتتجاوز 1500.00</p>

                      <div class="invalid-feedback">أدخل قيمة طلبات الدفع عند الإستلام</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_to">قيمة الطلبات المستلمة لمندوب التوزيع</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="قيمة الطلبات المستلمة لمندوب التوزيع"
                        id="app_date_to"
                        name="app_date_to"
                        class="form-input form-control sm"
                      />
                      <p class="admin-froms-note sm"><i class="fa fa-info-circle"></i> إجمالي قيمة الطلبات المستلمة لمندوب التوزيع لاتتجاوز 3500.00</p>

                      <div class="invalid-feedback">أدخل قيمة الطلبات المستلمة لمندوب التوزيع</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_to">قيمة الطلبات المستلمة لمندوب التوزيع</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="قيمة الطلبات المستلمة لمندوب التوزيع"
                        id="app_date_to"
                        name="app_date_to"
                        class="form-input form-control sm"
                      />
                      <p class="admin-froms-note sm"><i class="fa fa-info-circle"></i> إجمالي قيمة الطلبات المستلمة لمندوب النقل لاتتجاوز 10000.00</p>
                      <div class="invalid-feedback">أدخل قيمة الطلبات المستلمة لمندوب التوزيع</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_from">عدد الطلبات المعلقة لمندوب التوزيع</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="عدد الطلبات المعلقة لمندوب التوزيع"
                        id="app_date_from"
                        name="app_date_from"
                        class="form-input form-control sm"
                      />
                      <p class="admin-froms-note sm"><i class="fa fa-info-circle"></i> عدد الطلبات المعلقة لمندوب التوزيع لاتتجاوز 5</p>

                      <div class="invalid-feedback">أدخل عدد الطلبات المعلقة لمندوب التوزيع</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_date_to">عدد الطلبات المعلقة لمندوب النقل</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="عدد الطلبات المعلقة لمندوب النقل"
                        id="app_date_to"
                        name="app_date_to"
                        class="form-input form-control sm"
                      />
                      <p class="admin-froms-note sm"><i class="fa fa-info-circle"></i> عدد الطلبات المعلقة لمندوب النقل لاتتجاوز 5</p>

                      <div class="invalid-feedback">أدخل قيمة الطلبات المستلمة لمندوب التوزيع</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="admin-froms-footer p-5">
              <button type="submit" class="btn butt-primary butt-md">
                <i class="fa fa-save"></i> حفظ البيانات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "withSidebar",
  middleware: "auth",
  head: {
    title: "إعدادات متغيرة للتطبيق",
  },
  data() {
    return {};
  },
  methods: {},
};
</script>