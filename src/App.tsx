import Footer from './components/footer/Footer';

const App = function App() {
  return (
    <div>
      <Footer
        desc={`Бронирование номеров в лучшем отеле 2019 года 
          по версии ассоциации «Отельные взгляды»`}
        specialTitle="Получайте специальные предложения и новости сервиса"
      />
    </div>
  );
};

export default App;
