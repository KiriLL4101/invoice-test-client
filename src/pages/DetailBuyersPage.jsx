import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function DetailBuyersPage() {
    const buyerId = +useParams().id
    const { buyer } = useSelector(({ buyers }) => {
        return {
            buyer : buyers.buyers.filter((v) => v.id === buyerId)[0]
        }
    })

    return (
        <div className="info">
            <div className="info__id">
                <span>ID покупателя:</span>
                {buyer.id}
            </div>
            <div className="info__name">
                <span>Имя покупателя:</span>
                {buyer.firstName}
            </div>
            <div className="info__avg">
                <span>Средний чек:</span>
                {buyer.avg} руб.
            </div>
            <div className="info__count">
                <span>Количество покупок:</span>
                {buyer.count}
            </div>
            <div className="info__total">
                <span>Общая выручка:</span>
                {buyer.total} руб.
            </div>
        </div>
    )
}
