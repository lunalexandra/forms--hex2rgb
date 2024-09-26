export const toRGB = (hexCode: string): string => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6})$/;
  
    if (hexColorRegex.test(hexCode)) {
      const match = hexCode.match(/\w\w/g);
      
      if (match) {
        const [r, g, b] = match.map(x => parseInt(x, 16));
        return `${r}, ${g}, ${b}`;
      }
    }
  
    return 'Ошибка!';
  };
  