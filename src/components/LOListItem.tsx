import React, { ButtonHTMLAttributes } from 'react';

interface Props {
    title: string,
    body: string,
    date: string,
    hideDivider?: boolean
}

export const LOListItem = ({ title, body, date, hideDivider }: Props) => {
    return (
        <li className="list-group-item">
            <h6>{title}</h6>
            <p>{body}</p>
            <small>{date}</small>
            {!hideDivider && <hr />}
        </li>
    )
}
