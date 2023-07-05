export function Header() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="https://therichpost.com/">
                        <h5 className="nav-name">Tạp hoá Tâm</h5>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  m-auto">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="tam-store/src/components#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Trang chủ
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Home 1
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Home 2
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Home 3
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="tam-store/src/components#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Mua sắm
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Shop Grid - Filter
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Shop Grid - 3 column
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Shop List - Filter
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Shop - Filter
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Shop Wide
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Shop Single
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Shop Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Shop Cart
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Shop Checkout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="tam-store/src/components#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Cửa hàng
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Store List
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Store Grid
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Store Single
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="tam-store/src/components#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Trang
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Blog Single
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Blog Category
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                404 Error
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="tam-store/src/components#">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="../components#">
                                        Tài liệu
                                    </a>
                                </li>
                            </ul>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Tìm kiếm"
                                aria-label="Search"
                            />
                            <button className="btn-search-icon rounded-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-search-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                                    <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}