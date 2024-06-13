// public/js/api.js

// ITMAN: Complete aqui a função para dar um GET em todos os produtos
// Dica: Consulte config/routes.js para saber qual rota chamar para isso
// Dica: Armazene a resposta como um json e retorne!
async function fetchProducts() { }

// ITMAN: Complete aqui a função para CRIAR um produto
// Dica: Aqui a rota correta já foi passada, complete o method e o body da sua requisição
// Dica: Use a função updateProduct como referência
async function addProduct(formData) {
  const response = await fetch('/product/create', { });

  // Adicione aqui uma verificação para caso dê um erro ao adicionar o produto
  // Dica: veja a função fetchProductById
  // if () {
  //   throw new Error('Erro ao adicionar produto');
  // }

  return response.json();
}

async function fetchProductById(productId) {
  const response = await fetch(`/product/${productId}`);

  if (!response.ok) {
    throw new Error('Produto não encontrado');
  }

  return response.json();
}

async function updateProduct(productId, formData) {
  const response = await fetch(`/product/${productId}`, {
    method: 'PUT',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Erro ao atualizar produto');
  }
}

// ITMAN: Complete aqui a função para DELETAR um produto
// Dica: Lembre-se de passar o id como parâmetro para fazer a deleção
// Dica: Use tudo acima como base
async function deleteProduct() {
  // const response ...

  // if (!response.ok) {
  //   throw new Error('Erro ao excluir produto');
  // }
}
