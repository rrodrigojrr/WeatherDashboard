let dadosBanco = [
    {"dir": {
        "cod": 'chuva.png',
        "dia": '07/05',
        "tempMax": 11,
        "tempMin": 22,
        "prec": 16},
    "hor": {
        "temp": [12.4, 12.3, 11.6, 11.7, 11.5, 10.8, 10.7, 10.8, 11, 11.4, 12.4, 13.6,
            14.3, 14.5,	14.8, 14.1,	13.9, 13.6,	13.1, 13, 12.6,	12.3, 11.7,	11.2],
        "prec": [0,0,0,0,2,4,3,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "labels": ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
                '09:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
                '19:00', '20:00', '21:00', '22:00', '23:00'] 
        },
    },
    {"dir": {
        "cod": 'chuva.png',
        "dia": '08/05',
        "tempMax": 11,
        "tempMin": 22,
        "prec": 10},
    "hor": {
        "temp": [11.7, 11.9, 11.7, 11.3, 11.4, 11.7, 11.8, 11.7, 12, 12, 12.6, 13.5,
            15,	15.4, 15, 14.5,	14.2, 13.7,	13.1, 12.5,	12.5, 12.6,	12.7, 12.7],
        "prec": [0,0,0,0,0,0,0,0,0,0,0,0,0,5,4,1,0,0,0,0,0,0,0,0],
        "labels": ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
        '09:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
        '19:00', '20:00', '21:00', '22:00', '23:00'] 
        },
    },
    {"dir": {
        "cod": 'sol_e_nuvem.png',
        "dia": '09/05',
        "tempMax": 11,
        "tempMin": 22,
        "prec": 00},
    "hor": {
        "temp": [12.6, 12.7, 12.7, 12.9, 12.9, 12.8, 12.8, 12.4, 12.8, 14.8, 15, 15.6,
            17.4, 18.6,	19.1, 19.4,	19.3, 18, 16.6,	14.8, 14.4,	14.6, 14.4,	14.1],
        "prec": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "labels": ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
        '09:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
        '19:00', '20:00', '21:00', '22:00', '23:00'] 
        },
    },
    {"dir": {
        "cod": 'chuva.png',
        "dia": '10/05',
        "tempMax": 11,
        "tempMin": 22,
        "prec": 27},
    "hor": {
        "temp": [13.6, 13.6, 13, 13.2, 13.7, 13.6, 13.6, 13.1, 13.7, 15, 16.4, 18,
            19.3, 20.4, 21.4, 21.7, 22.4, 21.6, 19.8, 17.1, 15.7, 15, 14.4, 13.3],
        "prec": [0,0,0,0,0,0,0,0,0,0,0,0,0,8,9,10,0,0,0,0,0,0,0,0],
        "labels": ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
        '09:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
        '19:00', '20:00', '21:00', '22:00', '23:00'] 
        },
    },
    {"dir": {
        "cod": 'sol_e_nuvem.png',
        "dia": '11/05',
        "tempMax": 11,
        "tempMin": 22,
        "prec": 00},
    "hor": {
        "temp": [13.1, 13, 12.6, 11.9, 11.5, 11.3, 10.7, 11, 11.25, 12.2, 14.35, 19.425,
            21.85, 23.625, 23.525, 23.5, 22.8, 19.775, 18.0, 16.675, 16.35, 15.975, 15.775, 15.9],
        "prec": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "labels": ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
        '09:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
        '19:00', '20:00', '21:00', '22:00', '23:00'] 
        },
    }
]






Vue.component("graphtemp", {
    extends: VueChartJs.Line,
    data(){
        return {
            
            sharedState: data
        }
    },
    props: {
        x: Array,
        y: Array,
        
    },
    mounted() {
       
      this.renderChart(
        {
          labels:this.x,
          datasets: [
            {
              label: "Temperatura Horária (ºC)",
              backgroundColor: 'aqua',
              fill: false,
              data: this.y,
              borderColor: 'aqua',
            },
          ],
        },
        { 
            responsive: true, maintainAspectRatio: false,
        }
      );
    },
  });




  Vue.component("graphprec", {
    extends: VueChartJs.Bar,
    data(){
        return {
            
            sharedState: data
        }
    },
    props: {
        x: Array,
        y: Array,
        
    },
    mounted() {
       
      this.renderChart(
        {
          labels:this.x,
          datasets: [
            {
              label: "Precipitação Horária (mm)",
              backgroundColor: 'aqua',
              fill: false,
              data: this.y,
              borderColor: 'aqua',
            },
          ],
        },
        { 
            responsive: true, maintainAspectRatio: false,
        }
      );
    },
  });



