import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Footer
        desc={`Бронирование номеров в лучшем отеле 2019 года 
          по версии ассоциации «Отельные взгляды»`}
        specialTitle="Получайте специальные предложения и новости сервиса"
        copyright="Copyright © 2018 Toxin отель. Все права защищены."
      />
    </div>
  );
};

export { App };
