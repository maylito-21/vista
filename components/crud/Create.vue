<template>
  <div>
    <JcLoader :load="load"></JcLoader>

    <div class="row">
      <div class="col-12">
        <slot name="body">

        </slot>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-6">
            <button class="btn btn-info btn-sm w-100" @click="$router.back()">Regresar
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-dark btn-sm w-100" @click="Save()">Guardar
            </button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>


export default {
  name: "IndexPage",
  props: {
    model: {
      model: Object,
      default: () => { }
    },
    apiUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      load: false,
    }
  },
  methods: {
    async Save() {
      this.load = true
      try {
        const res = await this.$api.$post(this.apiUrl, this.model);
        console.log(res)
        this.$swal.fire({
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


