import axios from 'axios';

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022

// ÖDEVLERİN ÇÖZÜMÜNÜ İZLEMEDEN ÖNCE YAPILAN DENEME JS DOSYASI DAHA SONRA DAHA EFEKTİF ÇÖZÜM İÇİN DEĞİSTİRİLDİ ...

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

const myIP = ipAdresimiAl();
const flag = 'My Country Flag';
const flagTR =
  'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg';

console.log('my_ıp adress : ', myIP);

function requestFunc(reqData) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  const cardImg = document.createElement('img');
  cardImg.src = flagTR;
  cardImg.alt = flag;
  const cardSeccondDiv = document.createElement('div');
  cardSeccondDiv.classList.add('card-info');
  const cardHeader = document.createElement('h3');
  cardHeader.classList.add('ip');
  cardHeader.textContent = `{${reqData.sorgu}}`;
  const prgCountry = document.createElement('p');
  prgCountry.classList.add('ulke');
  prgCountry.textContent = `{ülke bilgisi (${reqData['ülkeKodu']})}`;
  const prgEnlem = document.createElement('p');
  prgEnlem.textContent = `Enlem: {${reqData.enlem}} Boylam: {${reqData.boylam}}`;
  const prgCity = document.createElement('p');
  prgCity.textContent = `Şehir: {${reqData['şehir']}}`;
  const prgClock = document.createElement('p');
  prgClock.textContent = `Saat dilimi: {${reqData.saatdilimi}}`;
  const prgMoney = document.createElement('p');
  prgMoney.textContent = `Para birimi: {${reqData.parabirimi}}`;
  const prgISP = document.createElement('p');
  prgISP.textContent = `ISP: {${reqData.isp}}`;

  cardSeccondDiv.appendChild(cardHeader);
  cardSeccondDiv.appendChild(prgCountry);
  cardSeccondDiv.appendChild(prgEnlem);
  cardSeccondDiv.appendChild(prgCity);
  cardSeccondDiv.appendChild(prgClock);
  cardSeccondDiv.appendChild(prgMoney);
  cardSeccondDiv.appendChild(prgISP);
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardSeccondDiv);

  return cardDiv;
}
const cardParent = document.querySelector('.cards');
axios
  .get('https://apis.ergineer.com/ipgeoapi/188.3.216.5')
  .then((response) => {
    const component = requestFunc(response.data);
    cardParent.appendChild(component);
    console.log('component : ', component);
  })
  .catch((error) => console.log(error));
