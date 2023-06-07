<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-end">
          <div class="col-lg-4 col-6" style="margin-top: -24px;">
            <label for="" style="margin-bottom: 1px;">Campo de búsqueda:</label>
            <input type="text" class="form-control" @keyup="buscarItem" v-model="palabraBusqueda"
              placeholder="Digita la fecha" style="padding: 4px;margin-bottom: 10px;">
          </div>

          <div class="col-12">
            <div class="card">
              <h4 class="text-center">Historial de cajas</h4>
              <!-- <hr style="border: 1px solid rgb(103, 116, 142);margin-top: -1px;">  -->
              <hr class="horizontal dark mt-0;" style="margin-top: -1px;">

              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <th class="py-0 px-1">#</th>
                      <th class="py-0 px-1">Fecha</th>
                      <th class="py-0 px-1">Usuario</th>
                      <th class="py-0 px-1">Total caja</th>
                    </thead>
                    <tbody>
                      <tr v-for="(m, i) in listPagina">
                        <td class="py-1 px-1">{{ i + 1 }}</td>
                        <td class="py-1 px-1">{{ formatDateEN(m.fecha) }}</td>
                        <td class="py-1 px-1">{{ m.user.nombre }}</td>
                        <td class="py-1 px-1" v-if="m.total >= 0" >{{ Number(m.total).toFixed(2) | currency('$') }}</td>
                        <td class="py-1 px-1" v-else style="color: red;font-weight: bold;">{{ Number(m.total).toFixed(2) | currency('$') }}</td>

                      </tr>
                    </tbody>
                  </table>

                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#" @click="paginaAnterior"
                          style="padding: 0 50px 0 50px; border-radius: 10px!important; ">Anterior</a></li>
                      <li v-for="paginax in totalPaginas()" class="page-item"><a class="page-link" href="#"
                          @click="paginaEspecifica(paginax)">{{ paginax }}</a></li>

                      <li class="page-item"><a class="page-link" href="#" @click="siguientePagina"
                          style="padding: 0px 50px;border-radius: 10px !important;--bs-pagination-focus-bg: #b2cce7!important; --bs-pagination-focus-box-shadow: 0 0 0 0.2rem rgb(13 21 76 / 25%)!important;">Siguiente</a>
                      </li>
                    </ul>
                  </nav>


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
      load: true,
      list: [],
      sucursals: [],
      apiUrl: "cajas",
      page: "Caja",
      modulo: "Historial",
      sucursal: {

      },
      totalItems: 0,
      itemsPorPaginas: 8,
      numeroPaginas: 0,
      pagina: 1,
      listPagina: [],
      palabraBusqueda: null
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
    async EliminarItem(id) {
      this.load = true;
      try {
        const res = await this.$api.$delete(this.apiUrl + "/" + id);
        console.log(res);
        await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {
          this.list = v[0];
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    },
    totalPaginas() {
      return Math.ceil(this.list.length / this.itemsPorPaginas)
    },
    paginar() {
      let ini = (this.pagina * this.itemsPorPaginas) - this.itemsPorPaginas;
      let fin = (this.pagina * this.itemsPorPaginas);

      this.listPagina = this.list.slice(ini, fin);
    },
    siguientePagina() {
      if (this.pagina < Math.ceil(this.totalItems / this.itemsPorPaginas)) {
        this.pagina++;
        this.paginar();
      }

    },
    paginaAnterior() {
      if (this.pagina > 1) {
        this.pagina--;
        this.paginar();
      }

    },
    paginaEspecifica(valor) {
      this.pagina = valor;
      this.paginar();
    },
    buscarItem() {
      if (this.palabraBusqueda.length == 0) {
        this.cargarDatos();
      } else {
        let regex = new RegExp(`.*${this.palabraBusqueda.toUpperCase()}.*`);
        let itemsFiltrados = this.list.filter(elemento => {
          return regex.test(elemento.fecha.toUpperCase())
        });
        this.list = itemsFiltrados;
        this.pagina = 1;
        this.totalItems = itemsFiltrados.length;
        this.numeroPaginas = Math.ceil(this.totalItems / this.itemsPorPaginas);
        this.paginar();
      }

    },
    async cargarDatos() {
      await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {
        this.list = v[0];
        this.totalItems = this.list.length;
        this.numeroPaginas = Math.ceil(this.totalItems / this.itemsPorPaginas);
        this.paginar();
      });
    },
        formatDateEN(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return new Date(date).toLocaleTimeString('en-AU', options)
    },

  },
  mounted() {
    this.$nextTick(async () => {
      try {
        this.cargarDatos();
        /*
        await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {
          this.list = v[0];
          this.totalItems = this.list.length;
          this.numeroPaginas = Math.ceil(this.totalItems / this.itemsPorPaginas);
          this.paginar();
        });*/
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    });
  },
};
</script>
  