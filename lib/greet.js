/**
 * Devuelve un saludo personalizado.
 * @param {string} name
 * @returns {string}
 */
export function greetUser(name) {
  const nombre = name.trim() || 'desconocido';
  return `👋 Hola ${nombre}, gracias por ejecutar este script. Hecho por mí, Pocho.QH.`;
}