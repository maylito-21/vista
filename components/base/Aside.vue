<template lang="">

<aside
      class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 card-body py-0 overflow-auto"
      :class="{'d-none': ocultarMenu}"
      id="sidenav-main" data-simplebar style="background-color: #050a440d; "
    >
    
      <div class="sidenav-header">
        <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav">
        </i>
        <!-- <a class="navbar-brand m-0"  href="" target="">
          <img src="../../static/assets/img/ventaColor.png" class="navbar-brand-img h-200" alt="main_logo">          
          <span class="ms-1 font-weight-bold">SIGESCO</span>
        </a> -->
        <nuxtLink
                    class="nav-link"
                    to="/"
                  >
                  <a class="navbar-brand m-0"  href="" target="">
          <img src="../../static/assets/img/ventaColor.png" class="navbar-brand-img h-200" alt="main_logo">          
          <span class="ms-1 font-weight-bold">SIGESCO</span>
        </a>
                  </nuxtLink>
      </div>

      <hr class="horizontal dark mt-0" />
      <div
        class="collapse navbar-collapse w-auto h-auto"
        id="sidenav-collapse-main" style="margin-left: -10px;"
      >
        <ul class="navbar-nav">

       <!--  ADMINISTRACIÓN -->
          <li class="nav-item mt-3" v-if="rol==1 || rol==2">
            <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
              Gestión
            </h6>
          </li>          
          <li class="nav-item" v-if="rol==1 || rol==2">
            <a
              data-bs-toggle="collapse"
              href="#productos"
              class="nav-link"
              aria-controls="productos"
              role="button"
              aria-expanded="false"
              style="padding-top: 1px;"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2">
                <svg width="20px" height="20px" viewBox="0 0 450 450" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Productos</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#3a416f" transform="translate(64.000000, 34.346667)"> <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M127.999,206.918 L128,357.189 L170.666667,381.824 L170.666667,231.552 L127.999,206.918 Z M42.6666667,157.653333 L42.6666667,307.920144 L85.333,332.555 L85.333,182.286 L42.6666667,157.653333 Z M275.991,97.759 L150.413,170.595 L192,194.605531 L317.866667,121.936377 L275.991,97.759 Z M192,49.267223 L66.1333333,121.936377 L107.795,145.989 L233.374,73.154 L192,49.267223 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
              </div>
              <span class="nav-link-text ms-1">Productos</span>
            </a>
            <div class="collapse" id="productos">
              <ul class="nav ms-4 ps-3">
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/marcas"
                  >
                    <span class="sidenav-mini-icon"> M </span>
                    <span class="sidenav-normal"> Marcas </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/medidas"
                  >
                    <span class="sidenav-mini-icon"> M </span>
                    <span class="sidenav-normal"> Medidas </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/categorias"
                  >
                    <span class="sidenav-mini-icon"> C </span>
                    <span class="sidenav-normal"> Categorías </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/articulos"
                  >
                    <span class="sidenav-mini-icon"> A </span>
                    <span class="sidenav-normal"> Artículos </span>
                  </nuxtLink>
                </li>
              </ul>
            </div>
          </li>

    <!--  USUARIOS -->
          <li class="nav-item" v-if="rol==1">
            <a
              data-bs-toggle="collapse"
              href="#usuarios"
              class="nav-link"
              aria-controls="usuarios"
              role="button"
              aria-expanded="false"
              style="padding-top: 1px;"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <svg width="14px" height="14px" viewBox="0 0 30 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                <title>Usuarios </title>
                <style type="text/css">
                  .st0{fill:none;stroke:#6C3DB7;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st1{fill:none;stroke:#1F992A;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st2{fill:none;stroke:#6A83BA;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st3{fill:#8A8AFF;stroke:#8A8AFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st4{fill:#6C3DB7;stroke:#6C3DB7;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st5{fill:#A576FF;stroke:#A576FF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st6{fill:#F2BB41;stroke:#F2BB41;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st7{fill:#E08838;stroke:#E08838;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st8{fill:#1F992A;stroke:#1F992A;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st9{fill:#5EC11E;stroke:#5EC11E;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st10{fill:#E3FAFF;stroke:#E3FAFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st11{fill:#FF5093;stroke:#FF5093;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st12{fill:#B7257F;stroke:#B7257F;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st13{fill:#5189E5;stroke:#5189E5;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st14{fill:#6EBAFF;stroke:#6EBAFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st15{fill:#EDD977;stroke:#EDD977;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st16{fill:#8C43FF;stroke:#8C43FF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st17{fill:#5252BA;stroke:#5252BA;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st18{fill:none;stroke:#E3FAFF;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                  .st19{fill:#354C75;stroke:#354C75;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                </style>
                <path class="st4" d="M24,28H6c-1.1,0-2-0.9-2-2v0c0-3.9,3.1-7,7-7h8c3.9,0,7,3.1,7,7v0C26,27.1,25.1,28,24,28z" id="id_109" style="fill: rgb(58, 65, 111); stroke: rgb(56, 61, 110);"></path>
                <circle class="st14" cx="15" cy="9" r="6" id="id_110" style="fill: rgb(58, 65, 111); stroke: rgb(58, 64, 112);"></circle>
                </svg>

              </div>
              <span class="nav-link-text ms-1">Usuarios</span>
            </a>
            <div class="collapse" id="usuarios">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/usuarios/usuario"
                  >
                    <span class="sidenav-mini-icon"> U </span>
                    <span class="sidenav-normal"> Usuarios </span>
                  </nuxtLink>
                </li>

              </ul>
            </div>
          </li>

     <!--  INVENTARIO -->
          <li class="nav-item mt-3" v-if="rol==1 || rol==2">
            <h6
              class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
              REGISTRO
            </h6>
          </li>
          <li class="nav-item" v-if="rol==1 || rol==2">
            <a
              data-bs-toggle="collapse"
              href="#inventario"
              class="nav-link"
              aria-controls="inventario"
              role="button"
              aria-expanded="false"
              style="padding-top: 1px;"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Inventario </title>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <g transform="translate(1716.000000, 291.000000)">
              <g transform="translate(0.000000, 148.000000)">
              <path class="color-background" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" opacity="0.598981585"></path>
              <path class="color-background" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path>
              </g>
              </g>
              </g>
              </g>
              </svg>
              </div>
              <span class="nav-link-text ms-1">Inventario</span>
            </a>
            <div class="collapse" id="inventario">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/inventario"
                  >
                    <span class="sidenav-mini-icon"> G </span>
                    <span class="sidenav-normal"> General </span>
                  </nuxtLink>
                </li>

              </ul>
            </div>
          </li>

      <!--  CAJA -->
      <li class="nav-item mt-3">
            <h6
              class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
            CAJA
            </h6>
          </li>
          <li class="nav-item">
            <a
              data-bs-toggle="collapse"
              href="#caja"
              class="nav-link"
              aria-controls="caja"
              role="button"
              aria-expanded="false"
              style="padding-top: 1px;"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <!-- <svg width="12px" height="12px" viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
              
              <style>.cls-1{fill:#1d75b8;}.cls-2{fill:#2d3e50;}</style></defs><title>Caja</title><path class="cls-1" d="M50.76057,85.448a13.25785,13.25785,0,0,0-2.82808-1.89339,32.17224,32.17224,0,0,0-3.54612-1.52619q-1.26243-.43654-2.15387-.807a9.58055,9.58055,0,0,1-1.501-.7622,2.60484,2.60484,0,0,1-.892-.892,2.386,2.386,0,0,1-.2827-1.19636,2.18976,2.18976,0,0,1,.91365-1.82759,5.03162,5.03162,0,0,1,3.002-.696,17.75114,17.75114,0,0,1,3.98117.43487,20.14188,20.14188,0,0,1,3.32859,1.04435l1.349-5.22107a17.24061,17.24061,0,0,0-2.58892-.87024,24.45864,24.45864,0,0,0-3.89434-.65271v-4.525H40.16579v4.69909a10.95807,10.95807,0,0,0-3.30668,1.10952,7.38679,7.38679,0,0,0-2.26261,1.84906,7.30924,7.30924,0,0,0-1.2835,2.41466,9.22988,9.22988,0,0,0-.41339,2.76319,6.66084,6.66084,0,0,0,2.45851,5.4386,11.30485,11.30485,0,0,0,2.47983,1.54458q1.37095.63122,2.80645,1.15309,1.4789.52228,2.61052.97883a11.25238,11.25238,0,0,1,1.87116.93557,3.83782,3.83782,0,0,1,1.13118,1.066,2.4922,2.4922,0,0,1,.39145,1.4142,2.36274,2.36274,0,0,1-.97883,2.02317,6.5297,6.5297,0,0,1-3.63324.71776,15.98683,15.98683,0,0,1-4.45977-.609,22.86648,22.86648,0,0,1-3.633-1.34868l-1.87085,5.00355a29.65488,29.65488,0,0,0,2.93683,1.19639,20.34935,20.34935,0,0,0,5.1559.97914v5.1775h5.48214V99.25552a11.48835,11.48835,0,0,0,3.58969-1.13059A7.98969,7.98969,0,0,0,51.609,96.25467a6.70166,6.70166,0,0,0,1.3051-2.3699,8.81556,8.81556,0,0,0,.39179-2.58742,7.80507,7.80507,0,0,0-.6745-3.34876A7.718,7.718,0,0,0,50.76057,85.448Z" id="id_113" style="fill: rgb(58, 65, 111);"></path><path class="cls-1" d="M71.339,88.17965A28.79619,28.79619,0,1,1,39.82029,56.66089,46.89164,46.89164,0,0,1,37.8205,45.67623,39.93031,39.93031,0,1,0,82.32377,90.1795,46.89273,46.89273,0,0,1,71.339,88.17965Z" id="id_114" style="fill: rgb(58, 65, 111);"></path><path class="cls-2" d="M85.30914,2.76138a39.92948,39.92948,0,1,0,39.92948,39.92948A39.97472,39.97472,0,0,0,85.30914,2.76138Zm10.22877,48.5029a6.84144,6.84144,0,0,1-1.31088,2.373,8.027,8.027,0,0,1-2.373,1.86588,11.23424,11.23424,0,0,1-3.5882,1.12908v5.31052H82.783V56.76619a20.17312,20.17312,0,0,1-5.14788-.976,29.90311,29.90311,0,0,1-2.93755-1.19607l1.86588-5.00432a24.01,24.01,0,0,0,3.636,1.34914,16.14061,16.14061,0,0,0,4.459.60282,6.558,6.558,0,0,0,3.636-.71764,2.35644,2.35644,0,0,0,.976-2.01895,2.51144,2.51144,0,0,0-.39228-1.41612,3.7872,3.7872,0,0,0-1.12908-1.06215,11.00541,11.00541,0,0,0-1.87545-.9377c-.75589-.3062-1.62666-.6315-2.61219-.98559-.95685-.34445-1.885-.72716-2.80357-1.14818a11.61392,11.61392,0,0,1-2.47828-1.54058,6.65391,6.65391,0,0,1-2.45912-5.4445,9.21675,9.21675,0,0,1,.41144-2.76526,7.51186,7.51186,0,0,1,1.28221-2.41129,7.40942,7.40942,0,0,1,2.26774-1.84672,10.888,10.888,0,0,1,3.30116-1.11V23.439h5.48275v4.5259a24.35407,24.35407,0,0,1,3.8944.65065,17.219,17.219,0,0,1,2.59309.87077l-1.3492,5.21486a21.107,21.107,0,0,0-3.32983-1.043,17.87341,17.87341,0,0,0-3.98048-.4306,4.99656,4.99656,0,0,0-3.00453.69854,2.19308,2.19308,0,0,0-.909,1.82756,2.48158,2.48158,0,0,0,.27747,1.19607,2.58088,2.58088,0,0,0,.89944.88987,8.98587,8.98587,0,0,0,1.49269.756c.59324.24873,1.32046.51668,2.15292.8133a32.17364,32.17364,0,0,1,3.54995,1.52142A13.53031,13.53031,0,0,1,93.385,42.82483a7.50065,7.50065,0,0,1,2.5452,5.85594A8.9103,8.9103,0,0,1,95.53791,51.26428Z" id="id_115" style="fill: rgb(58, 65, 111);"></path></svg> -->
              <svg fill="#08233f" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#08233f">
                <title>Caja</title>
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M511.1 378.8l-26.7-160c-2.6-15.4-15.9-26.7-31.6-26.7H208v-64h96c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96v64H59.1c-15.6 0-29 11.3-31.6 26.7L.8 378.7c-.6 3.5-.9 7-.9 10.5V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-90.7c.1-3.5-.2-7-.8-10.5zM280 248c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16zm-32 64h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16zm-32-80c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h16zM80 80V48h192v32H80zm40 200h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16zm16 64v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm216 112c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16zm24-112c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16zm48-80c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16z"></path></g></svg>  
            </div>
              <span class="nav-link-text ms-1">Caja</span>
            </a>
            <div class="collapse" id="caja">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/cajas/"
                  >
                    <span class="sidenav-mini-icon"> M </span>
                    <span class="sidenav-normal"> Mi caja </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/cajas/historial"
                  >
                    <span class="sidenav-mini-icon"> H </span>
                    <span class="sidenav-normal"> Historial </span>
                  </nuxtLink>
                </li>


              </ul>
            </div>
          </li>

     <!--  VENTAS -->
     <li class="nav-item mt-3">
            <h6
              class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
              VENTAS
            </h6>
          </li>
          <li class="nav-item">
            <a
              data-bs-toggle="collapse"
              href="#venta"
              class="nav-link"
              aria-controls="venta"
              role="button"
              aria-expanded="false"
              style="padding-top: 1px;"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <!-- <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                <title>Ventas</title>

                <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rounded" transform="translate(-782.000000, -3124.000000)">
                <g id="Maps" transform="translate(100.000000, 3068.000000)">
                <g id="-Round-/-Maps-/-local_grocery_store" transform="translate(681.000000, 54.000000)">
                <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M7,18 C5.9,18 5.01,18.9 5.01,20 C5.01,21.1 5.9,22 7,22 C8.1,22 9,21.1 9,20 C9,18.9 8.1,18 7,18 Z M2,4 L3,4 L6.6,11.59 L5.25,14.03 C4.52,15.37 5.48,17 7,17 L18,17 C18.55,17 19,16.55 19,16 C19,15.45 18.55,15 18,15 L7,15 L8.1,13 L15.55,13 C16.3,13 16.96,12.59 17.3,11.97 L20.88,5.48 C21.25,4.82 20.77,4 20.01,4 L5.21,4 L4.54,2.57 C4.38,2.22 4.02,2 3.64,2 L2,2 C1.45,2 1,2.45 1,3 C1,3.55 1.45,4 2,4 Z M17,18 C15.9,18 15.01,18.9 15.01,20 C15.01,21.1 15.9,22 17,22 C18.1,22 19,21.1 19,20 C19,18.9 18.1,18 17,18 Z" id="🔹-Icon-Color" fill="#3a416f"></path>
                </g>
                </g>
                </g>
                </g>
                </g>
                </svg> -->
                <svg fill="#13273f" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#13273f">
                  <title>Ventas</title>
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,467.478 C139.39,467.478,44.522,372.61,44.522,256S139.39,44.522,256,44.522S467.478,139.39,467.478,256S372.61,467.478,256,467.478z"></path> </g> </g> <g> <g> <path d="M256,72.348C154.739,72.348,72.348,154.739,72.348,256S154.739,439.652,256,439.652S439.652,357.261,439.652,256 S357.261,72.348,256,72.348z M263.805,241.239c23.794,12.576,53.413,28.239,53.413,59.283c0,27.956-18.869,51.548-44.522,58.842 v7.94c0,9.217-7.479,16.696-16.696,16.696c-9.217,0-16.696-7.479-16.696-16.696v-7.94c-25.652-7.294-44.522-30.886-44.522-58.842 c0-9.217,7.479-16.696,16.696-16.696s16.696,7.479,16.696,16.696c0,15.348,12.478,27.826,27.826,27.826 s27.826-12.478,27.826-27.826c0-10.935-18.109-20.5-35.631-29.761c-23.794-12.576-53.413-28.239-53.413-59.283 c0-27.956,18.869-51.548,44.522-58.842v-7.94c0-9.217,7.479-16.696,16.696-16.696c9.217,0,16.696,7.479,16.696,16.696v7.94 c25.652,7.294,44.522,30.886,44.522,58.842c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696 c0-15.348-12.478-27.826-27.826-27.826s-27.826,12.478-27.826,27.826C228.174,222.413,246.283,231.978,263.805,241.239z"></path> </g> </g> </g></svg>
              </div>
              <span class="nav-link-text ms-1">Ventas</span>
            </a>
            <div class="collapse" id="venta">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/ventas"
                  >
                    <span class="sidenav-mini-icon"> N </span>
                    <span class="sidenav-normal"> Nueva venta </span>
                  </nuxtLink>
                </li>
                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/ventas/lista"
                  >
                    <span class="sidenav-mini-icon"> V </span>
                    <span class="sidenav-normal"> Ventas </span>
                  </nuxtLink>
                </li>

              </ul>
            </div>
          </li>
          
      <!--  COMPRAS -->
          <li class="nav-item mt-3" v-if="rol==1">
            <h6
              class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
            COMPRAS
            </h6>
                     </li>
          <li class="nav-item" v-if="rol==1">
            <a
              data-bs-toggle="collapse"
              href="#compra"
              class="nav-link"
              aria-controls="compra"
              role="button"
              aria-expanded="false"
              style="padding-top: 1px;"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <svg width="12px" height="12px" viewBox="0 0 130 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs><style>.cls-1{fill:#2d3e50;}</style></defs><title>Compras</title><path class="cls-1" d="M120.36433,42.96987H105.48276a5.96828,5.96828,0,0,0-.49969-.734L80.18837,11.56574a5.9526,5.9526,0,1,0-9.25815,7.4847L90.26745,42.96987H37.732L57.07,19.047a5.95265,5.95265,0,0,0-9.25878-7.48407L23.01653,42.23619a5.96416,5.96416,0,0,0-.49941.73368H7.63567a4.66552,4.66552,0,0,0,0,9.331h5.02915a334.93618,334.93618,0,0,1,6.30645,61.7265,4.6657,4.6657,0,0,0,4.66552,4.62047h80.72648a4.6657,4.6657,0,0,0,4.66552-4.62047,334.93618,334.93618,0,0,1,6.30645-61.7265h5.02908a4.66552,4.66552,0,0,0,0-9.331ZM45.81893,93.6793a4.34376,4.34376,0,1,1-8.68753,0V67.93848a4.34376,4.34376,0,0,1,8.68753,0Zm22.52322,0a4.34376,4.34376,0,1,1-8.68753,0V67.93848a4.34376,4.34376,0,0,1,8.68753,0Zm22.52322,0a4.34376,4.34376,0,1,1-8.68753,0V67.93848a4.34376,4.34376,0,0,1,8.68753,0Z" id="id_102" style="fill: rgb(58, 65, 111);"></path></svg>
              </div>
              <span class="nav-link-text ms-1">Compras</span>
            </a>
            <div class="collapse" id="compra">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/compras"
                  >
                    <span class="sidenav-mini-icon"> N </span>
                    <span class="sidenav-normal"> Nueva compra </span>
                  </nuxtLink>
                </li>

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/compras/lista"
                  >
                    <span class="sidenav-mini-icon"> C </span>
                    <span class="sidenav-normal"> Compras </span>
                  </nuxtLink>
                </li>

              </ul>
            </div>
          </li>

      <!--  CONFIGURACION -->
           <li class="nav-item mt-3" v-if="rol==1 || rol==2">
            <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
              Configuración
            </h6>
          </li>          
          <li class="nav-item" v-if="rol==1 || rol==2">
            <a
              data-bs-toggle="collapse"
              href="#configuracion"
              class="nav-link"
              aria-controls="configuracion"
              role="button"
              aria-expanded="false"
              style="padding-top: 1px;"
            >
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
              >
              <svg width="12px" height="12px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Configuración</title>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <g transform="translate(1716.000000, 291.000000)">
              <g transform="translate(304.000000, 151.000000)">
              <polygon class="color-background" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
              <path class="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"></path>
              <path class="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>
              </g>
              </g>
              </g>
              </g>
              </svg>
              </div>
              <span class="nav-link-text ms-1">Configuración</span>
            </a>
            <div class="collapse" id="configuracion">
              <ul class="nav ms-4 ps-3">

                <li class="nav-item">
                  <nuxtLink
                    class="nav-link"
                    to="/configuracion/sucursal"
                  >
                    <span class="sidenav-mini-icon"> I </span>
                    <span class="sidenav-normal"> Sucursal </span>
                  </nuxtLink>
                </li>
              </ul>
              <br>
            </div>
            <br>
          </li>
          <br>
        </ul>
      </div>
      
</aside>
</template>
<script>
export default {
  name: 'Aside',
  data() {
    return {
      rol: 0,
      ocultarMenu: false,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize);
      /*
      if (process.browser) {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      }
      this.visualizarMenu();
      */
      this.handleResize();
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize);
    }
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem('userAuth'));
    switch (user.tipo) {
      case 'Administrador':
        this.rol = 1;
        break;
      case 'Supervisor':
        this.rol = 2;
        break;
      case 'Ventas':
        this.rol = 3;
        break;
    }
  },
  methods: {
    handleResize() {
      if (process.browser) {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;

        this.visualizarMenu();
      }
    },
    visualizarMenu() {

      if (this.window.width <= 1200) {
        this.ocultarMenu = true;
      } else if (this.window.width > 1200) {
        this.ocultarMenu = false;
      }
    }
  }
}
</script>

<style>
#style-2::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #D62929;
}
</style>
