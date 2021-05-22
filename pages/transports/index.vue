<template>
  <div class="bg-white">
      <div class="row">
          <div class="col-md-9 p-0">              
            <div class="page-heading m-4">
                <h5 class="title">
                    <i class="fa fa-file"></i> إدارة عمليات النقل
                </h5>
            </div>
          </div>
          <div class="col-md-3 p-0">
              <div class="app-sidebar">
                  <div class="app-sidebar-filter">
                    <div class="page-heading">
                        <h5 class="title">
                            <i class="fa fa-filter"></i>  فلترة الرحلات
                        </h5>
                    </div>
                    <div class="app-form-sidebar">
                      <label for="app_tranporter">اختر السائق</label>
                      <select v-model="selected" id="app_tranporter" class="form-input form-control xs">
                        <option aria-selected="df" :value="null">اختر السائق</option>
                        <!-- These options will appear after the ones from 'options' prop -->
                        <option value="C">مشرف 1</option>
                        <option value="5">مشرف 2</option>
                        <option value="C5">مشرف 1</option>
                        <option value="C9">مشرف 1</option>
                      </select>
                    </div>
                    <div class="app-form-sidebar">
                      <label>اختر السائق</label>
                      <div class="trans-aside-option">
                          <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                              type="checkbox"
                              value="i"
                              class="custom-control-input"
                              id="actived-1"
                            />
                            <label class="custom-control-label" :for="'actived-1'">هذا اليوم</label>
                          </div>
                      </div>
                      <div class="trans-aside-option">
                          <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                              type="checkbox"
                              value="i"
                              class="custom-control-input"
                              id="actived-2"
                            />
                            <label class="custom-control-label" :for="'actived-2'">هذا الأسبوع</label>
                          </div>
                      </div>
                      <div class="trans-aside-option">
                          <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                              type="checkbox"
                              value="i"
                              class="custom-control-input"
                              id="actived-3"
                            />
                            <label class="custom-control-label" :for="'actived-3'">هذا الشهر</label>
                          </div>
                      </div>
                      <div class="trans-aside-option">
                          <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                              type="checkbox"
                              value="i"
                              class="custom-control-input"
                              id="actived-4"
                            />
                            <label class="custom-control-label" :for="'actived-4'">هذا العام</label>
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
    middleware: "auth",
  head: {
    title: "إدارة عمليات النقل",
  },
  data() {
    return {};
  },
  methods: {},
};
</script>