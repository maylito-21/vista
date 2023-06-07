<template>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <nav
      class="navbar navbar-main navbar-expand-lg position-sticky mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky"
      id="navbarBlur" style="background-color: #050a440d;" data-scroll="true">
      <div class="container-fluid py-1 px-3">
        <nav
          class="navbar navbar-main navbar-expand-lg position-sticky mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky"
          id="navbarBlur" data-scroll="true"
          style="margin-top: -1px!important;padding-left: 20px!important;padding-right: 20px!important;">
          <!--shadow-blur -->
          <!-- <li class="breadcrumb-item text-sm"> -->
          <a class="opacity-3 text-dark" href="javascript:;">
            <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-top: -6px!important;">
              <title>Módulo</title>
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Development" transform="translate(-96.000000, -48.000000)" fill-rule="nonzero">
                  <g id="web_fill" transform="translate(96.000000, 48.000000)">
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute" fill-rule="nonzero">

                    </path>
                    <path
                      d="M19,4 C20.1046,4 21,4.89543 21,6 L21,18 C21,19.1046 20.1046,20 19,20 L5,20 C3.89543,20 3,19.1046 3,18 L3,6 C3,4.89543 3.89543,4 5,4 L19,4 Z M19,10 L5,10 L5,17 C5,17.51285 5.38604429,17.9355092 5.88337975,17.9932725 L6,18 L18,18 C18.51285,18 18.9355092,17.613973 18.9932725,17.1166239 L19,17 L19,10 Z M6,6 C5.44772,6 5,6.44772 5,7 C5,7.55228 5.44772,8 6,8 C6.55228,8 7,7.55228 7,7 C7,6.44772 6.55228,6 6,6 Z M9,6 C8.44772,6 8,6.44772 8,7 C8,7.55228 8.44772,8 9,8 C9.55228,8 10,7.55228 10,7 C10,6.44772 9.55228,6 9,6 Z M12,6 C11.4477,6 11,6.44772 11,7 C11,7.55228 11.4477,8 12,8 C12.5523,8 13,7.55228 13,7 C13,6.44772 12.5523,6 12,6 Z"
                      id="形状" fill="#09244B">

                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <!-- </li> -->
          <!-- <li class="breadcrumb-item text-sm"> -->
          <a class="opacity-5 text-dark" href="javascript:void(0);" style="padding-left: 5px!important;">{{ page }} / </a>
          <a class="font-weight-bolder mb-0" style="padding-left: 5px!important;"> {{ modulo }}</a>
          <!-- </li> -->
          <!-- <li
               class="breadcrumb-item text-sm text-dark active"
               aria-current="page">          
             </li> -->
          <!-- </ol>  -->

        </nav>
        <!-- <div class="sidenav-toggler sidenav-toggler-inner d-xl-block d-none">
          <a href="javascript:;" @click="SideToggle()" class="nav-link text-body p-0">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </a>
        </div> -->
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 collapse-nb" id="navbar">

          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <!-- 
                CAMP BUSCAR
            <div class="input-group">
               <span class="input-group-text text-body"
                 ><i class="fas fa-search" aria-hidden="true"></i
               ></span>

                <input
                 type="text"
                 class="form-control"
                 placeholder="Type here..."
             
             </div>   /> -->
          </div>


          <ul class="navbar-nav justify-content-end flex-row">

            <li class="nav-item d-flex align-items-center">
              <abbr title="Nombre de usuario">
                <a href="javascript:void(0)" class="nav-link text-body font-weight-bold px-0">
                  <i class="fa fa-user me-sm-1"></i>
                  <span class="d-sm-inline d-none">{{ user.nombre }}</span>
                </a>
              </abbr>
            </li>

            <li class="nav-item px-3 d-flex align-items-center">
              <abbr title="Cambiar vista Dark-Mode">
                <a href="javascript:;" @click="DarkMode()" class="nav-link text-body font-weight-bold px-0">
                  <i v-if="theme == 'light-version'" class="fa fa-moon fixed-plugin-button-nav cursor-pointer"></i>
                  <i v-else class="fa fa-sun fixed-plugin-button-nav cursor-pointer"></i>
                  <span class="d-sm-inline d-none">Cambiar vista</span>
                </a>
              </abbr>
            </li>

            <li class="nav-item d-flex align-items-center">
              <abbr title="Cerrar sesión">
                <a href="javascript:void(0)" class="nav-link text-body font-weight-bold px-0" @click="Logout()">
                  <i class="fa fa-sign-out"></i>
                  <span class="d-sm-inline d-none">Cerrar sesión</span>
                </a>
              </abbr>
            </li>

            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0" @click="hideSideNav()" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </main>
</template>

<script>


export default {
  props: {

    page: {
      type: String,
      default: ''
    },
    modulo: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      theme: 'light-version',
      user: {},
      window: {
        width: 0,
        height: 0
      }

    }
  },
  methods: {
    SideToggle() {
      let body = document.body
      body.classList.add("g-sidenav-show", "bg-gray-100");
      body.classList.contains("g-sidenav-hidden") ? body.classList.remove("g-sidenav-hidden") : body.classList.add("g-sidenav-hidden");
    },
    Logout() {
      let self = this;
      this.$swal
        .fire({
          title: 'Atención',
          text: "¿Desea cerrar sesión?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, cerrar sesión'

        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem('userAuth');
            this.$router.push('/auth/login')
          }

        })




    },
    hideSideNav() {
      let side = document.getElementById('sidenav-main')
      side.classList.contains("d-none") ? side.classList.remove("d-none") : side.classList.add("d-none");
      document.getElementById('sidenav-main').classList.remove(this.theme == 'dark-version' ? 'bg-white' : 'bg-dark')
      document.getElementById('sidenav-main').classList.add(this.theme == 'dark-version' ? 'bg-dark' : 'bg-white')
    },
    DarkMode() {
      let theme = localStorage.getItem('theme.pos')
      let body = document.body
      if (theme != null) {
        if (body.classList.contains("dark-version")) {
          body.classList.remove("dark-version")
          theme = "light-version"
          localStorage.setItem('theme.pos', theme)
        } else {
          body.classList.remove("light-version")
          theme = "dark-version"
          localStorage.setItem('theme.pos', theme)
        }
        this.theme = theme
        body.classList.add(theme)
        document.getElementById('sidenav-main').classList.remove(this.theme == 'dark-version' ? 'bg-white' : 'bg-dark')
        document.getElementById('sidenav-main').classList.add(this.theme == 'dark-version' ? 'bg-dark' : 'bg-white')
      } else {
        localStorage.setItem('theme.pos', "dark-version")
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      let user = localStorage.getItem('userAuth')

      this.user = JSON.parse(user)
      // let body = document.body
      // let theme = localStorage.getItem('theme.pos')
      // if (theme != null) {
      //   body.classList.add(theme);
      //   this.theme = theme
      // }

    })
  }
}
</script>
<style>
.side_togle {
  cursor: pointer;
}

.navbar-vertical.navbar-expand-xs .navbar-collapse {
  overflow: hidden;
}

.navbar-vertical.navbar-expand-xs.fixed-start {
  overflow: hidden;
}

.flex-row {
  flex-direction: row;
}

.collapse-nb {
  display: block !important;
}

#iconNavbarSidenav {
  cursor: pointer;
}
</style>


