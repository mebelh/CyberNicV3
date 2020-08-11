import React, { useEffect } from "react";
import UsersSearch from "./UsersSearch/UsersSearch";
import UsersList from "./UsersList";
import "./style.scss";
import { useState } from "react";
import Loading from "components/Loading";
import { useHttp } from "hooks/http.hook";

export default function Users() {
    const { reqest } = useHttp();
    const [users, setUsers] = useState([]);
    const [showUsers, setShowUsers] = useState([]);

    const [searchFilter, setSearchFilter] = useState("");

    const onSearchFilterChange = (label) => {
        setSearchFilter(label.toUpperCase());
    };

    useEffect(() => {
        if (searchFilter.length) {
            const tempArr = users.filter(
                (e) => ~e.name.toUpperCase().indexOf(searchFilter)
            );
            return setShowUsers(tempArr);
        }
        setShowUsers(users);
    }, [searchFilter]);

    useEffect(() => {
        reqest("/api/admin/users/getall", "GET").then((users) => {
            setUsers(users);
            setShowUsers(users);
        });
    }, []);

    const toggleUserStatus = async (login) => {
        reqest("/api/admin/users/toggleuserstatus", "POST", { login });
    };

    return !users.length ? (
        <div className="loading">
            <Loading />
        </div>
    ) : (
        <React.Fragment>
            <div className="Users container">
                <UsersSearch onSearchFilterChange={onSearchFilterChange} />
                <div className="">
                    <ul className="user list-group">
                        <li className="list-group-item">
                            <span>Имя</span>
                            <span>Почта</span>
                            <span>Статус</span>
                        </li>
                        <UsersList
                            users={showUsers}
                            toggleUserStatus={toggleUserStatus}
                        />
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
