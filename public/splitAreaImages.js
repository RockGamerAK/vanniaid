let enabled = document.currentScript.getAttribute('enabled')
if (enabled === 'false' || parseInt(enabled) === 0) enabled = false

if (!!enabled) {
    let splitAreaImgs = document.querySelectorAll('.split-area > img')
    splitAreaImgs.forEach(function(img, i) {
        let imgSrc = img.src
        if (imgSrc.includes('://')) {
            imgSrc.imgSrc.split('://')[1]
        }
        if (imgSrc.startsWith('via.placeholder.com')) {
            img.src = `https://via.placeholder.com/${img.clientWidth}x${img.clientHeight}`
        }
    })
}
