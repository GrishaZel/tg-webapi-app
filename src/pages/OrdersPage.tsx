import { useEffect, useState } from "react";

type OrdersType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrdersType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data: OrdersType[] = await orders.json();

      setOrders(data);
      setIsLoading(false);
    };

    fetchOrders().catch((e) => console.log("Error fetch orders...", e));
  }, []);

  return (
    <div>
      <div className="text-xl">Вы заказывали:</div>
      <div>
        {isLoading ? <div>Loading...</div> : null}
        {orders.map((order) => {
          return (
            <div className="border-b-2 py-2">
              <div>
                <span className="font-bold">Название заказа заказа</span> -{" "}
                {order.title}{" "}
              </div>
              <div>
                <span className="font-bold">Номер заказа</span> - {order.id}{" "}
              </div>
              <div>
                <span className="font-bold">Статус заказа</span> -{" "}
                {order.completed ? "Доставлен" : "В процессе"}{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersPage;
