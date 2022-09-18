window.addEventListener('load', function() {
    fetch('https://type.fit/api/quotes') 
    .then(response => response.json())
    .then(data => { 
    let _HTML = "<table class = 'text' >";
    for(let i=0; i<5; i++){
        _HTML+= "<tr>";
        _HTML+= "<td>" +"\"" +data[i].text+ "\""+ "</td>";
        _HTML+= "</tr>";
        _HTML+= "<tr>";
        _HTML+= "<td> <b>" +data[i].author+ "</b></td>";
        _HTML+= "</tr>";
        _HTML+= "<tr> <td colspan = '2'> &nbsp </td></tr>"; 
        _HTML+= "<tr> <td colspan = '2'> &nbsp </td></tr>"; 
    }

    _HTML += "</table>";
    document.getElementById("quotes").innerHTML = _HTML;
    })
    .catch(e => {
      console.log('there is an error', e);
    })

    
  })