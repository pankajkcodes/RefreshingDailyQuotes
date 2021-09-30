fetch ("https://type.fit/api/quotes")
.then(data => data.json())
.then(quotesData=>{
    let ranNumber = Math.floor(Math.random() * 1647);
    quotesText = quotesData[ranNumber].text;
    const quotesElemet = document.getElementById("quotesText");
    quotesElemet.innerHTML = quotesText;
})