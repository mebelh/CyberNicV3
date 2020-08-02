import React from "react";
import CyberIzbushkaWhite from "./../../img/cyberIzbushkaWhite.png";
import "./style.scss";
export default function Footer() {
    return (
        <div className="footer">
            <a href="/">
                <img src={CyberIzbushkaWhite} height="50px" alt="" />
            </a>
            <ul className="footer__info footer__info_left">
                <li>
                    <a href="/">
                        <b>Условия использования</b>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <b>О проекте </b>
                    </a>
                </li>
            </ul>
            <div className="footer__info footer__info_right">
                <a href="/">
                    <b>Вопросы и сотрудничество</b>
                </a>
                <a href="https://vk.com/al_feed.php ">
                    <p>Вконтакте</p>
                </a>
                <a href="/">
                    <p>WhatsApp</p>
                </a>
                <a href="/">
                    <p>Viber</p>
                </a>
            </div>
        </div>
    );
}
