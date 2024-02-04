//alert("Is this working?")  check to be sure js is connected to html

let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

let input = document.querySelector('#image-text')
input.disabled = true  //wait for HTML before allowing user to type in text

let image = new Image()
image.src = 'billboard.jpg'


image.addEventListener('load', function(){  //wait for page to load
    context.drawImage(image, 0, 0)
    input.disabled = false  //without this input box won't work
})

input.addEventListener('input', function() {
    let text = this.value
    context.fillStyle = 'maroon'
    context.font = '40px Broadway'
    context.drawImage(image, 0, 0)

    context.fillText(text, 144, 122)
})