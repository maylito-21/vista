<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-header">
                <h3>Actualizar datos</h3>
              </div>
              <div class="card-body">
                <ValidationObserver ref="formMarcas">
                  <form @submit.prevent="onSubmit">
                    <!--
                                    <CrudCreate :model="model" :apiUrl="apiUrl">
                                        -->
                    <div slot="body" class="row">
                      <div class="form-group col-sm-6 col-12">
                        <label for="">Nombre del artículo</label>
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input v-model="model.nombre" type="text" name="nombre" class="form-control" id="">
                          <span style="color: red;font-weight: bold;font-size: 15px;">{{errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-sm-6 col-12">
                        <label for="">Código de barra</label>
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input v-model="model.barra" type="text" name="nombre" class="form-control" id="">
                          <span style="color: red;font-weight: bold;font-size: 15px;">{{
                            errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-sm-4 col-6">
                        <label for="">Marca</label>
                        <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list"
                          aria-haspopup="true" aria-expanded="false">
                          <select name="" id="" class="form-control" v-model="model.marca_id">
                            <option v-for="ma in marcas" :value="ma.id">
                              <div class="choices__inner">
                                {{ ma.nombre }}
                              </div>
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group col-sm-4 col-6">
                        <label for="">Categoría</label>
                        <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list"
                          aria-haspopup="true" aria-expanded="false">
                          <select name="" id="" class="form-control" v-model="model.categoria_id">
                            
                            <option v-for="ms in categorias" :value="ms.id">
                              
                              <div class="choices__inner">
                                {{ ms.nombre }}
                              </div>
                            </option>
                          </select>
                        </div>
                      </div>

                      
                      <div class="form-group col-sm-4 col-6">
                        <label for="">Unidad de medida</label>
                        <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list"
                          aria-haspopup="true" aria-expanded="false">
                          <select name="" id="" class="form-control" v-model="model.medida_id">
                            <option v-for="md in medidas" :value="md.id">
                              <div class="choices__inner">
                                {{ md.nombre }}
                              </div>
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group col-sm-4 col-6">
                        <label for="">Stock mínimo</label>
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input v-model.number="model.stock_minimo" type="number" name="compra" class="form-control"
                            id="">
                          <span style="color: red;font-weight: bold;font-size: 15px;">{{
                            errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-sm-4 col-6">
                        <label for="">Precio Compra</label>
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input v-model.number="model.compra" type="number" name="compra" class="form-control" id="">
                          <span style="color: red;font-weight: bold;font-size: 15px;">{{
                            errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-sm-4 col-6">
                        <label for="">Precio Venta</label>
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input v-model.number="model.venta" type="number" name="number" class="form-control" id="">
                          <span style="color: red;font-weight: bold;font-size: 15px;">{{
                            errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <br>
                    <hr class="horizontal dark mt-0;" style="margin-top: -1px;">

                    <div class="col-12">
                      <div class="row">
                        <div class="col-6">
                          <button type="button" class="btn btn-info btn-sm w-100" @click="$router.back()">Regresar
                          </button>
                        </div>
                        <div class="col-6">
                          <button type="button" class="btn btn-dark btn-sm w-100" @click="enviar()">Guardar</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <!--
                                    </crudCreate>
                                    -->
                </ValidationObserver>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email, integer, between } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: '*Campo requerido',


});
extend('email', email);
extend('integer', integer);
extend('between', between);

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
  name: "IndexPage",
  head() {
    return {
      title: this.modulo,
    };
  },
  data() {
    return {
      load: true,

      model: {
        nombre: "",
        barra: "",
        stock_minimo: 0,
        compra: 0,
        venta: 0,
        marca_id: '',
        medida_id: '',
        categoria_id: '',
      },
      apiUrl: "articulos",
      page: "Configuración",
      modulo: "Artículos",
      marcas: [],
      medidas: [],
      categorias: [],
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
    enviar() {
            this.$refs.formMarcas.validate().then(async success => {
                if (!success) {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Validación de datos',
                        text: 'Para continuar llene los campos requeridos',
                    })
                    return;

                }

                this.load = true
                try {
                    const res = await this.$api.$put(this.apiUrl + "/" + this.model.id, this.model);
                    console.log(res)

                    this.$router.back()
                    this.$swal.fire({
                        icon: 'success',
                        title: "Datos guardados!",
                        showDenyButton: false,
                        // showCancelButton: false,
                        // confirmButtonText: "Ok",
                        text: "SIGESCO",
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 2000,
                        confirmButtonText: true,



                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            this.$router.back()
                        }
                    })
                } catch (e) {
                    console.log(e)
                } finally {
                    this.load = false
                }

                // Resetting Values
                this.firstName = this.lastName = this.email = '';

                // Wait until the models are updated in the UI
                this.$nextTick(() => {
                    this.$refs.formMarcas.reset();
                });
            });
        }
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        await Promise.all([
          this.GET_DATA(this.apiUrl + "/" + this.$route.params.id), this.GET_DATA('marcas'), this.GET_DATA('medidas'), this.GET_DATA('categorias')
        ]).then((v) => {
          this.model = v[0];
          this.marcas = v[1];
          this.medidas = v[2];
          this.categorias = v[3];
          if (this.marcas.length) {
            //console.log( JSON.stringify( this.model));
            //this.model.marca_id = this.marcas[0].id
          }
          if (this.medidas.length) {
           // this.model.medida_id = this.medidas[0].id
          }
          if (this.categorias.length) {
          //  this.model.categoria_id = this.categorias[0].id
          }
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    });
  },
};
</script>