Vue.component('prevboxtempin', {
    data(){
        return {
            dados: dadosBanco,
            isDropped: false,
            xAux: [],
            yAUx: []
        }
    },
    template: `
    <div class="row d-flex justify-content-center row-prev">
        <div v-for="dado in dados" class="col-10 col-lg-3 col-sm-8 col-md-5 col-xl-2 card-prev my-3 mx-1 py-1" id="dia1" 
        @mouseover="isDropped=true; xAux=dado.hor.labels; yAux=dado.hor.temp" @mouseleave="isDropped=false">
            <h3 class="dias mt-2 fadein">{{ dado.dir.dia }}</h3>
            <img :src="'imgs/'+dado.dir.cod" class="my-2 fadein">
            <p class="prev-diaria fadein">{{ dado.dir.tempMax }} ºC</p>
            
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col d-flex justify-content-center">
                <transition>
                    <div v-if="!isDropped">
                        <p class="passarmouse">Passe o mouse sobre as caixas para obter a previsão diária</p>
                    </div>
                </transition>
            </div>
        </div>

        <div class="row d-flex justify-content-center">
            <div class="col-8 ">
                <transition>
                    <div v-if="isDropped">
                        <graphtemp :x="xAux" :y="yAux" ></graphtemp>
                    </div>
                </transition>
            </div>
        </div>
    </div>
    `
})

Vue.component('prevboxtempout', {
    data(){
        return {
            dados: dadosBanco
        }
    },
    template: `
    <div class="row d-flex justify-content-center row-prev">
        <div v-for="dado in dados" class="col-10 col-lg-3 col-sm-8 col-md-5 col-xl-2 card-prev my-3 mx-1 py-1" id="dia1">
            <h3 class="dias mt-2 fadeout">{{ dado.dir.dia }}</h3>
            <img :src="'imgs/'+dado.dir.cod" class="my-2 fadeout">
            <p class="prev-diaria fadeout">{{ dado.dir.tempMax }} ºC</p>
            
        </div>
    </div>
    `
})

Vue.component('prevboxprecin', {
    data(){
        return {
            dados: dadosBanco,
            isDropped: false,
            xAux: [],
            yAUx: [] 
        }
    },
    template: `
    <div class="row d-flex justify-content-center row-prev">
        <div v-for="dado in dados" class="col-10 col-lg-3 col-sm-8 col-md-5 col-xl-2 card-prev my-3 mx-1 py-1" id="dia1"
        @mouseover="isDropped=true; xAux=dado.hor.labels; yAux=dado.hor.prec" @mouseleave="isDropped=false">
            <h3 class="dias mt-2 fadein">{{ dado.dir.dia }}</h3>
            <img :src="'imgs/'+dado.dir.cod" class="my-2 fadein">
            <p class="prev-diaria fadein">{{ dado.dir.prec }} mm</p>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col d-flex justify-content-center">
                <transition>
                    <div v-if="!isDropped">
                        <p class="passarmouse">Passe o mouse sobre as caixas para obter a previsão diária</p>
                    </div>
                </transition>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-8 ">
                <transition>
                    <div v-if="isDropped">
                    <graphprec :x="xAux" :y="yAux"></graphprec>
                    </div>
                </transition>
            </div>
        </div>
        
    </div>
    `,  
})

Vue.component('prevboxprecout', {
    data(){
        return {
            dados: dadosBanco, 
        }
    },
    template: `
    <div class="row d-flex justify-content-center row-prev">
        <div v-for="dado in dados" class="col-10 col-lg-3 col-sm-8 col-md-5 col-xl-2 card-prev my-3 mx-1 py-1" id="dia1">
            <h3 class="dias mt-2 fadeout">{{ dado.dir.dia }}</h3>
            <img :src="'imgs/'+dado.dir.cod" class="my-2 fadeout">
            <p class="prev-diaria fadeout">{{ dado.dir.prec }} mm</p>
        </div>
    </div>
    `,  
})




var app = new Vue({
    el: '#dash',
    data: {
        message: 'Olá Vue!',
        precInAct: false,
        tempInAct: true,
        precOutAct: false,
        tempOutAct: false,
        mostrar: false,
        isDropped: false

    },
    methods: {
        dropIt() {
            this.isDropped = !this.isDropped
          },
        trocaPrevPrec: function(){
            this.precInAct = false
            this.tempInAct = false
            this.tempOutAct = true
            this.precOutAct = false
            let self = this
            setTimeout(function(){
                self.precInAct = true
                self.tempInAct = false
                self.tempOutAct = false
                self.precOutAct = false
            },300)
        },
        trocaPrevTemp: function(){
            this.precInAct = false
            this.tempInAct = false
            this.tempOutAct = false
            this.precOutAct = true
            let self = this
            setTimeout(function(){
                self.precInAct = false
                self.tempInAct = true
                self.tempOutAct = false
                self.precOutAct = false
            },300)
        },
        fadeIn: function(){
            
            e
            //document.getElementById('graph').classList.remove('graficoOut')
            document.getElementById('graph').classList.add('graficoIn')
            document.getElementById('graph').classList.remove('graficoOut')
            this.mostrar = true
            
        },
        fadeOut: function(){
            document.getElementById('graph').classList.remove('graficoIn')
            document.getElementById('graph').classList.add('graficoOut')
        }
    }
  })


  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });


