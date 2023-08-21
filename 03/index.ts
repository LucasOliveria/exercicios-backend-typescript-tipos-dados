const montarTabuada = (numeros: number[]): string => {
  let tabuadas = "";

  for (const numero of numeros) {
    for (let i = 0; i <= 10; i++) {
      tabuadas += `
      ${numero} x ${i} = ${numero * i}`;

      if (i === 10) {
        tabuadas += `
      ---------------
      `
      }
    }
  }

  return tabuadas;
}

console.log(montarTabuada([1, 5, 2]));
