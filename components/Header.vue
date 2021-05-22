<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shahna-nav">
      <div class="container-fluid">
        <button class="butt-toggle" v-on:click="changeTitle()">
          <div class="bar"></div>
          <div class="bar small"></div>
          <div class="bar"></div>
        </button>
        <div :class="{'navbar-search': true, ' is-searching': is_searching_globe}">
          <form action method="get">
            <span class="key-code grey">/</span>
            <input
              ref="searchQuery"
              @keyup="searchNav()"
              @blur="hideSearchNav()"
              @focus="showSearchNav()"
              v-model="formsSearch.query"
              autocomplete="off"
              type="text"
              placeholder="البحث في لوحة التحكم..."
              id="dash_search"
            />
            <button type="submit" class="btn-submit">
              <i class="fa fa-search"></i>
            </button>
            <div class="search-header-spinner">
              <div class="spinner-border spinner-border-sm" role="status"></div>
            </div>
          </form>
          <div class="searching-box">
            <div class="searching-panel">
              <div class="searching-panel-head">
                <h3 class="title">البحث في المتاجر</h3>
                <button type="button" class="head-loadmore">المزيد...</button>
              </div>
              <div class="searching-panel-content">
                <ul class="content-list">
                  <li>
                    <nuxt-link to>
                      <div class="link-content">
                        <h4 class="title">حلويات تنهنان</h4>
                        <p class="meta">TNHT96584 | عامر الهادي</p>
                      </div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to>
                      <div class="link-content">
                        <h4 class="title">حلويات تنهنان</h4>
                        <p class="meta">TNHT96584 | عامر الهادي</p>
                      </div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to>
                      <div class="link-content">
                        <h4 class="title">حلويات تنهنان</h4>
                        <p class="meta">TNHT96584 | عامر الهادي</p>
                      </div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="searching-panel">
              <div class="searching-panel-head">
                <h3 class="title">البحث في المستخدمين</h3>
                <button type="button" class="head-loadmore">المزيد...</button>
              </div>
              <div class="searching-panel-content">
                <ul class="content-list">
                  <li>
                    <nuxt-link to>
                      <div class="link-profile">
                        <img src="../assets/img/a1.jpg" alt />
                      </div>
                      <div class="link-content">
                        <h4 class="title">عبد الحميد بومقواس</h4>
                        <p class="meta">TNHT96584 | عامر الهادي</p>
                      </div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">
                      <div class="link-profile">
                        <img src="../assets/img/a1.jpg" alt />
                      </div>
                      <div class="link-content">
                        <h4 class="title">عبد الحميد بومقواس</h4>
                        <p class="meta">TNHT96584 | عامر الهادي</p>
                      </div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to>
                      <div class="link-profile">
                        <img src="../assets/img/a1.jpg" alt />
                      </div>
                      <div class="link-content">
                        <h4 class="title">عبد الحميد بومقواس</h4>
                        <p class="meta">TNHT96584 | عامر الهادي</p>
                      </div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item notify-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="far fa-bell"></i>
              </a>
              <ul class="dropdown-menu user-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>

            <li v-if="loggedInUser" class="nav-item user-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <img
                    class="avatar"
                    src="https://s3.amazonaws.com/tasmeemme.user.thumbnails/crop_50x50/1505933886-crop-161432.jpg"
                    alt
                  />
                  {{ loggedInUser.first_name + ' ' + loggedInUser.last_name }}
                </span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                <li>
                  <nuxt-link class="dropdown-item" to="/admins/profile">الصفحة الشخصية</nuxt-link>
                </li>
                <li>
                  <nuxt-link class="dropdown-item" to="#">تغيير كلمة المرور</nuxt-link>
                </li>
                <li>
                  <a class="dropdown-item" href="#" @click="logout">تسجيل الخروج</a>
                </li>
              </ul>
            </li>
            <li v-else class="text-red nav-item">
              <span class="nav-link">حدث خطأ</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      formsSearch: {
        query: "",
      },
      menuToggle: true,
      is_searching_globe: false,
      is_pross: false,
    };
  },
  methods: {
    changeTitle() {
      this.$emit("changeTitle", !this.menuToggle);
    },
    searchNav() {
      if (this.formsSearch.query == "") {
        this.is_pross = false;
        this.is_searching_globe = false;
      } else {
        document.addEventListener("keydown", (e) => {
          if (e.keyCode == 27) {
            this.is_pross = false;
            this.is_searching_globe = false;
          } else {
            this.is_pross = true;
            this.is_searching_globe = true;
          }
        });
      }
    },
    async logout() {
      try {
        await this.$auth.logout();
        this.$router.push("/login");
      } catch (e) {
        alert(e)
      }
    },
    esc_search() {
      this.is_pross = false;
      this.is_searching_globe = false;
    },
    showSearchNav() {
      if (this.formsSearch.query == "") {
        this.is_pross = false;
        this.is_searching_globe = false;
      } else {
        document.addEventListener("keydown", (e) => {
          if (e.keyCode == 27) {
            this.is_pross = false;
            this.is_searching_globe = false;
          } else {
            this.is_pross = true;
            this.is_searching_globe = true;
          }
        });
      }
    },
    hideSearchNav() {
      this.is_pross = false;
      this.is_searching_globe = false;
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
/*       if (e.keyCode == 111) {
        this.$refs.searchQuery.focus();
        if (e.keyCode == 27) {
          this.esc_search();
        }
      } */
    });
    
  },
};
</script>