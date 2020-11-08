import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


//Banner
const homeImage = document.querySelector('#home-image')

// Our story
const homeTitle = document.querySelector('#home-title')
const homeInformation = document.querySelector('#home-information')
const homeInformationImage = document.querySelector('#home-information-image')


// Our products
const homeProductTitle = document.querySelector('#home-product-title')
const homeProductText = document.querySelector('#home-product-text')
const homeProductImage = document.querySelector('#home-product-image')


const client = contentful.createClient({
    space: 'pt7lnecnc1k7',
    accessToken: 'za2zvlTnog6MuxQlgyAA-BioAOknisKQe7xRgJFKDfo'
});

client.getEntry('1tObOSALaX8lCVmhQZlDKk').then((info) => {

    const myHome = {
        picture: info.fields.homeFirstImage,
        title: info.fields.homeTitle,
        information: info.fields.homeText,
        informationImage: info.fields.homeTextImage,

        productTitle: info.fields.homeProductTitle,
        productText: info.fields.homeProductText,
        productImage: info.fields.homeProductImage,
    }

    // Picture
    homeImage.innerHTML = buildPicture(myHome.picture)

    // Our Story
    homeTitle.innerText = myHome.title
    homeInformation.innerHTML = myHome.information.content.map(toHtml);
    homeInformationImage.innerHTML = buildPicture(myHome.informationImage)


    // Our products
    homeProductTitle.innerHTML = myHome.productTitle
    homeProductText.innerHTML = myHome.productText.content.map(toHtml);
    homeProductImage.innerHTML = buildPicture(myHome.productImage)
});


const toHtml = (text) => documentToHtmlString(text);

const buildPicture = (data) => {
    return `<div class="col text-center">
    <img src="https://${data.fields.file.url}" class="img-fluid" alt="Responsive image">
  </div>`
}


