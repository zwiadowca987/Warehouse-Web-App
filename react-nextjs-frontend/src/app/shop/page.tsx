import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Link from "next/link";
import openartImage4 from "../../../public/shop/openartImage4.jpg";
import openartImage5 from "../../../public/shop/openartImage5.jpg";
import openartImage6 from "../../../public/shop/openartImage6.jpg";
import openartImage7 from "../../../public/shop/openartImage7.jpg";
import openartImage8 from "../../../public/shop/openartImage8.jpg";

export default function Products() {
    return (
      <div className={"container"}>
        <div className={"text-center"}>
          <h1 className={"display-1"}>Kategorie Produktów</h1>
          <h2 className={"display-3"}>Przeglądaj nasze kategorie</h2>
        </div>
        <div className={"m-5"}>
          <div className={"card m-3 p-3"}>
            <div className={"row"}>
              <div className={"col-4"}>
                <Image className={"card-img-top img-thumbnail"} alt={"Image4"} src={openartImage4}/>
              </div>
              <div className={"card-body col-8"}>
                <h3 className={"card-title"}>Rury i złączki</h3>
                <p className={"card-text"}>Solidne i trwałe rozwiązania dla instalacji wodnych i grzewczych.</p>
                <Link className={"btn btn-primary"} href={"/shop"}>Przejdź dalej</Link>
              </div>
            </div>
          </div>
          
          <div className={"card m-3 p-3"}>
            <div className={"row"}>
              <div className={"col-4"}>
                <Image className={"card-img-top img-thumbnail"} alt={"Image5"} src={openartImage5}/>
              </div>
              <div className={"card-body col-8"}>
                <h3 className={"card-title"}>Armatura łazienkowa i kuchenna</h3>
                <p className={"card-text"}>Stylowe baterie, odpływy i akcesoria do każdej kuchni i łazienki.</p>
                <Link className={"btn btn-primary"} href={"/shop"}>Przejdź dalej</Link>
              </div>
            </div>
          </div>
          
          <div className={"card m-3 p-3"}>
            <div className={"row"}>
              <div className={"col-4"}>
                <Image className={"card-img-top img-thumbnail"} alt={"Image6"} src={openartImage6}/>
              </div>
              <div className={"card-body col-8"}>
                <h3 className={"card-title"}>Pompy i akcesoria</h3>
                <p className={"card-text"}>Wydajne pompy głębinowe, obiegowe i hydroforowe dla każdej instalacji.</p>
                <Link className={"btn btn-primary"} href={"/shop"}>Przejdź dalej</Link>
              </div>
            </div>
          </div>
          
          <div className={"card m-3 p-3"}>
            <div className={"row"}>
              <div className={"col-4"}>
                <Image className={"card-img-top img-thumbnail"} alt={"Image7"} src={openartImage7}/>
              </div>
              <div className={"card-body col-8"}>
                <h3 className={"card-title"}>Instalacje grzewcze</h3>
                <p className={"card-text"}>Niezawodne systemy grzewcze, które zadbają o Twój komfort.</p>
                <Link className={"btn btn-primary"} href={"/shop"}>Przejdź dalej</Link>
              </div>
            </div>
          </div>
          
          <div className={"card m-3 p-3"}>
            <div className={"row"}>
              <div className={"col-4"}>
                <Image className={"card-img-top img-thumbnail"} alt={"Image8"} src={openartImage8}/>
              </div>
              <div className={"card-body col-8"}>
                <h3 className={"card-title"}>Narzędzia hydrauliczne</h3>
                <p className={"card-text"}>Profesjonalne narzędzia do montażu i konserwacji instalacji.</p>
                <Link className={"btn btn-primary"} href={"/shop"}>Przejdź dalej</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
