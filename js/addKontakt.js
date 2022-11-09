document.querySelector("Button").addEventListener("click", e=>{ //setter allt på knappen

    const fornavn   = document.getElementById("input1");
    const etternavn   = document.getElementById("input2");
    const epost   = document.getElementById("input3");
    const tlf   = document.getElementById("input4");
    //gjør klar konstanter til senere bruk i koden

    var formData = new FormData();
    formData.append("store", "nico"); //velger navn på storen
    formData.append("data", JSON.stringify({fornavn:`${fornavn.value}` , etternavn:`${etternavn.value}` , epost:`${epost.value}` , tlf:`${tlf.value}`})); //sette navn på ting
    fetch("http://folk.ntnu.no/oeivindk/imt1441/storage/add.php", {
      method: "POST",
      body: formData
    }).then(res=>res.json())
    .then(data=>{
        console.log (data); //skjekker om allt funka til nå
    })
    fornavn.value = ""; //hær tømmervi innput feltene for at den er klar til neste kontakt
    etternavn.value = "";
    epost.value = ""
    tlf.value = "";
  })
