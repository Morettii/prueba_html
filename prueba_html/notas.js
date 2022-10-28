function Registrar(){
    var nombre = document.getElementsByName("nombre")[0].value;
    var nota_1 = document.getElementsByName("nota1")[0].value;
    var nota_2 = document.getElementsByName("nota2")[0].value;
    var nota_3 = document.getElementsByName("nota3")[0].value;
    var nota_4 = document.getElementsByName("nota4")[0].value;
    var nota_5 = document.getElementsByName("nota5")[0].value;
    var nota_6 = document.getElementsByName("nota6")[0].value;

    var v_nombre = document.getElementById("verificar_nombre");
    var vnota_1 = document.getElementById("verificar_nota1");
    var vnota_2 = document.getElementById("verificar_nota2");
    var vnota_3 = document.getElementById("verificar_nota3");
    var vnota_4 = document.getElementById("verificar_nota4");
    var vnota_5 = document.getElementById("verificar_nota5");
    var vnota6 = document.getElementById("verificar_nota6");
    var v_carrera = document.getElementById("verificar_carrera");
    var v_promedio = document.getElementById("verificar_promedio");

    v_nombre.innerHTML = "";
    v_nota1.innerHTML = "";
    v_nota2.innerHTML = "";
    v_nota3.innerHTML = "";
    v_nota4.innerHTML = "";
    v_nota5.innerHTML = "";
    v_nota6.innerHTML = "";

    var promedio = (nota_1+nota_2+nota_3+nota_4+nota_5+nota_6)/6;




}