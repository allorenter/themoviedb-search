function minutesConverter(minutes?: number): string {
  if (minutes === undefined) {
    return '';
  }

  const hours = minutes / 60;
  const floorHours = Math.floor(hours);
  const min = (hours - floorHours) * 60;
  const roundMinutes = Math.round(min);

  return `${floorHours} h ${roundMinutes} m`;
}

export default minutesConverter;
