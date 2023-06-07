<template>
  <div>
    <JcLoader :load="load"></JcLoader>

    <div class="row">
      <div class="col-12">
        <slot name="body">

        </slot>
      </div>
      <div style="margin-top: 15px!important;"></div>
      <hr class="horizontal dark mt-0;" style="margin-top: -1px;">
      <div class="col-12">
        <div class="row">
          <div class="col-6">
            <button class="btn btn-info w-100" @click="$router.back()">
              Regresar
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-dark w-100" @click="Save()">
              Actualizar
            </button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {

  props: {
    model: {
      type: Object,
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

    };
  },
  methods: {
    async Save() {
      this.load = true;
      try {
        const res = await this.$api.$put(this.apiUrl + "/" + this.model.id, this.model);
        console.log(res);
        this.$router.push('/')
              this.$swal
                .fire({
                  icon: 'success',
                  title: "Datos actualizados",
                  text: "SIGESCO",
                  showConfirmButton: false,
                  timerProgressBar: true,
                  timer: 2000,
          })
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

              
             /* this.$router.back();*/
            }
          });
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    },
  },
  mounted() {
    this.$nextTick(async () => {
      try {
      } catch (e) {
        console.log(e);
      } finally {
      }
    });
  },
};
</script>
