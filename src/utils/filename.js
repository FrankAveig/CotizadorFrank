const sanitizeFilename = (name) => {
  if (!name || typeof name !== 'string') return 'documento';
  const base = name.replace(/^.*[/\\]/, '').replace(/[^a-zA-Z0-9._-]/g, '_');
  return base.slice(0, 180) || 'documento';
};

module.exports = { sanitizeFilename };
