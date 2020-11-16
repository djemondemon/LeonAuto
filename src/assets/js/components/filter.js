fetch('/cards.json').then(resp => resp.json().then(data => {
    const categories = [ ...new Set(data.map(el => el.category))]

    let catHtml = `<button class="btn filter__btn" data-filter="all">Все</button>`

    catHtml += categories.map(cat => `<button class="btn filter__btn" data-filter="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>`).join('')

    document.getElementById('carsFilter').innerHTML = catHtml
        
}))