import React from "react";
import { useTranslation } from "react-i18next";
import "./../scss/AdminHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signoutRequest } from "redux/actions/authAction";
import { Popover } from "antd";
import { PROFILE_PATH } from "constant/route";

function AdminHeader() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth.currentUser);

    function signout() {
        dispatch(signoutRequest());
    }

    function userPopup() {
        return (
            <div className="popup-content">
                <Link to={PROFILE_PATH}>{t("profile")}</Link>
                <button type="button" className="signout-btn primary-btn" onClick={signout}>
                    {t("signout")}
                </button>
            </div>
        );
    }

    function languagePopup() {
        return (
            <div className="popup-content">
                <span className="language-list">Tiếng Việt</span>
                <span className="language-list">English</span>
            </div>
        );
    }

    return (
        <header className="admin-header">
            <div className="admin-header__left">
                <div className="logo">
                    <i className="lab la-envira"></i>
                    <span>Fresh</span>
                    <small>admin</small>
                </div>
            </div>
            <div className="admin-header__right">
                <Popover placement="bottom" content={languagePopup()} trigger="click">
                    <div className="language">
                        <div className="languague-title">
                            <i class="las la-globe"></i>
                            <span>{t("language")}</span>
                        </div>
                    </div>
                </Popover>
                <Popover placement="bottom" content={userPopup()} trigger="click">
                    <div className="user">
                        <span className="user-name">{currentUser.name}</span>
                        <div className="user-avatar">
                            <img
                                src={
                                    currentUser.photoURL
                                        ? currentUser.photoURL
                                        : "https://karateinthewoodlands.com/wp-content/uploads/2017/09/default-user-image.png"
                                }
                                alt={currentUser.name}
                            />
                        </div>
                    </div>
                </Popover>
            </div>
        </header>
    );
}

export default AdminHeader;
