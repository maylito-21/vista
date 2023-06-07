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

          <div class="col-12 col-md-2">
            <button type="button" class="btn btn-secondary" @click="PDF()">Generar PDF
            </button>
          </div>



          <div class="col-12">
            <div class="card">
              <h4 class="text-center">Listado de ventas</h4>
              <hr class="horizontal dark mt-0;" style="margin-top: -1px;">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <th class="py-0 px-1">#</th>
                      <th class="py-0 px-1">Fecha</th>
                      <th class="py-0 px-1">Cliente</th>
                      <th class="py-0 px-1">Total venta</th>
                      <th class="py-0 px-1 text-center">Opciones</th>
                    </thead>
                    <tbody>
                      <tr v-for="(m, i) in listPagina">
                        <td class="py-1 px-1">{{ i + 1 }}</td>
                        <td class="py-1 px-1">{{ m.fecha }}</td>
                        <td class="py-1 px-1">{{ m.cliente }}</td>
                        <td class="py-1 px-1">{{ m.total | currency('$') }}</td>
                        <td class="py-1 px-1 text-center">
                          <div class="btn-group">
                            <nuxtLink :to="url_editar + m.id" class="btn btn-info btn-sm py-1 px-2"
                              style="margin-bottom: 0px!important;">
                              <i class="fas fa-eye"></i>
                            </nuxtLink>
                            <button type="button" @click="ImprimirVenta(m)" class="btn btn-success btn-sm py-1 px-2"
                              style="margin-bottom: 0px!important;">
                              <i class="fas fa-print"></i>
                            </button>
                            <button type="button" @click="Eliminar(m.id)" class="btn btn-danger btn-sm py-1 px-2"
                              style="margin-bottom: 0px!important;">
                              <i class="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="row" style="margin-right: 10px;">
                    <div class="col-4"></div>
                    <div class="col-2"></div>
                    <div class="col-12 col-md-4 text-center">
                      <hr class="horizontal dark mt-0;" style="margin-top: -1px;">
                      <div style="font-weight: bold;">
                        Total de ventas: {{ this.totalArticulos | currency('$') }}
                      </div>
                    </div>
                    <div class="col-2"></div>
                  </div>

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

                  <div class="d-none">
                    <div class="text-center" id="element-to-pdf">

                      <h4>Listado de ventas</h4>

                      <br>

                      <table class="table">
                        <thead>
                          <th class="py-0 px-1">#</th>
                          <th class="py-0 px-1">Fecha</th>
                          <th class="py-0 px-1">Cliente</th>
                          <th class="py-0 px-1">Total venta</th>
                        </thead>
                        <tbody>
                          <tr v-for="(m, i) in listPagina">
                            <td class="py-1 px-1">{{ i + 1 }}</td>
                            <td class="py-1 px-1">{{ m.fecha }}</td>
                            <td class="py-1 px-1">{{ m.cliente }}</td>
                            <td class="py-1 px-1">{{ m.total | currency('$') }}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="row">
                        <div class="col-4"></div>
                        <div class="col-3"></div>
                        <div class="col-5">
                          <hr class="horizontal dark mt-0;" style="margin-top: -1px;">
                          <div style="margin-left: -10px; font-weight: bold;">
                            Total de ventas: {{ this.totalArticulos | currency('$') }}
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>

                  <!-- {{ listPagina }} -->

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
//import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js'; //este
//import html2canvas from 'html2canvas';

export default {
  // name: 'pdf',
  head() {
    return {
      title: this.modulo,
    };
  },

  data() {
    return {
      load: true,
      list: [],
      //  BORRAR PARA IMPRIMIR       sucursals: [],
      apiUrl: "ventas",
      page: "Ventas",
      modulo: "Lista de ventas",
      //  BORRAR PARA IMPRIMIR       sucursal:{
      //  BORRAR PARA IMPRIMIR       },
      url_editar: "/ventas/invoice/",
      totalItems: 0,
      itemsPorPaginas: 8,
      numeroPaginas: 0,
      pagina: 1,
      listPagina: [],
      palabraBusqueda: null
    };
  },
  computed: {
    totalArticulos() {
      let total = 0;
      this.listPagina.forEach(a => {
        total += a.total * 1;
      });
      return total;
    }


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
    Eliminar(id) {
      let self = this;
      this.$swal
        .fire({
          title: 'Atención',
          text: "¿Está a punto de perder la información?",
          icon: 'warning',
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminar',
          cancelarButtonText: `Cancelar`,
        })
        .then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            await self.EliminarItem(id);
          }
        });
    },

    //IMPRIMIR TICKET
    //  ,
    //   async ImprimirVenta(venta){
    //     let sucursal = this.sucursal
    //      sucursal.venta = venta
    //     const res = await this.$printer.$post(sucursal.impresora_url+"venta",sucursal);
    //     console.log(res)
    //   },
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
    PDF() {
      var element = document.getElementById('element-to-pdf');
      if (element != null && element != undefined) {
        var opt = {
          margin: 0.5,
          filename: 'ListaVentas.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 3 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
      }

    }


  },

  mounted() {
    this.$nextTick(async () => {
      try {
        this.cargarDatos();
        //  BORRAR PARA IMPRIMIR Y ELIMINAR EL DE ABAJO         await Promise.all([this.GET_DATA(this.apiUrl),this.GET_DATA('sucursals'),]).then((v) => {
        //await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {

        this.list = v[0];
        //  BORRAR PARA IMPRIMIR         this.sucursals = v[1];
        //  BORRAR PARA IMPRIMIR           if (this.sucursals.length > 0) {
        //  BORRAR PARA IMPRIMIR         this.sucursal = this.sucursals[0];
        //  BORRAR PARA IMPRIMIR       }
        //this.totalItems = this.list.length;
        // this.numeroPaginas = Math.ceil(this.totalItems / this.itemsPorPaginas);
        // this.paginar();
        //});
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    });
  },
};
</script>
