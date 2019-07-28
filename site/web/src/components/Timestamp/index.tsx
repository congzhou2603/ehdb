import React from 'react';

export default function Timestamp(props: { time: string }) {
    const { time } = props;
    const date = new Date(parseInt(time) * 1000);
    return (
        <span>
            {date.getFullYear()}-{formatNumber(date.getMonth() + 1)}-{formatNumber(date.getDate())} {formatNumber(date.getHours())}:{formatNumber(date.getMinutes())}
        </span>
    )
}

function formatNumber(num: number): string {
    return ("0" + num).slice(-2);
}