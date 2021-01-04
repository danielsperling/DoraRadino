// import * as contentful from 'contentful';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// let pictureHtml = ''
// const myPictures = document.querySelector('#product-pictures')
// const myTitle = document.querySelector('#product-title')
// const myDescription = document.querySelector('#product-description')


// const client = contentful.createClient({
//     space: 'pt7lnecnc1k7',
//     accessToken: 'za2zvlTnog6MuxQlgyAA-BioAOknisKQe7xRgJFKDfo'
// });

// client.getEntry('59oeYVF5nPUIiHvHodbfS').then((data) => {

//     const myProduct = {
//         pictures: data.fields.pictures,
//         title: data.fields.title,
//         description: data.fields.description
//     }


//     //  Pictures
//     myProduct.pictures.forEach((entry) => {
//         pictureHtml += buildPicture(entry.fields);
//         myPictures.innerHTML = pictureHtml;
//     })

//     // TITLE
//     myTitle.innerText = myProduct.title

//     // Description
//     myDescription.innerHTML = myProduct.description.content.map((text) =>
//         documentToHtmlString(text));

// });


// const buildPicture = (data) => {
//     return `<div class="col text-center">
//     <img src="https://${data.picture.fields.file.url}"class="img-fluid" alt="Responsive image">
//     <h5>${data.title}</h5>
//     <p>${data.price}€</p>
//   </div>`
// }
