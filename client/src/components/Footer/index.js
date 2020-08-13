import React from "react";
import CyberIzbushkaWhite from "./../../img/cyberIzbushkaWhite.png";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCogs } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    // const isPhone = () =>
    //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    //         navigator.userAgent
    //     );
    return (
        <div className="footer-wrapper">
            <div className="footer container">
                <div className="footer__info">
                    <a href="/">
                        <img src={CyberIzbushkaWhite} height="50px" alt="" />
                    </a>
                </div>
                <div className="footer__info footer__info_left">
                    <div className="footer__info-info">
                        <a href="/conditions">
                            <b>Условия использования</b>
                        </a>
                    </div>
                    <a href="https://vk.com/memetb ">
                        <div className="dev-link">
                            <FontAwesomeIcon icon={faCogs} />
                            <span>Разработчик сайта</span>
                        </div>
                    </a>
                </div>
                <div className="footer__info footer__info_right">
                    <b>Вопросы и сотрудничество:</b>
                    <a href="https://wa.me/79780490122">
                        <p>WhatsApp</p>
                    </a>
                    <a href="viber://chat?number=%2B79780490122">Viber</a>
                </div>
            </div>
        </div>
    );
}
