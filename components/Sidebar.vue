<template>
  <div class="sidebar-column position-sticky sticky-xl-top" >
    <div class="sidebar-menus position-sticky sticky-xl-top" dir="rtl">
      <div>
        <div class="sidebar-logo">
          <img class="only-logo" src="../assets/img/logo2.png" alt />
          <img class="only-logo-icon" src="../assets/img/logo3.png" alt />
        </div>
        <div class="accordion" id="accordionExample">
          <nuxt-link to="/dashboard" prefetch>
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Tooltip on top"
            >
              <img src="../assets/img/icon/1.png" alt />
            </span>
            <span class="text">الرئيسية</span>
          </nuxt-link>

          <div class="accordion-item">
            <div class="accordion-header" id="heading2">
              <a
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseRoles"
                aria-expanded="false"
                aria-controls="collapseRoles"
              >
                <span class="icon">
                  <img src="../assets/img/icon/2.png" alt />
                </span>
                <span class="text">الصلاحيات والأدوار</span>
                <span class="icon-caret">
                  <i class="fa fa-angle-down"></i>
                </span>
              </a>
            </div>

            <div
              id="collapseRoles"
              class="accordion-collapse collapse"
              aria-labelledby="headingRoles"
              data-bs-parent="#accordionExample"
            >
              <div class="sub-list">
                <ul class="submenu">
                  <li>
                    <nuxt-link to="/admins/roles" prefetch>نظام الأدوار والصلاحيات</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/admins" prefetch>المشرفون والمديرون</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" id="heading2">
              <a
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                <span class="icon">
                  <img src="../assets/img/icon/4.png" alt />
                </span>
                <span class="text">إدارة المتاجر</span>
                <span class="icon-caret">
                  <i class="fa fa-angle-down"></i>
                </span>
              </a>
            </div>

            <div
              id="collapse2"
              class="accordion-collapse collapse"
              aria-labelledby="heading2"
              data-bs-parent="#accordionExample"
            >
              <div class="sub-list">
                <ul class="submenu">
                  <li>
                    <nuxt-link to="/stores" prefetch>المتاجر</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/stores/repositories" prefetch>المستودعات</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/stores/stores_repositories" prefetch>متاجر/مستودعات</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/stores/stores_verify" prefetch>طلبات التوثيق</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header" id="heading1">
              <a
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                <span class="icon">
                  <img src="../assets/img/icon/5.png" alt />
                </span>
                <span class="text">جدولة الرحلات</span>
                <span class="icon-caret">
                  <i class="fa fa-angle-down"></i>
                </span>
              </a>
            </div>

            <div
              id="collapse1"
              class="accordion-collapse collapse"
              aria-labelledby="heading1"
              data-bs-parent="#accordionExample"
            >
              <div class="sub-list">
                <ul class="submenu">
                  <li>
                    <nuxt-link to="/transports" prefetch>إدارة عمليات النقل</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <nuxt-link to="/orders" prefetch>
            <span class="icon">
              <img src="../assets/img/icon/6.png" alt />
            </span>
            <span class="text">إدارة الطلبات</span>
          </nuxt-link>

          <nuxt-link to="/contacte" prefetch>
            <span class="icon">
              <img src="../assets/img/icon/7.png" alt />
            </span>
            <span class="text">الشكاوي والإعتراضات</span>
          </nuxt-link>

          <div class="accordion-item">
            <div class="accordion-header" id="headingSettings">
              <a
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseUsers"
                aria-expanded="false"
                aria-controls="collapseUsers"
              >
                <span class="icon">
                  <img src="../assets/img/icon/8.png" alt />
                </span>
                <span class="text">إدارة الأعضاء</span>
                <span class="icon-caret">
                  <i class="fa fa-angle-down"></i>
                </span>
              </a>
            </div>

            <div
              id="collapseUsers"
              class="accordion-collapse collapse"
              aria-labelledby="headingUsers"
              data-bs-parent="#accordionExample"
            >
              <div class="sub-list">
                <ul class="submenu">
                  <li>
                    <nuxt-link to="/users" prefetch>الأعضاءٍ</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/settings/nationalities" prefetch>الجنسيات</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/settings/banks" prefetch>الحسابات البنكية</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header" id="headingSettings">
              <a
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSettings"
                aria-expanded="false"
                aria-controls="collapseSettings"
              >
                <span class="icon">
                  <img src="../assets/img/icon/3.png" alt />
                </span>
                <span class="text">ثوابت النظام</span>
                <span class="icon-caret">
                  <i class="fa fa-angle-down"></i>
                </span>
              </a>
            </div>

            <div
              id="collapseSettings"
              class="accordion-collapse collapse"
              aria-labelledby="headingSettings"
              data-bs-parent="#accordionExample"
            >
              <div class="sub-list">
                <vuescroll>
                  <ul class="submenu">
                    <li>
                      <nuxt-link to="/settings/cities" prefetch>المدن والأحياء</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/settings/nationalities" prefetch>الجنسيات</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/settings/banks" prefetch>الحسابات البنكية</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/settings/lines" prefetch>الخطوط اللوجيستية</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/settings/shippings/types" prefetch>أنواع الشحن</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/settings/shippings/bouquets" prefetch>الباقات</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/settings/shippings/sizes" prefetch>أحجام الشحنات</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/settings/settings_app" prefetch>إعدادات متغيرة للتطبيق</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/settings/cms" prefetch>إدارة المحتوى</nuxt-link>
                    </li>
                  </ul>
                </vuescroll>
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
  data() {
    return {
      options2: {
        height: "700px",
        size: 5,
        position: "left",
      },
    };
  },
  methods: {
    
  },
};
</script>
