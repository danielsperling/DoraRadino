// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
// require("./products")
// require("./about")
// require("./home")
// require("./parallax.min")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
window.cf = contentful


window.onload = function () {
    const switcher = document.querySelectorAll(".locale_switch")

    switcher.forEach((element) => {
        element.addEventListener('click', function (event) {
            event.preventDefault()
            localStorage.setItem('locale', event.target.dataset.locale)
            location.reload()
        })
    })
}