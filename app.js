var empleados1 = /** @class */ (function () {
    function empleados1() {
        this.sueldo = parseFloat(document.getElementById("sueldo").value);
        this.sexo = parseFloat(document.getElementById("sexo").value);
        this.edad = parseFloat(document.getElementById("edad").value);
        this.nacionalidad = parseFloat(document.getElementById("nacionalidad").value);
        this.bono = parseFloat(document.getElementById("bono").value);
        this.naru = this.sueldo + this.sexo;
    }
    empleados1.prototype.setCantidadCopia = function () {
        document.getElementById("sueldo").value = this.sueldo.toString();
        document.getElementById("sexo").value = this.sexo.toString();
        document.getElementById("edad").value = this.edad.toString();
        document.getElementById("nacionalidad").value = this.nacionalidad.toString();
        document.getElementById("bono").value = this.bono.toString();
    };
    empleados1.prototype.calcularSueldo = function () {
        return this.naru * this.sueldo;
    };
    empleados1.prototype.calcularfemenino = function () {
        return this.naru * this.sexo;
    };
    empleados1.prototype.calcularextran = function () {
        return this.naru * this.nacionalidad;
    };
    empleados1.prototype.calculari = function () {
        return this.calcularSueldo() * 0.15;
    };
    empleados1.prototype.femenino = function () {
        return this.calcularfemenino() * 0.3;
    };
    empleados1.prototype.extranjero = function () {
        return this.calcularextran() - 0.15;
    };
    empleados1.prototype.setResultados = function () {
        var sueldoT = this.calcularSueldo();
        var ImpuestoT = this.femenino();
        var sueldo_neto = this.extranjero();
        document.getElementById("bono").value = sueldoT.toString();
        document.getElementById("bono").value = ImpuestoT.toString();
        document.getElementById("bono").value = sueldo_neto.toString();
    };
    return empleados1;
}());
function calcular1() {
    var objeto = new empleados1();
    var sexo = document.getElementById("sexo").value;
    var sueldo = document.getElementById("sueldo").value;
    var edad = document.getElementById("edad").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
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
