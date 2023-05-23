const printFunc = () => {
    const elems = document.querySelectorAll('.print')

    const print = (elem) => {
        const delay = elem.dataset.delay || 2000
        const startDelay = elem.dataset.startDelay || 0
        const removeDelay = elem.dataset.removeDelay || 1000
        const addSpeed = elem.dataset.addSpeed || 50
        const removeSpeed = elem.dataset.removeSpeed || 20
        const text = elem.textContent.replace(/\s+/g, ' ').trim()

        let count = 0
        let newText = ''
        
        elem.textContent = ''
       
        const addPrint = () => {
            let interval

            interval = setInterval(() => {
                newText += text[count]
                elem.textContent = newText
                count++
    
                if(count === text.length) {
                    clearInterval(interval)
                    setTimeout(removePrint, removeDelay)
                }
            }, addSpeed)
        }

        const removePrint = () => {
            let interval

            interval = setInterval(() => {    
                if(newText.length) {
                    newText = newText.slice(0, -1)
                    elem.textContent = newText
                    count--
                } else {
                    clearInterval(interval)

                    setTimeout(addPrint, delay)
                }
            }, removeSpeed)
        }

        setTimeout(addPrint, startDelay)
    }

    elems.forEach((elem) => {
        print(elem);
    })
}

printFunc()