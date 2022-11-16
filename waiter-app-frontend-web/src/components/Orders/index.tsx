import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [{
  '_id': '6372f306fb6b6fcd7a497fef',
  'table': '123',
  'status': 'WAITING',
  'products': [
    {
      'product': {
        'name': 'Pizza quatro queijos',
        'imagePath': '1668475811974-quatro-queijos.png',
        'price': 40,
      },
      'quantity': 3,
      '_id': '6372f306fb6b6fcd7a497ff0'
    },
    {
      'product': {
        'name': 'Coca Cola',
        'imagePath': '1668476684247-coca-cola.png',
        'price': 7,
      },
      'quantity': 2,
      '_id': '6372f306fb6b6fcd7a497ff1'
    }
  ],
}];

export function Orders(){
  return (
    <Container>
      <OrdersBoard
        icon="⏱"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨🏽‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
