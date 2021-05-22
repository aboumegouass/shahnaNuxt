<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 p-0">
        <div v-if="!is_user_edit">
          <div :class="{'site-panel ': true, ' is-loading': is_pros_user}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">صاحب المتجر</h3>
              <button class="site-panel-tool" @click="edit_user()">
                <i class="fa fa-edit"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="user-details">
                <div class="user-avatar" style>
                  <span class="is-online"></span>
                </div>
                <div class="user-content">
                  <h3 class="title">عبد الله الهادي</h3>
                  <p class="meta">مدير متجر / أمين مستودع</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div :class="{'site-panel ': true, ' is-loading': is_pros_user}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">ربطه مع صاحب متجر</h3>
              <button class="site-panel-tool" @click="view_user()">
                <i class="fa fa-arrow-left"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="admin-container h-auto">
                <div class="admin-froms">
                  <form action @submit.prevent novalidate>
                    <div class="admin-froms-body">
                      <div class="admin-froms-item">
                        <label class="lable-input" for="app_store_user">اختر مندوب المتجر</label>
                        <div :class="{'relative':true, ' is-searching': is_searching}">
                          <div class="search-overlay">
                            <div
                              class="spinner-border text-warning spinner-border-sm"
                              role="status"
                            ></div>
                          </div>
                          <input
                            autocomplete="off"
                            required
                            v-model="formsUser.user_name"
                            @keyup="searchUser()"
                            type="text"
                            placeholder="اسم المستخدم"
                            id="app_store_user"
                            class="form-input form-control sm"
                          />
                          <div
                            :class="{'box-dropdown user-search ': true, ' is-showen': is_showen}"
                          >
                            <div class="box-header">
                              <h3 class="title">قائمة الأعضاء</h3>
                            </div>
                            <div class="box-content">
                              <ul class="items-list">
                                <li>
                                  <a class="link-user d-flex">
                                    <div class="link-user-profile">
                                      <img src="../../assets/img/a1.jpg" alt />
                                    </div>
                                    <div class="link-user-content">
                                      <h3 class="title">عبد الحميد بومقواس</h3>
                                      <p class="meta">aboumegouass@gmail.com</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a class="link-user d-flex">
                                    <div class="link-user-profile">
                                      <img src="../../assets/img/a1.jpg" alt />
                                    </div>
                                    <div class="link-user-content">
                                      <h3 class="title">عبد الحميد بومقواس</h3>
                                      <p class="meta">aboumegouass@gmail.com</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a class="link-user d-flex">
                                    <div class="link-user-profile">
                                      <img src="../../assets/img/a1.jpg" alt />
                                    </div>
                                    <div class="link-user-content">
                                      <h3 class="title">عبد الحميد بومقواس</h3>
                                      <p class="meta">aboumegouass@gmail.com</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a class="link-user d-flex">
                                    <div class="link-user-profile">
                                      <img src="../../assets/img/a1.jpg" alt />
                                    </div>
                                    <div class="link-user-content">
                                      <h3 class="title">عبد الحميد بومقواس</h3>
                                      <p class="meta">aboumegouass@gmail.com</p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="admin-froms-footer">
                      <button type="submit" class="btn butt-primary butt-xs">
                        <i class="fa fa-save"></i> حفظ البيانات
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!is_shipp_edit">
          <div :class="{'site-panel ': true, ' is-loading': is_pros_shipp}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">مبالغ الشحنات</h3>
              <button class="site-panel-tool" @click="edit_shipp()">
                <i class="fa fa-edit"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="privacy-details">
                <table class="table">
                  <tbody>
                    <tr>
                      <th>تحويل مبالغ المحصلة من العملاء</th>
                      <td>شهري</td>
                    </tr>
                    <tr>
                      <th>استقطاع تكلفة التوصيل</th>
                      <td>نعم</td>
                    </tr>
                    <tr>
                      <th>التحويل الأسبوعي</th>
                      <td>الأحد</td>
                    </tr>
                    <tr>
                      <th>التحويل الشهري</th>
                      <td>802 دقيقة</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div :class="{'site-panel ': true, ' is-loading': is_pros_shipp}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">تعديل مبالغ الشحنات</h3>
              <button class="site-panel-tool" @click="view_shipp()">
                <i class="fa fa-arrow-left"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="privacy-details">
                <form @submit.prevent="shipp_edit_form()" novalidate>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>تحويل مبالغ المحصلة من العملاء</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>استقطاع تكلفة التوصيل</th>
                        <td>
                          <select class="form-select">
                            <option value>لا</option>
                            <option value>نعم</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>التحويل الأسبوعي</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>التحويل الشهري</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="py-2">
                    <button type="submit" class="btn butt-xs butt-primary">
                      <i class="fa fa-save"></i> حفظ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- -------------------------------------------------------------- -->

        <div v-if="!is_payment_edit">
          <div :class="{'site-panel ': true, ' is-loading': is_pros_payment}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">طريقة السداد والفواتير</h3>
              <button class="site-panel-tool" @click="edit_payment()">
                <i class="fa fa-edit"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="privacy-details">
                <table class="table">
                  <tbody>
                    <tr>
                      <th>نوع الباقات</th>
                      <td>شهري</td>
                    </tr>
                    <tr>
                      <th>قيمة الباقة</th>
                      <td>مقدم</td>
                    </tr>
                    <tr>
                      <th>تاريخ السداد</th>
                      <td>تاريخ</td>
                    </tr>
                    <tr>
                      <th>طريقة السداد</th>
                      <td>تحويل بنكي</td>
                    </tr>
                    <tr>
                      <th>تاريخ إصدار الفاتورة</th>
                      <td>أسبوعي</td>
                    </tr>
                    <tr>
                      <th>طريقة إرسال الفاتورة</th>
                      <td>إيميل</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div :class="{'site-panel ': true, ' is-loading': is_pros_payment}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">طريقة السداد والفواتير</h3>
              <button class="site-panel-tool" @click="view_payment()">
                <i class="fa fa-arrow-left"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="privacy-details">
                <form @submit.prevent="payment_edit_form()" novalidate>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>نوع الباقات</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>قيمة الباقة</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>تاريخ السداد</th>
                        <td>
                          <input type="date" class="panel-form-input" />
                        </td>
                      </tr>
                      <tr>
                        <th>طريقة السداد</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>تاريخ إصدار الفاتورة</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>طريقة إرسال الفاتورة</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="py-2">
                    <button type="submit" class="btn butt-xs butt-primary">
                      <i class="fa fa-save"></i> حفظ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- ------------------------------------------------------------------------------------- -->

        <div v-if="!is_logistic_edit">
          <div :class="{'site-panel ': true, ' is-loading': is_pros_logistic}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">التفاصيل اللوجيستسة</h3>
              <button class="site-panel-tool" @click="edit_logistic()">
                <i class="fa fa-edit"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="privacy-details">
                <table class="table">
                  <tbody>
                    <tr>
                      <th>نوع الشحن</th>
                      <td>شهري</td>
                    </tr>
                    <tr>
                      <th>حجم الشحنات</th>
                      <td>مقدم</td>
                    </tr>
                    <tr>
                      <th>نطاق الباقة</th>
                      <td>تاريخ</td>
                    </tr>
                    <tr>
                      <th>الحد الأدنى للتحميل</th>
                      <td>تحويل بنكي</td>
                    </tr>
                    <tr>
                      <th>ملاحظات</th>
                      <td>أسبوعي</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div :class="{'site-panel ': true, ' is-loading': is_pros_logistic}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">طريقة السداد والفواتير</h3>
              <button class="site-panel-tool" @click="view_logistic()">
                <i class="fa fa-arrow-left"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="privacy-details">
                <form @submit.prevent="logistic_edit_form()" novalidate>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>نوع الباقات</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>قيمة الباقة</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>تاريخ السداد</th>
                        <td>
                          <input type="date" class="panel-form-input" />
                        </td>
                      </tr>
                      <tr>
                        <th>طريقة السداد</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>تاريخ إصدار الفاتورة</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>طريقة إرسال الفاتورة</th>
                        <td>
                          <select class="form-select">
                            <option value>شهري</option>
                            <option value>أسبوعي</option>
                            <option value>يومي</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="py-2">
                    <button type="submit" class="btn butt-xs butt-primary">
                      <i class="fa fa-save"></i> حفظ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="page-heading">
          <h5 class="title">
            <i class="fa fa-file"></i> حلويات صوفيا
            <span
              class="verified-icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="هذا المتجر موثوق"
            >
              <i class="fa fa-check-circle"></i>
            </span>
          </h5>
        </div>
        <div :class="{'site-panel ': true, ' is-loading': is_pros_reposit}">
          <div class="panel-overlay">
            <div class="spinner-border" role="status"></div>
          </div>
          <div class="site-panel-header">
            <h3 class="title">معلومات عن المتجر</h3>
          </div>
          <div class="site-panel-content">
            <div class="row">
              <div class="col-md-5">
                <div class="store-code">
                  <h1 class="title">محل صوفيا</h1>
                  <h1 class="title-code">PTG8500</h1>
                  <p class="meta">
                    بيع مستلزمات الحلويات |
                    <a href target="_blank">حساب معروف</a>
                  </p>
                </div>
              </div>
              <div class="col-md-7">
                <div class="store-details">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>رقم السجل التجاري</th>
                        <td>365985472200</td>
                      </tr>
                      <tr>
                        <th>الموقع الرسمي</th>
                        <td>
                          <a href target="_blank">إضغط هنا</a>
                        </td>
                      </tr>
                      <tr>
                        <th>الباقة</th>
                        <td>الذهبية</td>
                      </tr>
                      <tr>
                        <th>البريد الإلكتروني</th>
                        <td>info@shahna.co</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="{'site-panel ': true, ' is-loading': is_pros_reposit}">
          <div class="panel-overlay">
            <div class="spinner-border" role="status"></div>
          </div>
          <div class="site-panel-header">
            <h3 class="title">معلومات عن المستودع</h3>
            <button class="site-panel-tool" @click="pros_reposit()">
              <i class="fa fa-edit"></i>
            </button>
          </div>
          <div class="site-panel-content">
            <div class="repo-details">
              <table class="table">
                <tbody>
                  <tr>
                    <th>اسم المستودع</th>
                    <td>نفس اسم المتجر</td>
                  </tr>
                  <tr>
                    <th>أوقات العمل</th>
                    <td>كل يوم</td>
                  </tr>
                  <tr>
                    <th>مدة تجهيز الطلب</th>
                    <td>130 دقيقة</td>
                  </tr>
                  <tr>
                    <th>عنوان المستودع</th>
                    <td>حي المجاهد بوجمعة 320</td>
                  </tr>
                  <tr>
                    <th>أمين المستودع</th>
                    <td>السعيد الهيبهوب</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-if="!is_priv_edit">
          <div :class="{'site-panel ': true, ' is-loading': is_pros_priv}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">سياسة الطلب</h3>
              <button class="site-panel-tool" @click="edit_priv()">
                <i class="fa fa-edit"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="privacy-details">
                <table class="table">
                  <tbody>
                    <tr>
                      <th>المدة القصوى لتجهيز الطلب</th>
                      <td>802 دقيقة</td>
                    </tr>
                    <tr>
                      <th>هل يحق للعميل الإستبدال؟</th>
                      <td>نعم</td>
                    </tr>
                    <tr>
                      <th>هل يحق للعميل الإسترجاع؟</th>
                      <td>لا</td>
                    </tr>
                    <tr>
                      <th>تكلفة التوصيل</th>
                      <td>802 دقيقة</td>
                    </tr>
                    <tr>
                      <th>إشعار الإستلام للعميل</th>
                      <td>بريد الإلكتروني</td>
                    </tr>
                    <tr>
                      <th>إشعارات تأخير تأكيد طلبات جاهزة</th>
                      <td>بريد الإلكتروني</td>
                    </tr>
                    <tr>
                      <th>ملاحظات</th>
                      <td>بريد الإلكتروني</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div :class="{'site-panel ': true, ' is-loading': is_pros_priv}">
            <div class="panel-overlay">
              <div class="spinner-border" role="status"></div>
            </div>
            <div class="site-panel-header">
              <h3 class="title">سياسة الطلب</h3>
              <button class="site-panel-tool" @click="view_priv()">
                <i class="fa fa-arrow-left"></i>
              </button>
            </div>
            <div class="site-panel-content">
              <div class="privacy-details">
                <form @submit.prevent="priv_edit_form()" novalidate>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>المدة القصوى لتجهيز الطلب</th>
                        <td>
                          <input type="text" class="panel-form-input" />
                        </td>
                      </tr>
                      <tr>
                        <th>هل يحق للعميل الإستبدال؟</th>
                        <td>
                          <select class="form-select">
                            <option value>نعم</option>
                            <option value>لا</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>هل يحق للعميل الإسترجاع؟</th>
                        <td>
                          <select class="form-select">
                            <option value>نعم</option>
                            <option value>لا</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>تكلفة التوصيل</th>
                        <td>
                          <input type="text" class="panel-form-input" />
                        </td>
                      </tr>
                      <tr>
                        <th>إشعار الإستلام للعميل</th>
                        <td>
                          <select class="form-select">
                            <option value>نعم</option>
                            <option value>لا</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>إشعارات تأخير تأكيد طلبات جاهزة</th>
                        <td>
                          <select class="form-select">
                            <option value>نعم</option>
                            <option value>لا</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>ملاحظات</th>
                        <td>
                          <textarea class="panel-form-input" rows="6"></textarea>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="py-2">
                    <button type="submit" class="btn butt-xs butt-primary">
                      <i class="fa fa-save"></i> حفظ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div :class="{'site-panel ': true, ' is-loading': is_pros_areas}">
          <div class="panel-overlay">
            <div class="spinner-border" role="status"></div>
          </div>
          <div class="site-panel-header">
            <h3 class="title">مناطق التغطية</h3>
          </div>
          <div :class="{'add-city-area ': true, ' loading': is_add_areas}">
            <form action="">
              <div class="row">
                <div class="col-md-4 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_nationalty_name">اسم البنك</label>
                    <div :class="{'is-store-single relative ':true, ' is-searching': city_is_searching}">
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
                <div class="col-md-3 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_is_transporter">تحتاج إلى نقل؟</label>
                    <div class="relative">
                      <select id="app_is_transporter" class="form-input form-control xs">
                        <option value="1">لا</option>
                        <option value="0">نعم</option>
                      </select>
                      
                    </div>
                  </div>
                </div>
                <div class="col-md-3 p-0 grid-pdd">
                  <div class="admin-froms-item">
                    <label class="lable-input" for="app_account_number">تكلفة التوصيل</label>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        required
                        type="text"
                        placeholder="تكلفة التوصيل"
                        id="app_account_number"
                        v-model="Areaform.price"
                        class="form-input form-control xs"
                      />
                      <div class="is-invalid" v-if="errors.number_account">
                        <span>{{ errors.number_account[0] }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 p-0 grid-pdd">
                  <div class="admin-froms-item admin-froms-item-butt">
                    <label class="lable-input" for="app_account_number"></label>
                    <div class="relative">
                      <button type="submit" class="btn btn-block butt-xs butt-primary">إضافة</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="site-panel-content">
            <table class="table sm sh-data-table table-striped table-hover">
              <thead>
                <tr>
                  <th>المدينة</th>
                  <th>تحتاج إلى نقل</th>
                  <th>تكلفة التوصيل</th>
                  <th>العمليات</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in areas" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.isTransporter }}</td>
                  <td>{{ item.price }}</td>
                  <td class="btns-tools">
                    <button class="tool-btn delete-button" @click="delItem(item.id)">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
];
export default {
  layout: "withSidebar",
  head: {
    title: "إدارة المتاجر",
  },
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
  },
  data() {
    return {
      Areaform: {
        name: '',
        price: '',
        isTransporter: '',
      },
      citiesList: [
        {
          id: 1,
          name: 'الجلفة'
        }
      ],
      forms: {
        name: "",
      },
      formsEdit: {
        name: "",
      },

      formsUser: {
        user_name: "",
      },

      areas: [
        {
          id: 1,
          name: 'الجلفة',
          price: 400,
          isTransporter: false,
        },
        {
          id: 2,
          name: 'المسيلة',
          price: 900,
          isTransporter: false,
        },
        {
          id: 3,
          name: 'الأغواط',
          price: 1.000,
          isTransporter: false,
        },
        {
          id: 4,
          name: 'بسكرة',
          price: 1.200,
          isTransporter: false,
        },
      ],

      is_showen: false,
      is_searching: false,
      city_is_searching: false,
      is_add_areas: false,

      is_user_edit: false,
      is_shipp_edit: false,
      is_payment_edit: false,
      is_logistic_edit: false,
      is_reposit_edit: false,
      is_priv_edit: false,

      is_pros_areas: false,
      is_pros_user: false,
      is_pros_shipp: false,
      is_pros_payment: false,
      is_pros_logistic: false,
      is_pros_reposit: false,
      is_pros_priv: false,

      errors: "",
      errorsRslt: "",
      laravelData: {},
      list: message.map((name, index) => {
        return { name, order: index + 1 };
      }),
      drag: false,
    };
  },
  methods: {
    searchUser() {
      if (this.formsUser.user_name == "") {
        this.is_showen = false;
        this.city_is_searching = false;
      } else {
        this.is_showen = true;
        this.city_is_searching = true;
      }
    },
    getCities() {
      if (this.forms.name == "") {
        this.is_showen = false;
        this.city_is_searching = false;
      } else {
        this.is_showen = true;
        this.city_is_searching = true;
        this.citiesList = [];
      }
    },
    /************************************************/
    edit_user: function () {
      this.is_user_edit = true;
    },
    view_user: function () {
      this.is_user_edit = false;
    },
    /********************************/
    edit_shipp: function () {
      this.is_shipp_edit = true;
    },
    view_shipp: function () {
      this.is_shipp_edit = false;
    },
    /********************************/
    edit_payment: function () {
      this.is_payment_edit = true;
    },
    view_payment: function () {
      this.is_payment_edit = false;
    },
    /********************************/
    edit_reposit: function () {
      this.is_reposit_edit = true;
    },
    view_reposit: function () {
      this.is_reposit_edit = false;
    },
    /********************************/
    edit_logistic: function () {
      this.is_logistic_edit = true;
    },
    view_logistic: function () {
      this.is_logistic_edit = false;
    },
    /********************************/
    edit_priv: function () {
      this.is_priv_edit = true;
    },
    view_priv: function () {
      this.is_priv_edit = false;
    },
    /********************************************/
    pros_shipp: function () {
      this.is_pros_shipp = !this.is_pros_shipp;
    },
    pros_payment: function () {
      this.is_pros_payment = !this.is_pros_payment;
    },
    pros_reposit: function () {
      this.is_pros_reposit = !this.is_pros_reposit;
    },
    pros_priv: function () {
      this.is_pros_priv = !this.is_pros_priv;
    },
    pros_logistic: function () {
      this.is_pros_logistic = !this.is_pros_logistic;
    },

    add: function () {
      this.list.push({ name: "Juan" });
    },
    replace: function () {
      this.list = [{ name: "Edgard" }];
    },
    clone: function (el) {
      return {
        name: el.name + " cloned",
      };
    },
    log: function (evt) {
      window.console.log(evt);
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
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        this.is_pros = false;
      }
    });
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