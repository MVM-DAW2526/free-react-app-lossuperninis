export const SearchBar = ({ value, onChange, placeholder, icon }: any) => (
  <div className="contenedor-buscador">
    <img src={icon} alt="icon" width={40} />
    <input 
      className="buscador" 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
    />
  </div>
);