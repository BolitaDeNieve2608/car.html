new Vue({
    el:'main',
    data:{
    baseDeDatos:[
            {
                id: 1,
                nombre: 'Patata',
                precio: 1,
            },
            {
                id: 2,
                nombre: 'Cebolla',
                precio: 1.2,
            },
            {
                id: 3,
                nombre: 'Calabacin',
                precio: 2.1,
            },
            {
                id: 4,
                nombre: 'Fresas',
                precio: 0.6,
            },
        ],
        preciopapa:11.5,
        preciocebolla:12,
        preciocalabacin:21,
        preciofresa:6.5,

        totalpapa:0,
        totalcebolla:0,
        totalcalabacin:0,
        totalfresas:0,
        total: 0
    },
        
        methods: {
            sumarpatata() {
                this.totalpapa = this.totalpapa+1;
                this.total = this.total+this.preciopapa;
            },
            sumarcebolla() {
                this.totalcebolla = this.totalcebolla+1;
                this.total = this.total+this.preciocebolla;
            },
            sumarcalabacin() {
                this.totalcalabacin = this.totalcalabacin+1;
                this.total = this.total+this.preciocalabacin;
            },
            sumarfresa() {
                this.totalfresas = this.totalfresas+1;
                this.total = this.total+this.preciofresa;
            },
            eliminarpapa(){
                this.total = this.total-this.totalpapa*this.preciopapa;
                this.totalpapa = 0;
            },
            eliminarcebolla(){
                this.total = this.total-this.totalcebolla*this.preciocebolla;
                this.totalcebolla = 0;
            },
            eliminarcalabacin(){
                this.total = this.total-this.totalcalabacin*this.preciocalabacin;
                this.totalcalabacin = 0;
            },
            eliminarfresa(){
                this.total = this.total-this.totalfresas*this.preciofresa;
                this.totalfresas = 0;
            },
            eliminar() {
                this.total = 0;
                this.totalpapa = 0;
                this.totalcebolla = 0;
                this.totalcalabacin = 0;
                this.totalfresas = 0;
            },
        }
    });