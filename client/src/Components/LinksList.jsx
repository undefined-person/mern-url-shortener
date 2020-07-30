import React from 'react'
import { Link } from 'react-router-dom'
export const LinkList = ({ links }) => {

    if (!links.length) {
        return <p className={'center'}>No links here</p>
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Original</th>
                    <th>New</th>
                    <th>Open</th>
                </tr>
            </thead>

            <tbody>
                {links.map((link, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td>
                                <Link to={`detail/${link._id}`} >Open</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}