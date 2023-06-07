<template>
  <div>
    <JcLoader :load="load"></JcLoader>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-header" style="padding-bottom: 0px!important;">
                <h3>Datos de la empresa</h3>
              </div>
              <div class="card-body">
                <CrudUpdate v-if="list.length > 0" :model="model" :apiUrl="apiUrl">
                  <div slot="body" class="row">
                    <div class="form-group col-12">
                      <label for="">Nombre de la empresa</label>
                      <input type="text" name="" v-model="model.nombre" class="form-control" id="" />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Dirección</label>
                      <input type="text" name="" v-model="model.direccion" class="form-control" id="" />
                    </div>
                    <div class="form-group col-md-4 col-sm-12">
                      <label for="">Teléfono</label>
                      <input type="text" name="" v-model="model.telefono" class="form-control" id="" />
                    </div>
                    <div class="form-group col-md-4 col-sm-12">
                      <label for="">Documento 01</label>
                      <input type="text" name="" v-model="model.documento1" class="form-control" id="" />
                    </div>
                    <div class="form-group col-md-4 col-sm-12">
                      <label for="">Documento 02</label>
                      <input type="text" name="" v-model="model.documento2" class="form-control" id="" />
                    </div>
                    <div class="form-group col-md-4 col-sm-12">
                      <label for="">Documento 03</label>
                      <input type="text" name="" v-model="model.documento3" class="form-control" id="" />
                    </div>
                    <h3 style="padding: 20px 0px 15px 0px!important;">Datos de la impresora térmica </h3>
                    <div class="form-group col-12">
                      <label for="">Nombre de la impresora</label>
                      <input type="text" name="" v-model="model.impresora" class="form-control" id="" />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Impresora URL (Endpoints)</label>
                      <input type="text" name="" v-model="model.impresora_url" class="form-control" id="" />
                    </div>
                    <div class="form-group col-12" style="margin-top:10px!important ;">
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="impresionAutomatica"
                          v-model="model.automatica">
                        <label class="form-check-label" for="impresionAutomatica">Imprimir ticket por cada venta de manera automática</label>
                      </div>
                    </div>
                  </div>
                </CrudUpdate>
                <CrudCreate v-else :model="model" :apiUrl="apiUrl">
                  <div slot="body" class="row">
                    <div class="form-group col-12">
                      <label for="">Nombre de la empresa</label>
                      <input type="text" name="" v-model="model.nombre" class="form-control" id="" />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Dirección</label>
                      <input type="text" name="" v-model="model.direccion" class="form-control" id="" />
                    </div>
                    <div class="form-group col-md-4 col-sm-12">
                      <label for="">Teléfono</label>
                      <input type="text" name="" v-model="model.telefono" class="form-control" id="" />
                    </div>
                    <div class="form-group col-md-4 col-sm-12">
                      <label for="">Documento 01</label>
                      <input type="text" name="" v-model="model.documento1" class="form-control" id="" />
                    </div>
                    <div class="form-group col-md-4 col-sm-12">
                      <label for="">Documento 02</label>
                      <input type="text" name="" v-model="model.documento2" class="form-control" id="" />
                    </div>
                    <div class="form-group col-md-4 col-sm-12">
                      <label for="">Documento 03</label>
                      <input type="text" name="" v-model="model.documento3" class="form-control" id="" />
                    </div>
                    <h3 style="padding: 20px 0px 15px 0px!important;">Datos de la impresora térmica </h3>
                    <div class="form-group col-12">
                      <label for="">Nombre de la impresora</label>
                      <input type="text" name="" v-model="model.impresora" class="form-control" id="" />
                    </div>
                    <div class="form-group col-12">
                      <label for="">Impresora URL (Endpoints)</label>
                      <input type="text" name="" v-model="model.impresora_url" class="form-control" id="" />
                    </div>
                  </div>
                </CrudCreate>
                <button v-if="list.length > 0" @click="ImprimirTest()" class="btn btn btn-dark w-100">Imprimir pagina de
                  prueba</button>
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
        direccion: "",
        documento1: "",
        documento2: "",
        documento3: "",
        telefono: "",
        impresora: "",
        impresora_url: "",
        automatica: 0
      },
      apiUrl: "sucursals",
      page: "Configuración",
      modulo: "Sucursal",
      list: [],
      impresionAutomatica: false
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
    async ImprimirTest() {
      let sucursal = this.model
      // const res = await this.$printer.$get("http://127.0.0.1:8001/printer/test",sucursal);
      // const res = await this.$printer.$get(sucursal.impresora_url+"test");
      const res = await this.$printer.$post(sucursal.impresora_url + "test", sucursal);
      console.log(res)
      //this.$router.back()
    }
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {
          this.list = v[0];
          if (this.list.length > 0) {
            this.model = this.list[0];
            /*
            if (this.model.automatica == 1) {
              this.impresionAutomatica = true;
            } else {
              this.impresionAutomatica = false;
            }
            */
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
