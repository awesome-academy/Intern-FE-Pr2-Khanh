import React, { useEffect } from "react";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import AdminProducts from "./AdminProducts";
import "./scss/Admin.scss";

import { useDispatch } from "react-redux";
import { getCategoriesRequest } from "redux/actions/categoriesAction";
import { getProductsRequest } from "redux/actions/productsAction";
import { Route, Switch } from "react-router-dom";
import {
    ADMIN_CATEGOIES_PATH,
    ADMIN_MANAGE_PRODUCTS_PATH,
    ADMIN_PATH,
    ADMIN_PRODUCTS_PATH,
} from "constant/route";
import ProductManage from "./AdminProducts/ProductManage";
import AdminDashboard from "./AdminDashboard";
import AdminCategories from "./AdminCategories";

function Admin() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsRequest());
        dispatch(getCategoriesRequest());
    }, [dispatch]);
    
    return (
        <div className="admin">
            <AdminHeader></AdminHeader>
            <main className="admin-main">
                <div className="admin-main__left">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="admin-main__right">
                    <Switch>
                        <Route path={ADMIN_PATH} exact>
                            <AdminDashboard></AdminDashboard>
                        </Route>
                        <Route path={ADMIN_MANAGE_PRODUCTS_PATH + "/:productId"}>
                            <ProductManage></ProductManage>
                        </Route>
                        <Route path={ADMIN_PRODUCTS_PATH}>
                            <AdminProducts></AdminProducts>
                        </Route>
                        <Route path={ADMIN_CATEGOIES_PATH}>
                            <AdminCategories></AdminCategories>
                        </Route>
                        <Route path="*">
                            <div>404</div>
                        </Route>
                    </Switch>
                </div>
            </main>
        </div>
    );
}

export default Admin;
