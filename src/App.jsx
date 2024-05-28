import { useState } from "react";

import Caja from "./components/Caja";

export default function App() {
  const [inputs, setInputs] = useState({
    bolsaDePuntos: "1804",
    producto: "Enchiladas Verdes",
    valorProducto: "110",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className=" grid grid-cols-1 gap-4 ">
        <Caja color={"bg-spin-blue"} letra={"text-white"}>
          <div className="col-span-2 ">Venta total otorgando puntos </div>
          <div className="col-span-2 text-yellow-400 font-bold">
            $ {Number(inputs.bolsaDePuntos) * 5}
          </div>
          <div className="grid grid-cols-2 col-span-2">
            <div> Costo de la membresía</div> <div> $ 500</div>
          </div>
          <div className="grid grid-cols-2 col-span-2">
            <div> Inversion diaria </div> <div> $ 19.30</div>
          </div>
          <div className="grid grid-cols-2 col-span-2">
            <div> Bolsa de puntos </div>
            <div className=" text-yellow-400 font-bold">
              $
              <input
                type="text"
                name="bolsaDePuntos"
                value={inputs.bolsaDePuntos}
                onChange={handleInputChange}
                className="border border-none bg-spin-blue w-4/12 text-center "
              ></input>
            </div>
          </div>
          <div className="col-span-2">
            ¿Cómo funcionan los puntos de Spin Premia Negocios?
          </div>
        </Caja>
        <Caja>
          <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
            <div>
              Por cada{" "}
              <span className="text-orange-400">
                <b>$5.00</b>
              </span>{" "}
              de compra otorgamos{" "}
              <span className="text-orange-400">
                <b>1 punto</b>
              </span>
            </div>
            <div className="m-auto">Si doy puntos</div>
          </div>
          <div className=" text-yellow-400 font-bold ">
            <input
              type="text"
              name="producto"
              value={inputs.producto}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className=" text-yellow-400 font-bold ">
            <input
              type="text"
              name="valorProducto"
              value={inputs.valorProducto}
              onChange={handleInputChange}
              className="w-6/12 text-center"
            ></input>
          </div>
          <div>Puntos Otorgados</div>
          <div>{Number(inputs.valorProducto) / 5}</div>
          <div>Equivalente en $</div>
          <div>${(Number(inputs.valorProducto) / 5) * 0.1}</div>
        </Caja>
        <Caja>
          <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
            <div>
              Por cada{" "}
              <span className="text-orange-400">
                <b>$1</b>
              </span>{" "}
              de compra se reciben{" "}
              <span className="text-orange-400">
                <b>10 puntos</b>
              </span>
            </div>
            <div className="m-auto">Si me pagan con puntos</div>
          </div>
          <div className=" text-yellow-400 font-bold ">{inputs.producto}</div>
          <div>1,100</div>
          <div>Equivalente en "$"</div>
          <div>$110</div>
          <div>
            Cantidad de visitas acumulando puntos para obtener este producto
            Gratis
          </div>
          <div className="flex justify-center items-center h-full w-full">
            50
          </div>
        </Caja>
        <Caja>
          <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
            <div>Ejemplo</div>
            <div>Diario</div>
          </div>
          <div>Transacciones por dia</div>
          <div>10</div>
          <div>ticket promedio</div>
          <div>$80</div>
          <div>Venta diaria</div>
          <div>$800</div>
        </Caja>
        <Caja>
          <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
            <div>Como se ve mi bolsa de puntos?</div>
            <div>Mensual</div>
          </div>
          <div>puntos utilizados por un dia</div>
          <div>160</div>
          <div>puntos utilizados de mi bolsa</div>
          <div>4000</div>
          <div>Puntos que me restan</div>
          <div>-2196</div>
          <div>Valor en "$" de los puntos</div>
          <div>$20,000</div>
        </Caja>
        <Caja>
          <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
            <div>¿Que hago para no quedarme sin puntos?</div>
            <div>Diario</div>
          </div>
          <div>Transacciones por mes</div>
          <div>3</div>
          <div>Promedio gastado por usuario</div>
          <div>$15</div>
          <div>Valor en puntos</div>
          <div>150</div>
        </Caja>
        <Caja>
          <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
            <div>¿Como se ve mi bolsa de puntos?</div>
            <div>Mensual</div>
          </div>
          <div>Puntos que se suman a mi bolsa</div>
          <div>450</div>
          <div>Balance total de puntos por mes</div>
          <div>-175</div>
          <div>Venta de $ con mi bolsa de puntos</div>
          <div>$19,825</div>
        </Caja>
        <Caja>
          <div className="col-span-2 bg-spin-blue m-[-4px] text-white rounded-md">
            ¿Como recupero mi inversion?
          </div>
          <div>Transacciones Totales</div>
          <div>150</div>
          <div>Puntos Totales otorgados</div>
          <div>1455</div>
          <div>Venta Generada por puntos</div>
          <div>$7,275</div>
          <div>Utilidad del negocio</div>
          <div>25%</div>
          <div>Ingreso neto por puntos</div>
          <div>$1819</div>
        </Caja>
        <Caja columnas="grid-cols-3">
          <div className="col-span-3  bg-spin-blue m-[-4px] text-white rounded-md">
            ¿Donde puedo utilizar mis puntos?
          </div>
          <div>Recarga de tiempo Aire</div>
          <div>Enviar puntos</div>
          <div>Pago de servicios</div>
          <div className="col-span-3">
            oxxo ¡A la vuelta de tu vida! disfruta de todas las promos,
            servicios y experiencias OXXO
          </div>
          <div>Volaris</div>
          <div>Vix</div>
          <div>oxxo Gas</div>
        </Caja>
        <Caja color={"bg-spin-blue"} letra={"text-white"}>
          <div className="col-span-2">
            Mayor a $579, si se recupera el costo de la membresía
          </div>
          <div className="col-span-2">
            Menor a $579, No se recupera el costo de la membresía
          </div>
        </Caja>
      </div>
    </section>
  );
}
