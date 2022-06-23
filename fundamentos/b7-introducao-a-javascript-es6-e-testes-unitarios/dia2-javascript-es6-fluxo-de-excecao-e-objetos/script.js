const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 50,
    },
  };
  
  const customerInfo = (order) => {
    let or = Object.values(order);
    return `Olá ${or[3].delivery.deliveryPerson}, entrega para: ${or[0]}, Telefone: ${or[1]}, R. ${or[2].street}, Nº: ${or[2].number}, AP: ${or[2].apartment}`;
  }

  console.log(customerInfo(order));

  const orderModifier = (order) => {
    let or = Object.values(order);
    // Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.
    return `Olá Robert Santos, o total do seu pedido de ${Object.keys(or[3].pizza)[0]}, ${Object.keys(or[3].pizza)[1]} e ${or[3].drinks.coke.type} é R$ ${or[4].total},00`;
}
  
  console.log(orderModifier(order));
