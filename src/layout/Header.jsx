import React from "react"

export default function Header() {
    return (
        <>
            <div className="container-fluid text-white px-5 d-flex align-items-center justify-content-between header">
                <div className="header__title">React Movies</div>
                <div>Repo</div>
            </div>
        </>
    )
}