#!/usr/bin/env node

import readline from 'readline';
import { greetUser } from '../lib/greet.js';
import { logUsage } from '../lib/logger.js';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(chalk.cyan('\n🚀 Bienvenido a mi primer CLI en Node.js\n'));

rl.question('¿Cuál es tu nombre? ', (nombre) => {
  const saludo = greetUser(nombre);
  console.log(chalk.greenBright(saludo));

  rl.question('\n¿Querés que te tire un consejo random? (sí/no): ', (resp) => {
    const consejos = [
      'Si no sabés qué hacer, tomate un mate y arrancá igual.',
      'No es falta de tiempo, es falta de ganas. Pero tranqui, nos pasa a todos.',
      'Guardá antes de probar, que después te querés matar.',
      'No hagas las cosas apurado, después hay que volver dos veces.',
      'El que no rompe, no aprende. Pero si rompés, arreglalo vos.',
      'Hacé commits con sentido, no pongas “cambio 3” como si fuera un asado.',
      'No pongas parches, resolvé el problema de raíz.',
      'Acordate de dormir, no sos un servidor 24/7.',
      'Pedí ayuda si te trabás. Mejor eso que quemarte solo.',
      'Si todo anda bien y no tocaste nada, sospechá.'
    ];

    if (resp.toLowerCase().startsWith('s')) {
      const random = consejos[Math.floor(Math.random() * consejos.length)];
      console.log(chalk.yellowBright('\n💡 Consejo del día: ' + random));
    } else {
      console.log('\n👍 Perfecto. ¡A seguir con lo tuyo!');
    }

    logUsage(nombre);
    rl.close();
  });
});
