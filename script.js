let allRows = document.querySelectorAll('tr')

for (let i=0;i<allRows.length;i++){
   allRows[i].childNodes[1].classList.add('fixed-first')
   allRows[i].childNodes[3].classList.add('fixed-second')    
   allRows[i].childNodes[allRows[i].childNodes.length-4].classList.add('fixed-third')
   allRows[i].childNodes[allRows[i].childNodes.length-2].classList.add('fixed-fourth')
}