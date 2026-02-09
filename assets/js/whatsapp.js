function openWhatsApp() {
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de falar com um especialista da Consultoria Mais Saúde e solicitar uma avaliação inicial."
  );

  const telefone = "5500000000000"; // coloque o número real aqui
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
}
