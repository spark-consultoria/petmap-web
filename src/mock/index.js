const partners = [
  {
    id: Math.random(),
    name: 'PetShopt da Ana',
    photos: [
      'https://studiotec.com.br/blog/wp-content/uploads/2018/05/petshop-capa.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmqBexEMEfGF6V7oVmOWRebSRvzTC-35Lg2ZG6tVzlFCgVzfRv&usqp=CAU'
    ],
    phone: '4223-2020',
    partner: true,
    address: {
      street: 'Rua X',
      neighborhood: 'Santa clara',
      number: 134
    },
    cupons: [
      {
        id: Math.random(),
        expirationDate: new Date(),
        status: 'active'
      }
    ]
  },
];

module.exports = {
  partners
};
