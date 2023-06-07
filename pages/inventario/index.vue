<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-end">
          <div class="col-lg-4 col-6" style="margin-top: -24px;">
            <label for="" style="margin-bottom: 1px;">Campo de búsqueda:</label>
            <input type="text" class="form-control" @keyup="buscarItem" v-model="palabraBusqueda"
              placeholder="Digita el nombre" style="padding: 4px;margin-bottom: 10px;">
          </div>
          

          <div class="col-12">
            <div class="card">
              <h4 class="text-center">Listado de inventario</h4>
              <hr class="horizontal dark mt-0;" style="margin-top: -1px;">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <th class="py-0 px-1">#</th>
                      <th class="py-0 px-1">Nombre</th>
                      <th class="py-0 px-1">CodeBar</th>
                      <th class="py-0 px-1">Marca</th>
                      <th class="py-0 px-1">Categoría</th>
                      <th class="py-0 px-1">Stock </th>
                      <th class="py-0 px-1">Inversión</th>
                      <th class="py-0 px-1">Valorizado</th>
                      <th class="py-0 px-1">Ganancia</th>
                      <th class="py-0 px-1 text-center">Opciones</th>
                    </thead>
                    <tbody>
                      <tr v-for="(m, i) in listPagina">
                        <td class="py-1 px-1">{{ i + 1 }}</td>
                        <td class="py-1 px-1">{{ m.nombre }}</td>
                        <td class="py-1 px-1">{{ m.barra }}</td>
                        <td class="py-1 px-1">{{ m.marca.nombre }}</td>
                        <td class="py-1 px-1">{{ m.categoria.nombre }}</td>
                        <td class="py-1 px-1">
                          <span class="badge " :class="[m.stock <= m.stock_minimo ? 'badge-danger' : 'badge-success']">
                            {{ m.stock }} {{ m.medida.codigo }}
                          </span>
                        </td>
                        <td class="py-1 px-1">{{ Number(m.inversion).toFixed(2) }}</td>
                        <td class="py-1 px-1">{{ Number(m.valorizado).toFixed(2) }}</td>
                        <td class="py-1 px-1">{{ Number(m.ganancia).toFixed(2) }}</td>
                        <td class="py-1 px-1 text-center">
                          <div class="btn-group">
                            <nuxtLink :to="url_editar + m.id" class="btn btn-info btn-sm py-1 px-2"
                              style="margin-bottom: 0px!important;">
                              <i class="fas fa-eye"></i>
                            </nuxtLink>

                          </div>
                        </td>
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
      apiUrl: "inventarios",
      page: "Inventario",
      modulo: "General",
      url_editar: "/inventario/kardex/",
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
          this.list = v[0]
          this.totalItems = this.list.length;
          this.numeroPaginas = Math.ceil(this.totalItems / this.itemsPorPaginas);
          this.paginar();
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
          title: "Deseas Eliminar?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Eliminar",
          cancelarButtonText: `Cancelar`,
        })
        .then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            await self.EliminarItem(id);
          }
        });
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
          return regex.test(elemento.nombre.toUpperCase())
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
    }
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
