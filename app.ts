class empleados1 {
    
    public sueldo:number = parseFloat((<HTMLInputElement>document.getElementById("sueldo")).value);
    public sexo:number = parseFloat((<HTMLInputElement>document.getElementById("sexo")).value);
    public edad:number = parseFloat((<HTMLInputElement>document.getElementById("edad")).value);
    public nacionalidad:number = parseFloat((<HTMLInputElement>document.getElementById("nacionalidad")).value);
    public bono:number = parseFloat((<HTMLInputElement>document.getElementById("bono")).value);

         
               naru=this.sueldo+this.sexo;

    public setCantidadCopia(){
        (<HTMLInputElement>document.getElementById("sueldo")).value = this.sueldo.toString();
        (<HTMLInputElement>document.getElementById("sexo")).value = this.sexo.toString();
        (<HTMLInputElement>document.getElementById("edad")).value = this.edad.toString();
        (<HTMLInputElement>document.getElementById("nacionalidad")).value = this.nacionalidad.toString();
        (<HTMLInputElement>document.getElementById("bono")).value = this.bono.toString();
     
    }
   
    public calcularSueldo():number {
        return this.naru*this.sueldo;
    }
    public calcularfemenino():number {
        return this.naru*this.sexo;
    }
    public calcularextran():number {
        return this.naru*this.nacionalidad;
    }
    public calculari():number{
        return this.calcularSueldo() *0.15; 
    }
    public femenino():number{
        return this.calcularfemenino() *0.3; 
    }
    public extranjero():number{
        return this.calcularextran() - 0.15; 
    }
    public setResultados(){
        let sueldoT = this.calcularSueldo();
        let ImpuestoT= this.femenino();
        let sueldo_neto= this.extranjero();
        (<HTMLInputElement>document.getElementById("bono")).value = sueldoT.toString();
        (<HTMLInputElement>document.getElementById("bono")).value = ImpuestoT.toString();
        (<HTMLInputElement>document.getElementById("bono")).value = sueldo_neto.toString();
       
    }
}
function calcular1(){
    let objeto = new empleados1();
    let sexo = (<HTMLInputElement>document.getElementById("sexo")).value;
    let sueldo = (<HTMLInputElement>document.getElementById("sueldo")).value;
    let edad = (<HTMLInputElement>document.getElementById("edad")).value;
    let nacionalidad = (<HTMLInputElement>document.getElementById("nacionalidad")).value;
    if (sueldo == "") {
        alert("Debes ingresar el sueldo");
        return false;
    }
    if (sexo == "") {
        alert("Debes ingresar tu sexo");
        return false;
    }
    if (edad == "") {
        alert("Debes ingresar la edad");
        return false;
    }
    if (nacionalidad == "") {
        alert("Debes ingresar la naconalidad");
        return false;
    }
   
    objeto.setResultados();
}

