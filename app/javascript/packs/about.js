import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

let pictureHtml = ''
const aboutImage = document.querySelector('#about-image')
const aboutTitle = document.querySelector('#about-title')
const aboutInformation = document.querySelector('#about-information')


const client = contentful.createClient({
  space: 'pt7lnecnc1k7',
  accessToken: 'za2zvlTnog6MuxQlgyAA-BioAOknisKQe7xRgJFKDfo'
});

client.getEntry('6n40P0yYxByEyt15RHBc7Q').then((info) => {

  const myAbout = {
    picture: info.fields.aboutPicture,
    title: info.fields.title,
    information: info.fields.aboutInformation
  }

  // Picture
  aboutImage.innerHTML = buildPicture(myAbout.picture)


  //Title
  aboutTitle.innerText = myAbout.title

  // Description
  // aboutInformation.innerHTML = myAbout.information
  aboutInformation.innerHTML = myAbout.information.content.map((text) =>
    documentToHtmlString(text));

});


const buildPicture = (data) => {
  return `<div class="col text-center">
    <img src="https://${data.fields.file.url}" class="img-fluid" alt="Responsive image">
  </div>`
}

