// 	Declaraciones
	const d = document
	const menuBtn = d.querySelector('nav .btn')
	const menuLst = d.querySelector('nav .menu')
	const mapBtn = d.querySelector('#footer > .btn')
	const mapFrm = d.querySelector('#footer .map')
	const prev 	= d.querySelector('#header .icon-prev')
	const next 	= d.querySelector('#header .icon-next')
	const slide = d.querySelectorAll('#header .slide li')
// 	Navegacion
	menuBtn.onclick = () => menuLst.classList.toggle('active') ? menuBtn.innerHTML = '&times;' : menuBtn.innerHTML = '&equiv;'
// 	Mapa de Contacto
	mapBtn.onclick = () => mapFrm.classList.toggle('active') ? mapBtn.classList.replace('icon-max', 'icon-min') : mapBtn.classList.replace('icon-min', 'icon-max')
//	Galeria
	window.setInterval( () => next.click(), 30000 )
	prev.onclick = () => getItem(slide)
	next.onclick = () => getItem(slide, true)

	const getItem = (array = [], dir = false, className = 'active') => {
		for(i = 0; i < array.length; i++){
			el = array[i]
			if(el.classList.contains(className)){
				el.classList.remove(className)
				if(dir){
					newItem = (i < array.length - 1 ? array[i + 1] : array[0])
				} else {
					newItem = (i > 0 ? array[i - 1] : array[array.length - 1])
		}	}	} 	newItem.classList.add(className)	
	}