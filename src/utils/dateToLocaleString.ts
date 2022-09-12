function dateToLocaleString(date?: string): string {
  if (date === undefined) {
    return '';
  }

  const d = new Date(date);

  if (d && d instanceof Date && !isNaN(d.getMilliseconds())) {
    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(d);
  }

  return '';
}

export default dateToLocaleString;
