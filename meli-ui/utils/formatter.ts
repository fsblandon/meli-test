export const getIntegerNumber: any = (num: number): number => {
    return Math.floor(num);
};
  
export const getDecimalNumber: any = (num: number, decimals: number) => {
    const absNum = Math.abs(num);
    return (absNum - Math.floor(absNum)).toFixed(decimals);
};