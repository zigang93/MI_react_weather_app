const URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = '2619d0206a4b8e400a58b5f1fbc6ce88';

export const getCurrentWeather = async city => {

  try {

    const response = await fetch(
      `${URL}weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    const json = await response.json();

    // if error, get json message from api
    if (!response.ok) {
      return alert(json.message)
    }

    // return json data
    return json;

  } catch (err) {
      console.log(err)
  }

};

export const getNextFiveDayWeather = async (city, cnt) => {
  try {
    const response = await fetch(
      `${URL}forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=${cnt}`,
    );

    const json = await response.json();

    // if error, get json message from api
    if (!response.ok) {
      return console.log(json.message)
    }

    const fivedayList = json.list.filter((el, i) => {
      // filter reverse modulo for 8 because each 8 is next day data
      return !(i % 8)
    })

    return fivedayList;

  } catch(err) {
    console.log(err)
  }
}
