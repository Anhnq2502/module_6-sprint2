import axios from "axios";

export const listProduct = async ({page, search}, auth) => {
    const headers = {
        Authorization: "Bearer " + auth,
    };
    try {
        const result = await axios.get(
            `http://localhost:8080/api/public/product/list?page=${page ? page : 0}
        &search=${search}`,
            {headers}
        );
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const createProduct = async (product, auth) => {
    const headers = {
        Authorization: "Bearer " + auth,
    };
    try {
        await axios.post(`http://localhost:8080/api/admin/product/create`, {...product}, {headers})
    } catch (e) {
        console.log(e)
    }
}

export const updateProduct = async (product, auth) => {
    const headers = {
        Authorization: "Bearer " + auth,
    };
    try {
        await axios.put(`http://localhost:8080/api/admin/product/` + product.productId, {...product}, {headers})
    } catch (e) {
        console.log(e);
    }
}

export const getProduct = async (id, auth) => {
    const headers = {
        Authorization: "Bearer " + auth,
    };
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/` + id, {headers})
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const deleteProduct = async (id, auth) => {
    const headers = {
        Authorization: "Bearer " + auth,
    };
    try {
        await axios.delete(`http://localhost:8080/api/admin/product/${id}`, {headers})
    } catch (e) {
        console.log(e)
    }
}

export const findByName = async (value, currentPage, auth) => {
    const headers = { Authorization: "Bearer " + auth };
    const result = await axios.get(
        `http://localhost:8080/api/public/product/list?name=${value}&page=${currentPage}`,
        { headers }
    );
    return result;
};