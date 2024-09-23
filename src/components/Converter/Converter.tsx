import { toRGB } from "./toRGB";
import { useEffect, useRef, useState } from "react";

export const Converter = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = () => {
    if (inputRef.current) {
      const hexValue = inputRef.current.value;

      if (hexValue.length === 7) {
        const rgbColor = toRGB(hexValue);

        if (rgbColor === "Ошибка!") { 
          setColor(rgbColor); 
          document.body.style.backgroundColor = `rgb(240, 128, 128)`; 
        } else {
          setColor(`rgb(${rgbColor})`); 
          document.body.style.backgroundColor = `rgb(${rgbColor})`;
        }
      } else {
        setColor("");
        document.body.style.backgroundColor = `rgb(135, 228, 228)`;
      }
    }
  };

  return (
    <div className="container">
      <input 
        type="text" 
        ref={inputRef} 
        onChange={handleInputChange}
      />
      <div className="result-box">{color}</div>
    </div>
  );
};
