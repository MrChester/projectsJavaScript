/**
 * Created by fallenSoulDev on 10.09.2016.
 */
function prepend(container, newElement) {

    container.insertBefore(newElement, container.firstChild)
}

module.exports = prepend;