export function totalProcessing(orders)
{
    const total = orders.reduce((acc, order) => acc + order.total, 0);
    return total;
}