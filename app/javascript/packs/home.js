import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

let pictureHtml = ''
const homeImage = document.querySelector('#home-image')
const homeTitle = document.querySelector('#home-title')
const homeInformation = document.querySelector('#home-information')
// const homeOurStoryImage = document.querySelector('#home-ourstory-image')
const homePageProdcuts = document.querySelector('#home-page-products')



const client = contentful.createClient({
    space: 'pt7lnecnc1k7',
    accessToken: 'za2zvlTnog6MuxQlgyAA-BioAOknisKQe7xRgJFKDfo'
});

client.getEntry('1tObOSALaX8lCVmhQZlDKk').then((info) => {
    console.log(info)

    const myHome = {
        picture: info.fields.homeFirstImage,
        title: info.fields.homeTitle,
        information: info.fields.homeText,
        // picture1: info.fields.ourStoryImage,
        productinfo: info.fields.homePageProduct
    }

    // Picture
    homeImage.innerHTML = buildPicture(myHome.picture)

    //Title
    homeTitle.innerText = myHome.title

    // Description
    // aboutInformation.innerHTML = myAbout.information
    homeInformation.innerHTML = myHome.information.content.map((text) =>
        documentToHtmlString(text));

    // Our Story Image
    // homeOurStoryImage = buildPictureHome(myHome.picture1)

    homePageProdcuts.innerHTML = myHome.productinfo.content.map((text) =>
        documentToHtmlString(text));

});


const buildPicture = (data) => {
    return `<div class="col text-center">
    <img src="https://${data.fields.file.url}" class="img-fluid" alt="Responsive image">
  </div>`
}

// const buildPictureHome = (data) => {
//     return `<div class="col text-center">
//     <img src="https://${data.fields.file.url}" class="img-fluid" alt="Responsive image">
//   </div>`
// }



