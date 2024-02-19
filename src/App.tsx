import { useEffect } from "react";
import "./App.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".animationTop", {
      origin: "top",
      distance: "4rem",
      duration: 1500,
      reset: true,
    });
    ScrollReveal().reveal(".animationRight", {
      origin: "right",
      distance: "4rem",
      duration: 1500,
      reset: true,
    });
    ScrollReveal().reveal(".animationLeft", {
      origin: "left",
      distance: "4rem",
      duration: 1500,
      reset: true,
    });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <img
          className="logo animationTop"
          src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/logo.png?raw=true"
          alt="s-01"
        />
      </header>
      <div className="section-1">
        <div className="titulo-01 animationTop">
          <h1>Sua sandália de luxo está aqui!</h1>
        </div>
        <div className="container-imagens animationTop">
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-01.jpg?raw=true" alt="s-01" />
            <span className="size">Nº disponíveis 37/38</span>
            <span className="price">R$ 80,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-02.jpg?raw=true" alt="s-02" />
            <span className="size">Nº disponíveis 37/38</span>
            <span className="price">R$ 80,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-03.jpg?raw=true" alt="s-03" />
            <span className="size">Nº disponíveis 37/38</span>
            <span className="price">R$ 90,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-04.jpg?raw=true" alt="s-04" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 90,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-05.jpg?raw=true" alt="s-05" />
            <span className="size">Nº disponíveis 37/38</span>
            <span className="price">R$ 90,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-06.jpg?raw=true" alt="s-06" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 75,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-07.jpg?raw=true" alt="s-07" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 80,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-08.jpg?raw=true" alt="s-08" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 70,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-09.jpg?raw=true" alt="s-09" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 80,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-10.jpg?raw=true" alt="s-10" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 80,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-11.jpg?raw=true" alt="s-11" />
            <span className="size">Nº disponíveis 37/38</span>
            <span className="price">R$ 70,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-12.jpg?raw=true" alt="s-12" />
            <span className="size">Nº disponíveis 37/38</span>
            <span className="price">R$ 70,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-13.jpg?raw=true" alt="s-13" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 70,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-14.jpg?raw=true" alt="s-14" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 70,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-16.jpg?raw=true" alt="s-16" />
            <span className="size">Nº disponíveis 33/34</span>
            <span className="price">R$ 80,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-17.jpg?raw=true" alt="s-17" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 80,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-18.jpg?raw=true" alt="s-18" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 70,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-19.jpg?raw=true" alt="s-19" />
            <span className="size">Nº disponíveis 37/38</span>
            <span className="price">R$ 90,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-20.jpg?raw=true" alt="s-20" />
            <span className="size">Nº disponíveis 37/38</span>
            <span className="price">R$ 90,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-21.jpg?raw=true" alt="s-21" />
            <span className="size">Nº disponíveis 37/38</span>
            <span className="price">R$ 70,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/sandalia-15.jpg?raw=true" alt="s-15" />
            <span className="size">Nº disponíveis 35/36</span>
            <span className="price">R$ 90,00</span>
          </div>
        </div>
        <button className="btn-wpp animationTop">
          <a href="https://api.whatsapp.com/send?phone=5511998956020&text=Ol%C3%A1,%20gostaria%20de%20encomendar%20uma%20sand%C3%A1lia.">
            Peça já a sua <FaWhatsapp />
          </a>
        </button>
      </div>
      <div className="section-1 animationTop">
        <div className="titulo-01 animationTop">
          <h1>Canetas personalizadas você encontra aqui!</h1>
        </div>
        <div className="container-imagens">
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/caneta-01.jpg?raw=true" alt="s-01" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 7,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/caneta-02.jpg?raw=true" alt="s-02" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 8,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/caneta-03.jpg?raw=true" alt="s-03" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/caneta-04.jpg?raw=true" alt="s-04" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 8,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/caneta-05.jpg?raw=true" alt="s-05" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 4,00</span>
          </div>
          <div className="div-container">
            <img src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/caneta-06.jpg?raw=true" alt="s-06" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 4,00</span>
          </div>
        </div>
        <button className="btn-wpp animationTop">
          <a href="https://api.whatsapp.com/send?phone=5511998956020&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20canetas%20personalizadas.">
            Peça já a sua <FaWhatsapp />
          </a>
        </button>
      </div>
      <div className="section-1 animationTop">
        <div className="titulo-01 animationTop">
          <h1>Chaveiros personalizados!</h1>
        </div>
        <div className="container-imagens">
          <div className="div-container">
            <img src="../public/chaveiro-01.jpg" alt="s-01" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-02.jpg" alt="s-02" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-03.jpg" alt="s-03" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-04.jpg" alt="s-04" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-05.jpg" alt="s-05" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-08.jpg" alt="s-08" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-09.jpg" alt="s-09" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-10.jpg" alt="s-10" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-11.jpg" alt="s-11" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-12.jpg" alt="s-12" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-13.jpg" alt="s-13" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
          <div className="div-container">
            <img src="../public/chaveiro-06.jpg" alt="s-06" />
            <span className="size">Preço por unidade</span>
            <span className="price">R$ 10,00</span>
          </div>
        </div>
        <button className="btn-wpp animationTop">
          <a href="https://api.whatsapp.com/send?phone=5511998956020&text=Ol%C3%A1,%20gostei%20dos%20chaveiros,%20gostaria%20de%20saber%20mais!">
            Peça já a sua <FaWhatsapp />
          </a>
        </button>
      </div>
      <div className="section-4 animationLeft">
        <h2>QUER VER MAIS MODELOS?</h2>
        <h3>
          Entre em contato conosco através do whatsapp, para solicitar um
          orçamento! <br /> ATENÇÃO. O frete deverá ser consultado antes do
          envio. Mais informações entre em contato!
        </h3>
        <button className="btn-wpp-2">
          <a href="https://api.whatsapp.com/send?phone=5511998956020&text=Ol%C3%A1,%20gostaria%20de%20encomendar%20uma%20sand%C3%A1lia%20personalizada!">
            Solicitar orçamento com arte <FaWhatsapp />
          </a>
        </button>
      </div>
      <footer>
        <img
          className="logo animationLeft"
          src="https://github.com/DevJoaoPeu/landing-page-freelancer/blob/main/public/logo.png?raw=true"
          alt="logo"
        />

        <h1 className="animationLeft">Entre em contato</h1>
        <div className="redes-sociais animationLeft">
          <div>
            <FaWhatsapp /> +11 998956020
          </div>
          <div>
            <FaInstagram /> @rmsandalias27
          </div>
          <div>
            <HiOutlineMail /> Email
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
