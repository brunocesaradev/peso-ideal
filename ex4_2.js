const frm =document.querySelector("form")
const resp =document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()  //impedir que o formulário seja enviado para outra página ou recarregue a página
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.value
    const altura = Number(frm.inAltura.value)

    let peso
    if(masculino){
        peso=22*Math.pow(altura ,2)
    }else{
        peso =21*Math.pow(altura,2)
    }

    resp.innerText= ` ${nome}, peso ideal é ${peso.toFixed(2)} kg`
})