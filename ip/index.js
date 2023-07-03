import axios from 'axios';

var benimIP;
// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require('babel-core/register');
require('babel-polyfill');
async function ipAdresimiAl() {
  await axios({
    method: 'get',
    url: 'https://apis.ergineer.com/ipadresim',
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}

const flagTR =
  'https://tr.wikipedia.org/wiki/T%C3%BCrk_bayra%C4%9F%C4%B1#/media/Dosya:Flag_of_Turkey.svg';

const cardParentDiv = document.querySelector('.cards');

function createNewCard(dataInfo) {
  const {
    sorgu,
    şehir: city,
    ülkeKodu: countryCode,
    enlem,
    boylam,
    saatdilimi,
    parabirimi,
    isp,
  } = dataInfo;
  const cardHtml = `<div class="card">
                      <img src= ${flagTR} alt = 'Turk bayragi gorseli ... '/>
                      <div class="card-info">
                        <h3 class="ip">${sorgu}</h3>
                        <p class="ulke">{ülke bilgisi (${countryCode})}</p>
                        <p>Enlem: ${enlem} Boylam: ${boylam}</p>
                        <p>Şehir: ${city}</p>
                        <p>Saat dilimi: ${saatdilimi}</p>
                        <p>Para birimi: ${parabirimi}</p>
                        <p>ISP: ${isp}</p>
                      </div>
                    </div>`;

  return cardHtml;
}

let objectData = {};

async function getDataObject(IP_adress) {
  await axios
    .get(`https://apis.ergineer.com/ipgeoapi/${IP_adress}`)

    .then(function (responce) {
      objectData = responce.data;
      console.log(`Request Data : `, objectData);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(function () {
      console.log('Request Data Final State : ', objectData);
      cardParentDiv.innerHTML = createNewCard(objectData);
    });
}

async function resultCardShow() {
  await ipAdresimiAl();
  getDataObject(benimIP);
}

resultCardShow();

// async function getLocation(myIP) {
//   await setTimeout(() => {
//     axios
//       .get('https://apis.ergineer.com/ipgeoapi/188.3.216.5')
//       .then((responce) => {
//         const cardContent = createNewCard(responce.data);
//         cardParentDiv.innerHTML = cardContent;
//       });
//   }, 3000);
// }
// getLocation();
