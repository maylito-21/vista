<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-end">
          <div class="col-12 col-sm-7">
            <div class="row">
              <div class="col-12">
                <div class="card h-100 mt-4 mt-md-0">
                  <div class="card-header pb-0 p-3">
                    <div class="d-flex align-items-center">
                      <h6>Movimientos de caja</h6>
                      <button type="button" @click="modalMovimiento = true"
                        class="btn btn-icon-only btn-rounded btn-outline-success mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
                        data-bs-toggle="tooltip" data-bs-placement="bottom"
                        aria-label="Data is based from sessions and is 100% accurate"
                        data-bs-original-title="Data is based from sessions and is 100% accurate">
                        <i class="fas fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body px-3 pt-0 pb-2">
                    <div class="table-responsive p-0">
                      <table class="table align-items-center justify-content-center mb-0">
                        <thead>
                          <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              #
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Fecha
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Motivo
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Monto
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(m, i) in caja.movimientos">
                            <td>
                              <p class="text-sm font-weight-bold mb-0">
                                {{ i + 1 }}
                              </p>
                            </td>
                            <td>
                              <p class="text-sm font-weight-bold mb-0">
                                {{ formatDateEN(m.created_at) }}
                              </p>
                            </td>
                            <td>
                              <p class="text-sm font-weight-bold mb-0">{{ m.motivo }}</p>
                            </td>
                            <td>
                              <p v-if="m.tipo == 1" class="text-sm font-weight-bold mb-0">
                                {{ m.monto | currency('$') }}
                              </p>
                              <p v-else class="text-sm text-danger font-weight-bold mb-0">
                                -{{ m.monto | currency('$') }}
                              </p>
                            </td>

                          </tr>

                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="card card-pricing">
              <div class="card-header bg-gradient-dark text-center pt-4 pb-5 position-relative">
                <div class="z-index-1 position-relative">
                  <h1 class="text-white mt-2 mb-0"><small></small>{{ Number(caja.total).toFixed(2) | currency('$') }}</h1>
                  <h6 class="text-white">Total de caja</h6>
                </div>
              </div>
              <div class="position-relative mt-n5" style="height: 50px">
                <div class="position-absolute w-100">
                  <svg class="waves waves-sm" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none"
                    shape-rendering="auto">
                    <defs>
                      <path id="card-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
                      </path>
                    </defs>
                    <g class="moving-waves">
                      <use xlink:href="#card-wave" x="48" y="-1" fill="rgba(255,255,255,0.30"></use>
                      <use xlink:href="#card-wave" x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
                      <use xlink:href="#card-wave" x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
                      <use xlink:href="#card-wave" x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
                      <use xlink:href="#card-wave" x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
                      <use xlink:href="#card-wave" x="48" y="16" fill="rgba(255,255,255,0.99)"></use>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                        <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                            fill="#ffffff" id="id_102"></path>
                        </svg> -->
                        <svg style="margin-top: 5px;" fill="#ffffff" viewBox="0 0 24 24" id="up-alt"
                          data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"
                          stroke="#ffffff">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path id="primary"
                              d="M20.84,8.61,13.23,2.69a2,2,0,0,0-2.46,0L3.16,8.61a2,2,0,0,0-.37,2.78l1.84,2.45a2,2,0,0,0,2.71.47L8,13.87V20a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V13.87l.66.44a2,2,0,0,0,2.71-.47l1.84-2.45A2,2,0,0,0,20.84,8.61Z"
                              style="fill: #ffffff;"></path>
                          </g>
                        </svg>
                      </div>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Ingresos</h6>
                        <span class="text-xs">{{ Number(caja.ingresos).toFixed(2) | currency('$') }}</span>
                      </div>
                    </div>
                    <!-- <div class="d-flex">
                      <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                        <i class="ni ni-bold-right" aria-hidden="true"></i>
                      </button>
                    </div> -->
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                        <svg style="margin-top: 5px;" fill="#ffffff" viewBox="0 0 24 24" id="down-direction"
                          data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"
                          stroke="#ffffff">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path id="primary"
                              d="M20.76,13.81l-2.6-3a1,1,0,0,0-1.41-.11L15,12.16V4a2,2,0,0,0-2-2H11A2,2,0,0,0,9,4v8.16l-1.75-1.5a1,1,0,0,0-1.41.11l-2.6,3a1,1,0,0,0,.11,1.41l7.35,6.3a2,2,0,0,0,2.6,0l7.35-6.3A1,1,0,0,0,20.76,13.81Z"
                              style="fill: #ffffff;"></path>
                          </g>
                        </svg>
                      </div>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Salidas</h6>
                        <span class="text-xs">{{ Number(caja.salidas).toFixed(2) | currency('$') }}</span>
                      </div>
                    </div>
                    <!-- <div class="d-flex">
                      <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                        <i class="ni ni-bold-right" aria-hidden="true"></i>
                      </button>
                    </div> -->
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                        <svg style="margin-top: 5px;" fill="#ffffff" height="14px" width="14px" version="1.1" id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <g>
                                <path
                                  d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,467.478 C139.39,467.478,44.522,372.61,44.522,256S139.39,44.522,256,44.522S467.478,139.39,467.478,256S372.61,467.478,256,467.478z">
                                </path>
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M256,72.348C154.739,72.348,72.348,154.739,72.348,256S154.739,439.652,256,439.652S439.652,357.261,439.652,256 S357.261,72.348,256,72.348z M263.805,241.239c23.794,12.576,53.413,28.239,53.413,59.283c0,27.956-18.869,51.548-44.522,58.842 v7.94c0,9.217-7.479,16.696-16.696,16.696c-9.217,0-16.696-7.479-16.696-16.696v-7.94c-25.652-7.294-44.522-30.886-44.522-58.842 c0-9.217,7.479-16.696,16.696-16.696s16.696,7.479,16.696,16.696c0,15.348,12.478,27.826,27.826,27.826 s27.826-12.478,27.826-27.826c0-10.935-18.109-20.5-35.631-29.761c-23.794-12.576-53.413-28.239-53.413-59.283 c0-27.956,18.869-51.548,44.522-58.842v-7.94c0-9.217,7.479-16.696,16.696-16.696c9.217,0,16.696,7.479,16.696,16.696v7.94 c25.652,7.294,44.522,30.886,44.522,58.842c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696 c0-15.348-12.478-27.826-27.826-27.826s-27.826,12.478-27.826,27.826C228.174,222.413,246.283,231.978,263.805,241.239z">
                                </path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Ventas</h6>
                        <span class="text-xs">{{ Number(caja.ventas).toFixed(2) | currency('$') }}
                        </span>
                      </div>
                    </div>
                    <!-- <div class="d-flex">
                      <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                        <i class="ni ni-bold-right" aria-hidden="true"></i>
                      </button>
                    </div> -->
                  </li>
                  <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                    <div class="d-flex align-items-center">
                      <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">

                        <svg style="margin-top: 5px;" height="14px" width="14px" version="1.1" id="_x32_"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <!-- <style type="text/css">.st0 {fill: #ffffff;}</style> -->
                            
                            <g>
                              <path class="st0"
                                d="M137.769,423.274c5.7-0.579,9.852-5.666,9.281-11.373l-14.644-109.783c-0.572-5.7-5.666-9.852-11.366-9.272 c-5.708,0.58-9.861,5.666-9.281,11.374l14.627,109.774C126.974,419.701,132.06,423.845,137.769,423.274z">
                              </path>
                              <path class="st0"
                                d="M196.851,423.307c5.733-0.286,10.138-5.153,9.844-10.878l-7.272-109.783 c-0.286-5.724-5.162-10.13-10.878-9.844c-5.733,0.286-10.13,5.162-9.852,10.886l7.272,109.784 C186.258,419.197,191.126,423.602,196.851,423.307z">
                              </path>
                              <path class="st0"
                                d="M385.606,413.993l14.636-109.774c0.572-5.708-3.581-10.794-9.282-11.374c-5.7-0.58-10.794,3.573-11.374,9.272 l-14.636,109.783c-0.58,5.707,3.581,10.794,9.281,11.373C379.931,423.845,385.026,419.701,385.606,413.993z">
                              </path>
                              <path class="st0"
                                d="M326.028,413.473l7.263-109.784c0.286-5.724-4.119-10.6-9.836-10.886c-5.733-0.286-10.6,4.119-10.895,9.844 l-7.263,109.783c-0.286,5.725,4.119,10.592,9.844,10.878C320.866,423.602,325.742,419.197,326.028,413.473z">
                              </path>
                              <path class="st0"
                                d="M256.42,424.409c5.734,0,10.374-4.649,10.374-10.374l-0.008-110.867c0-5.724-4.649-10.374-10.382-10.374 c-5.725,0-10.374,4.65-10.374,10.374l0.008,110.867C246.038,419.76,250.687,424.409,256.42,424.409z">
                              </path>
                              <polygon class="st0"
                                points="424.016,450.68 87.976,450.68 60.814,252.467 24.237,252.467 55.653,487.006 456.347,487.006 487.755,252.467 451.186,252.467 ">
                              </polygon>
                              <path class="st0"
                                d="M404.848,167.711L337.722,37.635c-5.91-11.459-20-15.947-31.458-10.038 c-11.458,5.91-15.964,19.999-10.046,31.458l56.073,108.656H159.693l56.09-108.656c5.901-11.459,1.412-25.548-10.054-31.458 c-11.45-5.91-25.54-1.421-31.458,10.038l-67.127,130.076H0v69.188h512v-69.188H404.848z">
                              </path>
                            </g>
                          </g>
                        </svg>


                      </div>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">Compras</h6>
                        <span class="text-xs font-weight-bold">{{ Number(caja.compras).toFixed(2) | currency('$')
                        }}</span>
                      </div>
                    </div>
                    <!-- <div class="d-flex">
                      <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                        <i class="ni ni-bold-right" aria-hidden="true"></i>
                      </button>
                    </div> -->
                  </li>
                </ul>
                <a href="javascript:void(0);" class="btn bg-gradient-dark w-100 mt-4 mb-0" @click="Save()">
                  <i class="fas fa-save mx-2"></i> FINALIZAR / APERTURAR CAJA
                </a>
              </div>
            </div>
          </div>
          <div class="modal fade" :class="modalMovimiento ? 'showModal' : ''" id="AjusteModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Nuevo Movimiento
                  </h5>
                  <button type="button" class="btn-close text-dark" @click="modalMovimiento = false"
                    data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Motivo</label>
                        <input type="text" v-model="movimiento.motivo" name="" class="form-control" id="">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Monto</label>
                        <input type="text" v-model="movimiento.monto" name="" class="form-control" id="">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Movimiento</label>
                        <select name="" v-model="movimiento.tipo" class="form-control" id="">
                          <option value="1">Ingreso</option>
                          <option value="2">Salida</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" @click="modalMovimiento = false" class="btn bg-gradient-secondary"
                    data-bs-dismiss="modal">
                    Cerrar
                  </button>
                  <button type="button" @click="AddMovimiento()" class="btn btn-primary">
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.modulo,
    };
  },

  data() {
    return {
      modulo: "Movimientos",
      page: "Caja",
      load: false,
      modalMovimiento: false,
      user: {},
      caja: {
        salidas: 0,
        ingresos: 0,
        total: 0,
        movimientos: []
      },
      movimiento: {
        motivo: '',
        monto: 0,
        tipo: 1
      }
    };
  },
  computed: {},
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
    async AddMovimiento() {
      this.load = true
      this.modalMovimiento = false
      this.movimiento.caja_id = this.caja.id
      await this.$api.$post('cajaMovimientos', this.movimiento);
      await Promise.all([this.GET_DATA('cajas/' + this.user.caja_id)]).then((v) => {
        this.caja = v[0]
      })
      this.load = false
    },
    async Save() {
      this.load = true
      try {

        let id = this.caja.id
        let res = await this.$api.$put('cajas/' + id, { id: id });
        let user = this.user
        user.caja_id = res.id
        localStorage.setItem('userAuth', JSON.stringify(user))
        this.user = user
        await Promise.all([this.GET_DATA('cajas/' + this.user.caja_id)]).then((v) => {
          this.caja = v[0]
        })
      } catch (e) {

      } finally {
        this.load = false
      }
    },
    formatDateEN(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return new Date(date).toLocaleTimeString('en-AU', options)
    },
  },
  mounted() {
    let user = localStorage.getItem('userAuth')
    this.user = JSON.parse(user)
    this.$nextTick(async () => {
      this.load = true
      await Promise.all([this.GET_DATA('cajas/' + this.user.caja_id)]).then((v) => {
        this.caja = v[0]
      })
      this.load = false
    });
  },
};
</script>
<style>.showModal {
  visibility: visible;
  display: block;
  opacity: 1 !important;
}</style>
