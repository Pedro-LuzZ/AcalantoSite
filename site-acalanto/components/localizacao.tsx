export default function Localizacao() {
  return (
    <section id="localizacao" className="py-16 px-12" style={{backgroundColor: "#0CB4B4"}}>
      <div className="max-w-6xl mx-auto flex gap-12">
        <div className="w-1/2">
          <div className="bg-white rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6" style={{color: "#0CB4B4"}}>Onde<br />estamos?</h2>
            <p className="text-gray-700 leading-relaxed">
              Nos localizamos na Rua Deputado Antônio Edu Vieira,<br/>
              Número 1524, Bloco 3<br/>
              Florianópolis, SC
            </p>
          </div>
        </div>
        
        <div className="w-1/2 bg-gray-300 rounded-2xl overflow-hidden">
          <img src="/mapa.png" alt="Mapa de Localização Acalanto" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
