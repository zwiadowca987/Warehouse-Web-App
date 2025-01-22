import Image from "next/image";
import Link from "next/link";
import openartImage1 from "../../public/app/openartImage1.jpg";
import openartImage2 from "../../public/app/openartImage2.jpg";
import openartImage3 from "../../public/app/openartImage3.jpg";

export default function MyApp() {
  return (
      <div className={"container"}>
        <div className={"text-center"}>
          <h1 className={"display-1"}>Dlaczego my?</h1>
          <h2 className={"display-3"}>Poznaj nasze atuty i wybierz najlepsze rozwiązania hydrauliczne.</h2>
        </div>
        <div className={"row m-5"}>
          <div className={"col card m-3 p-3"}>
            <Image className={"card-img-top img-thumbnail"} alt={"Image1"} src={openartImage1}/>
            <div className={"card-body"}>
              <h5 className={"card-title"}>Szeroki asortyment</h5>
              <p className={"card-text"}>Ponad 10 tysięcy produktów – od rur i złączek po nowoczesne systemy pomp.</p>
              <Link className={"btn btn-primary"} href={"/shop"}>Sklep</Link>
            </div>
          </div>
          <div className={"col card m-3 p-3"}>
            <Image className={"card-img-top img-thumbnail"} alt={"Image2"} src={openartImage2}/>
            <div className={"card-body"}>
              <h5 className={"card-title"}>Wysoka jakość</h5>
              <p className={"card-text"}>Współpracujemy tylko z renomowanymi producentami, gwarantując niezawodność.</p>
              <Link className={"btn btn-primary"} href={"/about"}>O Firmie</Link>
            </div>
          </div>
          <div className={"col card m-3 p-3"}>
            <Image className={"card-img-top img-thumbnail"} alt={"Image3"} src={openartImage3}/>
            <div className={"card-body"}>
              <h5 className={"card-title"}>Szybka dostawa</h5>
              <p className={"card-text"}>Ekspresowa realizacja zamówień – dostawa w na terenie całego kraju.</p>
              <Link className={"btn btn-primary"} href={"/contact"}>Kontakt</Link>
            </div>
          </div>
        </div>
      </div>
  );
}
