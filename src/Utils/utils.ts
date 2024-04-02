export const currentDate = ():string => {
    const todayDate: Date = new Date();

    const day = todayDate.getDate() < 10 ? ("0" + todayDate.getDate()) : todayDate.getDate().toString();
    const monthVal = todayDate.getMonth() + 1;
    const month = monthVal < 10 ? "0"+ monthVal : (monthVal).toString();

    return day + "/" + month + "/" + todayDate.getFullYear();
}