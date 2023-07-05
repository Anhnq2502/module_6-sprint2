import './HomePage.css';
import {useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import {toast} from "react-toastify";
import axios from "axios";
import {Header} from "./Header";
import {Footer} from "./Footer";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Số lượng item hiển thị trên mỗi slide
    slidesToScroll: 4,
};

export function HomePage() {
    const [productList, setProductList] = useState([]);
    const [products, setProducts] = useState([]);
    const auth = localStorage.getItem("token");
    const [searchAndPage, setSearchAndPage] = useState({
        page: 0,
        search: "",
    });
    const [value, setValue] = useState("");
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const listProduct = async () => {
            const result = await ProductService.listProduct(searchAndPage, auth);
            console.log(result);
            try {
                setProductList(result.content);
                setPageCount(result.totalPages);
            } catch {
                setProductList([]);
            }
        };
        listProduct();
    }, [searchAndPage]);

    const handleDelete = async () => {
        await ProductService.deleteProduct(products.productId);
        // const result = await FilmService.listFilm(searchAndPage);
        setProductList(productList.filter((prev) => prev.id != products.productId));
        toast("Xoá " + products.productName + " thành công");
    };

    const getData = async (id) => {
        const data = await ProductService.getProduct(id);
        setProducts(data);
    };

    const handlePageClick = (event) => {
        console.log(event.selected);
        setSearchAndPage((prev) => ({...prev, page: event.selected}));
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        return await axios
            .get(`http://localhost:8080/api/public/movie?q=${value}`)
            .then((res) => {
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        document.title = "Trang chủ";
    }, []);

    return (
        <>
            <Header/>
            <section className="mt-5">
                <div className="container">
                    <div className="img-main-banner">
                        <div
                            style={{
                                backgroundSize: "cover",
                                borderRadius: ".5rem",
                                background:
                                    "url(https://ksetup.vn/wp-content/uploads/2022/04/mau-cua-hang-tap-hoa-dep-21.jpeg) no-repeat center",
                                height: 500
                            }}
                        >
                            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center bg-image">
                                <span className=" badges">Opening Sale Discount 50%</span>
                                <h2 className="text-dark display-5 fw-bold mt-4">
                                    SuperMarket Daily <br/> Fresh Grocery{" "}
                                </h2>
                                <p className="lead">
                                    Introduced a new model for online grocery shopping and convenient
                                    home delivery.
                                </p>
                                <a href="tam-store/src/components#!" className="btn btn-dark mt-3">
                                    Mua ngay <i className="bi bi-arrow-right"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* sales section start  */}
            <section>
                <div className="container mt-5 sales section">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                            <div>
                                <div
                                    className="py-10 px-8 rounded-3"
                                    style={{
                                        backgroundSize: "cover",
                                        background:
                                            "url(https://ksetup.vn/wp-content/uploads/2022/04/mau-cua-hang-tap-hoa-dep-21.jpeg) no-repeat center",
                                        padding: 20
                                    }}
                                >
                                    <div>
                                        <h3 className="fw-bold mb-1" style={{color: "white"}}>Bia &amp; rượu</h3>
                                        <p className="mb-4">
                                            Get Upto <span className="fw-bold">30%</span> Off
                                        </p>
                                        <a href="tam-store/src/components#!" className="btn btn-dark">
                                            Mua ngay
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 ">
                            <div>
                                <div
                                    className="py-10 px-8 rounded-3"
                                    style={{
                                        backgroundSize: "cover",
                                        background:
                                            "url(https://ksetup.vn/wp-content/uploads/2022/04/mau-cua-hang-tap-hoa-dep-21.jpeg) no-repeat center",
                                        padding: 20
                                    }}
                                >
                                    <div>
                                        <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                                        <p className="mb-4">
                                            Get Upto <span className="fw-bold">25%</span> Off
                                        </p>
                                        <a href="tam-store/src/components#!" className="btn btn-dark">
                                            Mua ngay
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* sales section end  */}
            {/* products section start  */}
            <section className="my-lg-14 my-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-6">
                            <h3 className="mb-4 nav-name" style={{marginTop:"2%"}}>Danh sách sản phẩm</h3>
                        </div>
                    </div>

                    <div
                        className="container-fluid bg-trasparent my-4 p-3"
                        style={{ position: "relative" }}
                    >
                        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                            {productList.map((product, index) => (
                                <div className="col" key={index}>
                                    <div className="card card-product">
                                        <div className="card-body">
                                            <div className="text-center position-relative ">
                                                <Link to={"/list"}>
                                                    <img
                                                        src={product.productImg}
                                                        alt="Grocery Ecommerce Template"
                                                        className="card-img-top"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="text-small mb-1">
                                                <a href="tam-store/src/components#!"
                                                   className="text-decoration-none text-muted">
                                                    <small>{product.typeProduct.typeName}</small>
                                                </a>
                                            </div>
                                            <h2 className="fs-6">
                                                <a
                                                    href="tam-store/src/components#!"
                                                    className="text-inherit text-dark  text-decoration-none"
                                                >
                                                    {product.productName}
                                                </a>
                                            </h2>
                                            <div>
                                                <small className="text-warning">
                                                    {" "}
                                                    <i className="bi bi-star-fill"/>
                                                    <i className="bi bi-star-fill"/>
                                                    <i className="bi bi-star-fill"/>
                                                    <i className="bi bi-star-fill"/>
                                                    <i className="bi bi-star-half"/>
                                                </small>{" "}
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div>
                                                    <span
                                                        className="text-dark">{product.productPrice.toLocaleString()} VNĐ</span>{" "}
                                                </div>
                                                <div>
                                                    <a href="tam-store/src/components#!"
                                                       className="btn btn-success btn-sm">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-plus"
                                                        >
                                                            <line x1={12} y1={5} x2={12} y2={19}/>
                                                            <line x1={5} y1={12} x2={19} y2={12}/>
                                                        </svg>
                                                        {" "}
                                                        Thêm
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageCount={pageCount}
                            previousLabel="< "
                            containerClassName="pagination"
                            pageLinkClassName="page-num"
                            nextLinkClassName="page-next"
                            previousLinkClassName="page-previous"
                            activeClassName="active"
                            disabledClassName="d-none"
                        />
                    </div>
                </div>
            </section>
            <Footer/>
        </>

    )
}