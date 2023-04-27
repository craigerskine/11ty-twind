module.exports = () => {
  const now = new Date();
  const timeZone = 'CST';
  const buildTime = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    timeZone,
  }).format(now);

  return {
    time: {
      raw: now.toISOString(),
      formatted: `${buildTime}`,
    },
  };
};