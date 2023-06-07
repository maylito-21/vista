<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">

          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-header">
                <h3>Actualizar datos de usuario</h3>
              </div>
              <div class="card-body">
                <ValidationObserver ref="formMarcas">
                  <form @submit.prevent="onSubmit">
                    <!--
                                    <CrudCreate :model="model" :apiUrl="apiUrl">
                                        -->
                    <div slot="body" class="row">

                      <div class="form-group col-sm-3 col-12">
                        <label for="">Rol de usuario</label>
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <div class="choices" data-type="select-one" tabindex="0" role="combobox"
                            aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                            <select name="" id="" class="form-control" v-model="model.tipo">
                              <option value="Administrador">Administrador</option>
                              <option value="Supervisor">Supervisor</option>
                              <option value="Ventas">Ventas</option>
                            </select>
                            <span style="color: red;font-weight: bold;font-size: 15px;">{{
                              errors[0] }}</span>
                          </div>

                        </ValidationProvider>
                      </div>



                      <div class="form-group col-sm-9 col-12">
                        <label for="">Nombre de la persona</label>
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input v-model="model.nombre" type="text" name="nombre" class="form-control" id="">
                          <span style="color: red;font-weight: bold;font-size: 15px;">{{
                            errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-sm-4 col-12">
                        <label for="">Nombre de usuario</label>
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input v-model="model.username" type="text" name="nombre" class="form-control" id="">
                          <span style="color: red;font-weight: bold;font-size: 15px;">{{
                            errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-sm-8 col-12">
                        <label for="">Correo electrónico</label>
                        <ValidationProvider rules="required" v-slot="{ errors }">
                          <input v-model="model.email" type="email" name="nombre" class="form-control" id="">
                          <span style="color: red;font-weight: bold;font-size: 15px;">{{
                            errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-sm-4 col-12">
                        <label for="">Contraseña</label>
                        <ValidationProvider name="confirm" rules="required|min:5" v-slot="{ errors }">
                          <input v-model="model.password" type="password" name="min" class="form-control" id="">
                          <span style="color: red;font-weight: bold;font-size: 15px;">{{
                            errors[0] }}</span>
                        </ValidationProvider>
                      </div>

                      <div class="form-group col-sm-4 col-12">
                        <label for="">Confirmar contraseña</label>
                        <ValidationProvider rules="required|password:@confirm|min:5" v-slot="{ errors }">
                          <input v-model="model.confirmation" type="password" name="min" class="form-control" id="">
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
import { required, email, integer, between, min } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '*Campo requerido',
});
extend('email', {
  ...email,
  message: '*Correo no valido',
});

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'La contraseña no coincide'
});
extend('integer', integer);
extend('between', between);
extend('min', {
  ...min,
  message: '*Require minimo 5 caracteres',
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  name: "IndexPage",
  head() {
    return {
      title: "Usuario",
    };
    ;
  },
  data() {
    return {
      load: true,

      model: {
        nombre: "",
        username: '',
        email: '',
        password: '',
        tipo: '',
      },
      apiUrl: 'users',
      page: 'Usuarios',
      modulo: 'Usuario'
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res
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

          this.$swal.fire({
            icon: 'success',
            title: 'Datos actualizados',
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: 'Aceptar',


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
        await Promise.all([this.GET_DATA(this.apiUrl + '/' + this.$route.params.id)]).then((v) => {
          this.model = v[0]
        })
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false
      }



    });
  }
};
</script>
