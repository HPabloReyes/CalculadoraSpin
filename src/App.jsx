import { useState } from "react";

import Caja from "./components/Caja";

export default function App() {
  const [inputs, setInputs] = useState({
    bolsaDePuntos: "1804",
    producto: "Enchiladas Verdes",
    valorProducto: "110",
    txPorDia: "10",
    tkPromedio: "80",
    txPorMes: "3",
    txTotales: "150",
    puntosOtorgados: "1455",
    utilidadNegocio: "25",
  });

  let puntosOtorgados = Number(inputs.valorProducto) / 5;
  let valorEnPuntos = inputs.valorProducto * 10;
  let ventaDiaria = inputs.tkPromedio * inputs.txPorDia;
  let puntosUsadosBolsa = (ventaDiaria / 5) * 25;
  let puntosSumadosBolsa = 150 * inputs.txPorMes;
  let valorPesoPuntos = (ventaDiaria / 5) * 25 * 5;
  let ValorPuntosBalance = Math.round(
    (puntosSumadosBolsa + (inputs.bolsaDePuntos - puntosUsadosBolsa)) * 0.1
  );
  let ventaGeneradaPuntos = inputs.puntosOtorgados * 5;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <>
      <header className="mb-2">
        <img src="/spnegocios.png" className="rounded-md"></img>
      </header>
      <h1 className="text-center font-roboto font-bold mb-2 text-xl ">
        Calculadora de puntos SPIN
      </h1>
      <section>
        <div className=" grid grid-cols-1 gap-4 ">
          <Caja color={"bg-spin-blue"} letra={"text-white"}>
            <div className="col-span-2 ">Venta total otorgando puntos </div>
            <div className="col-span-2 text-orange-400 font-bold">
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
              <div className=" text-yellow-400 font-bold border-b-2 border-gray-800">
                $
                <input
                  type="text"
                  name="bolsaDePuntos"
                  value={inputs.bolsaDePuntos}
                  onChange={handleInputChange}
                  className="border border-none bg-spin-blue w-3/12 text-center "
                ></input>
              </div>
            </div>
            <div className="col-span-2">
              ¿Cómo funcionan los puntos de Spin Premia Negocios?
            </div>
          </Caja>
          <Caja color="bg-slate-200">
            <div className=" bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
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
            <div className=" text-yellow-400 font-bold border-b-2 border-gray-500">
              <input
                type="text"
                name="producto"
                value={inputs.producto}
                onChange={handleInputChange}
                className="w-11/12 text-center bg-slate-200"
                placeholder="Producto que vende"
              ></input>
            </div>
            <div className=" text-yellow-400 font-bold border-b-2 border-gray-500 ">
              $
              <input
                type="text"
                name="valorProducto"
                value={inputs.valorProducto}
                onChange={handleInputChange}
                className="w-9/12 text-center bg-slate-200"
                placeholder="Precio / producto"
              ></input>
            </div>
            <div>Puntos Otorgados</div>
            <div>{Number(inputs.valorProducto) / 5}</div>
            <div>Equivalente en $</div>
            <div>${(Number(inputs.valorProducto) / 5) * 0.1}</div>
          </Caja>
          <Caja color="bg-slate-200">
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
            <div className=" text-orange-400 font-bold  ">
              {inputs.producto}
            </div>
            <div>Valor en Puntos {inputs.valorProducto * 10}</div>
            <div>Equivalente en "$"</div>
            <div>${inputs.valorProducto}</div>
            <div>
              Cantidad de visitas acumulando puntos para obtener este producto
              Gratis
            </div>
            <div className="flex justify-center items-center h-full w-full">
              {valorEnPuntos / puntosOtorgados}
            </div>
          </Caja>
          <Caja color="bg-slate-200">
            <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
              <div>Ejemplo</div>
              <div>Diario</div>
            </div>
            <div>Transacciones por dia</div>
            <div className=" text-yellow-400 font-bold border-b-2 border-gray-500">
              <input
                type="text"
                name="txPorDia"
                value={inputs.txPorDia}
                onChange={handleInputChange}
                className="w-9/12 text-center bg-slate-200"
                placeholder="Tx Estimadas"
              ></input>
            </div>
            <div>Ticket promedio</div>
            <div className=" text-yellow-400 font-bold border-b-2 border-gray-500">
              <input
                type="text"
                name="tkPromedio"
                value={inputs.tkPromedio}
                onChange={handleInputChange}
                className="w-9/12 text-center bg-slate-200"
                placeholder="Valor Ticket Promedio "
              ></input>
            </div>
            <div>Venta diaria</div>
            <div>${inputs.tkPromedio * inputs.txPorDia}</div>
          </Caja>
          <div className="bg-custom-gradient h-1"> </div>
          <Caja color="bg-slate-200">
            <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
              <div>Cómo se ve mi bolsa de puntos?</div>
              <div className="m-auto">Mensual</div>
            </div>
            <div>puntos utilizados por un dia</div>
            <div>{ventaDiaria / 5}</div>
            <div>puntos utilizados de mi bolsa</div>
            <div>{(ventaDiaria / 5) * 25}</div>
            <div>Puntos que me restan</div>
            <div>{inputs.bolsaDePuntos - puntosUsadosBolsa}</div>
            <div>Valor en "$" de los puntos</div>
            <div className="m-auto">${valorPesoPuntos}</div>
          </Caja>
          <Caja color="bg-slate-200">
            <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
              <div>¿Que hago para no quedarme sin puntos?</div>
              <div className="m-auto">Diario</div>
            </div>
            <div>Transacciones por mes</div>
            <div className=" text-yellow-400 font-bold border-b-2 border-gray-500 m-auto">
              <input
                type="text"
                name="txPorMes"
                value={inputs.txPorMes}
                onChange={handleInputChange}
                className="w-9/12 text-center bg-slate-200"
                placeholder="Tx Por Mes"
              ></input>
            </div>
            <div>Promedio gastado por usuario</div>
            <div>$15</div>
            <div>Valor en puntos</div>
            <div>${15 * 10}</div>
          </Caja>
          <Caja color="bg-slate-200">
            <div className="bg-spin-blue text-white rounded-md grid grid-cols-2 col-span-2 m-[-4px]">
              <div>¿Cómo se ve mi bolsa de puntos?</div>
              <div className="m-auto">Mensual</div>
            </div>
            <div>Puntos que se suman a mi bolsa</div>
            <div className="m-auto">{150 * inputs.txPorMes}</div>
            <div>Balance total de puntos por mes</div>
            <div>
              {puntosSumadosBolsa + (inputs.bolsaDePuntos - puntosUsadosBolsa)}
            </div>
            <div>Valor en $ de los puntos del Balance</div>
            <div>
              {Math.round(
                (puntosSumadosBolsa +
                  (inputs.bolsaDePuntos - puntosUsadosBolsa)) *
                  0.1
              )}
            </div>
            <div>Venta de $ con mi bolsa de puntos</div>
            <div>${valorPesoPuntos + ValorPuntosBalance}</div>
          </Caja>
          <div className="bg-custom-gradient h-1"> </div>
          <Caja color="bg-slate-200">
            <div className="col-span-2 bg-spin-blue m-[-4px] text-white rounded-md">
              ¿Cómo recupero mi inversion?
            </div>
            <div>Transacciones Totales</div>
            <div className=" text-yellow-400 font-bold border-b-2 border-gray-500">
              <input
                type="text"
                name="txTotales"
                value={inputs.txTotales}
                onChange={handleInputChange}
                className="w-9/12 text-center bg-slate-200"
                placeholder="por defecto 150"
              ></input>
            </div>
            <div>Puntos Totales otorgados</div>
            <div className=" text-yellow-400 font-bold border-b-2 border-gray-500">
              <input
                type="text"
                name="puntosOtorgados"
                value={inputs.puntosOtorgados}
                onChange={handleInputChange}
                className="w-9/12 text-center bg-slate-200 mt-2 "
                placeholder="Por defecto 1455"
              ></input>
            </div>
            <div>Venta Generada por puntos</div>
            <div className="m-auto">${inputs.puntosOtorgados * 5}</div>
            <div>Utilidad del negocio</div>
            <div className=" text-yellow-400 font-bold border-b-2 border-gray-500">
              <input
                type="text"
                name="utilidadNegocio"
                value={inputs.utilidadNegocio}
                onChange={handleInputChange}
                className="w-2/12 text-center bg-slate-200"
                placeholder="Por defecto 25%"
              ></input>
              %
            </div>
            <div>Ingreso neto por puntos</div>
            <div className="m-auto">
              $
              {Math.round(
                ventaGeneradaPuntos * ((inputs.utilidadNegocio * 10) / 1000)
              )}
            </div>
          </Caja>
          <Caja color={"bg-spin-blue"} letra={"text-white"}>
            <div className="col-span-2">
              Mayor a $579, si se recupera el costo de la membresía
            </div>
            <div className="col-span-2">
              Menor a $579, No se recupera el costo de la membresía
            </div>
          </Caja>
          <div className="bg-custom-gradient h-1"> </div>
          <Caja color="bg-slate-200" columnas="grid-cols-3">
            <div className="col-span-3  bg-spin-blue m-[-4px] text-white rounded-md">
              ¿Donde puedo utilizar mis puntos?
            </div>
            <div>
              <div className="h-14">Recarga de tiempo Aire</div>
              <div>
                <img
                  className="rounded-full m-auto h-16"
                  src="recargas.png"
                ></img>
              </div>
            </div>
            <div>
              <div className="h-14 pt-3">Enviar puntos</div>
              <div>
                <img className="m-auto rounded-full h-16" src="envio.png"></img>
              </div>
            </div>
            <div>
              <div className="h-14">Pago de servicios</div>
              <div>
                <img
                  className="rounded-full m-auto h-16"
                  src="servicios.png"
                ></img>
              </div>
            </div>
            <div className="col-span-3">
              <div>
                OXXO ¡A la vuelta de tu vida! disfruta de todas las promos,
                servicios y experiencias OXXO
              </div>
              <div>
                <img className="m-auto rounded-md" src="oxxo.png"></img>
              </div>
            </div>
            <div>
              <div>Volaris</div>
              <div>
                <img
                  className="m-auto rounded-full h-16"
                  src="volaris.png"
                ></img>
              </div>
            </div>
            <div>
              <div>Vix</div>
              <div>
                <img className="rounded-full m-auto h-16" src="vix.png" />
              </div>
            </div>
            <div>
              <div>OXXO Gas</div>
              <div>
                <img className="rounded-full m-auto h-16" src="gass.png"></img>
              </div>
            </div>
          </Caja>
        </div>
      </section>
    </>
  );
}
