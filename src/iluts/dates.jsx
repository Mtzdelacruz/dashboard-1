export function longToShortDate(date) {
    const parts = date.split("-");
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [, month, day] = parts;
    const formattedmonth = parseInt(month) - 1;

    return `${day} ${months[formattedmonth]}`

  };