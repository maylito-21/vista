<template>
    <div>

        <AdminTemplate :page="page" :modulo="modulo">
            <div slot='body'>
                <div class="row justify-content-center">

                    <div class="col-sm-8 col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3>Agregar categoría</h3>
                            </div>
                            <div class="card-body">
                                <ValidationObserver ref="formMarcas">
                                    <form @submit.prevent="onSubmit">
                                        <!--
                                    <CrudCreate :model="model" :apiUrl="apiUrl">
                                        -->
                                        <div slot="body" class="row">
                                            <!-- <div class="col-12">
                                            <div class="form-group col-12">
                                                <label for="">Nombre</label>
                                                <input type="text" name="" v-model="model.nombre" class="form-control"
                                                    id="">
                                            </div>
                                        </div> -->
                                            <div class="form-group col-12">
                                                <label for="">Nombre de la categoría</label>
                                                <ValidationProvider rules="required" v-slot="{ errors }">
                                                    <input v-model="model.nombre" type="text" name="nombre"
                                                        class="form-control" id="">
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
                                                    <button type="button" class="btn btn-info btn-sm w-100"
                                                        @click="$router.back()">Regresar
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button type="button" class="btn btn-dark btn-sm w-100"
                                                        @click="enviar()">Guardar</button>
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
            title: "Demo",
        };
        ;
    },
    data() {
        return {

            model: {
                nombre: '',
            },
            apiUrl: 'categorias',
            page: 'Configuración',
            modulo: 'Categorías'
        };
    },
    methods: {
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
                    const res = await this.$api.$post(this.apiUrl, this.model);
                    console.log(res)
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Datos guardados',
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


                    // this.$swal.fire('Any fool can use a computer')
                    // this.$swal.fire({
                    //   icon: 'error',
                    //   title: 'Validación de datos',
                    //   text: 'Para continuar llene los campos requeridos',

                    // })
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

            } catch (e) {
                console.log(e)
            } finally {

            }



        });
    },

};
</script>


