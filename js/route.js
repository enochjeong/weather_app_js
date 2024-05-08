const defaultLocation = '#/weather?lat=37.5554217&lon=126.9198848'; //어메이징 농카이 위치

window.navigator.geolocation.getCurrentPosition((position) => {
  const {latitude, longitude} = position.coords;
  
  console.log(latitude,longitude);
  });